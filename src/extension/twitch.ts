import { NodeCG } from './nodecg'
import axios, { AxiosInstance } from 'axios';

type Config = {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
  loginName: string;
}

type Credentials = {
  accessToken: string;
  refreshToken: string;
}

const isValidConfig = (config: any): config is Config => {
  return config?.clientId && config.clientSecret && config.redirectUrl && config.loginName;
}

export const twitch = (nodecg: NodeCG): void => {
  const logger = new nodecg.Logger('ome-speedrun-layouts.twitch');

  const twitchConfig = nodecg.bundleConfig.twitch;
  const credentialRep = nodecg.Replicant('twitchCredential');

  if (!isValidConfig(twitchConfig)) {
    logger.warn('Twitch config is invalid.');
    return;
  }

  nodecg.mount('/ome-speedrun-layouts/auth/twitch/token', (req, res) => {
    res.redirect(generateAuthUrl(twitchConfig));
  });

  nodecg.mount('/ome-speedrun-layouts/auth/twitch/callback', async (req, res) => {
    const code = req.query.code;

    if (typeof code !== 'string') {
      return res.send('Unknown type access token received. Failed to authorization.');
    }

    try {
      const credentials = await exchangeToken(twitchConfig, code);
      credentialRep.value = {
        accessToken: credentials.accessToken,
        refreshToken: credentials.refreshToken,
      };

      return res.send('Success to authorization! Feel free to close this window.');

    } catch (e) {
      logger.warn(e);
      return res.send('Something went wrong to authorization. Please make sure console log.');
    }
  });

  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use(async (config) => {
    if (!credentialRep.value) {
      credentialRep.value = null;
      throw new axios.Cancel('Expired authorization.');
    }

    const data = {
      client_id: twitchConfig.clientId,
      client_secret: twitchConfig.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: credentialRep.value.refreshToken,
    };
    const refreshed = await axios.post<{
      access_token: string;
      refresh_token: string;
    }>('https://id.twitch.tv/oauth2/token', data, {
      headers: {
        Authorization: 'x-www-form-urlencoded',
      }
    });

    credentialRep.value = {
      accessToken: refreshed.data.access_token,
      refreshToken: refreshed.data.refresh_token,
    }
    
    config.headers.Authorization = `Bearer ${refreshed.data.access_token}`;
    return config;
  });

  nodecg.listenFor('twitch:mark', (_, cb) => {
    if (!cb || cb?.handled) {
      return;
    }

    if (!credentialRep.value) {
      logger.warn('Not authorized to twitch!');
      cb(null, false);
      return;
    }
    markStream(
      axiosInstance,
      twitchConfig.loginName,
      {
        accessToken: credentialRep.value.accessToken,
        refreshToken: credentialRep.value.refreshToken,
      },
      twitchConfig,
    )
      .then(() => {
        cb(null, true);
      })
      .catch(e => {
        logger.error(e);
        cb(e);
      });
  });

  nodecg.listenFor('twitch:logout', (_, cb) => {
    if (!cb || cb?.handled) {
      return;
    }

    credentialRep.value = null;
  })
}

const generateAuthUrl = (config: Config): string => {
  const scopes = [
    'channel:manage:broadcast'
  ];

  const urlParams = new URLSearchParams({
    response_type: 'code',
    client_id: config.clientId,
    redirect_uri: config.redirectUrl,
    scope: scopes.join(' '),
  });

  return `https://id.twitch.tv/oauth2/authorize?${urlParams.toString()}`;
}

const exchangeToken = async (config: Config, code: string): Promise<Credentials> => {
  const data = {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: config.redirectUrl,
  };

  const response = await axios.post<{
    access_token: string;
    refresh_token: string;
  }>('https://id.twitch.tv/oauth2/token', data, {
    headers: {
      Authorization: 'x-www-form-urlencoded',
    },
  });

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
}

const markStream = async (axios: AxiosInstance, login: string, credentials: Credentials, config: Config): Promise<void> => {

  const userResponse = await axios.get<{
    data: {
      id: string
    }[]
  }>(`https://api.twitch.tv/helix/users?login=${login}`, {
    headers: {
      Authorization: `Bearer ${credentials.accessToken}`,
      'Client-Id': config.clientId,
    }
  });

  const [user,] = userResponse.data.data;

  await axios.post('https://api.twitch.tv/helix/streams/markers', {
    user_id: user.id
  }, {
    headers: {
      Authorization: `Bearer ${credentials.accessToken}`,
      'Client-Id': config.clientId,
    }
  });
}
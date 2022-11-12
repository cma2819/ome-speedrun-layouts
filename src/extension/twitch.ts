import { NodeCG } from './nodecg'
import axios from 'axios';

type Config = {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
}

type Credentials = {
  accessToken: string;
  refreshToken: string;
}

const isValidConfig = (config: any): config is Config => {
  return config?.clientId && config.clientSecret && config.redirectUrl;
}

export const twitch = (nodecg: NodeCG): void => {
  const logger = new nodecg.Logger('ome-speedrun-layouts.twitch');

  const twitchConfig = nodecg.bundleConfig.twitch;
  const accessTokenRep = nodecg.Replicant('twitchAccessToken');

  if (!isValidConfig(twitchConfig)) {
    logger.warn('Twitch config is invalid.');
    return;
  }

  nodecg.mount('/ome-speedrun-layouts/auth/twitch/token', (req, res) => {
    res.redirect(generateAuthUrl(twitchConfig));
  });

  nodecg.mount('/ome-speedrun-layouts/auth/twitch/callback', (req, res) => {
    const code = req.query.code;

    if (typeof code === 'string') {
      accessTokenRep.value = code;
      return res.send('<strong>Authorization succeeded!</strong> Feel free to close this window.');
    }

    return res.send('Unknown type access token received. Failed to authorization.');
  });
}

const generateAuthUrl = (config: Config): string => {
  const scopes = [
    'channel:manage:broadcast'
  ];

  const urlParams = new URLSearchParams({
    response_type: 'code',
    client_id: config.clientId,
    redirect_uri: config.redirectUrl,
    scopes: scopes.join(' '),
  });

  return `https://id.twitch.tv/oauth2/authorize?${urlParams.toString()}`;
}

const exchangeToken = async (config: Config, code: string): Promise<Credentials> => {
  const urlParams = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: config.redirectUrl,
  });

  const response = await axios.get<{
    access_token: string;
    refresh_token: string;
  }>('https://id.twitch.tv/oauth2/token', {
    params: urlParams,
  });

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
}
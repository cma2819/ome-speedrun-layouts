FROM cma2819/nodecg

RUN nodecg install cma2819/speedcontrol-additions && \
    nodecg install cma2819/nodecg-speedcontrol && \
    nodecg install cma2819/nodecg-twitter-widget && \
    nodecg install cma2819/nodecg-spotify-widget && \
    nodecg install cma2819/nodecg-timekeeper

CMD ["nodecg", "start"]
FROM node:8

ENV HOME /opt/sinopia
ENV RECTO https://github.com/lcnetdev/recto.git
ENV VERSO https://github.com/lcnetdev/verso.git

WORKDIR $HOME

RUN apt-get update && apt-get install -y supervisor && \
    git clone --depth 3 $RECTO $HOME/recto && \
    git clone --depth 3 $VERSO $HOME/verso

COPY recto/.gitmodules $HOME/recto/.gitmodules
COPY recto/server.js $HOME/recto/server.js
RUN cd recto && git submodule init && git submodule update && \
    rm $HOME/recto/bfe/static/js/config-dev.js

COPY supervisord.conf /etc/supervisord/conf.d/supervisord.conf
COPY bfe-config.js $HOME/recto/bfe/static/js/config-dev.js

RUN npm i npm@latest -g && \
  cd $HOME/recto && npm install -g && \
  npm install --save body-parser && \
  npm install -g forever && \
  #rm bfe/index.html && cp bfe/development.html bfe/index.html && \
  cd $HOME/verso && npm install -g

#CMD ["node", "server-bfe.js"]
CMD ["/usr/bin/supervisord", "-n"]

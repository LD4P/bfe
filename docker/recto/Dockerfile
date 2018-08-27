FROM node:8

ENV HOME /opt/sinopia/recto
ENV REPO https://github.com/lcnetdev/recto.git

RUN apt-get update && \
    git clone $REPO $HOME

# Copies over .gitmodule with LD4P Fork of <https://github.com/lcnetdev/bfe>
COPY .gitmodules $HOME/.gitmodules
COPY server.js $HOME/server.js

RUN cd $HOME && git submodule init && \
    git submodule update && \
    rm $HOME/bfe/static/js/config-dev.js

COPY config-dev.js $HOME/bfe/static/js/config-dev.js

RUN npm i npm@latest -g && \
    cd $HOME && npm install -g && \
    npm install --save body-parser


WORKDIR $HOME

CMD ["npm", "start"]

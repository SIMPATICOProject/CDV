FROM node:6.10

LABEL name="SIMPATICO CDV Dashboard" \
      maintainer="SIMPATICO Project" \
      version="1.0"

# Create app directory
COPY ./ /app

COPY docker_config/config.json src/config.json

WORKDIR /app

RUN npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@2.1.5 \
    && npm install \
    && npm install @types/tapable@0.2.5 --save-dev \
    && npm run prebuild:prod && npm run build:prod

CMD npm run server:prod

EXPOSE 8080

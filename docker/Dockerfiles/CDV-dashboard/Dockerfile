FROM node:6.10

LABEL name="SIMPATICO CDV-Dashboard" \
      version="1.0"


# Create app directory
WORKDIR /app

# clone the project
RUN git clone https://github.com/SIMPATICOProject/CDV.git

COPY config/config.json CDV/cdv-dashboard/src/config.json

WORKDIR CDV/cdv-dashboard

RUN npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@2.1.5 \
    && npm install \
    && npm install @types/tapable@0.2.5 --save-dev \
    && npm run prebuild:prod && npm run build:prod

COPY config/config.json account-manager/src/main/resources/application.properties

CMD npm run server:prod

EXPOSE 8080

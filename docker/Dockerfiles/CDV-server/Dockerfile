FROM maven:3.5.2-jdk-8


LABEL name="CDV"\
      maintainer="SIMPATICO Project" \
      version="1.0" \
      description=" Citizen Data Vault For SIMPATICO"


WORKDIR /application



RUN apt-get update; apt-get install -y gettext-base mongodb-clients mysql-client netcat


# install tomcat
RUN wget -O apache-tomcat-8.5.31.tgz http://it.apache.contactlab.it/tomcat/tomcat-8/v8.5.31/bin/apache-tomcat-8.5.31.tar.gz
RUN tar xzvf apache-tomcat-8.5.31.tgz
RUN rm apache-tomcat-8.5.31.tgz

# clone the project
RUN git clone https://github.com/SIMPATICOProject/CDV.git

WORKDIR CDV

ENV MONGO_HOST="mongo_server"
ENV MONGO_ROOT_PASSWORD="password"
ENV MONGO_DATABASE="cdv-data"
ENV MONGO_USERNAME="cdv-user"
ENV MONGO_PASSWORD="cdv-user"

ENV KEYSTORE_PATH="/application/keystore"
ENV KEYSTORE_PASSWORD="password"
ENV KEYPASS="password"



# copy props for docker usage

COPY config/account-manager.properties account-manager/src/main/resources/application.properties
COPY config/pdata-manager.properties pdata-manager/src/main/resources/application.properties
COPY config/security-manager-db.cfg.xml data-security-manager/src/main/resources/it/eng/opsi/cdv/datasecuritymanager/crypt/config/hibernate/hibernate.cfg.xml
COPY config/security-manager.properties data-security-manager/src/main/resources/application.properties
COPY config/service-manager.properties service-manager/src/main/resources/application.properties



CMD mvn package \
&& cp account-manager/target/account-manager.war /application/apache-tomcat-8.5.31/webapps \
&& cp pdata-manager/target/pdata-manager.war /application/apache-tomcat-8.5.31/webapps \
&& cp data-security-manager/target/data-security-manager.war /application/apache-tomcat-8.5.31/webapps \
&& cp service-manager/target/service-manager.war /application/apache-tomcat-8.5.31/webapps \
&& mongorestore --host=$MONGO_HOST --username=$MONGO_USERNAME --password=$MONGO_PASSWORD --db=$MONGO_DATABASE --collection=pDataFields service-manager/dump/personalDataMB/pDataFields.bson \
&& keytool -genseckey -alias masterkey -keyalg AES -keystore $KEYSTORE_PATH -keysize 128 -storetype jceks -storepass $KEYSTORE_PASSWORD -keypass "$KEYPASS" \
&& /application/apache-tomcat-8.5.31/bin/catalina.sh run

EXPOSE 8080
FROM maven:3.5.2-jdk-8


LABEL name="CDV"\
      maintainer="SIMPATICO Project" \
      version="1.0" \
      description=" Citizen Data Vault For SIMPATICO"


WORKDIR /application

COPY ./keystore /application/keystore

# install tomcat
RUN wget -O apache-tomcat-8.5.31.tgz https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.31/bin/apache-tomcat-8.5.31.tar.gz
RUN tar xzvf apache-tomcat-8.5.31.tgz
RUN rm apache-tomcat-8.5.31.tgz

# clone the project
RUN git clone https://github.com/SIMPATICOProject/CDV.git

WORKDIR CDV



# copy props for docker usage

COPY config/account-manager.properties cdv-server/account-manager/src/main/resources/application.properties
COPY config/pdata-manager.properties cdv-server/pdata-manager/src/main/resources/application.properties
COPY config/security-manager-db.cfg.xml cdv-server/data-security-manager/src/main/resources/it/eng/opsi/cdv/datasecuritymanager/crypt/config/hibernate/hibernate.cfg.xml
COPY config/security-manager.properties cdv-server/data-security-manager/src/main/resources/application.properties
COPY config/service-manager.properties cdv-server/service-manager/src/main/resources/application.properties



CMD cd cdv-server \
&& mvn package \
&& cp account-manager/target/account-manager.war /application/apache-tomcat-8.5.31/webapps \
&& cp pdata-manager/target/pdata-manager.war /application/apache-tomcat-8.5.31/webapps \
&& cp data-security-manager/target/data-security-manager.war /application/apache-tomcat-8.5.31/webapps \
&& cp service-manager/target/service-manager.war /application/apache-tomcat-8.5.31/webapps \
&& /application/apache-tomcat-8.5.31/bin/catalina.sh run

EXPOSE 8080

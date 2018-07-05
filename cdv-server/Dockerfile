FROM maven:3.5.2-jdk-8 as builder
COPY ./ /application
WORKDIR /application
CMD mvn package

FROM tomcat:8-jre8-8-jre8-slim
COPY --from=builder /application/**/target/*.war /usr/local/tomcat/webapps/


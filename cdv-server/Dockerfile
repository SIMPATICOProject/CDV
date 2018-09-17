FROM maven:3.5.2-jdk-8 as builder
COPY ./ /application/
WORKDIR /application
RUN mvn package
# BUILDER FINISHED!
FROM davidcaste/alpine-tomcat
COPY --from=builder /application/**/target/*.war $TOMCAT_HOME/webapps/

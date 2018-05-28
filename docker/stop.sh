
ENV=${ENV:-"production"}
echo "Using $ENV Config"
. ./config/$ENV.env

docker-compose stop 2>&1 && \
echo "Everything has been stopped. use run.sh to start them again" || \
echo "Uh-oh! Something went wrong."
ENV=${ENV:-"production"}
echo "Using $ENV Config"

CONTAINER_NAMES=( "cdv_server" );

if [ -f ./config/$ENV.env ]; then
    . ./config/$ENV.env
else
    echo "file ./config/$ENV.env does not exist"
    echo "existing files are :"
    ls -al ./config/
    exit 1
fi

env

e () {
    echo $@
}

cleanup() {
    echo -e "Cleaning workspace..."
    rm -rf ./tmp
    echo -e "done.";
}


stop_running_containers() {
    echo -e "stopping all previous containers"
    docker-compose down -v --remove-orphans 2>&1 && \
    echo -e "containers are now all stopped" || \
    echo -e "an error occured while stopping containers";
}


start_containers() {
    docker-compose up --force-recreate --remove-orphans -d 2>&1 && \
    echo -e "Use stop.sh to stop all containers, Cleaning up" || \
    echo -e "Uh-oh! Something went wrong."
}

create_config() {
    if [ ! -d ./tmp ]; then
        mkdir -p ./tmp;
    fi

    for CONFIG_FILE in ./config/templates/*.tmpl; do
        OUTPUT_FILE=${CONFIG_FILE%.tmpl}
        OUTPUT_FILE=${OUTPUT_FILE#./config/templates/}
        envsubst < $CONFIG_FILE > ./tmp/$OUTPUT_FILE 2>&1 && \
        e "created $OUTPUT_FILE successfully" || \
        e "error while creating $OUTPUT_FILE"
    done

    cp -ru ./tmp/** ./Dockerfiles/CDV-server/config
}

stop_running_containers

for ARG in "$@";
do
    if [ "$ARG" = "-c" ]; then
        create_config 
    fi
done

start_containers && cleanup

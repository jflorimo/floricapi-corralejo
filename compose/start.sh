#!/bin/sh

function runserver() {
    if [[ "$ENVIRONMENT" == "DEV" ]]; then
		# https://jonhnes.medium.com/vue-with-docker-since-creation-until-deployment-on-heroku-5b31c8f041a7
        sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf
		nginx -g 'daemon off;'
    else
       	sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf
		nginx -g 'daemon off;'
    fi
}

echo "START"+$ENVIRONMENT

case "$ENVIRONMENT" in
    "DEV")
        ;;

    "PROD")
        ;;
esac
runserver

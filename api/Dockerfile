#
# Dockerfile for json-server
#

FROM alpine
MAINTAINER kev <noreply@easypi.pro>

WORKDIR /data

RUN set -xe \
    && apk add --no-cache nodejs nodejs-npm \
    && npm install -g json-server \
    && rm -rf /tmp/npm* /var/cache/apk/*

EXPOSE 3000

COPY ./data .

ENTRYPOINT ["json-server"]
CMD ["-H", "0.0.0.0", "-p", "3000", "-w", "db.json"]
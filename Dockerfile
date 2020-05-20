FROM industrydigital/buildbox-node:1.0.0

ARG DOCKER_HOST_UID=1000
ARG DOCKER_HOST_GID=1000

RUN set -xeu \
    && groupmod -g $DOCKER_HOST_GID $RUNTIME_GROUP \
    && usermod -u $DOCKER_HOST_UID $RUNTIME_USER


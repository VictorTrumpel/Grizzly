FROM node:14-alpine AS app-base

# Install system dependencies for this package.
RUN apk add --no-cache imagemagick

WORKDIR /server

COPY  . .

RUN npm install \
    && npm run build \
    && printf "ls\nnpm run server\nnpm run generator\n" > entrypoint.sh

CMD ["/bin/sh", "entrypoint.sh"]
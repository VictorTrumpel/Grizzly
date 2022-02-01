FROM node:14

WORKDIR /server

COPY package*.json ./
RUN yurn install

COPY . .

CMD ["yarn", "dev"]
FROM node:alpine

COPY ./server /server

RUN cd ./server && npm install

ENTRYPOINT [ "node", "./server/index.js" ]


FROM node:alpine

COPY ./chapter-z-vue/dist /dist
COPY ./server /server

RUN cd ./server && npm install

ENTRYPOINT [ "node", "./server/index.js" ]


FROM node:slim

RUN yarn global add firebase-tools
WORKDIR /app
COPY . .
RUN yarn install

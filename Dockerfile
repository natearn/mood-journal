FROM node:slim

WORKDIR /app
COPY . .
RUN yarn install

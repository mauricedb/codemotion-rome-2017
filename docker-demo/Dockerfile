FROM node:7.7.4-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/

RUN ["npm", "install"]

COPY . /app

EXPOSE 3000/tcp

CMD ["npm", "start"]

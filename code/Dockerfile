FROM node:12.19.0-buster

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9999

CMD ["npm", "run", "start"]

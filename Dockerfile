FROM node:latest

WORKDIR /user/src/resaic

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE ${PORT}

CMD ["yarn", "start"]

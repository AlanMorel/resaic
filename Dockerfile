FROM node:alpine as base

WORKDIR /user/app

RUN npm install --global pm2

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build-all

RUN cp .docker.env .env

CMD ["yarn", "start"]

FROM base as production

FROM node:alpine as base

WORKDIR /user/app

RUN npm install pm2@latest --global

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean --force

COPY . .

RUN yarn build-all && cp .env.docker .env

CMD ["yarn", "start"]

FROM base as production

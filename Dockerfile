FROM node:alpine as base

ARG ENV

WORKDIR /app

COPY package.json yarn.lock ./

RUN npx browserslist@latest --update-db && rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean --force

COPY . .

RUN yarn build:${ENV} && yarn build:server

CMD ["node", "./dist/server/core/Server.js"]

FROM base as production

FROM node:alpine as base

WORKDIR /user/app

COPY package.json yarn.lock ./

RUN npx browserslist@latest --update-db && rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean --force

COPY . .

RUN yarn build-all && cp .env.docker .env

CMD ["node", "./dist/server/core/Server.js"]

FROM base as production

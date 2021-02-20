FROM node as base

WORKDIR /user/resaic

RUN npm install --global pm2

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

FROM base as production


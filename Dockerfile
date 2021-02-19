FROM node as base

WORKDIR /user/app

RUN npm install --global pm2

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

FROM base as production

CMD ["yarn", "build-all"]

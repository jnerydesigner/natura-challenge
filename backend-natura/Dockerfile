FROM node:20-alpine as build

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]
FROM node:lts-alpine

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY config config
COPY good_corner.sqlite good_corner.sqlite
COPY tsconfig.json tsconfig.json
COPY src src

CMD npm start



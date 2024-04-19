FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY tsconfig.json tsconfig.json
COPY src src

RUN npm run build

FROM node:lts-alpine as runner

RUN apk --no-cache add curl

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/

COPY package.json package.json
RUN npm install --omit-dev

CMD npm run startprod



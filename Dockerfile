FROM node:21-alpine


WORKDIR /app

RUN npm add -D vitepress

RUN npm install

EXPOSE 3000

CMD npx vitepress dev docs --host 0.0.0.0 --port 3000
FROM node:8.4.0-alpine

ENV NODE_ENV production

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install --production --quiet

COPY src /app/src/
COPY source-context.json source-contexts.json /app/

EXPOSE 8080

CMD ["node", "src/app.js"]

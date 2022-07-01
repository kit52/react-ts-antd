FROM node:16.15.1

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app/

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

USER node

RUN npm install --force

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]

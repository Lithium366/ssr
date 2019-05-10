FROM arm32v7/node:10.15.3-jessie-slim
WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN mkdir stats
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]

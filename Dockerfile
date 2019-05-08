FROM arm32v7/node:10

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN mkdir stats
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]

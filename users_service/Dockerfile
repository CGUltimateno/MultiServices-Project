FROM node:16.20.1

RUN npm install -g nodemon

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
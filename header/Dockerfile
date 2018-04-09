FROM node

COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV=production

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
FROM node:20-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm ci

COPY . .

EXPOSE 80
EXPOSE 443

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:5000/post || exit 1

CMD ["npm", "run", "server"]
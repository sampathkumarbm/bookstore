
FROM node:14.17.1-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install
COPY . .
CMD ["npm", "start"]



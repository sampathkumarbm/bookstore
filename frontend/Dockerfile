FROM node:14.17.1-alpine
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY ./ /app/
RUN npm i
CMD ["npm","start"]


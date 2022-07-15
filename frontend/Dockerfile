FROM node:14.17.1-alpine
WORKDIR /app
COPY frontend/package.json /app/frontend/package.json
COPY frontend/package-lock.json /app/frontend/package-lock.json
COPY ./ /app/
RUN npm i
CMD ["npm","start"]


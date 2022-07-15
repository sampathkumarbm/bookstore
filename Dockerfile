FROM node:14.17.1-alpine
WORKDIR /app
COPY ./frontend/package.json /app/package.json
COPY ./frontend/package-lock.json /app/package-lock.json
COPY ./frontend /app/
RUN npm i
CMD ["npm","start"]


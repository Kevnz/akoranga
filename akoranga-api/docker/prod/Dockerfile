FROM node:8.9.0-slim
WORKDIR app/
COPY package.json .
COPY .eslintrc.json .
COPY config .
RUN npm install --production

CMD ["npm", "run", "dev"]
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD ["sh", "-c", "npx react-inject-env set && serve -s build"]
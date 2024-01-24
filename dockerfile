FROM node:18-alpine

RUN npm install -g pnpm


WORKDIR /app


COPY . .


RUN rm -rf node_modules && pnpm install --force


EXPOSE 3000


CMD ["pnpm", "run", "dev"]

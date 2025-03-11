FROM node:22-slim
RUN corepack enable && corepack prepare pnpm
WORKDIR /app
COPY ./frontend .
RUN pnpm install --force
EXPOSE 3000
CMD ["pnpm", "start"]

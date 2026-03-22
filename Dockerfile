FROM oven/bun:1-alpine AS base
WORKDIR /app

FROM base AS builder
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN cp .env.production .env

RUN bun run build

FROM base AS runner
LABEL author="masb0ymas"
LABEL name="house-of-wizard"

WORKDIR /app

COPY --from=builder /app/.output .
COPY --from=builder /app/.env .

EXPOSE 3000

CMD ["bun", "run", "/app/server/index.mjs"]

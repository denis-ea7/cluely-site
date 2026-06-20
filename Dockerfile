FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source files
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY *.config.js ./
COPY *.json ./
COPY tsconfig.json ./

# Static assets served from / (og.png, etc.). Must be copied so they ship in
# the image — the runtime is `next start`, which serves public/ at the root.
COPY public ./public
RUN mkdir -p ./public

# Override next.config.js for production (без output: 'export')
RUN rm -f next.config.js && cat > next.config.js << 'EOFCONFIG'
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig
EOFCONFIG

RUN cat next.config.js
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3005

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/app ./app
COPY --from=builder /app/public ./public

EXPOSE 3005
CMD ["npm", "start"]


































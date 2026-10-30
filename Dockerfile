# ---- Build stage ----
# Note: use node:22.23.4-alpine for security fixes.
FROM node:22.23.4-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli@22.2.5
RUN npm install

COPY . .
RUN ng build --configuration production

# ---- Production stage: Node SSR + Nginx ----
# Note: use node:22.23.4-alpine for security fixes.
FROM node:22.23.4-alpine AS runner

WORKDIR /usr/src/app

# Install nginx + supervisor
RUN apk add --no-cache nginx supervisor

# Copy build output
COPY --from=builder /usr/src/app/dist ./dist

# Production deps only
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --omit=dev

# Nginx + supervisor config
COPY nginx.conf.prod /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisord.conf

# Keep trusting forwarded headers in the Node app
ENV NG_TRUST_PROXY_HEADERS="x-forwarded-host,x-forwarded-proto,x-forwarded-for,x-forwarded-prefix,x-forwarded-port,x-forwarded-server"

# Expose only nginx (not 4000)
EXPOSE 80

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
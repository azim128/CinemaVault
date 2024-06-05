# Stage 1: Build React App
FROM node:21-alpine3.18 AS Build

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.25.5-alpine-slim

# Remove default nginx configurations
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to Nginx html directory
COPY --from=Build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# Copy build output from Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (for docker-compose)
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]





## Description
My current personal portfolio - March 2020

Checkout the live site [aboutryansam.com](https://www.aboutryansam.com)

### `npm start`
Run the project locally at [http://localhost:3000](http://localhost:3000)

### `In Docker Container`

```Dockerfile
# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY ./ /app/
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.16-alpine
COPY build /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
```

`Docker build --tag aboutryansam .`

`Docker run -d -p 80:80 --name aboutryansam aboutryansam`

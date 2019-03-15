FROM nginx:1.13.7-alpine
COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
COPY ./deploy/default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

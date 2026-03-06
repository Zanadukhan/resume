FROM caddy:alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html /srv/
COPY style.css /srv/
COPY script.js /srv/

EXPOSE 80 443
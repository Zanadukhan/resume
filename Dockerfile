FROM caddy:alpine

COPY index.html /srv/
COPY style.css /srv/
COPY script.js /srv/
COPY assets/ /srv/assets/

EXPOSE 80 443

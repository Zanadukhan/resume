 #!/usr/bin/env bash


docker build -t resume .

docker stop resume-caddy 
 
docker rm resume-caddy

docker run -d --name resume-caddy -p 80:80 -p 443:443 -e DOMAIN=carson-chiu.work -v caddy_data:/data resume
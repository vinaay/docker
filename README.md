# docker

#Installation ubuntu

````
sudo apt update && sudo apt upgrade

sudo apt -y install apt-transport-https ca-certificates curl gnupg lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt update && sudo apt -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker docker-compose


docker --version
docker-compose --version
````



#Docker commands

````
Docker build -t app:v1 .
Docker login -u username 
docker tag app:latest vinaay/app:v1
Docker run -p 8001:8001 vinaay/app:v1

````
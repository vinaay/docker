#volumes

We can use these command to create the docker volumes


````
docker volume create my_volume
docker run -v my_volume:/data nginx
````


Attaching the local directory as volume 

````
docker run -d -v $PWD:/data nginx
docker exec -it container_name bash
```
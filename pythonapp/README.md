#Commenad to execute the docker file

````
docker build -t pythonapp .
docker tag pythonapp:latest vinaay/pythonapp:v1
docker push vinaay/pythonapp:v1
docker run --rm -p 8002:8002 vinaay/pythonapp:v1
````

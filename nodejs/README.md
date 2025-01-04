#Nodejs app build command


````
docker build -t nodejsapp .
docker tag nodejsapp:latest vinaay/nodejsapp:v1
docker push vinaay/nodejsapp:v1
docker run --rm -p 3000:3000 vinaay/nodejsapp:v1
````
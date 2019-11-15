# Overview

## problems without docker
* when I tried to setup startup script for compute engine, I encountered several unexpected troubles. Such as permission, export Variable, command not found
    * solved by docker. Someone may ask, google console has provided predefined server env why you still need docker. My answer is that if you use docker you won't stuck at specific platform say Google Console. Once you build a docker image, you can upload the image to AWS, google console, Azure where ever your like.


## Features
* docker helps you make container-based app
* docker separates your application from your infrastructure so you can deliver application easily **(solve my problem)**
* Docker contains and runs your application in an isolated container
* Docker do not need hypervisor and use the host OS kernel directly
    * save memories

* The container becomes the unit for distributing and testing your application

* container is an env that you run your application. When you want to upload the prod-ready product you will have yo build the container to **image**
    * [image](https://stackoverflow.com/questions/21498832/in-docker-whats-the-difference-between-a-container-and-an-image):
        * a snapshot of container
        * container is running instance of an image


## Docker Engine
*  a client-server application that has three main parts
    1. docker daemon (server)
        * building, running, and distributing your Docker containers
    2. REST API
    3. docker CLI

## Flow
1. build app on container
2. push the container to specific place to run test
3. fix bugs in dev env and re-deploy the container to testing-env
4. push updated image to google app engine


## Benefits
* run more containers on single hardware server (compare to the VM)
* easy to scale up and tear down


## Docker Architecture

#### Docker Daemon (dockerd)
* listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes.
    * push, pull...

#### Docker Client
* CLI
    * `docker run`
    * `docker build`
    * `docker pull`


#### Docker Registries
* physical platform
    * Docker Hub - public
    * Docker Datacenter - private
* stores docker image
* Docker is configured to look for images on Docker Hub by default
* `docker pull` || `docker run`
    * pull docker image from your configured docker registries
* `docker push`
    * push docker image to configured docker registries


## Docker Objects
#### Images
* a read-only template with instructions for creating a Docker container
* layer-based
    * application layer on nodejs layer on debian layer...
* use predefined image or create your own
* Dockerfile
    * create image
    * Each instruction in a Dockerfile creates a layer in the image
    * When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt


### Containers
* a runnable instance of image
* you can create, start, stop, move, or delete a container using the Docker API or CLI.

* check refs


## Namespaces
* in linux
    * Namespaces are a feature of the Linux kernel that partitions kernel resources such that one set of processes sees one set of resources while another set of processes sees a different set of resources.

## Refs
[official Doc](https://docs.docker.com/engine/docker-overview/)

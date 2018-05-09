# We use debian as our base distro for this container.
FROM debian:jessie
MAINTAINER Armando Canto Garcia
# Refresh apt-get.
RUN apt-get update

# Install some utilities needed
RUN apt-get install -y curl make g++
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
RUN npm install @angular/cli -g
RUN apt-get install -y git


# Open up external access to port 8000.
EXPOSE  4200

RUN git clone https://github.com/Action52/PueblaViajes.git
WORKDIR PueblaViajes/frontend


ENTRYPOINT ng serve -D FOREGROUND

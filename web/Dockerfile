# Copyright (c) 2015 The Virtual Vulcano authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that
# can be found in the LICENSE.md file.

FROM dockerfile/nodejs-bower-gulp
MAINTAINER Virtual Vulcano <virtualvulcano@gmail.com>

RUN apt-get update

RUN \
  echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y oracle-java7-installer && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /var/cache/oracle-jdk7-installer

ADD provision/.bashrc /root/.bashrc

RUN npm install -g nodemon

ADD . /web

WORKDIR /web
RUN npm i && \
    bower install --allow-root

EXPOSE 8080:8000

ENV JAVA_HOME /usr/lib/jvm/java-7-oracle

CMD scripts/run/production.sh

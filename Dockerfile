FROM node:20

ENV WORKSPACE /usr/src/app
RUN mkdir -p ${WORKSPACE}

WORKDIR ${WORKSPACE}

COPY ./package.json ${WORKSPACE}/

COPY . $WORKSPACE

RUN npm install -g @angular/cli

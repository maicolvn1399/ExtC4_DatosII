FROM node:12-slim
WORKDIR /tareaext4 
COPY package.json /tareaext4
COPY package-lock.json /tareaext4
RUN npm install 
COPY . /tareaext4
CMD ["npm","start"]


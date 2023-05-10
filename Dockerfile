FROM node:19-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY server.js ./

# Exports
EXPOSE 8088
CMD [ "npm", "run", "dev" ]
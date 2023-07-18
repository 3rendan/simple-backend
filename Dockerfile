FROM node:14
USER node
 
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
 
COPY --chown=node:node ./package*.json ./
RUN npm install
COPY --chown=node:node ./ ./

# Expose the port on which the server will run
EXPOSE 3001
# Start the server
CMD ["npm", "start"]
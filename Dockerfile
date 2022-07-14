FROM node:lts-buster
RUN npm install && npm install pm2 -g 
CMD ["node", "."]

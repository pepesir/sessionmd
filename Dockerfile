FROM node:latest
RUN git clone https://github.com/pepesir/sessionmd /root/pepesir
WORKDIR /root/pepesir/
RUN yarn install --no-audit
CMD ["node", "."]

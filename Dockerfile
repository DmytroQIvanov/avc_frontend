FROM node:latest
WORKDIR /avc-frontend
COPY package.json .
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["serve","-s","-l","3000", "build"]
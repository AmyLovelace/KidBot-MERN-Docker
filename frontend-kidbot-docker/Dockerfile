FROM node:20.0

RUN npm install -g typescript

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

ARG VITE_NODE_ENV
RUN if [ "$VITE_NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --omit=dev; \
        fi
        
COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM nodesource/node:4.0

RUN npm install -g tsd
RUN npm install -g gulp
ADD package.json package.json
ADD tsd.json tsd.json
ADD gulpfile.js gulpfile.js
RUN npm install
RUN tsd install

ADD . .
RUN gulp ts

EXPOSE 3000 

CMD ["node", "bin/www"]

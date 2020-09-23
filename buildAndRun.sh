#!/bin/sh

cd /code
npm install

cd chapter-z-vue
npm install
npm run build

cd ../

npm start
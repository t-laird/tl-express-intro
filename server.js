const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime: ', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, '', 'package.json'));
});

app.get('/sunsets', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, 'public', 'sunsets.html'));
});

app.use( (request, response) => {
  response.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
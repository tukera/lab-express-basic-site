// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) =>
  response.sendFile(__dirname + '/views/home.html')
);

app.get('/about', (request, response, next) =>
  response.sendFile(__dirname + '/views/about.html')
);

app.get('/work', (request, response, next) =>
  response.sendFile(__dirname + '/views/work.html')
);

app.get('/photo-gallery', (request, response, next) =>
  response.sendFile(__dirname + '/views/photo-gallery.html')
);

app.listen(3000, function () {
  console.log('Server started on port 3000');
});

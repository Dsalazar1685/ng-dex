const express = require('express');
const port = 3000;
const app = express();

app.get('/', function(request, response) {
  response.send('Hello Kanto!');
});

app.listen(port, function() {
  console.log('ng-dex is listening on port 3000!')
})

module.exports = {
  app: app
}
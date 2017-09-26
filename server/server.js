const express = require('express');
const port = 3000;
var path = require('path');
const app = express();

// app.get('/', function(request, response) {
//   response.send('Hello Kanto!');
// });

app.use(express.static(path.join(__dirname, '../client')))
app.get('/', function(request, response) {
  var options = {
    root: path.join(__dirname, '../client/')
  }
  console.log(__dirname)
  response.sendFile('dex.html', options, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent')
    }
  })
})

app.listen(port, function() {
  console.log('ng-dex is listening on port 3000!')
})

module.exports = {
  app: app
}
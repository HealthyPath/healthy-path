var path = require('path');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT)
})

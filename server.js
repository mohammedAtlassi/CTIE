var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

app = express();
app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.get(/.*/, function(req, res){
  res.sendFile(path.join(__dirname, , '/dist/index.html'));
}
const port = process.env.PORT || 8080;
app.listen(port);
console.log('app is listenning on port: ${port}');

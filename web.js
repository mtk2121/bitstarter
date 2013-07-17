var express = require('express');
var buffer = buffer.write(fs.readFileSync(index.html));
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString(buffer);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

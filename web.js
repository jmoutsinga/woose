

var express = require('express');
var fs = require('fs');

// instantiate the application
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
    var htmlContent = fs.readFileSync('./index.html', {encoding : 'utf8'});
    response.send(htmlContent);
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});
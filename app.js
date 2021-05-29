const express = require('express');
const app = express();
const port = 4000;
/*app.get('/name/:user_name', function(req,res) {
  res.status(200);
  res.set('Content-type', 'text/html');
  res.send('<html><body>' +
  '<h1>Hello ' + req.params.user_name + '</h1>' +
  '</body></html>'
  );
});
  
/*app.get('*', function(req, res){
    res.end('Hello World');
});*/

app.get('/', function (req, res) {
  res.send('GET request to the homepage');
}).post('/', function (req, res) {
  res.send('POST request to the homepage');
}).all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
}).use(function(req, res, next){
    res.status(404).send('Page introuvable !');
});

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});
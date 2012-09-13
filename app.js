var app = require('express').createServer();
app.get('/*', function(req, res) {
    res.sendfile(__dirname + req.path, function(err){
	res.send(404, 'Not Found');
  });
});
app.listen(80);
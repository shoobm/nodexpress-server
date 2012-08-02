var app = require('express').createServer();
app.get('/*', function(req, res) {
    res.sendfile(__dirname + req.path);
});
app.listen(8080);
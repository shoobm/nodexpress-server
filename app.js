var app = require('express').createServer();
app.get('/*', function(req, res) {
    res.sendfile(__dirname + req.path);
});
app.listen(process.env.VCAP_APP_PORT || 3000);
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var dataYT = require('./data.json');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/data.json', function(req, res, next) {
    res.json(dataYT);
});

app.use('*', function(req, res) {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});


// Basic error logger/handler
app.use(function(err, req, res, next) {
    res.status(500).send(err.message || 'Something broke!');
    next(err || new Error('Something broke!'));
});

if (module === require.main) {
    // Start the server
    var server = app.listen(process.env.port || 80, function() {
        var port = server.address().port;

        console.log('App listening on port %s', port);
        console.log('Press Ctrl+C to quit.');
    });
}

module.exports = app;

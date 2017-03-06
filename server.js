var express = require('express'),
    app = express();


// middleware
app.use('/bower_components',express.static('bower_components'));

app.get('/', function(req, res) {
    res.sendFile('./client/index.html',{root: __dirname });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(request, response){
    response.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);

console.log('Listening to port ' + port + '...!');
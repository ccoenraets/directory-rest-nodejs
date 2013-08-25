var express = require('express'),
    cors = require('cors'),
    wines = require('./routes/employee');
 
var app = express();

app.get('/employees/:id/reports', cors(), wines.findByManager);
app.get('/employees/:id', cors(), wines.findById);
app.get('/employees', cors(), wines.findAll);

app.listen(3000);
console.log('Listening on port 3000...');

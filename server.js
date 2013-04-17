var express = require('express'),
    wines = require('./routes/employee');
 
var app = express();

app.get('/employees/:id/reports', wines.findByManager);
app.get('/employees/:id', wines.findById);
app.get('/employees', wines.findAll);

app.listen(3000);
console.log('Listening on port 3000...');
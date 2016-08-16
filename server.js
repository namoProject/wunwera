//Get Module
var express = require('express');
var bodyparser = require('body-parser');

//Call for Run Module
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(__dirname+'/public'));

app.set('views', './public/views');
app.set('view engine','ejs');

require('./routes.js')(app);




app.listen(3000);
console.log('server started on port=3000');
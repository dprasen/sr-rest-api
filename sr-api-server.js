var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Device = require('./api/models/deviceListModel'), //created 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/srdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/deviceListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('SR RESTful API server started on: ' + port);
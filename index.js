var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var authenticateRoute=require('./api/controllers/authenticate');
var registerRoute=require('./api/controllers/register');
var getDataRoute=require('./api/controllers/getData');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register',registerRoute.register);
app.post('/api/authenticate',authenticateRoute.authenticate);
app.get('/api/getData/:fname/:lname/:employeeID',getDataRoute.getUserData);
app.get('/api/getData/sort',getDataRoute.sortUserData);
app.listen(3000);
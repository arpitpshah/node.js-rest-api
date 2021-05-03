const express=require("express");
const bodyParser=require('body-parser');
const app = express();
const port = process.env.PORT || 3000

const authenticateRoute=require('./api/controllers/authenticate');
const registerRoute=require('./api/controllers/register');
const getDataRoute=require('./api/controllers/getData');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',getDataRoute.getAllData);
app.post('/api/register',registerRoute.register);
app.post('/api/authenticate',authenticateRoute.authenticate);
app.get('/api/getData/:fname/:lname/:employeeID',getDataRoute.getUserData);
app.get('/api/getData/sort',getDataRoute.sortUserData);

app.listen(port);
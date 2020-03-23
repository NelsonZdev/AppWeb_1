const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Settings

app.set('appName', "App_Web_1");
app.set('port', 3500);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "/views"));
app.set('routes', path.join(__dirname, "/routes"));

//Middleware

app.use(express.json());
app.use(morgan('dev'));

//routes

app.use(require(app.set('routes')));

// Static files

app.use(express.static(path.join(__dirname, "public")));

//Listen server

app.listen(app.get('port'), ()=>{
    console.log(app.set('appName'))
    console.log(`Runing in port: ${app.get('port')}`);
})
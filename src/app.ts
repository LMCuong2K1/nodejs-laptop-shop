// const express = require('express');
import express from 'express';
import 'dotenv/config';
import webRoutes from '../src/routes/web';
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 8080;
//config views 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config web routes
webRoutes(app);


//config static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})
=======
import 'dotenv/config';
const port = process.env.PORT||8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
>>>>>>> a3f25675cc0592cb29840dec1d0bac02356002cc
app.listen(port, () => {
    console.log("My app running on port: ", port);
})
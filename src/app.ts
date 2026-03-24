// const express = require('express');
import express from 'express';
import 'dotenv/config';
import webRoutes from '../src/routes/web';
const app = express();
const port = process.env.PORT || 8080;

//config views 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//config static file
app.use(express.static('public'));

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config web routes
webRoutes(app);

app.listen(port, () => {
    console.log("My app running on port: ", port);
})
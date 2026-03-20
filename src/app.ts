// const express = require('express');
import express from 'express';
const app = express();
import 'dotenv/config';
const port = process.env.PORT||8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log("My app running on port: ", port);
})
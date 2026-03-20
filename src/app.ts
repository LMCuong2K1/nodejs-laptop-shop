// const express = require('express');
import express from 'express';
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("My app running on port: ", port);
})
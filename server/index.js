'use strict';

const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

module.exports = app;

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

// 'API' routes
app.use('/api', require('./api'));

// 404 middleware
app.use((req, res, next) => {
  path.extname(req.path).length > 0 ?
    res.status(404).send('Not found') :
    next();
  }
);

// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

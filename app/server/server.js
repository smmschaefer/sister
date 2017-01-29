import express from 'express';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import ExpressReactRouter from 'express-react-router-views';
import routes from '../utils/Routes.js';


var express = require('express');

var app = express();
// Set the engine as .jsx or .js
app.engine('.jsx', ExpressReactRouter.engine({
  routes: routes
}));

// Set the view engine as jsx or js
app.set('view engine', 'jsx');

// Set the custom view
app.set('view', ExpressReactRouter.view);

app.get('/public/', function(req, res) {
  // You can replace req.url with the view path that you've set on the routes file
  res.render(req.routes);
});
// app.js
const express = require('express');
const { json } = require('express');
const functions = require("firebase-functions")

const productRoutes = require('./src/routes/productRoutes');
const cors = require('cors'); // Import the cors module

const app = express();
app.use(cors()); // Apply CORS middleware to all routes
app.use(json());

// Use product routes
app.use('/', productRoutes);

exports.products = functions.https.onRequest(app);




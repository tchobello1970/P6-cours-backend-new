const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://victorhugo:victorhugo1802@occoursp6.opkrbdb.mongodb.net/?retryWrites=true&w=majority&appName=OCcoursP6')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Connexion à MongoDB échouée !', error));

// Set headers to enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Define routes
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

// Middleware pour servir des fichiers statiques (images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Export the app module
module.exports = app;
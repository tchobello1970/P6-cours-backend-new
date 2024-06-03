const express = require('express');

const mongoose = require('mongoose');
const Thing = require('./models/thing');

const stuffRoutes = require('./routes/stuff');
app.use('/api/stuff', stuffRoutes);

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://victorhugo:victorhugo1802@occoursp6.opkrbdb.mongodb.net/?retryWrites=true&w=majority&appName=OCcoursP6')
  .then(() => console.log('Connexion à MongoDB réussie !'))  // Si la connexion est réussie
  .catch((error) => console.error('Connexion à MongoDB échouée !', error));  // Si la connexion échoue


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

module.exports = app;
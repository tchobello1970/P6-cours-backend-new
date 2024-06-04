const mongoose = require('mongoose');

// Définition du schéma pour les objets "Thing"
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },        // Titre de l'objet, obligatoire
  description: { type: String, required: true },  // Description de l'objet, obligatoire
  imageUrl: { type: String, required: true },     // URL de l'image de l'objet, obligatoire
  userId: { type: String, required: true },       // ID de l'utilisateur associé à l'objet, obligatoire
  price: { type: Number, required: true },        // Prix de l'objet, obligatoire
});

// Exportation du modèle "Thing" basé sur le schéma défini
module.exports = mongoose.model('Thing', thingSchema);
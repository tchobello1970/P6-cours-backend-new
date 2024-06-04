// Importation de Mongoose pour la gestion des connexions et des schémas MongoDB
const mongoose = require('mongoose');

// Importation du plugin mongoose-unique-validator pour valider l'unicité des champs dans les schémas Mongoose
const uniqueValidator = require('mongoose-unique-validator');

// Création du schéma utilisateur avec Mongoose
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },  // Champ email de type String, requis et unique
  password: { type: String, required: true }  // Champ password de type String et requis
});

// Application du plugin uniqueValidator au schéma utilisateur pour s'assurer que l'email est unique
userSchema.plugin(uniqueValidator);

// Exportation du modèle User basé sur le schéma utilisateur
module.exports = mongoose.model('User', userSchema);
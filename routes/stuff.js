// Importation du module express pour la création de routes
const express = require('express');
// Création d'un routeur express
const router = express.Router();
// Importation du contrôleur pour les opérations sur les objets
const stuffCtrl = require('../controllers/stuff');

// Importation du middleware d'authentification
const auth = require('../middlewares/auth');
// Importation du middleware de configuration multer pour la gestion des fichiers uploadés
const multer = require('../middlewares/multer-config')



// Définition des différentes routes avec les middlewares appropriés et les fonctions de contrôleur associées


/**
 * Route pour récupérer tous les éléments
 * @route GET /api/stuff
 * @access Public
 * @controller getAllStuff
 */
router.get('/', auth, stuffCtrl.getAllStuff);

/**
 * Route pour créer un nouvel élément
 * @route POST /api/stuff
 * @access Public
 * @controller createThing
 */
router.post('/', auth, multer, stuffCtrl.createThing);

/**
 * Route pour récupérer un élément spécifique par ID
 * @route GET /api/stuff/:id
 * @access Public
 * @controller getOneThing
 */
router.get('/:id', auth, stuffCtrl.getOneThing);

/**
 * Route pour modifier un élément spécifique par ID
 * @route PUT /api/stuff/:id
 * @access Public
 * @controller modifyThing
 */
router.put('/:id', auth, multer, stuffCtrl.modifyThing);

/**
 * Route pour supprimer un élément spécifique par ID
 * @route DELETE /api/stuff/:id
 * @access Public
 * @controller deleteThing
 */
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;
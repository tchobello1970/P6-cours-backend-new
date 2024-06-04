const express = require('express');
const router = express.Router();

// Importation du middleware d'authentification
const auth = require('../middlewares/auth');


const stuffCtrl = require('../controllers/stuff');

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
router.post('/', auth, stuffCtrl.createThing);

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
router.put('/:id', auth, stuffCtrl.modifyThing);

/**
 * Route pour supprimer un élément spécifique par ID
 * @route DELETE /api/stuff/:id
 * @access Public
 * @controller deleteThing
 */
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;
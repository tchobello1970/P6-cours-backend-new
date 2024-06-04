const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

/**
 * Route pour récupérer tous les éléments
 * @route GET /api/stuff
 * @access Public
 * @controller getAllStuff
 */
router.get('/', stuffCtrl.getAllStuff);

/**
 * Route pour créer un nouvel élément
 * @route POST /api/stuff
 * @access Public
 * @controller createThing
 */
router.post('/', stuffCtrl.createThing);

/**
 * Route pour récupérer un élément spécifique par ID
 * @route GET /api/stuff/:id
 * @access Public
 * @controller getOneThing
 */
router.get('/:id', stuffCtrl.getOneThing);

/**
 * Route pour modifier un élément spécifique par ID
 * @route PUT /api/stuff/:id
 * @access Public
 * @controller modifyThing
 */
router.put('/:id', stuffCtrl.modifyThing);

/**
 * Route pour supprimer un élément spécifique par ID
 * @route DELETE /api/stuff/:id
 * @access Public
 * @controller deleteThing
 */
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;
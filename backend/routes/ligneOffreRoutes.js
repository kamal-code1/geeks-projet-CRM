const express = require('express');
const router = express.Router();
const ligneOffreController = require('../controllers/ligneOffreController');

router.get('/', ligneOffreController.getAll);
router.post('/', ligneOffreController.create);
router.delete('/:id', ligneOffreController.remove);

module.exports = router;

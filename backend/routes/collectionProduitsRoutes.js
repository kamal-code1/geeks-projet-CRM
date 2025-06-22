const express = require('express');
const router = express.Router();
const collectionProduitsController = require('../controllers/collectionProduitsController');

router.get('/', collectionProduitsController.getAll);
router.post('/', collectionProduitsController.create);
router.delete('/:id', collectionProduitsController.remove);

module.exports = router;

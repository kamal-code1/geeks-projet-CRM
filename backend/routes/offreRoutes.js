const express = require('express');
const router = express.Router();
const offreController = require('../controllers/offreController');

router.get('/', offreController.getAll);
router.post('/', offreController.create);
router.delete('/:id', offreController.remove);

module.exports = router;

const express = require('express');
const router = express.Router();
const secteurController = require('../controllers/secteurController');

router.get('/', secteurController.getAll);

module.exports = router;

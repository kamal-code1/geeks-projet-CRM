const Secteur = require('../models/secteurModel');

exports.getAll = (req, res) => {
  Secteur.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};
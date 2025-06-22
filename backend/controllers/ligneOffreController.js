const LigneOffre = require('../models/ligneOffreModel');

exports.getAll = (req, res) => {
  LigneOffre.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.create = (req, res) => {
  LigneOffre.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

exports.remove = (req, res) => {
  LigneOffre.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Ligne supprimée' });
  });
};
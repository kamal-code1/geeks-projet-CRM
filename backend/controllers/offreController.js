const Offre = require('../models/offreModel');

exports.getAll = (req, res) => {
  Offre.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.create = (req, res) => {
  Offre.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

exports.remove = (req, res) => {
  Offre.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Offre supprimée' });
  });
};
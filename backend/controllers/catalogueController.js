const Catalogue = require('../models/catalogueModel');

exports.getAll = (req, res) => {
  Catalogue.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  Catalogue.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json(err);
    res.json(row);
  });
};

exports.create = (req, res) => {
  Catalogue.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

exports.update = (req, res) => {
  Catalogue.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Catalogue mis à jour' });
  });
};

exports.remove = (req, res) => {
  Catalogue.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Catalogue supprimé' });
  });
};

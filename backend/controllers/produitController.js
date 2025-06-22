const Produit = require('../models/produitModel');

exports.getAll = (req, res) => {
  Produit.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  Produit.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json(err);
    res.json(row);
  });
};

exports.create = (req, res) => {
  Produit.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

exports.update = (req, res) => {
  Produit.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Produit mis à jour' });
  });
};

exports.remove = (req, res) => {
  Produit.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Produit supprimé' });
  });
};
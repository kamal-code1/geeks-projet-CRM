const CollectionProduits = require('../models/collectionProduitsModel');

exports.getAll = (req, res) => {
  CollectionProduits.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.create = (req, res) => {
  CollectionProduits.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

exports.remove = (req, res) => {
  CollectionProduits.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Lien supprimé' });
  });
};
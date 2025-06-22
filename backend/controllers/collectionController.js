const Collection = require('../models/collectionModel');

exports.getAll = (req, res) => {
  Collection.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  Collection.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json(err);
    res.json(row);
  });
};

exports.create = (req, res) => {
  Collection.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

exports.update = (req, res) => {
  Collection.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Collection mise à jour' });
  });
};

exports.remove = (req, res) => {
  Collection.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Collection supprimée' });
  });
};

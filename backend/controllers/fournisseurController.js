const Frss = require('../models/fournisseurModel');

exports.getFournisseurs = (req, res) => {
  Frss.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getFournisseur = (req, res) => {
  Frss.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.length) return res.status(404).json({ message: 'Fournisseur non trouvé' });
    res.json(result[0]);
  });
};

exports.createFournisseur = (req, res) => {
  Frss.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.updateFournisseur = (req, res) => {
  Frss.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Fournisseur mis à jour' });
  });
};

exports.deleteFournisseur = (req, res) => {
  Frss.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Fournisseur supprimé' });
  });
};
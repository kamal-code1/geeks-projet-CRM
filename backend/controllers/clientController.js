const Client = require('../models/clientModel');

exports.getClients = (req, res) => {
  Client.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getClient = (req, res) => {
  Client.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.length) return res.status(404).json({ message: 'Client non trouvé' });
    res.json(result[0]);
  });
};

exports.createClient = (req, res) => {
  Client.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.updateClient = (req, res) => {
  Client.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Client mis à jour' });
  });
};

exports.deleteClient = (req, res) => {
  Client.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Client supprimé' });
  });
};
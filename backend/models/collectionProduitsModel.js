const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM collection_produits', callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO collection_produits SET ?', data, callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM collection_produits WHERE id = ?', [id], callback);
};
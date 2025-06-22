const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM produits', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM produits WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO produits SET ?', data, callback);
};

exports.update = (id, data, callback) => {
  db.query('UPDATE produits SET ? WHERE id = ?', [data, id], callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM produits WHERE id = ?', [id], callback);
};
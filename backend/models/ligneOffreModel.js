const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM ligneoffre', callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO ligneoffre SET ?', data, callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM ligneoffre WHERE id = ?', [id], callback);
};

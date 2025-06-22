const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM offres', callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO offres SET ?', data, callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM offres WHERE id = ?', [id], callback);
};
const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM collection', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM collection WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO collection SET ?', data, callback);
};

exports.update = (id, data, callback) => {
  db.query('UPDATE collection SET ? WHERE id = ?', [data, id], callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM collection WHERE id = ?', [id], callback);
};
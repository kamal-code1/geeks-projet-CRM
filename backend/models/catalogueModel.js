const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM catalogue', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM catalogue WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO catalogue SET ?', data, callback);
};

exports.update = (id, data, callback) => {
  db.query('UPDATE catalogue SET ? WHERE id = ?', [data, id], callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM catalogue WHERE id = ?', [id], callback);
};

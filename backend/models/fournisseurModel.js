const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM frss', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM frss WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO frss SET ?', data, callback);
};

exports.update = (id, data, callback) => {
  db.query('UPDATE frss SET ? WHERE id = ?', [data, id], callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM frss WHERE id = ?', [id], callback);
};

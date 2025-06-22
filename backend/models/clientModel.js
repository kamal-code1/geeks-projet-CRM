const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM clients', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM clients WHERE id = ?', [id], callback);
};

exports.create = (client, callback) => {
  db.query('INSERT INTO clients SET ?', client, callback);
};

exports.update = (id, client, callback) => {
  db.query('UPDATE clients SET ? WHERE id = ?', [client, id], callback);
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM clients WHERE id = ?', [id], callback);
};
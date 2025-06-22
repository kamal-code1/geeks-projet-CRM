const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM secteur_activite', callback);
};
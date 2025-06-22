const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = 'ta_cle_secrete_a_changer'; // Mieux : utiliser .env

// Inscription
exports.register = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    try {
      // Vérifier si utilisateur existe
      db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length > 0)
          return res.status(400).json({ message: 'Utilisateur déjà existant' });

        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
          if (err) return res.status(500).json(err);
          res.status(201).json({ message: 'Utilisateur créé' });
        });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
];

// Connexion
exports.login = [
  body('email').isEmail(),
  body('password').exists(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0)
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  }
];

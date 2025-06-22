require('dotenv').config();
const express = require('express');
const app = express();
const config = require('./config/config');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Middleware de parsing
app.use(express.json());

// Routes
app.use('/api/offres', require('./routes/offreRoutes'));
app.use('/api/lignes-offre', require('./routes/ligneOffreRoutes'));
app.use('/api/secteurs', require('./routes/secteurRoutes'));
app.use('/api/collection-produits', require('./routes/collectionProduitsRoutes'));
app.use('/api/produits', require('./routes/produitRoutes'));
app.use('/api/catalogues', require('./routes/catalogueRoutes'));
app.use('/api/collections', require('./routes/collectionRoutes'));
app.use('/api/collection-produits', require('./routes/collectionProduitsRoutes'));
app.use('/api/secteurs', require('./routes/secteurRoutes'));
app.use('/api/offres', require('./routes/offreRoutes'));
app.use('/api/ligne-offres', require('./routes/ligneOffreRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Middleware d'erreur
app.use(errorMiddleware);

// Démarrage du serveur
app.listen(config.port, () => {
  console.log(`🚀 Serveur lancé sur le port ${config.port}`);
});

module.exports = app;
// Secret de signature des JWT : obligatoire, jamais dans le code (voir .env.example)
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET manquant : définissez-le dans .env');
}

module.exports = {
  port: process.env.PORT || 5001,
  jwtSecret: process.env.JWT_SECRET,
  db: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projet_kamal'
  }
};
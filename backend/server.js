const app = require('./app');
const config = require('./config/config');
const connectDB = require('./models/db');
connectDB();

app.listen(config.port, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${config.port}`);
});

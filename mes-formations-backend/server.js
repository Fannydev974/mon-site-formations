// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Routes d'authentification
const cors = require('cors');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Initialiser l'application Express
const app = express();

// Middleware pour traiter les requêtes JSON
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connecté à la base de données MongoDB"))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

// Démarrer le serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`));

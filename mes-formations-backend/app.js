const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à la base de données MongoDB
const DB_CONNECT = 'mongodb+srv://maformation:sosofanny@cluster.mongodb.net/mes-formations?retryWrites=true&w=majority';

mongoose.connect(DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Définition d'une route simple
app.get('/', (req, res) => {
    res.send('Bienvenue dans l\'API de mes formations !');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

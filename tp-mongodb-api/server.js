require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

let db;

async function connectDB() {
  try {
    console.log('🔌 Tentative de connexion à MongoDB...');
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    db = client.db();
    console.log('Connecté à MongoDB avec succès');
  } catch (error) {
    console.error(' Erreur de connexion à MongoDB:', error);
    process.exit(1);
  }
}

app.use((req, res, next) => {
  req.db = db;
  next();
});

// AJOUTER CETTE LIGNE : Importer les routes
const productsRoutes = require('./routes/products');
app.use('/api/products', productsRoutes);

// Route de base
app.get('/', (req, res) => {
  res.json({ 
    message: 'API MongoDB - TP Products',
    endpoints: {
      products: 'GET /api/products',
      stats: 'GET /api/products/stats'
    },
    examples: [
      '/api/products?page=1&limit=10',
      '/api/products?category=smartphones',
      '/api/products?search=iphone',
      '/api/products?sort=price',
      '/api/products?sort=-price',
      '/api/products?page=2&limit=5&category=laptops&sort=-rating'
    ]
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  });
});
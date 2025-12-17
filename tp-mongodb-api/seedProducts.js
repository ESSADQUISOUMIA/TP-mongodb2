require('dotenv').config();
const { MongoClient } = require('mongodb');

/**
 * Script de seeding pour charger les produits depuis l'API DummyJSON
 */
async function seedProducts() {
  let client;
  
  try {
    // 1. Se connecter à MongoDB
    console.log(' Connexion à MongoDB...');
    client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    console.log(' Connecté à MongoDB');
    
    // 2. Récupérer les données de l'API
    console.log(' Récupération des produits depuis https://dummyjson.com/products...');
    const response = await fetch('https://dummyjson.com/products?limit=100');
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(` ${data.products.length} produits récupérés`);
    
    // 3. Supprimer la collection existante (pour un seed propre)
    console.log('  Suppression de la collection existante...');
    try {
      await db.collection('products').drop();
      console.log(' Collection supprimée');
    } catch (error) {
      console.log('ℹ️  Aucune collection existante (normal au premier lancement)');
    }
    
    // 4. Insérer les nouveaux produits (utiliser insertMany)
    console.log(' Insertion des produits dans la base de données...');
    const result = await db.collection('products').insertMany(data.products);
    
    console.log(` ${result.insertedCount} produits insérés avec succès`);
    console.log(' Seeding terminé !');
    
  } catch (error) {
    console.error(' Erreur lors du seeding:', error.message);
    process.exit(1);
  } finally {
    // 5. Déconnecter le client MongoDB
    if (client) {
      await client.close();
      console.log('🔌 Déconnexion de MongoDB');
    }
  }
}

// Exécuter le script
seedProducts();
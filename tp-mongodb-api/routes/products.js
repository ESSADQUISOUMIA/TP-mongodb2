const express = require('express');
const router = express.Router();

/**
 * GET /api/products
 * Récupération des produits avec pagination, filtrage, recherche et tri
 * 
 * Query params :
 * - page : Numéro de page (défaut: 1)
 * - limit : Nombre de produits par page (défaut: 10)
 * - category : Filtrer par catégorie
 * - search : Rechercher dans titre et description
 * - sort : Trier (ex: price, -price, rating, -rating)
 */
router.get('/', async (req, res) => {
  try {
    const db = req.db;
    const collection = db.collection('products');
    
    // 1. EXTRACTION DES PARAMÈTRES
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const search = req.query.search;
    const sort = req.query.sort;
    
    // 2. CONSTRUCTION DU FILTRE MONGODB
    const filter = {};
    
    // Filtrage par catégorie
    if (category) {
      filter.category = category;
    }
    
    // Recherche par titre ou description (insensible à la casse)
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // 3. GESTION DU TRI
    let sortOption = {};
    if (sort) {
      // Si sort commence par '-', c'est un tri décroissant
      const sortField = sort.startsWith('-') ? sort.substring(1) : sort;
      const sortOrder = sort.startsWith('-') ? -1 : 1;
      sortOption[sortField] = sortOrder;
    }
    
    // 4. CALCUL DE LA PAGINATION
    const skip = (page - 1) * limit;
    
    // 5. EXÉCUTION DE LA REQUÊTE
    const products = await collection
      .find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .toArray();
    
    // 6. COMPTAGE TOTAL POUR LA PAGINATION
    const total = await collection.countDocuments(filter);
    
    // 7. RÉPONSE JSON
    res.json({
      success: true,
      data: products,
      pagination: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1
      }
    });
    
  } catch (error) {
    console.error(' Erreur:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur serveur lors de la récupération des produits' 
    });
  }
});

module.exports = router;
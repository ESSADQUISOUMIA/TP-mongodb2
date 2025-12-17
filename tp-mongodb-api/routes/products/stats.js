/**
 * GET /api/products/stats
 * Endpoint d'agrégation avancée pour les statistiques produits
 * 
 * Query params :
 * - type : Type de statistique à retourner
 *   - 'category' : Stats par catégorie (6.1)
 *   - 'topRated' : Top 5 produits bien notés > 500$ (6.2)
 *   - 'brand' : Stats par marque avec valeur stock (6.3)
 *   - 'all' : Toutes les stats (défaut)
 */
router.get('/stats', async (req, res) => {
    try {
      const db = req.db;
      const collection = db.collection('products');
      const statsType = req.query.type || 'all';
      
      const results = {};
      
      // EXERCICE 6.1 : Statistiques Globales par Catégorie
      if (statsType === 'category' || statsType === 'all') {
        const categoryStats = await collection.aggregate([
          {
            $group: {
              _id: '$category',
              totalProducts: { $sum: 1 },
              avgPrice: { $avg: '$price' },
              maxPrice: { $max: '$price' },
              minPrice: { $min: '$price' }
            }
          },
          {
            $sort: { avgPrice: -1 }
          },
          {
            $project: {
              _id: 0,
              categoryName: '$_id',
              totalProducts: 1,
              averagePrice: { $round: ['$avgPrice', 2] },
              maximumPrice: '$maxPrice',
              minimumPrice: '$minPrice',
              priceRange: {
                $subtract: ['$maxPrice', '$minPrice']
              }
            }
          }
        ]).toArray();
        
        results.categoryStats = categoryStats;
      }
      
      // EXERCICE 6.2 : Top 5 Produits Bien Notés (> 500$)
      if (statsType === 'topRated' || statsType === 'all') {
        const topRatedProducts = await collection.aggregate([
          {
            $match: {
              price: { $gt: 500 }
            }
          },
          {
            $sort: { rating: -1 }
          },
          {
            $limit: 5
          },
          {
            $project: {
              _id: 0,
              title: 1,
              price: 1,
              rating: 1,
              brand: 1,
              category: 1
            }
          }
        ]).toArray();
        
        results.topRatedProducts = topRatedProducts;
      }
      
      // EXERCICE 6.3 : Statistiques par Marque avec Valeur du Stock
      if (statsType === 'brand' || statsType === 'all') {
        const brandStats = await collection.aggregate([
          {
            $match: {
              brand: { $exists: true, $ne: null }
            }
          },
          {
            $group: {
              _id: '$brand',
              totalStock: { $sum: '$stock' },
              totalValue: {
                $sum: {
                  $multiply: ['$price', '$stock']
                }
              },
              productCount: { $sum: 1 },
              avgPrice: { $avg: '$price' }
            }
          },
          {
            $sort: { totalValue: -1 }
          },
          {
            $project: {
              _id: 0,
              brandName: '$_id',
              totalStock: 1,
              totalValue: { $round: ['$totalValue', 2] },
              productCount: 1,
              averagePrice: { $round: ['$avgPrice', 2] },
              avgStockPerProduct: {
                $round: [
                  { $divide: ['$totalStock', '$productCount'] },
                  0
                ]
              }
            }
          }
        ]).toArray();
        
        results.brandStats = brandStats;
      }
      
      // Statistiques globales supplémentaires
      if (statsType === 'all') {
        const globalStats = await collection.aggregate([
          {
            $group: {
              _id: null,
              totalProducts: { $sum: 1 },
              avgPrice: { $avg: '$price' },
              avgRating: { $avg: '$rating' },
              totalStock: { $sum: '$stock' },
              totalInventoryValue: {
                $sum: { $multiply: ['$price', '$stock'] }
              }
            }
          },
          {
            $project: {
              _id: 0,
              totalProducts: 1,
              averagePrice: { $round: ['$avgPrice', 2] },
              averageRating: { $round: ['$avgRating', 2] },
              totalStock: 1,
              totalInventoryValue: { $round: ['$totalInventoryValue', 2] }
            }
          }
        ]).toArray();
        
        results.globalStats = globalStats[0] || {};
      }
      
      res.json({
        success: true,
        statsType: statsType,
        data: results
      });
      
    } catch (error) {
      console.error('❌ Erreur stats:', error);
      res.status(500).json({ 
        success: false,
        error: 'Erreur serveur lors du calcul des statistiques' 
      });
    }
  });
  
  module.exports = router;
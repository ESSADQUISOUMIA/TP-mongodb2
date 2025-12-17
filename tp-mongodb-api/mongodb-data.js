// ===================================
// Base de données e-commerce Maroc
// ===================================

// Connexion à MongoDB et création de la base
// Remplacez la commande shell 'use shop_maroc' (qui est invalide en tant que mot-clé JS)
// par une affectation JavaScript pour sélectionner la base dans le shell MongoDB.
db = db.getSiblingDB('shop_maroc')

// ===================================
// 1. COLLECTION PRODUCTS
// ===================================

// Vider la collection si elle existe
db.products.drop()

// Insérer les produits
db.products.insertMany([
  {
    sku: "CAF-001",
    name: "Caftan Marocain Premium",
    category: "Vêtements",
    subcategory: "Traditionnel",
    price: {
      amount: 2500,
      currency: "MAD"
    },
    stock: {
      quantity: 15,
      warehouse: "Casablanca"
    },
    attributes: {
      color: ["Bleu", "Vert", "Rouge"],
      size: ["S", "M", "L", "XL"],
      material: "Soie naturelle"
    },
    ratings: {
      average: 4.8,
      count: 127
    },
    tags: ["traditionnel", "mariage", "luxe"],
    createdAt: new Date("2024-01-15"),
    lastModified: new Date("2024-03-20")
  },
  {
    sku: "DJE-002",
    name: "Djellaba Moderne Homme",
    category: "Vêtements",
    subcategory: "Traditionnel",
    price: {
      amount: 1200,
      currency: "MAD"
    },
    stock: {
      quantity: 25,
      warehouse: "Rabat"
    },
    attributes: {
      color: ["Noir", "Gris", "Blanc"],
      size: ["M", "L", "XL", "XXL"],
      material: "Laine mélangée"
    },
    ratings: {
      average: 4.5,
      count: 89
    },
    tags: ["traditionnel", "homme", "hiver"],
    createdAt: new Date("2024-01-20"),
    lastModified: new Date("2024-03-15")
  },
  {
    sku: "BAB-003",
    name: "Babouche artisanale en cuir",
    category: "Chaussures",
    subcategory: "Traditionnel",
    price: {
      amount: 350,
      currency: "MAD"
    },
    stock: {
      quantity: 40,
      warehouse: "Casablanca"
    },
    attributes: {
      color: ["Marron", "Noir", "Rouge", "Jaune"],
      size: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
      material: "Cuir naturel"
    },
    ratings: {
      average: 4.7,
      count: 234
    },
    tags: ["traditionnel", "artisanat", "confort"],
    createdAt: new Date("2024-01-10"),
    lastModified: new Date("2024-03-18")
  },
  {
    sku: "TAJ-004",
    name: "Tajine en terre cuite décoré",
    category: "Cuisine",
    subcategory: "Ustensiles",
    price: {
      amount: 250,
      currency: "MAD"
    },
    stock: {
      quantity: 30,
      warehouse: "Fès"
    },
    attributes: {
      diameter: "30cm",
      weight: "2.5kg",
      design: ["Géométrique", "Floral", "Berbère"]
    },
    ratings: {
      average: 4.9,
      count: 156
    },
    tags: ["cuisine", "artisanat", "traditionnel"],
    createdAt: new Date("2024-02-01"),
    lastModified: new Date("2024-03-10")
  },
  {
    sku: "THE-005",
    name: "Thé vert à la menthe - Premium",
    category: "Alimentation",
    subcategory: "Boissons",
    price: {
      amount: 85,
      currency: "MAD"
    },
    stock: {
      quantity: 100,
      warehouse: "Marrakech"
    },
    attributes: {
      weight: "250g",
      origin: "Maroc",
      type: "Bio"
    },
    ratings: {
      average: 4.6,
      count: 312
    },
    tags: ["thé", "menthe", "bio"],
    createdAt: new Date("2024-01-25"),
    lastModified: new Date("2024-03-22")
  },
  {
    sku: "ARG-006",
    name: "Huile d'Argan Pure 250ml",
    category: "Cosmétique",
    subcategory: "Soins",
    price: {
      amount: 320,
      currency: "MAD"
    },
    stock: {
      quantity: 45,
      warehouse: "Agadir"
    },
    attributes: {
      volume: "250ml",
      type: "100% pure",
      usage: ["Cheveux", "Peau", "Ongles"]
    },
    ratings: {
      average: 4.8,
      count: 189
    },
    tags: ["bio", "naturel", "argan", "beauté"],
    createdAt: new Date("2024-02-10"),
    lastModified: new Date("2024-03-19")
  },
  {
    sku: "TAP-007",
    name: "Tapis Berbère fait main",
    category: "Décoration",
    subcategory: "Tapis",
    price: {
      amount: 3500,
      currency: "MAD"
    },
    stock: {
      quantity: 8,
      warehouse: "Ouarzazate"
    },
    attributes: {
      dimensions: "200x150cm",
      material: "Laine naturelle",
      pattern: "Géométrique berbère"
    },
    ratings: {
      average: 4.9,
      count: 67
    },
    tags: ["artisanat", "berbère", "luxe", "décoration"],
    createdAt: new Date("2024-01-05"),
    lastModified: new Date("2024-03-12")
  },
  {
    sku: "POT-008",
    name: "Service à thé en argent",
    category: "Vaisselle",
    subcategory: "Service",
    price: {
      amount: 4500,
      currency: "MAD"
    },
    stock: {
      quantity: 5,
      warehouse: "Casablanca"
    },
    attributes: {
      pieces: 7,
      material: "Argent plaqué",
      style: "Fassi traditionnel"
    },
    ratings: {
      average: 5.0,
      count: 23
    },
    tags: ["luxe", "argent", "thé", "cadeau"],
    createdAt: new Date("2024-02-15"),
    lastModified: new Date("2024-03-08")
  },
  {
    sku: "SAV-009",
    name: "Savon noir beldi à l'eucalyptus",
    category: "Cosmétique",
    subcategory: "Soins",
    price: {
      amount: 65,
      currency: "MAD"
    },
    stock: {
      quantity: 80,
      warehouse: "Marrakech"
    },
    attributes: {
      weight: "200g",
      ingredients: "Olives noires, eucalyptus",
      usage: "Hammam"
    },
    ratings: {
      average: 4.7,
      count: 145
    },
    tags: ["hammam", "naturel", "soins"],
    createdAt: new Date("2024-02-20"),
    lastModified: new Date("2024-03-21")
  },
  {
    sku: "EPF-010",
    name: "Épices Ras el Hanout",
    category: "Alimentation",
    subcategory: "Épices",
    price: {
      amount: 120,
      currency: "MAD"
    },
    stock: {
      quantity: 60,
      warehouse: "Fès"
    },
    attributes: {
      weight: "100g",
      ingredients: "35 épices mélangées",
      origin: "Fès"
    },
    ratings: {
      average: 4.9,
      count: 203
    },
    tags: ["épices", "cuisine", "traditionnel"],
    createdAt: new Date("2024-01-30"),
    lastModified: new Date("2024-03-17")
  }
])

print("✓ 10 produits insérés dans la collection 'products'")

// ===================================
// 2. COLLECTION CUSTOMERS
// ===================================

// Vider la collection si elle existe
db.customers.drop()

// Insérer les clients
db.customers.insertMany([
  {
    customerId: "CLT-10001",
    firstName: "Fatima",
    lastName: "Benali",
    email: "fatima.benali@email.com",
    phone: "+212 6 12 34 56 78",
    address: {
      street: "45 Boulevard Mohammed V",
      city: "Rabat",
      postalCode: "10000",
      country: "Maroc"
    },
    preferences: {
      newsletter: true,
      language: "fr",
      currency: "MAD"
    },
    loyaltyPoints: 1250,
    registeredAt: new Date("2023-05-10"),
    lastPurchase: new Date("2024-03-15")
  },
  {
    customerId: "CLT-10002",
    firstName: "Mohammed",
    lastName: "Alaoui",
    email: "m.alaoui@email.com",
    phone: "+212 6 22 33 44 55",
    address: {
      street: "12 Rue des Consuls",
      city: "Casablanca",
      postalCode: "20000",
      country: "Maroc"
    },
    preferences: {
      newsletter: true,
      language: "ar",
      currency: "MAD"
    },
    loyaltyPoints: 850,
    registeredAt: new Date("2023-08-15"),
    lastPurchase: new Date("2024-03-10")
  },
  {
    customerId: "CLT-10003",
    firstName: "Amina",
    lastName: "Rachidi",
    email: "amina.r@email.com",
    phone: "+212 6 33 44 55 66",
    address: {
      street: "78 Avenue Hassan II",
      city: "Fès",
      postalCode: "30000",
      country: "Maroc"
    },
    preferences: {
      newsletter: false,
      language: "fr",
      currency: "MAD"
    },
    loyaltyPoints: 320,
    registeredAt: new Date("2023-12-01"),
    lastPurchase: new Date("2024-02-28")
  },
  {
    customerId: "CLT-10004",
    firstName: "Youssef",
    lastName: "El Amrani",
    email: "y.elamrani@email.com",
    phone: "+212 6 44 55 66 77",
    address: {
      street: "23 Rue de la Liberté",
      city: "Marrakech",
      postalCode: "40000",
      country: "Maroc"
    },
    preferences: {
      newsletter: true,
      language: "fr",
      currency: "MAD"
    },
    loyaltyPoints: 2100,
    registeredAt: new Date("2022-10-20"),
    lastPurchase: new Date("2024-03-20")
  },
  {
    customerId: "CLT-10005",
    firstName: "Khadija",
    lastName: "Tahiri",
    email: "k.tahiri@email.com",
    phone: "+212 6 55 66 77 88",
    address: {
      street: "56 Quartier Industriel",
      city: "Tanger",
      postalCode: "90000",
      country: "Maroc"
    },
    preferences: {
      newsletter: true,
      language: "fr",
      currency: "MAD"
    },
    loyaltyPoints: 450,
    registeredAt: new Date("2023-09-05"),
    lastPurchase: new Date("2024-03-05")
  },
  {
    customerId: "CLT-10006",
    firstName: "Omar",
    lastName: "Benjelloun",
    email: "o.benjelloun@email.com",
    phone: "+212 6 66 77 88 99",
    address: {
      street: "34 Rue du Parc",
      city: "Agadir",
      postalCode: "80000",
      country: "Maroc"
    },
    preferences: {
      newsletter: false,
      language: "fr",
      currency: "MAD"
    },
    loyaltyPoints: 0,
    registeredAt: new Date("2024-01-15"),
    lastPurchase: null
  },
  {
    customerId: "CLT-10007",
    firstName: "Salma",
    lastName: "Idrissi",
    email: "s.idrissi@email.com",
    phone: "+212 6 77 88 99 00",
    address: {
      street: "89 Boulevard Zerktouni",
      city: "Casablanca",
      postalCode: "20100",
      country: "Maroc"
    },
    preferences: {
      newsletter: true,
      language: "en",
      currency: "MAD"
    },
    loyaltyPoints: 3200,
    registeredAt: new Date("2022-05-12"),
    lastPurchase: new Date("2024-03-22")
  },
  {
    customerId: "CLT-10008",
    firstName: "Ahmed",
    lastName: "Fassi",
    email: "a.fassi@email.com",
    phone: "+212 6 88 99 00 11",
    address: {
      street: "15 Médina Ancienne",
      city: "Fès",
      postalCode: "30100",
      country: "Maroc"
    },
    preferences: {
      newsletter: true,
      language: "ar",
      currency: "MAD"
    },
    loyaltyPoints: 1800,
    registeredAt: new Date("2023-02-28"),
    lastPurchase: new Date("2024-03-18")
  }
])

print("✓ 8 clients insérés dans la collection 'customers'")

// ===================================
// 3. COLLECTION ORDERS 
// ===================================

// Vider la collection si elle existe
db.orders.drop()

// Insérer les commandes
db.orders.insertMany([
  {
    orderNumber: "CMD-2024-0001",
    customerId: "CLT-10001",
    items: [
      {
        productId: db.products.findOne({ sku: "CAF-001" })._id,
        sku: "CAF-001",
        name: "Caftan Marocain Premium",
        quantity: 1,
        unitPrice: 2500,
        total: 2500
      },
      {
        productId: db.products.findOne({ sku: "BAB-003" })._id,
        sku: "BAB-003",
        name: "Babouche artisanale en cuir",
        quantity: 2,
        unitPrice: 350,
        total: 700
      }
    ],
    totals: {
      subtotal: 3200,
      shipping: 50,
      tax: 640,
      total: 3890
    },
    shipping: {
      method: "Amana",
      address: {
        street: "45 Boulevard Mohammed V",
        city: "Rabat",
        postalCode: "10000"
      },
      estimatedDelivery: new Date("2024-03-25"),
      trackingNumber: "AM123456789"
    },
    payment: {
      method: "CMI",
      status: "completed",
      transactionId: "TRX-789456"
    },
    status: "delivered",
    statusHistory: [
      {
        status: "pending",
        date: new Date("2024-03-15T10:00:00Z")
      },
      {
        status: "paid",
        date: new Date("2024-03-15T10:05:00Z")
      },
      {
        status: "processing",
        date: new Date("2024-03-15T10:30:00Z")
      },
      {
        status: "shipped",
        date: new Date("2024-03-16T14:00:00Z")
      },
      {
        status: "delivered",
        date: new Date("2024-03-18T16:30:00Z")
      }
    ],
    createdAt: new Date("2024-03-15T10:00:00Z")
  },
  {
    orderNumber: "CMD-2024-0002",
    customerId: "CLT-10002",
    items: [
      {
        productId: db.products.findOne({ sku: "THE-005" })._id,
        sku: "THE-005",
        name: "Thé vert à la menthe - Premium",
        quantity: 3,
        unitPrice: 85,
        total: 255
      }
    ],
    totals: {
      subtotal: 255,
      shipping: 0, // Gratuit car > 200 MAD
      tax: 51,
      total: 306
    },
    shipping: {
      method: "CTM Messagerie",
      address: {
        street: "12 Rue des Consuls",
        city: "Casablanca",
        postalCode: "20000"
      },
      estimatedDelivery: new Date("2024-03-13")
    },
    payment: {
      method: "COD",
      status: "completed"
    },
    status: "delivered",
    statusHistory: [
      {
        status: "pending",
        date: new Date("2024-03-10T09:00:00Z")
      },
      {
        status: "processing",
        date: new Date("2024-03-10T09:30:00Z")
      },
      {
        status: "shipped",
        date: new Date("2024-03-10T15:00:00Z")
      },
      {
        status: "delivered",
        date: new Date("2024-03-12T11:00:00Z")
      }
    ],
    createdAt: new Date("2024-03-10T09:00:00Z")
  },
  {
    orderNumber: "CMD-2024-0003",
    customerId: "CLT-10004",
    items: [
      {
        productId: db.products.findOne({ sku: "TAP-007" })._id,
        sku: "TAP-007",
        name: "Tapis Berbère fait main",
        quantity: 1,
        unitPrice: 3500,
        total: 3500
      },
      {
        productId: db.products.findOne({ sku: "ARG-006" })._id,
        sku: "ARG-006",
        name: "Huile d'Argan Pure 250ml",
        quantity: 2,
        unitPrice: 320,
        total: 640
      }
    ],
    totals: {
      subtotal: 4140,
      shipping: 100,
      tax: 828,
      total: 5068
    },
    shipping: {
      method: "Transporteur Spécialisé",
      address: {
        street: "23 Rue de la Liberté",
        city: "Marrakech",
        postalCode: "40000"
      },
      estimatedDelivery: new Date("2024-03-28")
    },
    payment: {
      method: "Virement",
      status: "completed",
      transactionId: "VIR-456789"
    },
    status: "processing",
    statusHistory: [
      {
        status: "pending",
        date: new Date("2024-03-20T14:00:00Z")
      },
      {
        status: "paid",
        date: new Date("2024-03-21T10:00:00Z")
      },
      {
        status: "processing",
        date: new Date("2024-03-21T14:00:00Z")
      }
    ],
    createdAt: new Date("2024-03-20T14:00:00Z")
  },
  {
    orderNumber: "CMD-2024-0004",
    customerId: "CLT-10007",
    items: [
      {
        productId: db.products.findOne({ sku: "POT-008" })._id,
        sku: "POT-008",
        name: "Service à thé en argent",
        quantity: 1,
        unitPrice: 4500,
        total: 4500
      }
    ],
    totals: {
      subtotal: 4500,
      shipping: 0,
      tax: 900,
      total: 5400
    },
    shipping: {
      method: "Amana Express",
      address: {
        street: "89 Boulevard Zerktouni",
        city: "Casablanca",
        postalCode: "20100"
      },
      estimatedDelivery: new Date("2024-03-24"),
      trackingNumber: "AMX987654321"
    },
    payment: {
      method: "CMI",
      status: "completed",
      transactionId: "TRX-112233"
    },
    status: "shipped",
    statusHistory: [
      {
        status: "pending",
        date: new Date("2024-03-22T11:00:00Z")
      },
      {
        status: "paid",
        date: new Date("2024-03-22T11:05:00Z")
      },
      {
        status: "processing",
        date: new Date("2024-03-22T14:00:00Z")
      },
      {
        status: "shipped",
        date: new Date("2024-03-23T10:00:00Z")
      }
    ],
    createdAt: new Date("2024-03-22T11:00:00Z")
  },
  {
    orderNumber: "CMD-2024-0005",
    customerId: "CLT-10003",
    items: [
      {
        productId: db.products.findOne({ sku: "SAV-009" })._id,
        sku: "SAV-009",
        name: "Savon noir beldi à l'eucalyptus",
        quantity: 4,
        unitPrice: 65,
        total: 260
      },
      {
        productId: db.products.findOne({ sku: "EPF-010" })._id,
        sku: "EPF-010",
        name: "Épices Ras el Hanout",
        quantity: 2,
        unitPrice: 120,
        total: 240
      }
    ],
    totals: {
      subtotal: 500,
      shipping: 50,
      tax: 100,
      total: 650
    },
    shipping: {
      method: "Poste Maroc",
      address: {
        street: "78 Avenue Hassan II",
        city: "Fès",
        postalCode: "30000"
      },
      estimatedDelivery: new Date("2024-03-05")
    },
    payment: {
      method: "PayPal",
      status: "completed",
      transactionId: "PP-998877"
    },
    status: "delivered",
    statusHistory: [
      {
        status: "pending",
        date: new Date("2024-02-28T15:00:00Z")
      },
      {
        status: "paid",
        date: new Date("2024-02-28T15:10:00Z")
      },
      {
        status: "processing",
        date: new Date("2024-02-29T09:00:00Z")
      },
      {
        status: "shipped",
        date: new Date("2024-03-01T14:00:00Z")
      },
      {
        status: "delivered",
        date: new Date("2024-03-04T10:30:00Z")
      }
    ],
    createdAt: new Date("2024-02-28T15:00:00Z")
  },
  {
    orderNumber: "CMD-2024-0006",
    customerId: "CLT-10008",
    items: [
      {
        productId: db.products.findOne({ sku: "DJE-002" })._id,
        sku: "DJE-002",
        name: "Djellaba Moderne Homme",
        quantity: 1,
        unitPrice: 1200,
        total: 1200
      },
      {
        productId: db.products.findOne({ sku: "TAJ-004" })._id,
        sku: "TAJ-004",
        name: "Tajine en terre cuite décoré",
        quantity: 2,
        unitPrice: 250,
        total: 500
      }
    ],
    totals: {
      subtotal: 1700,
      shipping: 50,
      tax: 340,
      total: 2090
    },
    shipping: {
      method: "CTM Messagerie",
      address: {
        street: "15 Médina Ancienne",
        city: "Fès",
        postalCode: "30100"
      },
      estimatedDelivery: new Date("2024-03-22")
    },
    payment: {
      method: "CMI",
      status: "completed",
      transactionId: "TRX-667788"
    },
    status: "processing",
    statusHistory: [
      {
        status: "pending",
        date: new Date("2024-03-18T16:00:00Z")
      },
      {
        status: "paid",
        date: new Date("2024-03-18T16:15:00Z")
      },
      {
        status: "processing",
        date: new Date("2024-03-19T09:00:00Z")
      }
    ],
    createdAt: new Date("2024-03-18T16:00:00Z")
  }
])

print("✓ 6 commandes insérées dans la collection 'orders'")

// ===================================
// 4. CRÉATION DES INDEX
// ===================================

// Index pour products
db.products.createIndex({ sku: 1 }, { unique: true })
db.products.createIndex({ category: 1 })
db.products.createIndex({ "price.amount": 1 })
db.products.createIndex({ tags: 1 })
db.products.createIndex({ "stock.warehouse": 1, "stock.quantity": 1 })

print("✓ Index créés pour la collection 'products'")

// Index pour customers
db.customers.createIndex({ customerId: 1 }, { unique: true })
db.customers.createIndex({ email: 1 }, { unique: true })
db.customers.createIndex({ "address.city": 1 })
db.customers.createIndex({ loyaltyPoints: -1 })

print("✓ Index créés pour la collection 'customers'")

// Index pour orders
db.orders.createIndex({ orderNumber: 1 }, { unique: true })
db.orders.createIndex({ customerId: 1 })
db.orders.createIndex({ status: 1 })
db.orders.createIndex({ createdAt: -1 })
db.orders.createIndex({ "items.sku": 1 })

print("✓ Index créés pour la collection 'orders'")

// ===================================
// 5. STATISTIQUES
// ===================================

print("\n=== STATISTIQUES DE LA BASE ===")
print(`Nombre de produits : ${db.products.countDocuments()}`)
print(`Nombre de clients : ${db.customers.countDocuments()}`)
print(`Nombre de commandes : ${db.orders.countDocuments()}`)

print("\n=== PRODUITS PAR CATÉGORIE ===")
db.products.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]).forEach(cat => print(`${cat._id}: ${cat.count}`))

print("\n=== COMMANDES PAR STATUT ===")
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
]).forEach(status => print(`${status._id}: ${status.count}`))

print("\n✓ Base de données 'shop_maroc' créée avec succès!")
print("✓ Vous pouvez maintenant exécuter les exercices CRUD")
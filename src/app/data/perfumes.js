const perfumes = [
  {
    id: 1,
    brand: "Chanel",
    name: "Bleu de Chanel",
    price: 19.99,
    oldPrice: 34.99,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    brand: "Dior",
    name: "Sauvage",
    price: 21.99,
    oldPrice: 39.99,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    brand: "Versace",
    name: "Bright Crystal",
    price: 18.50,
    oldPrice: 29.99,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    brand: "Carolina Herrera",
    name: "Good Girl",
    price: 22.00,
    oldPrice: 40.00,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    brand: "Calvin Klein",
    name: "CK One",
    price: 16.00,
    oldPrice: 25.00,
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    brand: "Gucci",
    name: "Guilty",
    price: 19.00,
    oldPrice: 31.00,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    brand: "Montblanc",
    name: "Explorer",
    price: 20.99,
    oldPrice: 33.99,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    brand: "Dior",
    name: "J’adore",
    price: 19.90,
    oldPrice: 36.00,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    brand: "Tom Ford",
    name: "Oud Wood",
    price: 23.00,
    oldPrice: 44.00,
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    brand: "YSL",
    name: "Libre",
    price: 21.50,
    oldPrice: 35.50,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // 10 más para completar los 20:
  {
    id: 11,
    brand: "Marc Jacobs",
    name: "Daisy",
    price: 18.99,
    oldPrice: 30.99,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    brand: "Paco Rabanne",
    name: "Invictus",
    price: 20.00,
    oldPrice: 37.00,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 13,
    brand: "Dolce & Gabbana",
    name: "Light Blue",
    price: 19.00,
    oldPrice: 28.00,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 14,
    brand: "Hugo Boss",
    name: "Boss Bottled",
    price: 16.50,
    oldPrice: 27.50,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 15,
    brand: "Byredo",
    name: "Gypsy Water",
    price: 24.00,
    oldPrice: 49.00,
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 16,
    brand: "Hermès",
    name: "Terre d'Hermès",
    price: 22.99,
    oldPrice: 41.99,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 17,
    brand: "Chanel",
    name: "Chance",
    price: 19.99,
    oldPrice: 34.00,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 18,
    brand: "Maison Margiela",
    name: "Jazz Club",
    price: 23.50,
    oldPrice: 50.00,
    gender: "male",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 19,
    brand: "Jo Malone",
    name: "Wood Sage & Sea Salt",
    price: 21.00,
    oldPrice: 32.00,
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 20,
    brand: "Armani",
    name: "My Way",
    price: 20.50,
    oldPrice: 38.00,
    gender: "female",
    image: "https://images.unsplash.com/photo-1733582140110-331d170bd055?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default perfumes;

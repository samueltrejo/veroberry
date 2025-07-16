import { Product } from "./product";

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Satin Rose Bouquet',
    description: 'Handcrafted bouquet made from high-quality satin roses.',
    price: 24.99,
    category: 'bouquet',
    imageUrl: 'assets/images/rose-bouquet.jpg',
    isFeatured: true,
    variants: [
      { color: 'Red', hexCode: '#D32F2F', inStock: true, imageUrl: 'assets/images/rose-bouquet-red.jpg' },
      { color: 'Pink', hexCode: '#E91E63', inStock: true, imageUrl: 'assets/images/rose-bouquet-pink.jpg' },
      { color: 'White', hexCode: '#FFFFFF', inStock: false, imageUrl: 'assets/images/rose-bouquet-white.jpg' }
    ]
  },
  {
    id: 'prod-002',
    name: 'Single Satin Rose with Stem',
    description: 'Elegant satin rose with a realistic stem, perfect for gifting.',
    price: 5.99,
    category: 'single',
    imageUrl: 'assets/images/single-rose-stem.jpg',
    isFeatured: true,
    variants: [
      { color: 'Red', hexCode: '#C62828', inStock: true, imageUrl: 'assets/images/single-rose-red.jpg' },
      { color: 'Blue', hexCode: '#1565C0', inStock: false, imageUrl: 'assets/images/single-rose-blue.jpg' }
    ]
  },
  {
    id: 'prod-003',
    name: 'Single Satin Rose (No Stem)',
    description: 'Satin rose bloom without the stem, great for DIY projects.',
    price: 3.49,
    category: 'single',
    imageUrl: 'assets/images/rose-no-stem.jpg',
    variants: [
      { color: 'Lavender', hexCode: '#CE93D8', inStock: true, imageUrl: 'assets/images/rose-lavender.jpg' },
      { color: 'Peach', hexCode: '#F8BBD0', inStock: true, imageUrl: 'assets/images/rose-peach.jpg' }
    ]
  },
  {
    id: 'prod-004',
    name: 'Loose Satin Rose Petals',
    description: 'Soft satin petals for romantic setups, weddings, or crafts.',
    price: 9.99,
    category: 'petals',
    imageUrl: 'assets/images/rose-petals.jpg',
    isFeatured: true,
    variants: [
      { color: 'Red', hexCode: '#B71C1C', inStock: true, imageUrl: 'assets/images/rose-petals-red.jpg' },
      { color: 'Gold', hexCode: '#FFD700', inStock: false, imageUrl: 'assets/images/rose-petals-gold.jpg' }
    ]
  },
  {
    id: 'prod-005',
    name: 'Mini Satin Rose Gift Box',
    description: 'A small box with a single satin rose and a heartfelt note.',
    price: 12.99,
    category: 'gift',
    imageUrl: 'assets/images/mini-rose-box.jpg',
    variants: [
      { color: 'White', hexCode: '#FFFFFF', inStock: true, imageUrl: 'assets/images/mini-rose-white.jpg' },
      { color: 'Pink', hexCode: '#F06292', inStock: true, imageUrl: 'assets/images/mini-rose-pink.jpg' }
    ]
  }
];

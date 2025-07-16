import { Review } from "./review";

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'r1',
    productId: 'prod-001',
    userName: 'Emily',
    rating: 5,
    comment: 'Absolutely stunning bouquet. Perfect for my anniversary!',
    createdAt: new Date('2025-07-01')
  },
  {
    id: 'r2',
    productId: 'prod-001',
    userName: 'Jake',
    rating: 4,
    comment: 'Looked great, but I wish the white option was available.',
    createdAt: new Date('2025-07-02')
  },
  {
    id: 'r3',
    productId: 'prod-002',
    userName: 'Ava',
    rating: 5,
    comment: 'The rose with the stem looks so realistic!',
    createdAt: new Date('2025-07-03')
  },
  {
    id: 'r4',
    productId: 'prod-003',
    userName: 'Liam',
    rating: 4,
    comment: 'Worked great for my craft project.',
    createdAt: new Date('2025-07-04')
  },
  {
    id: 'r5',
    productId: 'prod-004',
    userName: 'Sophia',
    rating: 5,
    comment: 'Beautiful petals! Great quality.',
    createdAt: new Date('2025-07-05')
  },
  {
    id: 'r6',
    productId: 'prod-005',
    userName: 'Noah',
    rating: 5,
    comment: 'Girlfriend loved the gift box! Highly recommend.',
    createdAt: new Date('2025-07-06')
  }
];

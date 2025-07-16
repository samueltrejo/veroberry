import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Review } from '../models/review';

import { SAMPLE_PRODUCTS } from '../models/product-data';
import { SAMPLE_REVIEWS } from '../models/review-data';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = SAMPLE_PRODUCTS;
  private reviews: Review[] = SAMPLE_REVIEWS;

  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: string): Product | undefined {
    return this.products.find(p => p.id === productId);
  }

  getReviewsForProduct(productId: string): Review[] {
    return this.reviews.filter(review => review.productId === productId);
  }

  getAverageRating(productId: string): number {
    const productReviews = this.getReviewsForProduct(productId);
    if (productReviews.length === 0) return 0;

    const total = productReviews.reduce((sum, r) => sum + r.rating, 0);
    return parseFloat((total / productReviews.length).toFixed(1));
  }

  getRandomReviews(count: number): Review[] {
    const shuffled = [...this.reviews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  getRandomFeaturedProducts(count: number): Product[] {
    const featured = this.products.filter(p => p.isFeatured);
    const shuffled = [...featured].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}

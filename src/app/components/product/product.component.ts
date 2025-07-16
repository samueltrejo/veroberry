import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Review } from '../../models/review';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, NavbarComponent],
  template: `<app-navbar></app-navbar>
    <div class="product-container container mt-5">
      <div class="row">
        <div class="col-md-6">
          <!-- <img [src]="selectedVariant?.imageUrl || product.imageUrl" class="img-fluid rounded" /> -->
          <img src="assets/placeholder.jpg" class="img-fluid rounded" />
        </div>

        <div class="col-md-6">
          <h2>{{ product.name }}</h2>
          <p class="text-muted">{{ product.description }}</p>
          <p class="price">\${{ product.price.toFixed(2) }}</p>

          <div class="variants mb-3">
            <label class="mb-2 d-block">Select Color:</label>
            <div class="d-flex gap-2">
              <button *ngFor="let variant of product.variants"
                      class="color-dot"
                      [class.selected]="variant === selectedVariant"
                      [style.background]="variant.hexCode"
                      [disabled]="!variant.inStock"
                      (click)="selectVariant(variant)"
                      [title]="variant.inStock ? variant.color : 'Out of stock'">
              </button>
            </div>
          </div>

          <button class="app-btn mt-3" (click)="addToCart()" [disabled]="!selectedVariant?.inStock">
            Add to Cart
          </button>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-8">
          <h4>Leave a Review</h4>
          <form (ngSubmit)="submitReview()" class="review-form">
            <input class="form-control mb-2" placeholder="Your Name" [(ngModel)]="userReview.userName" name="name" required />
            <textarea class="form-control mb-2" placeholder="Your Review" [(ngModel)]="userReview.comment" name="comment" required></textarea>
            <label>Rating:</label>
            <select class="form-control mb-3" [(ngModel)]="userReview.rating" name="rating">
              <option *ngFor="let r of [5, 4, 3, 2, 1]" [value]="r">{{ r }} ★</option>
            </select>
            <button class="app-btn" type="submit">Submit</button>
          </form>
        </div>

        <div class="col-12 col-md-4 mt-4 mt-md-0">
          <h4>Reviews</h4>
          <div *ngIf="reviews.length > 0; else noReviews">
            <div class="review mb-3" *ngFor="let review of reviews">
              <p>“{{ review.comment }}”</p>
              <div class="author">— {{ review.userName }} ({{ review.rating }}★)</div>
            </div>
          </div>
          <ng-template #noReviews><p>No reviews yet.</p></ng-template>
        </div>
      </div>
    </div>

  `,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product!: Product;
  selectedVariant: any;
  reviews: Review[] = [];

  userReview: Partial<Review> = {
    userName: '',
    comment: '',
    rating: 5
  };

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (!productId) return;

    const product = this.productService.getProductById(productId);
    if (product) {
      this.product = product;
      this.selectedVariant = this.product.variants?.[0];
      this.reviews = this.productService.getReviewsForProduct(this.product.id);
    } else {
      console.error('Product not found for ID:', productId);
      // You could redirect or show an error message
    }
  }

  selectVariant(variant: any) {
    this.selectedVariant = variant;
  }

  addToCart() {
    console.log(`Added to cart:`, this.product.name, this.selectedVariant?.color);
    // Add real cart logic here
  }

  submitReview() {
    if (!this.userReview.userName || !this.userReview.comment) return;

    const newReview: Review = {
      productId: this.product.id,
      userName: this.userReview.userName,
      comment: this.userReview.comment,
      rating: this.userReview.rating || 5,
      createdAt: new Date()
    };

    this.reviews.unshift(newReview);
    this.userReview = { userName: '', comment: '', rating: 5 };
    console.log('Review submitted:', newReview);
  }
}

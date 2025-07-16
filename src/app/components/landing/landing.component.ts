import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Review } from '../../models/review';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, FormsModule, NgFor, RouterModule],
  template: `
    <app-navbar></app-navbar>

    <section class="hero container">
      <div class="row">
        <div class="col-12 col-md-5 p-5">
          <h2>Elegant Flower Arrangements</h2>
          <p class="mt-3">Artfully crafted blooms and other gift arrangements delivered to your door with love and care.</p>
          <button routerLink="/shop" routerLinkActive="active" class="app-btn">Shop Now</button>
        </div>
        <div class="col-12 col-md-7 px-0 px-md-5" style="text-align: center; overflow: hidden;">
          <img src="assets/hero.jpg" />
        </div>
      </div>
    </section>

    <section class="store container">
      <div class="products-header mt-5 px-5">
        <h3>Favorites</h3>
      </div>
      <div class="row px-5 mt-5">
        <div class="col-12 col-md-4" *ngFor="let product of products">
          <div class="card border-0 p-3 pb-0 mb-3" (click)="product.id" routerLink="/shop/{{ product.id }}" routerLinkActive="active">
            <!-- <img [src]="product.imageUrl" class="card-img-top" /> -->
            <!-- <img [src]="product.imageUrl || 'assets/placeholder.jpg'" class="product-thumb" /> -->
            <img src="assets/placeholder.jpg" class="product-thumb" />
            <div class="card-body px-0">
              <p>{{ product.name }}</p>
              <!-- <p>{{ product.description }}</p> -->
              <span class="price">\${{ product.price.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3" style="text-align: end;">
        <button class="app-btn me-5" routerLink="/shop" routerLinkActive="active">See More</button>
      </div>
    </section>

    <section class="reviews-section container">
      <div class="products-header mt-5 px-5">
        <h3>Reviews</h3>
        <div class="reviews-grid mt-5">
          <div class="review-card" *ngFor="let review of reviews">
            <p class="review-text">“{{ review.comment }}”</p>
            <div class="review-author">— {{ review.userName }}</div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Veroberry. All rights reserved.</p>
    </footer>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  private productService = inject(ProductService);

  products: Product[] = [];
  reviews: Review[] = [];
  selectedFilter = 'all';

  ngOnInit() {
    this.products = this.productService.getRandomFeaturedProducts(3);
    this.reviews = this.productService.getRandomReviews(3);
    console.log(this.products);
  }
}

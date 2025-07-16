import { Component, inject } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShopMenuComponent } from "../shop-menu/shop-menu.component";

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, FormsModule, NavbarComponent, ShopMenuComponent, RouterModule],
  template: `
    <app-navbar></app-navbar>
    <app-shop-menu></app-shop-menu>

    <div class="container">
      <div class="px-5">
        <section class="products-grid">
          <div class="product-card" *ngFor="let product of products" routerLink="/shop/{{ product.id }}" routerLinkActive="active">
            <!-- <img [src]="product.imageUrl || 'assets/placeholder.jpg'" class="product-thumb" /> -->
            <img src="assets/placeholder.jpg" class="product-thumb" />

            <h3>{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>

            <!-- <div class="price">{{ product.price | currency:product.currency }}</div> -->
            <div class="price">{{ product.price }}</div>

            <!-- Show color variants if any -->
            <!-- <div class="color-variants" *ngIf="product.variants.length > 0">
              <span *ngFor="let variant of product.variants" class="color-dot"
                    [title]="variant.color" style="height: 10px; width: 10px; background-color: {{ variant.hexCode }}; display: inline-block; margin-right: 5px; border-radius: 50%;">
              </span>
            </div> -->

            <!-- (Optional) Show average rating -->
            
            <!-- <div class="rating">
              ⭐ {{ getAverageRating(product.id) }}
            </div> -->
           
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    console.log(this.products);
  }

  // Helper to get hex color — replace with your actual color logic
  getColorHex(color: string): string {
    const map: Record<string, string> = {
      red: '#d32f2f',
      pink: '#e91e63',
      ivory: '#fff8dc',
      blue: '#2196f3',
      yellow: '#ffeb3b',
    };
    return map[color.toLowerCase()] || '#ccc';
  }

  // Optional: display average rating
  getAverageRating(productId: string): number {
    return this.productService.getAverageRating(productId);
  }
}

import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop-menu',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  template: `
    <section class="container">
      <div class="p-5">
        <div class="search-container p-2" [class.expanded]="isExpanded">
          <div class="search-bar">
            <input
              type="text"
              placeholder="Search..."
              [(ngModel)]="searchQuery"
              (keydown.enter)="performSearch()"
            />
    
            <button class="icon-btn ms-1 me-1" (click)="performSearch()" aria-label="Search">
              <i class="bi bi-search icon"></i>
            </button>
    
            <!-- <button class="icon-btn" (click)="toggleFilters()" aria-label="Toggle Filters">
              <i
                class="bi icon caret"
                [ngClass]="{
                  'bi-caret-down-fill': !isExpanded,
                  'bi-caret-up-fill': isExpanded
                }"
              ></i>
            </button> -->
          </div>
    
          <div class="filters" *ngIf="isExpanded">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              lacus sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './shop-menu.component.scss',
})
export class ShopMenuComponent {
  isExpanded = false;
  searchQuery = '';

  toggleFilters() {
    this.isExpanded = !this.isExpanded;
  }

  performSearch() {
    console.log('Search Query:', this.searchQuery);
  }
}

import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="container">
      <div class="navbar px-5 py-3">
        <div class="logo" routerLink="/" routerLinkActive="active">
          <img src="assets/veroberry.svg" />
          <div>veroberry</div>
        </div>

        <button class="menu-toggle d-md-none" (click)="toggleMenu($event)">
          ☰
        </button>

        <nav class="nav-links" [class.show]="showMenu">
          <a routerLink="/" routerLinkActive="active" (click)="closeMenu()">home</a>
          <a routerLink="/shop" routerLinkActive="active" (click)="closeMenu()">shop</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">contact</a>
          <a routerLink="/cart" routerLinkActive="active" (click)="closeMenu()">cart</a>
          <a routerLink="/profile" routerLinkActive="active" (click)="closeMenu()">profile</a>
        </nav>
      </div>
    </header>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenu = false;

  constructor(private eRef: ElementRef) {}

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }
}

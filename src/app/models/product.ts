// export interface Product {
//   id: string;
//   name: string;
//   description?: string;
//   price: number;
//   currency?: string; // default: 'USD'

//   images?: string[]; // URLs or paths
//   thumbnail?: string;

//   category: string; // e.g., 'bouquet', 'stemmed', 'petals', 'clothing', 'gift'
//   tags?: string[]; // e.g., ['valentine', 'handmade', 'satin', 'red']

//   quantityAvailable?: number; // for inventory
//   sku?: string; // stock keeping unit
//   weightInGrams?: number; // for shipping
//   dimensions?: {
//     lengthCm: number;
//     widthCm: number;
//     heightCm: number;
//   };

//   // Optional customization flags
//   customizable?: boolean;
//   options?: ProductOption[];

//   // Metadata
//   createdAt?: Date;
//   updatedAt?: Date;
//   isFeatured?: boolean;
//   isActive?: boolean;
// }

// export interface ProductOption {
//   name: string; // e.g. 'Color', 'Size', 'Stem Type'
//   values: string[]; // e.g. ['Red', 'Pink', 'Ivory'] or ['Small', 'Medium']
//   default?: string;
// }

export interface ProductVariant {
  color: string;
  hexCode: string;
  inStock: boolean;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  variants: ProductVariant[];

  // Metadata
  createdAt?: Date;
  updatedAt?: Date;
  isFeatured?: boolean;
  isActive?: boolean;
}

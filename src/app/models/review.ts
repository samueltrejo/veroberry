export interface Review {
  id?: string;
  productId: string;
  userName: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: Date;
}

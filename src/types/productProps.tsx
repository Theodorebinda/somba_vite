export interface PropsProduct {
  id?: number;
  name: string;
  description?: string;
  price: number;
  quantity?: number;
  variant?: number;
  images: string[];
  tags?: string;
  categoryId?: number;
  sellerId?: number;
  className?: string;
}

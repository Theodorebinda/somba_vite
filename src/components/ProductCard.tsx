import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
      {/* Ajoutez un bouton pour ajouter au panier ici */}
    </div>
  );
};

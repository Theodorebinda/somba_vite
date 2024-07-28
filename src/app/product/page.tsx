'use client'
import React, { useEffect, useState } from 'react';
import {ProductCard} from '../../components/ProductCard';
import { getAllProducts } from '@/pages/api/productApi';

interface ProductListProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

const ProductList: React.FC<ProductListProps> = ( {product} ) => {
    const [products, setProducts] = useState<any[]>([]);
  
    console.log({products});
    
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await getAllProducts();
        setProducts(response.data);
      };
  
      fetchProducts();
    }, []);
  
    if (!Array.isArray(products)) {
      return <div>{"Erreur: Il y'a aucun utilisateur"}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

'use client'
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '@/pages/api/productApi';
import NewArrivages from '@/components/NewArrivage';
import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/components/typography/typography';
import Header from '@/components/Header';

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
    <Container className='pt-20 flex flex-col gap-8'>
      <Header />
      <Typography variant='title-base'>Nouvel Arrivage</Typography>
      <Container className="ml-2 flex flex-wrap gap-5">
      { products.map(product => (
            <NewArrivages
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              price={product.price}
              className={"flex"}
            />
        ))
      }
    </Container>
    </Container>

  );
};

export default ProductList;

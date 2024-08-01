'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProductById } from '@/pages/api/productApi';
import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/components/typography/typography';
import NewArrivages from '@/components/NewArrivage';

const ProductDetails = ({ params } : { params: { id: string } }) => {
  // const router = useRouter();
  const  id  = decodeURIComponent(params.id);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await getProductById(Number(id));
          setProduct(response.data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="pt-20">
      <Typography variant="title-base">{product.name}</Typography>
      <NewArrivages
            id={product.id}
            name={product.name}
            images={product.images}
            price={product.price}
            className={'flex'}
          />
    </Container>
  );
};

export default ProductDetails;

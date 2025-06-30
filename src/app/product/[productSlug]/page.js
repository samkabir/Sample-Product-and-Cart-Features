'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSingleProduct } from '@/api/getSingleProduct';
import SingleProduct from '@/components/Pages/SingleProduct/SingleProduct';

const SingleProductPage = () => {
  const params = useParams();
  const { productSlug } = params;
  const [singleProduct, setSingleProduct] = useState(null);

  const fetchSingleProduct = async () => {
    try {
      const response = await getSingleProduct(productSlug);
      console.log(response);
      if (response.success) {
        setSingleProduct(response.data.data);
      } else {
        console.error('Failed to fetch product:', response.message);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productSlug]);



  return (
    <div>
          {singleProduct ? (
            <SingleProduct product={singleProduct} />
          ) : (
            <div className="text-center text-gray-500">Loading product details...</div>
          )}
    </div>
  );
};

export default SingleProductPage;
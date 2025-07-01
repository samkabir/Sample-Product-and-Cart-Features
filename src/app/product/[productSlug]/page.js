'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSingleProduct } from '@/api/getSingleProduct';
import SingleProduct from '@/components/Pages/SingleProduct/SingleProduct';
import LoadingSkeleton from '@/utils/Loading';

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
            <>
            <div className="text-center text-gray-500">Loading product details...</div>
            <div className="grid grid-cols-12 gap-0 px-4 py-10">
                <div className="col-start-2 col-end-12 w-full">
                  <div className="grid grid-cols-12 gap-1 w-full">
                    <div className='col-span-3'>
                      <LoadingSkeleton type="rectangular" width={300} height={300} />
                    </div>
                    <div className='col-span-5'>
                      <LoadingSkeleton type="rectangular" width={400} height={30} />
                      <LoadingSkeleton type="rectangular" width={400} height={30} />
                      <LoadingSkeleton type="rectangular" width={400} height={30} />
                      <LoadingSkeleton type="rectangular" width={400} height={30} />
                      <LoadingSkeleton type="rectangular" width={400} height={30} />
                    </div>
                    <div className='col-span-4'>
                      <LoadingSkeleton type="rectangular" width={300} height={150} />
                      <LoadingSkeleton type="rectangular" width={300} height={150} />
                    </div>
                    
                  </div>
                </div>
            </div>
            </>
                
          )}
    </div>
  );
};

export default SingleProductPage;
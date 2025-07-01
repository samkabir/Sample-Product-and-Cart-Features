"use client"

import { Button } from "@mui/material";
import GetIcon from "../utils/GetIcon";
import LoadingSkeleton from '../utils/Loading';
import { useSnackbar } from "../context/SnackbarContext";
import CButton from "../components/UI/CButton/CButton";
import { useEffect, useState } from "react";
import { getProducts } from "@/api/getProducts";
import ProductCard from "@/components/UI/ProductCard/ProductCard";

export default function Home() {
  // const { showSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await getProducts();
      console.log(response);
      if (response.success) {
        setProducts(response.data);
      } else {
        console.error('Failed to fetch products:', response.message);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
{/*         
      <p className="text-5xl text-darkRed">asdklhjaskldhjaksldjaklsjdlkas</p>
      <GetIcon name="TrashIcon" className="w-5 h-5 text-darkRed" />


      <LoadingSkeleton type="text" width={300} height={30} lines={3} />
        
        <LoadingSkeleton type="rectangular" width={400} height={150} className="mt-4" />

        <Button variant="contained" color="primary" onClick={() => showSnackbar('Saved!', 'success')}>
        Show Success Snackbar
      </Button>


      <CButton variant="contained" color="primary" onClick={() => showSnackbar('Saved!', 'success')}>
        Show Success Snackbar
      </CButton> */}

     
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((productData, key) => (
              <ProductCard key={key} product={productData} />
            ))
          ) : (
            <LoadingSkeleton type="rectangular" width={300} height={200} />
          )}
        </div>

      </main>
     
    </div>
  );
}

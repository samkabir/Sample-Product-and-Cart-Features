"use client"

import { Button } from "@mui/material";
import GetIcon from "../utils/GetIcon";
import LoadingSkeleton from '../utils/Loading';
import { useSnackbar } from "../context/SnackbarContext";
import CButton from "../components/UI/CButton/CButton";
import { useEffect, useState } from "react";
import { getProducts } from "@/api/getProducts";

export default function Home() {
  const { showSnackbar } = useSnackbar();
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await getProducts();
      console.log(response);
      if (data.success) {
        setProducts(data.data);
      } else {
        console.error('Failed to fetch products:', data.message);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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

        <h1 className="text-4xl font-bold text-center">Welcome to Falcon</h1>
        <p className="text-lg text-gray-600 text-center">
          Experience our new platform & Enjoy existing deals and offers on your day to day
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            ))
          ) : (
            <LoadingSkeleton type="rectangular" width={300} height={200} />
          )}
        </div>

      </main>
     
    </div>
  );
}

'use client';

import Cart from '@/components/Pages/Cart/Cart';
import React, { useEffect, useState } from 'react'

const myCart = () => {
const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
      color: "red",
      size: "M",
      price: 1139,
      originalPrice: 1539,
      quantity: 2,
      image: "/api/placeholder/100/100",
      store: "BD FASHION HOUSE"
    },
    {
      id: 2,
      name: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
      color: "red",
      size: "M",
      price: 1139,
      originalPrice: 1539,
      quantity: 2,
      image: "/api/placeholder/100/100",
      store: "BD FASHION HOUSE"
    },
    {
      id: 3,
      name: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
      color: "red",
      size: "M",
      price: 1139,
      originalPrice: 1539,
      quantity: 2,
      image: "/api/placeholder/100/100",
      store: "BD FASHION HOUSE"
    }
  ]);
  useEffect(() => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    setCartItems(JSON.parse(savedCart));
  }
}, []);
  return (
    <Cart cartItems={cartItems} />
  )
}

export default myCart;
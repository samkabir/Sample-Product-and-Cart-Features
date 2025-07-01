'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart item type definition
const CART_STORAGE_KEY = 'cartItems';

// Cart actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Initial cart state
const initialCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

// Cart reducer
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { item } = action.payload;
      // Check for exact match including variations (color, size, ram, rom)
      const existingItemIndex = state.items.findIndex(cartItem => 
        cartItem.id === item.id 
      );
      
      let updatedItems;
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        updatedItems = state.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add new item
        updatedItems = [...state.items, item];
      }
      
      const totalItems = updatedItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
      const totalPrice = updatedItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice: parseFloat(totalPrice.toFixed(2))
      };
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { id } = action.payload;
      const updatedItems = state.items.filter(item => 
        !(item.id === id )
      );
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice: parseFloat(totalPrice.toFixed(2))
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return cartReducer(state, { 
          type: CART_ACTIONS.REMOVE_ITEM, 
          payload: { id } 
        });
      }
      
      const updatedItems = state.items.map(item =>
        (item.id === id) 
          ? { ...item, quantity } 
          : item
      );
      
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice: parseFloat(totalPrice.toFixed(2))
      };
    }
    
    case CART_ACTIONS.CLEAR_CART:
      return initialCartState;
    
    case CART_ACTIONS.LOAD_CART:
      return action.payload || initialCartState;
    
    default:
      return state;
  }
}

// Create cart context
const CartContext = createContext();

// Cart provider component
export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      }
    } catch (error) {
      console.log('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever cart state changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartState]);

  // Cart actions
  const addToCart = (item) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { item }
    });
  };

  const removeFromCart = (id) => {
    console.log("Removing item with id:", id);
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { id }
    });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { id, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const getItemQuantity = (id, color, size, ram, rom) => {
    const item = cartState.items.find(cartItem => 
      cartItem.id === id
    );
    return item ? item.quantity : 0;
  };

  const isInCart = (id, color, size, ram, rom) => {
    return cartState.items.some(cartItem => 
      cartItem.id === id 
    );
  };

  const getCartItem = (id, color, size, ram, rom) => {
    return cartState.items.find(cartItem => 
      cartItem.id === id 
    );
  };

  const cartValue = {
    ...cartState,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
    isInCart,
    getCartItem
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}

// Export cart actions for external use if needed
export { CART_ACTIONS };
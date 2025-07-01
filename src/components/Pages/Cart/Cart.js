import React, { useState, useEffect } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';

const Cart = ({cartItems}) => {

  

  const [selectedItems, setSelectedItems] = useState(new Set());
  const [couponCode, setCouponCode] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(true);

  // In your actual project, uncomment this to load from localStorage
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cartItems');
  //   if (savedCart) {
  //     setCartItems(JSON.parse(savedCart));
  //   }
  // }, []);

  // In your actual project, uncomment this to save to localStorage
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const toggleSelectItem = (id) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    }
  };

  const clearAll = () => {
    setCartItems([]);
    setSelectedItems(new Set());
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const CartItem = ({ item }) => (
    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={selectedItems.has(item.id)}
          onChange={() => toggleSelectItem(item.id)}
          className="mt-2 w-4 h-4 text-green border-gray-300 rounded focus:ring-green"
        />
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-medium">🏪</span>
          </div>
          <span>{item.store}</span>
          <span className="text-gray-400">›</span>
        </div>
      </div>

      <div className="flex gap-4 ml-6">
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            Color: {item.color}; Size: {item.size}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">{item.quantity.toString().padStart(2, '0')}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-500 p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-right">
          <div className="font-semibold text-lg">৳{item.price}</div>
          <div className="text-sm text-gray-500 line-through">৳{item.originalPrice}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="flex gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">My Cart ({cartItems.length})</h1>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.size === cartItems.length && cartItems.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-green border-gray-300 rounded focus:ring-green"
                  />
                  <span className="text-gray-600">Select All</span>
                </label>
                <button
                  onClick={clearAll}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-80">
          <div className="bg-white rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-6">Order summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Price ({cartItems.length} items)</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping fee</span>
                <span className="text-blue-600">To be added</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Store / Falcon coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                />
                <button className="px-6 py-2 bg-green text-white rounded-lg hover:bg-green font-medium">
                  Apply
                </button>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Sub Total</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-green text-white py-3 rounded-lg font-semibold hover:bg-green mb-4">
              Proceed to Checkout
            </button>

            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 text-green border-gray-300 rounded focus:ring-green"
              />
              <span>
                I have read and agree to the Terms and Conditions,
                Privacy Policy and Refund and Return Policy
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
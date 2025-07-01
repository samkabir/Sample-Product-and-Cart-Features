'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import GetIcon from '@/utils/GetIcon';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import CButton from '@/components/UI/CButton/CButton';
import { useSnackbar } from '@/context/SnackbarContext';

const Cart = () => {
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [cartViewItems, setCartViewItems] = useState([]);
    const [couponCode, setCouponCode] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(true);
    const { items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
    
    const { showSnackbar } = useSnackbar();

    const handleUpdate = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    const removeItem = (id) => {
        removeFromCart(id);
        setSelectedItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
        showSnackbar('Item Removed from Cart!', 'success');
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

    const toggleSelectMerchant = (merchantItems) => {
        const merchantItemIds = merchantItems.map(item => item.id);
        const allMerchantItemsSelected = merchantItemIds.every(id => selectedItems.has(id));
        
        setSelectedItems(prev => {
            const newSet = new Set(prev);
            if (allMerchantItemsSelected) {
                merchantItemIds.forEach(id => newSet.delete(id));
            } else {
                merchantItemIds.forEach(id => newSet.add(id));
            }
            return newSet;
        });
    };

    const isMerchantSelected = (merchantItems) => {
        const merchantItemIds = merchantItems.map(item => item.id);
        return merchantItemIds.length > 0 && merchantItemIds.every(id => selectedItems.has(id));
    };

    const isMerchantPartiallySelected = (merchantItems) => {
        const merchantItemIds = merchantItems.map(item => item.id);
        const selectedMerchantItems = merchantItemIds.filter(id => selectedItems.has(id));
        return selectedMerchantItems.length > 0 && selectedMerchantItems.length < merchantItemIds.length;
    };

    const toggleSelectAll = () => {
        if (selectedItems.size === items.length) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(items.map(item => item.id)));
        }
    };

    const clearAll = () => {
        setSelectedItems(new Set());
    };

    const subtotal = items.reduce((sum, item) => {
        if (selectedItems.has(item.id)) {
            return sum + (item.price * item.quantity);
        }
        return sum;
    }, 0);

    useEffect(() => {
        const groupedByMerchant = Object.values(
            items.reduce((acc, item) => {
                const merchant = item.store;
                if (!acc[merchant]) {
                    acc[merchant] = {
                        merchantName: merchant,
                        merchantItems: [],
                    };
                }
                acc[merchant].merchantItems.push(item);
                return acc;
            }, {})
        );
        setCartViewItems(groupedByMerchant);
    }, [items]);

    useEffect(() => {
        setIsClient(true);
    }, []);


    return (
        <div className="lg:grid grid-cols-12 mx-auto p-4 min-h-screen">
            <div className="col-start-2 col-end-12 gap-4">

                <div className='lg:grid grid-cols-12 gap-4 mb-4'>
                    {/* Cart Items */}
                    <div className="col-span-8 bg-white rounded-lg p-4 fade-in-up">
                        <div className="border-b pb-4">
                            <div className="md:flex items-center justify-between">
                                <h1 className="text-[32px] font-bold text-[#0F172A]">My Cart ({isClient ? totalItems : 0})</h1>
                                <div className="flex items-center gap-1">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.size === items.length && items.length > 0}
                                            onChange={toggleSelectAll}
                                            className="w-4 h-4 text-green border-gray-300 rounded "
                                        />
                                        <span className="text-gray text-sm">Select All</span>
                                    </label>
                                    <CButton
                                        onClick={clearAll}
                                        className="text-gray hover:text-blue-800 text-sm"
                                        text={"Clear All"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-4">
                            {cartViewItems.length === 0 ? (
                                <div className="text-center text-gray-500">
                                    Your cart is empty. Start shopping now!
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {cartViewItems.map((merchant, index) => (
                                        <div key={index} className="mb-6">
                                            <div className="flex items-center gap-2 mb-4 p-3 bg-[#f1f5f9] rounded-lg">
                                                <input
                                                    type="checkbox"
                                                    checked={isMerchantSelected(merchant.merchantItems)}
                                                    ref={input => {
                                                        if (input) {
                                                            input.indeterminate = isMerchantPartiallySelected(merchant.merchantItems);
                                                        }
                                                    }}
                                                    onChange={() => toggleSelectMerchant(merchant.merchantItems)}
                                                    className="w-4 h-4 text-green border-gray-300 rounded focus:ring-green"
                                                />
                                                <div className="h-[24px] w-[24px] flex items-center justify-center">
                                                    <GetIcon name="ShopOutlineIcon" className="w-6 h-6 text-grey" />
                                                </div>
                                                <h2 className="text-sm font-normal text-[#334155]">{merchant.merchantName}</h2>
                                                <div className="text-sm text-gray-500">
                                                    <GetIcon name="ArrowRightIcon" className="w-6 h-6 text-grey" />
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-4 ml-6">
                                                {merchant.merchantItems.map(item => (
                                                    <CartItem
                                                        key={item.id}
                                                        item={item}
                                                        selectedItems={selectedItems}
                                                        setSelectedItems={setSelectedItems}
                                                        toggleSelectItem={toggleSelectItem}
                                                        removeItem={removeItem}
                                                        handleUpdate={handleUpdate}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                    </div>

                    <div className="col-span-4 fade-in-right">
                        <OrderSummary selectedItems={selectedItems} totalItems={totalItems} subtotal={subtotal} couponCode={couponCode} setCouponCode={setCouponCode} agreeToTerms={agreeToTerms} setAgreeToTerms={setAgreeToTerms} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
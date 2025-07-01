'use client';

import GetIcon from '@/utils/GetIcon';
import Image from 'next/image';
import React, { useState } from 'react'

const CartItem = ({ item, selectedItems, setSelectedItems, toggleSelectItem, removeItem, handleUpdate }) => {

  return (
    <div className="flex p-1 mb-4">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={selectedItems.has(item.id)}
          onChange={() => toggleSelectItem(item.id)}
          className="w-4 h-4 text-green border-gray-300 rounded focus:ring-green"
        />
      </div>

      <div className="flex gap-4 ml-6 w-full">
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <Image 
            width={100}
            height={100}
            src={item.image} 
            alt={item.name}
            className="w-[100px] h-[100px] h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-sm text-[#0F172A] mb-2">{item.name}</h3>
          <p className="text-sm text-grey mb-3">
            Color: {item.color}; Size: {item.size}
          </p>

            <div className="mt-2">
                <div className="flex items-center space-x-4 ">
                    <div className="flex items-center justify-between border border-gray-300 h-[40px] rounded-full p-[2px] w-full max-w-[160px]">

                        <div className="w-[36px] h-[33px] rounded-full bg-lighterGrey hover:bg-gray-400 flex items-center justify-center group cursor-pointer" onClick={(e) =>{
                           
                            handleUpdate(item.id, item.quantity - 1)
                        }} >
                            <GetIcon name="MinusIcon" className="w-5 h-5 text-lightGrey group-hover:text-black" />
                        </div>


                        <span className="px-4 py-2 text-center font-bold select-none">
                            {item?.quantity?.toString().padStart(2, '0')}
                        </span>

                        <div className="w-[36px] h-[33px] rounded-full bg-lighterGrey hover:bg-gray-400 flex items-center justify-center group  cursor-pointer" onClick={(e) => 
                            {
                            
                                handleUpdate(item.id, item.quantity + 1)
                        }} >
                            <GetIcon name="PlusIcon" className="w-5 h-5 text-lightGrey group-hover:text-black" />
                        </div>
                    </div>
                    <div className="flex items-center" onClick={() => removeItem(item.id)}>
                        <GetIcon name="TrashIcon" className="w-5 h-5 hover:text-bloodRed text-lightGrey cursor-pointer" />
                    </div>
                </div>
                
            </div>

        </div>

        <div className="text-right">
          <div className="font-semibold text-lg">৳{item.price*item.quantity}</div>
          <div className="text-sm text-gray-500 line-through">৳{item.originalPrice*item.quantity}</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
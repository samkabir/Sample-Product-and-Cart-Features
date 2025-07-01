import React from 'react';
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    // Calculate discount percentage
    const discountPercentage = product.regular_price && product.discount_price
        ? Math.round(((parseFloat(product.regular_price) - parseFloat(product.discount_price)) / parseFloat(product.regular_price)) * 100)
        : 0;

    // Format price with comma separator
    const formatPrice = (price) => {
        return parseFloat(price).toLocaleString('en-BD');
    };

    // Check if product is in stock
    const isInStock = product.available_stock > 0;



    return (
        <Link href={`/product/${product.slug}`} className="no-underline">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border duration-300 overflow-hidden group cursor-pointer" >
                {/* Image Container */}
                <div className="relative overflow-hidden flex justify-center items-center">

                    <Image
                        src={product.thumbnail}
                        alt={product.name}
                        className="sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300 py-2"
                        width={300}
                        height={200}
                        loading="lazy"
                        quality={75}
                        sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw, 33vw"
                        data-testid="product-image"
                    />

                    {/* Discount Badge */}
                    {discountPercentage > 0 && (
                        <div className="absolute top-2 left-2 bg-red text-black px-2 py-1 rounded-md text-xs font-semibold">
                            -{discountPercentage}%
                        </div>
                    )}

                    {/* Product Badges */}
                    {product.badges && product.badges.length > 0 && (
                        <div className="absolute top-2 right-2 space-y-1">
                            {product.badges.map((badge, index) => (
                                <div
                                    key={badge.id || index}
                                    className="bg-green text-black px-2 py-1 rounded-md text-xs font-medium"
                                >
                                    {badge.name}
                                </div>
                            ))}
                        </div>
                    )}


                    {/* Stock Status Overlay */}
                    {!isInStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold">
                                Out of Stock
                            </span>
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                    {/* Product Name */}
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                        {product.name}
                    </h3>



                    {/* Price Section */}
                    <div className="flex items-center mb-3 justify-between">
                        <div className="flex items-center space-x-2">
                            {product.discount_price && parseFloat(product.discount_price) < parseFloat(product.regular_price) ? (
                                <>
                                    <span className="text-lg font-bold text-red-600">
                                        ৳{formatPrice(product.discount_price)}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                        ৳{formatPrice(product.regular_price)}
                                    </span>
                                </>
                            ) : (
                                <span className="text-lg font-bold text-gray-800">
                                    ৳{formatPrice(product.regular_price)}
                                </span>
                            )}
                        </div>
                         {/* Stock Info */}
                        <div className="flex items-center">
                            <span className={`text-xs px-2 py-1 rounded-full ${isInStock
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                {isInStock
                                    ? `${product.available_stock} in stock`
                                    : 'Out of stock'
                                }
                            </span>
                        </div>
                    </div>

                   

                    {/* Variant Indicator */}
                    {product.is_variant && (
                        <div className="mb-4">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                Multiple Variants Available
                            </span>
                        </div>
                    )}


                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
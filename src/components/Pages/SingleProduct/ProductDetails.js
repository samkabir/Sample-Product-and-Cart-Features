import CButton from '@/components/UI/CButton/CButton';
import { useSnackbar } from '@/context/SnackbarContext';
import GetIcon from '@/utils/GetIcon';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
    const [selectedVariation, setSelectedVariation] = useState(product?.variations?.[0] || null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const { showSnackbar, setNumberOfItems } = useSnackbar();

    if (!product) {
        return <div className="p-4">No product data available</div>;
    }

    // Get color and RAM options from variations
    const getUniqueOptions = (attributeName) => {
        const options = new Map();
        product.variations?.forEach(variation => {
            const attr = variation.variation_attributes?.find(
                attr => attr.attribute.name === attributeName
            );
            if (attr) {
                options.set(attr.attribute_option.attribute_value, attr.attribute_option);
            }
        });
        return Array.from(options.values());
    };

    const colorOptions = getUniqueOptions('Color');
    const sizeOptions = getUniqueOptions('Size');
    const ramOptions = getUniqueOptions('Ram');
    const romOptions = getUniqueOptions('Rom');

    // Get selected color and RAM
    const selectedColor = selectedVariation?.variation_attributes?.find(
        attr => attr.attribute.name === 'Color'
    )?.attribute_option.attribute_value;

    const selectedSize = selectedVariation?.variation_attributes?.find(
        attr => attr.attribute.name === 'Size'
    )?.attribute_option.attribute_value;

    const selectedRam = selectedVariation?.variation_attributes?.find(
        attr => attr.attribute.name === 'Ram'
    )?.attribute_option.attribute_value;

    const selectedRom = selectedVariation?.variation_attributes?.find(
        attr => attr.attribute.name === 'Rom'
    )?.attribute_option.attribute_value;

    // Handle variation selection
    const handleAttributeChange = (attributeName, value) => {
        // Map of attribute names to their current selected values
        const selectedAttributes = {
            Color: selectedColor,
            Size: selectedSize,
            Ram: selectedRam,
            Rom: selectedRom,
        };

        // Update the selected value for the changed attribute
        selectedAttributes[attributeName] = value;

        // Find a variation that matches all selected attributes (if set)
        const newVariation = product.variations?.find(variation => {
            return Object.entries(selectedAttributes).every(([attrName, attrValue]) => {
                if (!attrValue) return true;
                return variation.variation_attributes?.some(
                    attr =>
                        attr.attribute.name === attrName &&
                        attr.attribute_option.attribute_value === attrValue
                );
            });
        });

        if (newVariation) {
            setSelectedVariation(newVariation);
        }
    };

    // Color mapping for display
    const getColorClass = (color) => {
        const colorMap = {
            'Blue': 'bg-blue-500',
            'Green': 'bg-green',
            'Black': 'bg-gray-900',
            'Red': 'bg-red',
            'Navy Blue': 'bg-blue-900',
            'Orange': 'bg-orange-500',
            'Yellow': 'bg-yellow',
        };
        return colorMap[color] || 'bg-gray-300';
    };

    // Product images
    const productImages = [
        product.thumbnail,
        ...(product.image ? Object.values(product.image).map(img => img.url) : []),
        selectedVariation?.image
    ].filter(Boolean);

    const currentPrice = selectedVariation?.discount_price || product.product_detail?.discount_price;
    const originalPrice = selectedVariation?.regular_price || product.product_detail?.regular_price;


    // Handle adding to cart
    const handleCartAdd = (product, variation, quantity) => {
        // First, get the 'cartItems' from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Create a new cart item object
        const newCartItem = {
            id: variation.id || product.id,
            name: product.name,
            color: selectedColor || 'N/A',
            size: selectedSize || 'N/A',
            ram: selectedRam || 'N/A',
            rom: selectedRom || 'N/A',
            price: currentPrice,
            originalPrice: originalPrice,
            quantity: quantity,
            image: productImages[selectedImage] || product.thumbnail,
            store: product.merchant?.shop_name || 'Unknown Store'
        };
        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(item => item.id === newCartItem.id);
        if (existingItemIndex > -1) {
            // If it exists, update the quantity
            cartItems[existingItemIndex].quantity += quantity;
            
        } else {
            // If it doesn't exist, add the new item
            cartItems.push(newCartItem);
        }
        setNumberOfItems(prev => prev + quantity);
        // Save the updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Show a success message
        
        showSnackbar('Saved!', 'success');
    };


    return (
        <div className="max-w-7xl mx-auto p-4 lg:px-6 lg:pt-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                {/* Product Images */}
                <div className="lg:col-span-4">
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={productImages[selectedImage] || product.thumbnail}
                                alt={product.name}
                                width={400}
                                height={100}
                                className="object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex space-x-3 overflow-x-auto">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                        }`}
                                >
                                    <Image src={image} width={68} height={68} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="lg:col-span-5 ">
                    {/* Title and Rating */}
                    <div>
                        <h1 className="text-xl font-medium text-black">
                            {product.name}
                        </h1>

                        <div className='flex items-center justify-between mt-2'>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center space-x-1">
                                    <div>
                                        <span className="text-base font-medium text-grey">{product?.rating_avg || 4.7}</span>
                                    </div>
                                    <div className="flex space-x-1 -mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <GetIcon
                                                key={i}
                                                name="StarIcon"
                                                className={`w-5 h-5 ${i < Math.floor(product.rating_avg || 4.7)
                                                    ? 'text-yellow'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <span className="text-gray-500 text-base text-grey">({product.rating_count || '2,254'})</span>
                                    </div>
                                    <div>
                                        <GetIcon name="CheveronDownIcon" className="w-4 h-4 text-gray-500" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="p-2 rounded-lg hover:bg-gray-50"
                                >
                                    {isFavorite ? (
                                        <GetIcon name="HeartFilledIcon" className="w-6 h-6 text-red-500" />
                                    ) : (
                                        <GetIcon name="HeartOutlineIcon" className="w-6 h-6 text-red-500" />
                                    )}
                                </button>
                                <button className="p-2 rounded-lg hover:bg-gray-50">
                                    <GetIcon name="ShareIcon" className="w-6 h-6 text-red-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                            <span className="text-xl font-bold text-green">
                                ৳{parseFloat(currentPrice || 0).toLocaleString()}
                            </span>
                            {originalPrice && parseFloat(originalPrice) > parseFloat(currentPrice) && (
                                <span className="text-base text-lightGrey line-through">
                                    ৳{parseFloat(originalPrice).toLocaleString()}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Promotion */}
                    <div className="flex items-center space-x-2 my-8">
                        <span className="text-sm text-gray-600">Promotion</span>
                        <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded">
                            Min. spend ৳550 ✓
                        </span>
                    </div>

                    {/* Color Selection */}
                    {colorOptions.length>1 &&
                        <div className="mt-2">
                            <h3 className="text-lg font-medium">
                                Available Color: <span className="text-gray-600">{selectedColor}</span>
                            </h3>
                            <div className="flex space-x-3">
                                {colorOptions.length>1 && colorOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAttributeChange('Color', option.attribute_value)}
                                        className={`w-[56px] h-[56px] rounded-lg border-2 ${selectedColor === option.attribute_value
                                            ? 'border-blue-500 ring-2 ring-blue-200'
                                            : 'border-gray-300'
                                            } ${getColorClass(option.attribute_value)}`}
                                        title={option.attribute_value}
                                    />
                                ))}
                            </div>
                        </div>}

                                {/* Size Selection */}
                        {sizeOptions.length > 0 &&
                        <div className="mt-2">
                            <h3 className="text-lg font-medium">
                                Available Size: <span className="text-gray-600">{selectedSize}</span>
                            </h3>
                            <div className="flex space-x-2">
                                {sizeOptions.length > 0 && sizeOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAttributeChange('Size', option.attribute_value)}
                                        className={`w-[40px] h-[40px] border rounded-lg ${selectedSize === option.attribute_value
                                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                            }`}
                                    >
                                        {option.attribute_value}
                                    </button>
                                ))}
                            </div>
                        </div>}

                    {/* RAM Selection */}
                    {ramOptions.length > 0 &&
                        <div className="mt-2">
                            <h3 className="text-lg font-medium">
                                Select RAM: <span className="text-gray-600">{selectedRam}</span>
                            </h3>
                            <div className="flex space-x-2">
                                {ramOptions.length > 0 && ramOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAttributeChange('Ram', option.attribute_value)}
                                        className={`px-4 py-2 border rounded-lg ${selectedRam === option.attribute_value
                                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                            }`}
                                    >
                                        {option.attribute_value}
                                    </button>
                                ))}
                            </div>
                        </div>}
                    {/* ROM Selection */}
                    {romOptions.length > 0 &&
                        <div className="mt-2">
                            <h3 className="text-lg font-medium">
                                Select ROM: <span className="text-gray-600">{selectedRom}</span>
                            </h3>
                            <div className="flex space-x-2">
                                {romOptions.length > 0 && romOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAttributeChange('Rom', option.attribute_value)}
                                        className={`px-4 py-2 border rounded-lg ${selectedRom === option.attribute_value
                                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                            }`}
                                    >
                                        {option.attribute_value}
                                    </button>
                                ))}
                            </div>
                        </div>}

                    {/* Quantity */}
                    <div className="mt-2">
                        <h3 className="text-lg font-medium">Quantity</h3>
                        <div className="flex items-center space-x-4 max-w-[200px]">
                            <div className="flex items-center justify-between border border-gray-300 h-[40px] rounded-full p-[2px] w-full">

                                <div className="w-[33px] h-[33px] rounded-full bg-lighterGrey hover:bg-gray-400 flex items-center justify-center group cursor-pointer" onClick={(e) =>{
                                    e.stopPropagation();
                                    setQuantity(Math.max(1, quantity - 1))
                                }} >
                                    <GetIcon name="MinusIcon" className="w-5 h-5 text-lightGrey group-hover:text-black" />
                                </div>


                                <span className="px-4 py-2 text-center select-none">
                                    {quantity.toString().padStart(2, '0')}
                                </span>

                                <div className="w-[33px] h-[33px] rounded-full bg-lighterGrey hover:bg-gray-400 flex items-center justify-center group  cursor-pointer" onClick={(e) => 
                                    {
                                        e.stopPropagation();
                                        setQuantity(quantity + 1)
                                }} >
                                    <GetIcon name="PlusIcon" className="w-5 h-5 text-lightGrey group-hover:text-black" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6 select-none">
                        <CButton
                            className="w-[70%] justify-center bg-green hover:bg-darkGreen text-white py-3 px-6 rounded-[5px] font-base  transition-colors"
                            text=" Add to Cart"
                            onClick={() => handleCartAdd(product, selectedVariation, quantity)}
                        />
                    </div>
                </div>

                {/* Delivery Options Sidebar */}
                <div className="lg:col-span-3 lg:max-w-sm lg:ml-auto mt-8 lg:mt-0 select-none">
                    <div className="bg-white  rounded-lg  space-y-4">
                        <div className='border border-gray-200 px-3 py-2 rounded-[12px]' >
                            <h3 className="text-lg text-grey font-semibold">Delivery Options</h3>

                            <div className="space-y-2">
                                <div className="flex items-start space-x-3">
                                    <div className="flex items-center justify-center mt-1">
                                        <GetIcon name="PackageIcon" className="w-6 h-6 text-green" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-base text-grey">Regular</div>
                                        <div className="font-normal text-xs text-gray-600">Delivery within 2-3 days</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 ">
                                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-1 opacity-50">
                                        <GetIcon name="PackageMovingIcon" className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-3'>
                                            <div className="text-base font-medium opacity-50">Express</div>
                                            <div className="text-xs font-semibold text-red">Not Available</div>
                                        </div>

                                        <div className="text-xs text-gray-600 opacity-50">Delivery within 24 hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seller Info */}
                        <div className="border border-gray-200 px-3 py-2 rounded-[12px] pt-4 mt-6">
                            <div className="text-xs text-gray-600 mb-2">Sold by</div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Image
                                        // src={product?.brand?.image ? product?.brand?.image :'/images/defaultCompanyImage.png'}
                                        src={'/images/defaultCompanyImage.png'}
                                        alt={'Shop Logo'}
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className='flex items-center'>
                                        <div className="text-sm font-medium">{product.merchant?.shop_name}</div>
                                        <GetIcon name="VerifiedIcon" className="w-4 h-4 text-blue-500 inline-block ml-1" />
                                    </div>
                                    <div className="text-xs bg-orange-500 text-white px-2 py-1 rounded inline-block">
                                        Rising Star
                                    </div>
                                </div>
                                
                            </div>

                            <div className='flex items-center justify-between mt-3 gap-2'>
                                <button className="w-full  text-green py-[6px] rounded-md bg-lightGreen  font-medium hover:bg-green-500 flex items-center justify-center gap-2">
                                    <GetIcon name="ChatOutlineIcon" className="text-green" />
                                    <span className="text-sm" >Chat Now</span>
                                </button>
                                <button className="w-full border border-green-600 text-green-600 py-[6px] bg-[#F1F5F9] rounded-md text-sm font-medium hover:bg-green-500 text-grey">View Shop</button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-0 mt-4 text-center border-t border-gray-200 p-2 rounded-lg">
                                <div>
                                    <div className="text-xs font-normal text-gray">Ship on Time</div>
                                    <div className="text-[24px] font-bold text-[#647488]">100%</div>
                                </div>
                                <div>
                                    <div className="text-xs font-normal text-gray">Chat Response</div>
                                    <div className="text-[24px] font-bold text-[#647488]">90%</div>
                                </div>
                                <div>
                                    <div className="text-xs font-normal text-gray">Shop Rating</div>
                                    <div className="text-[24px] font-bold text-[#647488]">99.8%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
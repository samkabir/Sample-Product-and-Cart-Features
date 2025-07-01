import CButton from '@/components/UI/CButton/CButton';
import GetIcon from '@/utils/GetIcon';
import React, { useState } from 'react';

const ProductSpecification = ({product}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);
    console.log(product);
    return (
        <div className="bg-white p-6 rounded shadow-sm my-5 fade-in-up">
            <h2 className="text-xl font-semibold mb-4">Specification</h2>

            <div className={`relative text-gray-700 ${expanded ? '' : 'max-h-32 overflow-hidden'}`}>
                <p className="">
                    <span className='font-bold'>BRAND:</span> {product?.brand?.name}
                </p>
                <p className="">
                    <span className='font-bold'>SKU:</span> {product?.sku
                        ? product?.sku
                        : 'No SKU Available'}
                </p>
                <p className="">
                    <span className='font-bold'>BARCODE:</span> {product?.barcode
                        ? product?.barcode
                    : 'No Barcode Available'    }
                </p>
                <p className="">
                    <span className='font-bold'>STOCK:</span> {product?.total_stock_qty
                        ? product?.total_stock_qty
                    : 'No Stock Available'  }
                </p>
                
                <p className="">
                    {product?.description}
                </p>

                {(!expanded && product?.description?.length > 100) && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />
                )}
            </div>

            {product?.description?.length > 100 && <div className='flex justify-center'>
                <CButton
                    text="See More"
                    iconRight={expanded ? <GetIcon name="CheveronUpIcon" className="" /> : <GetIcon name="CheveronDownIcon" className="" />}
                    className="mt-2 text-sm font-medium text-gray-600 focus:outline-none"
                    onClick={toggleExpanded}
                />
            </div>}

        </div>
    )
}

export default ProductSpecification
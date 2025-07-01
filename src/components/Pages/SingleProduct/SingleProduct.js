import React from 'react'
import ProductDetails from './ProductDetails'
import ProductDescription from './ProductDescription'
import ProductSpecification from './ProductSpecification'

const SingleProduct = ({ product }) => {
    return (
        <div className=''>
            <div className='bg-white'>
                <ProductDetails product={product} />
            </div>
            <div className="grid grid-cols-12 gap-0 px-4">
                <div className="col-start-2 col-end-12 w-full">
                    <ProductDescription product={product} />
                    <ProductSpecification product={product} />
                </div>
            </div>
        </div>

    )
}

export default SingleProduct
import React from 'react'
import ProductDetails from './ProductDetails'
import ProductDescription from './ProductDescription'
import ProductSpecification from './ProductSpecification'

const SingleProduct = ({ product }) => {
    return (
        <div className="grid grid-cols-12 gap-0 py-24 px-4">
            <div className="col-start-2 col-end-12 w-full">
                <ProductDetails product={product} />
                <ProductDescription product={product} />
                <ProductSpecification product={product} />
            </div>
        </div>
    )
}

export default SingleProduct
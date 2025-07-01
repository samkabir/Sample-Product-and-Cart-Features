import React from 'react'

const OrderSummary = ({selectedItems, totalItems, subtotal, couponCode, setCouponCode, agreeToTerms, setAgreeToTerms}) => {
  return (
    <div className="bg-white rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-6">Order summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Price ({selectedItems.length} items)</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping fee</span>
                <span className="text-blue-600">To be added</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="md:flex gap-2">
                <input
                  type="text"
                  placeholder="Store / Falcon coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 border mb-2 md:mb-0 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
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
                className="w-4 h-4 mt-0.5 border-gray-300 rounded"
              />
              <span>
                I have read and agree to the Terms and Conditions,
                Privacy Policy and Refund and Return Policy
              </span>
            </label>
          </div>
  )
}

export default OrderSummary
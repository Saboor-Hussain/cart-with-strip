"use client"
import React from 'react'

interface ProductProps{
  product: Product;
}

export const Product:React.FC <ProductProps>= ({ product }) => {
  return (
    <div className='border rounded-lg p4 shadow-md'>
      <h2 className='text-lg font-semibold'>{product.name}</h2>
      <p className='text-gray-400'>${product.price.toFixed(2)}</p>
      <button onClick={() => {}} disabled={false} className='rounded focus:outline-none focus:ring2 focus:ring-blue-200 focus:ring-offset-2'>
        {true ? "Added to Cart": "Add to Cart"}
      </button>
    </div>
  )
}

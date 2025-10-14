import React, { useState } from 'react'
import { useParams } from 'react-router'
import useProducts from '../hooks/useProducts'
import { updateList } from '../utils/localStorage'
import RatingsChart from './RatingsChart'

const ProductDetails = () => {
  const { id } = useParams()
  const { products, loading,Downloads } = useProducts()
  const [installed, setInstalled] = useState(false) // ✅ Hook top-level এ থাকতে হবে

  if (loading) return <p>Loading.......</p>

  const product = products.find(p => p.id === Number(id))
  const { image, title, description } = product || {}

  const handleClick = () => {
    setInstalled(!installed) // toggle install/uninstall
    updateList(product)
  }

  return (
    <div>
      <div className='flex bg-base-100 shadow-lg'>
        <div>
          <figure className='h-84 overflow-hidden'>
            <img className='w-full h-100' src={image} alt='Product' />
          </figure>
        </div>

        <div className='p-6'>
          <h1 className='text-3xl font-bold'>SmPlan: {title}</h1>
          <p>Developed by productive.io</p>

          <div className='flex gap-7'>
            <div className='mt-4 text-center'>
              <img src="/src/assets/icon-downloads.png" alt="Downloads" />
              <p>{Downloads}</p>
              <h1 className='text-3xl font-semibold'>8M</h1>
            </div>
            <div className='mt-4 text-center'>
              <img src="/src/assets/icon-ratings.png" alt="Ratings" />
              <p>Ratings</p>
              <h1 className='text-3xl font-semibold'>4.8</h1>
            </div>
            <div className='mt-4 text-center'>
              <img src="/src/assets/icon-review.png" alt="Reviews" />
              <p>Reviews</p>
              <h1 className='text-3xl font-semibold'>25K</h1>
            </div>
          </div>

          <div className='card-actions justify-center mt-4'>
            <button
              onClick={handleClick}
              className={`btn btn-outline text-white ${
                installed ? 'bg-red-500' : 'bg-green-500'
              }`}
            >
              {installed ? 'Uninstall' : 'Install Now'}
            </button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
         <RatingsChart></RatingsChart>
      <h2 className='text-2xl font-bold mt-10'>Description</h2>
      <p className='mt-4'>{description}</p>
      </div>
    </div>
  )
}

export default ProductDetails

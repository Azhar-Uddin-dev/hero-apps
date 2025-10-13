import React from 'react'
import { useParams } from 'react-router'
import useProducts from '../hooks/useProducts'
import { updateList } from '../utils/localStorage'

const ProductDetails = () => {
  const { id } = useParams()
  const { products, loading } = useProducts()

  const product = products.find(p => p.id === Number(id))

  if (loading) return <p>Loading.......</p>

  const { name, image, title, price, description } = product || {}

  //   const handleAddToWishList = () => {
  //     const existingList = JSON.parse(localStorage.getItem('wishlist'))
  //     let updatedList = []
  //     if (existingList) {
  //       const isDuplicate = existingList.some(p => p.id === product.id)
  //       if (isDuplicate) return alert('Sorry vai')
  //       updatedList = [...existingList, product]
  //     } else {
  //       updatedList.push(product)
  //     }
  //     localStorage.setItem('wishlist', JSON.stringify(updatedList))
  //   }

  return (
    <div>
      <div className='flex  bg-base-100  shadow-lg'>
      
      <div>
        <figure className='h-84 overflow-hidden'>
        <img className='w-full h-100' src={image} alt='Shoes' />
      </figure>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold '>SmPlan: {title}</h1>
        <p>Developed by productive.io</p>
        <div className='flex gap-7'>
          <div className='mt-4'>
            <img src="/src/assets/icon-downloads.png" alt="" />
            <p>Downloads</p>
            <h1 className='text-3xl font-semibold'>8M</h1>
          </div>
          <div className='mt-4'>
            <img src="/src/assets/icon-ratings.png" alt="" />
            <p>Ratings</p>
            <h1 className='text-3xl font-semibold'>8M</h1>
          </div>
          <div className='mt-4'>
            <img src="/src/assets/icon-review.png" alt="" />
            <p>Reviews</p>
            <h1 className='text-3xl font-semibold'>8M</h1>
          </div>
          
        </div>
        
        <div className='card-actions justify-center mt-4'>
          <button
            onClick={() => updateList(product)}
            className='btn btn-outline bg-green-500 text-white '
          >
            Install Now 
          </button>
        </div>
        
      </div>
      
    </div>
    <h2 className='text-2xl font-bold mt-10'>Description</h2>
    <p className='mt-10'>{description}</p>
    </div>
  )
}

export default ProductDetails

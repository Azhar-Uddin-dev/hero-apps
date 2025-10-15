import React from 'react'
import { Link } from 'react-router'
import Ratingicon from '../assets/icon-ratings.png'
import Downloadsicon from '../assets/icon-downloads.png'  
const ProductCard = ({ product }) => {
  const { title, image, downloads,  id } = product
  return (
    <div className='card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>

        
       
        <div className='card-actions justify-between items-center mt-4'>
          <Link to={`/product/${id}`} className='flex  gap-40'>
            <div className='flex gap-2 btn'>
              <img className='w-5 h-5' src={Downloadsicon} alt="" />
            <span>{downloads}</span>
            </div>
            <div className='flex gap-2 btn'>
              <img className='w-5 h-5' src={Ratingicon} alt="" />
              <span>5</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

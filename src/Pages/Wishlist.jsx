import React, { useState } from 'react'
import {
   BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import { loadWishlist, removeFromWishlist } from '../utils/localStorage'
import RatingsChart from './RatingsChart'

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => loadWishlist())
  const [sortOrder, setSortOrder] = useState('none')

  if (!wishlist.length) return <p>No Data Available</p>

  const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      return [...wishlist].sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'price-desc') {
      return [...wishlist].sort((a, b) => b.price - a.price)
    } else {
      return wishlist
    }
  })()

  const handleRemove = id => {
    // remove from localstorage
    removeFromWishlist(id)
    // for ui instant update
    setWishlist(prev => prev.filter(p => p.id !== id))
  }

  

  return (
    <div className='space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          
          <span className='text-sm text-gray-500'>
            ({sortedItem.length})  Apps Found.
          </span>
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by price</option>
            <option value='price-asc'>Low-&gt;High</option>
            <option value='price-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className='space-y-3'>
        {sortedItem.map(p => (
          <div key={p.id} className='card card-side bg-base-100 shadow border'>
            <figure>
              <img
                className='w-40 h-28 object-cover'
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{p.name}</h3>
              <p className='text-base-content/70'>{p.companyName}</p>
              <div className='flex '>
                <div className='font-semibold flex gap-4'>
                <div className='flex gap-2 btn'>
              <img className='w-5 h-5' src="/src/assets/icon-downloads.png" alt="" />
            <span>9M</span>
            </div>
            <div className='flex gap-2 btn'>
              <img className='w-5 h-5' src="/src/assets/icon-ratings.png" alt="" />
              <span>5</span>
            </div>

              </div>
              </div>
            </div>
            
            <div className='pr-4 flex items-center gap-3'>
              
              <button
                onClick={() => handleRemove(p.id)}
                className='btn btn-outline bg-blue-500 text-white'
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
<RatingsChart></RatingsChart>
      {/* chart */}
     
    </div>
  )
}

export default Wishlist

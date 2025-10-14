import React from 'react'
import { Link } from 'react-router'
import ProductCard from '../Components/ProductCard'
import useProducts from '../hooks/useProducts'
import SkeletonLoader from '../Components/SkeletonLoader'
import Baner from '../../../../projects/B12-A08-Hero-Apps-1/src/components/Baner/Baner'

const Home = () => {
  const { loading,  products } = useProducts()

  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      <Baner></Baner>
      <div className=' py-5 space-y-2'>
        <h1 className='text-3xl font-semibold text-center'>Trending Apps</h1>
        <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
        
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
       <div className="text-center mt-4">
  <Link className="btn btn-outline bg-[#632EE3] text-white" to="/products">
    See All Products
  </Link>
</div>

    </div>
  )
}

export default Home

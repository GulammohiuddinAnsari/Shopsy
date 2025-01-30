import React from 'react'
import image1 from '../../assets/Products/image1.avif'
import image2 from '../../assets/Products/image2.avif'
import image3 from '../../assets/Products/image3.avif'
import image4 from '../../assets/Products/image4.avif'
import image5 from '../../assets/Products/image5.avif'
import { FaStar } from 'react-icons/fa6';

const ProductsDate = [
  {
    id: 1,
    img: image1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: image2,
    title: "Women Western",
    rating: 5.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: image3,
    title: "Women Historical",
    rating: 5.9,
    color: "Black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: image4,
    title: "Black Beauty",
    rating: 7.0,
    color: "Pink",
    aosDelay: "600",
  },
  {
    id: 5,
    img: image5,
    title: "Gorgeus",
    rating: 8.0,
    color: "Green",
    aosDelay: "800",
  },
]
function Products() {
  return (
    <div className='mb-12'>
      <div className='container'>
        <div className='mb-10 text-center max-w-[650px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-red-400'>Top Selling Products For You</p>
          <h1 data-aos='fade-up' className='font-bold text-3xl underline-offset-auto'>Top Selling Products</h1>
          <p data-aos='fade-up' className='text-xs text-gray-500' >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
            {/* {card section} */}
            {
              ProductsDate.map((data) => (
                <div
                  data-aos='fade-up'
                  data-aos-delay={data.aosDelay}
                  key={data.id} className='space-y-3'>
                  <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                  <div>
                    <h3 className='font-semibold'>{data.title} </h3>
                    <p className='text-sm text-gray-700'>{data.color}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-500'></FaStar>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className='mt-4 text-center' >
        <button  >
          <h4 className='pl-4 pr-4 hover:bg-green-400 bg-yellow-500 text-white rounded-md  '>View More</h4>
        </button>
      </div>
    </div>
  )
}

export default Products

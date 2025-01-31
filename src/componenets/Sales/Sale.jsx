import React from 'react'
import image from '../../assets/Sales/sale.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

function Sale() {
  return (
    <div className='min-h-[500px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
          <div data-aos='zoom-in'>
            <img src={image} alt="" srcset=""
              className='max-w-[400px] h-[350px] w-full max-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
            />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold'> Winter Sale Upto 50% Off</h1>
            <p className=' text-sm text-grey-500 tracking-wide loading-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, rem.
            </p>
            <div className='flex flex-col gap-4'>
              <div data-aos='fade-up' className=' flex items-center gap-4 mb-4'>
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400 ' />
                <p> Quality Products</p>
              </div>
              <div data-aos='fade-up' className=' flex items-center gap-4 mb-4'>
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400 ' />
                <p> Fast Delevery</p>
              </div>
              <div data-aos='fade-up' className=' flex items-center gap-4 mb-4'>
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400 ' />
                <p> Easy Payment Method</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale

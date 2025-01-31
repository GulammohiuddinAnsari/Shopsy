import React from 'react'
import { FaStar } from 'react-icons/fa6'
import image1 from '../../assets/Top Product/casualmen.webp'
import image2 from '../../assets/Top Product/plainshirts.jpg'
import image3 from '../../assets/Top Product/women casual.jpg'
import image4 from '../../assets/Top Product/printed.webp'
import image5 from '../../assets/Top Product/casual.jpg'

const ProductsData = [
    {
        id: 1,
        img: image1,
        title: "Casual Wear",
        description: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id: 2,
        img: image2,
        title: "Men Wear",
        description: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id: 3,
        img: image3,
        title: "Women Wear",
        description: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id: 4,
        img: image4,
        title: "Printed Shirt",
        description: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id: 5,
        img: image5,
        title: "Plain Shirts",
        description: 'Lorem ipsum dolor sit amet consectetur.'

    },
]

function Topproducts() {

    return (
        <div>
            <div className='container'>
                <div className='text-left ml-5 mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-red-400'>Top Rated Products For You</p>
                    <h1 data-aos='fade-up' className='font-bold text-3xl underline-offset-auto'>Best Products</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-000' >Lorem ipsum dolor sit, amet consectetur adipisicing elit.

                    </p>
                </div>
                <div
                    className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'
                >
                    {
                        ProductsData.map((data) => (
                            <div data-aos="zoom-in ">
                                <div
                                    data-aos='fade-up'
                                    data-aos-delay={data.aosDelay}
                                    key={data.id} className='space-y-3'>
                                    <img src={data.img} alt="" className='h-[220px] w-[220px] object-cover rounded-md mx-auto border-2 border-black  mt-10 ' />
                                </div>
                                <div className='text-center'>
                                    <div className='flex items-center justify-center gap-1 mt-4'>
                                        <FaStar className='text-yellow-500'></FaStar>
                                        <FaStar className='text-yellow-500'></FaStar>
                                        <FaStar className='text-yellow-500'></FaStar>
                                        <FaStar className='text-yellow-500'></FaStar>
                                        <FaStar className='text-yellow-500'></FaStar>
                                        <span>{data.rating}</span>
                                    </div>
                                    <h3 className='font-semibold'>{data.title} </h3>
                                    <p className='text-sm text-gray-700'>{data.description}</p>
                                    <button className='bg-orange-400 rounded-full mt-4 hover:scale-105 py-1 px-4 text-white '>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Topproducts

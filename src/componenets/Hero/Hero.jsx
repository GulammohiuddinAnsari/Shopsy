import React from 'react'
import image1 from '../../assets/image3.png'
import image2 from '../../assets/image4.png'
import image3 from '../../assets/women5.png'
import Slider from 'react-slick'

const imagelist = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Men's Wear",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ducimus?"
  },
  {
    id: 2,
    img: image2,
    title: "70% of on all Product Sale",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ducimus?"
  },
  {
    id: 3,
    img: image3,
    title: "Upto 50% off on all Men's Wear",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ducimus?"
  }
 
]
export default function Hero() {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScrool: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "ease-in-out",
    pouseOnHover: false,
    pouseOnFocus: true


  }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center bg-grey-100'>
      <div className='h-[700px] w-[700px] rounded-3xl absolute rotate-45 -z-10 right-[22%] bg-orange-300 -top-[70%] '></div>

      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {imagelist.map((data)=>(
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 transition-shadow'>
              <div className='flex flex-col justify-center gap-4 sm:text-left order-2 sm:order-1 text-center relative z-10'>
                <h1 
                data-aos='zoom-out'
                data-aos-duration='500'
                data-aso-once='true'
                className='text-5xl sm:text-7xl font-bold'>{data.title}</h1>
                <p 
                data-aos='zoom-out'
                data-aos-duration='500'
                data-aso-once='true'
                >
                  {data.description}
                </p>
                <div
                data-aos='zoom-out'
                data-aos-duration='500'
                data-aso-once='true'
                >
                  <button className=' hover:scale-105 text-white rounded-full py-2 px-3 bg-orange-500'>Order Now</button>
                </div>
              </div>
              <div className='order-2 sm:order-1'>
                <div className='relative z-10'>
                  <img src={data.img} alt="image1" className='w-[250px] h-[250px] object-contain mx-auto sm:h-[450px] sm:w-[450px] sm:scale-105'  />
                </div>
              </div>
            </div>
          </div>
          ))}
        </Slider>

        {/* <div>
<a href=""> <img src={logo} alt="" srcset="" /></a> 
</div> */}
      </div>
    </div>
  )
}

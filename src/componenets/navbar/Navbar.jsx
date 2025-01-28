import React from 'react'
import logo from '../../assets/shopsylogo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
const Navbar = () => {
    return (
        <div>
            <div className='bg-orange-300'>
                <div className='container justify-between items-center flex '>
                    <div>
                        <a href="" className='font-bold text-3xl flex gap-2 font-serif justify-center items-center '><img src={logo} alt="logo" className='w-[70px] h-[60px] m-1 border-orange-800 rounded-full ' />Shopsy</a>
                    </div>

                    {/* seacrch bar */}
                    <div className=' justify-between gap-4 flex items-center'>
                        <div className='group relative'>
                            <input type="text" placeholder='Search'
                                className='w-[200px] sm:w-[100px] group-hover:w-[200px] transition-all duration-300 rounded-full border-gray-900 focus:border-orange-600 focus:outline-none focus:border-1 px-2 py-1   '
                            />
                            <IoMdSearch className='absolute text-grey-300 top-1/2 -translate-y-1/2  right-3' />
                        </div>
                    </div>

                    {/* order buttons */}
                    <button onClick={() => alert("Order not yet Available")} className='bg-orange-600 p-2 rounded-full text-white font-bold  flex group'>
                        <span className='group-hover:block hidden'>
                            Order
                        </span>
                        <FaCartShopping className='2xl gap-1' />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar


import React from 'react'
import logo from '../../assets/shopsylogo.png'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10" style={{
      backgroundImage: 'url("your-infrastructure-image-url.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    }}>
      <div className="absolute inset-0 bg-gray-700 opacity-50"></div> {/* Ash-gray overlay */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Shopsy Information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src={logo} alt="" className=' w-[70px] h-[60px] m-1 border-orange-800 rounded-full '/>
            <h2 className="text-2xl font-bold mb-2">Shopsy</h2>
            <p className="text-sm max-w-[450px]">Shop the latest trends, unbeatable prices, and exceptional quality—your one-stop destination for everything!.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 my-4 md:my-0">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <p className="text-sm">Dayal Nagar, Gundlav, Valsad-396035</p>
            <p className="text-sm">+91 (1234) 567-890</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs">&copy; 2025 Shopsy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    )
}

export default Footer

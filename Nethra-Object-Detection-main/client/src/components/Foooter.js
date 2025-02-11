import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content section */}
      <div className="flex-grow">{/* Your main content here */}</div>

      {/* Footer */}
      <footer className="text-white py-10 bg-gradient-to-r from-gray-800 to-black w-full mt-auto">
        <div className="w-full px-4 lg:px-20 py-10 flex flex-col gap-10 md:flex-row justify-between border-t border-gray-700">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-center text-2xl">
             NETHRA<span className="text-green-500 text-2xl"> ai</span>
            </p>
            <p className="mt-2 text-gray-400">
              Discover our Object detection capability
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Quick Links</p>
            <div className="flex flex-col text-start mb-4 md:mb-0 space-y-2">
              <a href="#" className="block md:inline-block hover:text-gray-300">
                Home
              </a>
              <a
                href="#gallery"
                className="block md:inline-block hover:text-gray-300"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block md:inline-block hover:text-gray-300"
              >
                FAQ
              </a>
           
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Legal</p>
            <div className="flex flex-col text-start mb-4 md:mb-0 space-y-2 text-[14px]">
              <a href="#" className="block md:inline-block hover:text-gray-300">
                Terms and Conditions
              </a>
              <a href="#" className="block md:inline-block hover:text-gray-300">
                License Agreement
              </a>
              <a href="#" className="block md:inline-block hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="block md:inline-block hover:text-gray-300">
                Copyright Information
              </a>
              <a href="#" className="block md:inline-block hover:text-gray-300">
                Cookies Policy
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-lg mb-4">Social Media</p>
            <div className="flex mt-4 gap-3">
              <a
                href="https://www.facebook.com/login/"
                className="bg-blue-600 p-2 rounded-full text-white hover:text-gray-500 hover:scale-110 transition-transform"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                className="bg-pink-600 p-2 rounded-full text-white hover:text-gray-500 hover:scale-110 transition-transform"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
                className="bg-blue-600 p-2 rounded-full text-white hover:text-gray-500 hover:scale-110 transition-transform"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.youtube.com/"
                className="bg-red-600 p-2 rounded-full text-white hover:scale-110 transition-transform"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <span className="text-gray-400 leading-10">CodeWave &copy; 2023</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

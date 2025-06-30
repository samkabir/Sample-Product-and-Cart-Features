import React from 'react';
import GetIcon from '@/utils/GetIcon';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
                <div>
                    <GetIcon name={"LogoIcon"} className={""} />
                </div>
                <div className=''>
                    <span className="text-2xl font-bold">FALCON</span>
                </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Experience our new platform & Enjoy existing deals and offers on your day to day
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <GetIcon name="MapPinIcon" className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </span>
              </div>
              
              <div className="flex items-center">
                <GetIcon name="MailIcon" className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">01729-1497201</span>
              </div>
              
              <div className="flex items-center">
                <GetIcon name="PhoneIcon" className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">falcon@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cancellation & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          
          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">My Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          {/* Support & Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Need Support?</h3>
            <div className="mb-6">
              <div className="border border-teal-500 rounded px-3 py-2 inline-block">
                <span className="text-teal-400 text-sm">📞 10724-7814XX</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4">DOWNLOAD APP</h4>
            <div className="space-y-3">
              <a href="#" className="block">
                <img 
                  src="/api/placeholder/140/40" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="/api/placeholder/140/40" 
                  alt="Download on the App Store" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Media and Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm mr-2">Follow us on</span>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span className="text-white text-sm">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span className="text-white text-sm">🐦</span>
              </a>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm mr-4">PAYMENTS ACCEPTED</span>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MC</span>
                </div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AMEX</span>
                </div>
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">bKash</span>
                </div>
                <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">নগদ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Falcon ©2025. Design by Samiul kabir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
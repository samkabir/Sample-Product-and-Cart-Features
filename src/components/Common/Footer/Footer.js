import React from 'react';
import GetIcon from '@/utils/GetIcon';
import Image from 'next/image';

const Footer = () => {
  const HELP = ['Payments', 'Shipping', 'My Orders', 'FAQs', 'Terms of Use', 'Security', 'Privacy'];
  const ABOUT = ['Contact Us', 'About Us', 'Careers', 'Press', 'Cancellation & Returns', 'Terms of Use'];
  const PAYMENTS = ['/images/Badge.png', '/images/Badge (1).png', '/images/Badge (2).png', '/images/Badge (3).png', '/images/Badge (4).png' ]
  return (
    <footer className="bg-[#19192a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
                <div>
                    <GetIcon name={"LogoLargeIcon"} className={"w-12 h-12"} />
                </div>
                <div className=''>
                    <span className="text-[48px] font-bold">FALCON</span>
                </div>
            </div>
            
            <p className="text-white mb-6 text-sm leading-relaxed">
              Experience our new platform & Enjoy existing deals and offers on your day to day
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className='bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center mr-3'>
                  <GetIcon name="MapPinIcon" className="text-[#19192a]" />
                </div>
                <span className="text-gray-300 text-sm">
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </span>
              </div>
              
              <div className="flex items-center">
                <div className='bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center mr-3'>
                  <GetIcon name="PhoneIcon" className="text-[#19192a]" />
                </div>
                <span className="text-gray-300 text-sm">01729-1497201</span>
              </div>
              
              <div className="flex items-center">
                <div className='bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center mr-3'>
                  <GetIcon name="MailIcon" className="text-[#19192a]" />
                </div>
                <span className="text-gray-300 text-sm">falcon@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* About Section */}
          <div className="lg:col-span-3 mt-2">
            <h3 className="text-base mb-4 text-lightGrey">ABOUT</h3>
            <ul className="space-y-2">
              {
                ABOUT.map((item, index) => (
                  <li key={index}><a href="#" className=" text-white text-sm transition-colors">{item}</a></li>
                ))
                }
              
            </ul>
          </div>
          
          {/* Help Section */}
          <div className="lg:col-span-3 mt-2">
            <h3 className="text-base mb-4 text-lightGrey">HELP</h3>
            <ul className="space-y-2">
              {
                HELP.map((item, index) => (
                  <li key={index}><a href="#" className="text-white text-sm transition-colors">{item}</a></li>
                ))
              }
              
            </ul>
          </div>
          
          {/* Support & Download Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg text-lightGrey mb-4">Need Support?</h3>
            <div className="mb-6">
              <div className="flex items-center gap-2 border border-white rounded p-3">
                <GetIcon name="HeadsetIcon" className="text-green w-5 h-5" />
                <span className="text-white text-sm"> 10724-7814XX</span>
              </div>
            </div>
            
            <h4 className="text-lg text-lightGrey mb-4">DOWNLOAD APP</h4>
            <div className="space-y-3">
              <a href="#" className="block">
                <Image
                  width={180}
                  height={54}
                  src="/images/google.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="block">
                 <Image
                  width={180}
                  height={54}
                  src="/images/apple.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Media and Payment Methods */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Social Media */}

            <div className="flex items-center space-x-4">
              <div className=''>
                <span className="text-gray-300 text-sm mr-2">Follow us on</span>
              </div>
              <div className=''>
                <GetIcon name="FacebookIcon" className="w-5 h-5 text-white hover:text-blue-500 transition-colors" />
              </div>
              <div className=''>
                <GetIcon name="InstagramIcon" className="w-6 h-6 text-white hover:text-orange-500 transition-colors" />
              </div>
              <div className=''>
                <GetIcon name="TwitterIcon" className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
              </div>
              
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-lightGrey text-lg">PAYMENTS ACCEPTED</span>
              <div className="flex">
                {
                  PAYMENTS.map((image, index) => (
                    <Image
                      key={index}
                      width={100}
                      height={43}
                      src={image} 
                      alt="Get it on Google Play" 
                      className="w-[65px] h-[43px] object-cover"
                    />
                  ))
                }
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* Copyright */}
        <div className="mt-8 py-6 border border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Falcon ©2025. Design by Samiul kabir
          </p>
        </div>
    </footer>
  );
};

export default Footer;
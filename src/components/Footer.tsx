import React from 'react'
import Image from "next/image";
import { SiGooglemessages } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from 'next/link';

function Footer() {
  return (
   <section>

    <footer className="relative bg-black text-white overflow-hidden">
      
  {/* Background Image */}
    <div
         className="absolute left-0 right-0 top-8 inset-0 bg-center bg-no-repeat bg-contain h-40 w-full"
        style={{
        backgroundImage: "url('Footer.png')",
        }}
      />

  {/* Content */}
        <div className="relative z-10  mx-auto px-6 py-44 h-22 grid grid-cols-1 md:grid-cols-5 gap-10">
    {/* Logo + info */}
           <div>
              <Image
                 src="/Footer-section.svg"
                alt="menu"
                width={20}  
                height={20}
                className=" w-34 h-16 ml-14"
               />
              <p className="flex mt-4 text-sm text-gray-400 ml-12 gap-2.5">
                <span className='text-[18px] text-teal-700 '><SiGooglemessages /></span>
               hello@taibah.com
               </p>
               <p className="flex mt-4 text-sm text-gray-400 ml-12 gap-2.5">
                <span className='text-[18px] text-teal-700 '><FaPhoneAlt /></span>
               +88 01234567890
               </p>
               <p className="flex mt-4 text-sm text-gray-400 ml-12 gap-2.5">
                <span className='text-[12px] text-teal-700 '><IoLocation /></span>
               Dhaka, Bangladesh
               </p>
           </div>

      <div>
        <h4 className="mt-4 text-[14px] font-semibold ml-18">Quick Links</h4>
           <ul className=" text-gray-400 ml-14 gap-2 p-4">
              <li><Link href="#">Live Batch</Link></li>
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">Student Review</Link></li>
              <li><Link href="#">FAQ</Link></li>
           </ul>
      </div>

       <div>
           <h4 className="mt-4 text-[14px] font-semibold ml-18">Legal</h4>
           <ul className="space-y-2 text-gray-400 ml-14 gap-2 p-4">
              <li><Link href="#">Refund Policy</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
               <li><Link href="#">Refund Policy</Link></li>
           </ul>
       </div>

      <div>
           <h4 className="mt-4 text-[14px] font-semibold ml-13">Company</h4>
            <ul className="space-y-2 text-gray-400 ml-9 gap-2 p-4">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Career</Link></li>
             </ul>
       </div>

         <div>
           <h4 className="mt-4 text-[14px] font-semibold ml-1">Connect with Us</h4>
            <div className="flex -ml-3  text-white  gap-3 p-5">
              <a href="http://facebook.com/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
               <IoLogoFacebook />
              </a>
              <a href="https://x.com/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <TiSocialTwitter />
              </a>
              <a href="https://www.linkedin.com/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                 <IoLogoLinkedin />
              </a>
            </div>
         </div>
     </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          © 2025 Taibah Academy. All rights reserved.
      </div>
</footer>
</section>
  )
}

export default Footer
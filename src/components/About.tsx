
import React from 'react'
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function About() {
  return (
    <section>
        <div className='max-w-7xl mx-auto p-5 bg-white'>
            <div className=' px-1 py-1 rounded-lg '>
                <Image
                        src="/image.png"
                        alt="image"
                        width={350}
                        height={350}
                        className="w-full h-[350px] object-cover rounded-lg " 
                    />
            </div>
            <div className='bg-white rounded-xl p-2 mt-4  border-[1.5px] border-gray-300'>
                <h2 className='text-sm text-gray-600 font-bold font-sans p-3'>
                    এই ইভেন্ট সম্পর্কে
                    </h2>
                <div>
                    <p className='text-[13px] text-gray-500 p-3 pt-1'>
                              তাইবাহ একাডেমি কর্তৃক আয়োজিত হতে যাচ্ছে “আল-হেরা ইসলামিক কনফারেন্স
                             ২০২৫”। এই কনফারেন্সে কুরআন, হাদিস, ফিকহ ও আকাইদসহ ইসলামের বিভিন্ন
                             মৌলিক বিষয় নিয়ে আলোচনা করা হবে, যেখানে দেশের শীর্ষস্থানীয় ইসলামিক 
                             স্কলারগণ আধুনিক দাওয়াহ পদ্ধতির সাথে সংমিশ্রণ করে তাদের মূল্যবান মতামত
                             পেশ করবেন।
                    </p>

                    <p className='text-[13px] text-gray-500 p-3 pt-1'>
                             ইসলামিক জ্ঞান শুধুমাত্র পরকালের সাফল্যের পথ দেখায় না, বরং এটি একটি সুন্দর পারিবারিক
                             জীবন, সামাজিক ন্যায়বিচার, ব্যক্তিগত উন্নতি এবং সঠিক নেতৃত্বের জন্য অপরিহার্য। এই 
                             কনফারেন্সের মাধ্যমে, অংশগ্রহণকারীরা জানতে পারবেন কিভাবে ইসলামিক জ্ঞান তাদের
                             আত্মিক উন্নয়ন এবং সমাজকে আলোকিত করতে পারে, কিভাবে দ্বীনের আলোকে দাওয়াহ 
                             কার্যক্রম পরিচালনা করা যায় এবং কিভাবে ইসলামী নীতিগুলোকে বাস্তব জীবনে প্রয়োগ
                             করা যায়।
                    </p>
                    <div className='text-[13px] text-gray-500 p-3 pt-1'>
                           <p className=''>
                              এই কনফারেন্সটিতে যা যা থাকছে:
                            </p>
                            <p className='text-[13px]'>
                                * কুরআন ও সুন্নাহর আলোকে জীবন গড়ার practical টিপস
                            </p>
                            <p className='text-[13px]'>
                               * দৈনন্দিন জীবনে হাদিসের শিক্ষা
                            </p>
                            <p className='text-[13px]'>
                               * ফিকহ ও আকীদার আধুনিক ব্যাখ্যা
                            </p>
                            <p className='text-[13px]'>
                               * কার্যকরী দাওয়াহর মূলনীতি ও পদ্ধতি
                            </p>
                            <p className='text-[13px]'>
                                * উন্নত চরিত্র ও নেতৃত্ব বিষয়ক আলোচনা
                            </p>
                    </div>

                        <p className='text-[13px] text-gray-500 p-3 pt-1'>
                            এই কনফারেন্সে অংশগ্রহণের মাধ্যমে আপনি নতুন জ্ঞান অর্জনের পাশাপাশি দ্বীনের
                             পথে নতুন উদ্যম ও প্রেরণা লাভ করবেন।
                        </p>

                        <p className='text-[13px] text-gray-500 p-3 pt-1'>
                             এই ইভেন্টটি নভোরা কনভেনশন সেন্টার, ঢাকাতে অনুষ্ঠিত হবে।
                        </p>
                        <div className='text-[13px]'>
                           <p className='text-[13px] text-gray-500 p-1.5 pt-1'>
                              আমাদের প্রধান লক্ষ্য:
                           </p >
                            <p className='pt-0 text-[13px] text-gray-500'>
                              * কুরআন ও সুন্নাহর আলোকে একটি আলোকিত প্রজন্ম তৈরি করা, 
                              যারা সমাজে ইতিবাচক পরিবর্তন আনতে সক্ষম।  
                            </p>
                        </div>
                        <p className='text-[13px] text-gray-500 p-1.5'>

                            সীমিত আসন। আজই আপনার রেজিস্ট্রেশন সম্পন্ন করুন।
                        </p>
                </div> 
            </div>
            {/* Location contract */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {/* card location */}
                <div className=" gap-3 p-5 border-[1.5px] border-gray-300 rounded-xl ">
                    <div className='text-sm text-gray-600 font-bold font-sans '>
                       <p className=''> অবস্থান</p>
                    </div>
                    <div className='flex mt-2'> 
                         <span className='p-2 text-[14px] text-cyan-600'> <IoLocationOutline /> </span>
                        <p className='text-[13px] mt-1.5 text-gray-500'>
                            সবুজ ভ্যালি কমিউনিটি গার্ডেন, ১২৩ গার্ডেন লেন, <span className=''>স্প্রিংফিল্ড, সিএ ৯৪১০২</span>
                        </p>
                    </div>
                </div>
                <div className="p-5 border-[1.5px] border-gray-300 rounded-xl ">
                    <div className='text-sm text-gray-600 font-bold font-sans '>
                       <p className=''> যোগাযোগ</p>
                    </div>
                    <div className='flex'>
                        <span className='p-2 text-[14px] mt-1 text-cyan-600'> <FaPhoneAlt /></span>
                        <p className='text-[13px] text-gray-500 p-1.5'>(৫৫৫) ১২৩-৪৫৬৭</p>
                    </div>
                    <div className='flex'>
                        <span className='p-2 text-[16px] text-cyan-600'> <SiGooglemessages /></span>
                        <p className='text-[13px] text-gray-500 p-1'>
                            sarah.johnson@volunteerhub.org
                        </p>
                    </div>
                </div>
             </div>
             <div className='bg-white rounded-xl p-2 mt-4  border-[1.5px] border-gray-300'>
                <div className='flex gap-1.5 text-sm text-gray-600 font-bold font-sans p-3'>
                    <h3 className='mt-1 text-cyan-600'><PiStudent /></h3>
                    <p className='mt-0 text-sm text-gray-600'>মোট আসন</p>
                </div>
                <div className='flex p-2'>
                    <p className='text-[13px]  text-gray-500'>১৮ জন সাইন আপ করা হয়েছে</p>
                    <p className='text-[16px] mt-1 text-gray-500'><LuDot /></p>
                    <p className='text-[13px] mt-0.5 text-cyan-600'>৭টি স্থান অবশিষ্ট</p>
                </div>
             </div>
             <div className=' grid grid-cols-1 md:grid-cols-2 gap-3 mt-4'>
                <div className='gap-3 mt-1.5 border-[1.5px] border-cyan-800 rounded-lg m-1 '>
                    <div className=''>
                        <Button variant="ghost" className='w-[100%]  text-center  w-ful
                         bg-white text-[12px] text-gray-500 font-bold hover:bg-white 
                          font-sans  hover:text-white-600'>
                            <a href='#'><Link href="#">ইভেন্ট শেয়ার করুন</Link></a>
                                 
                       </Button>
                    </div>
                </div>
                <div className='gap-3 mt-1   rounded-lg'>
                    <div className='mt-2'>
                        <Button variant="ghost" className='
                        disabled:cursor-not-allowed
                         w-[100%]
                         bg-cyan-600 text-[12px]
                         text-white font-bold
                         hover:bg-cyan-600
                         cursor-pointer  
                          font-sans rounded-sm hover:text-white-600'
                          >
                            w-full
                {/* bg-white
                text-gray-600
                border-[1.5px]
                border-teal-800
                mt-4
                hover:bg-white
                hover:text-gray-600
                hover:border-gray-600
                cursor-pointer */}
                                 <Link href="#">এখনই রেজিস্ট্রেশন করুন </Link>
                       </Button>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default About
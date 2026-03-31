import React from 'react'
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsRecord2 } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi";
import { MdEventSeat } from "react-icons/md";
// import { GrFormNextLink } from "react-icons/gr";
import { BsRecordFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";
import { FaFlagUsa } from "react-icons/fa6";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { IoPlay } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { ImBook } from "react-icons/im";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"; 
import Link from 'next/link';


function SideBar() {
  return (
 <section>
    <div className="max-w-4xl mx-auto p-4 bg-white">
        <div className="grid md:grid-cols-3 gap-3">
            <div className=" px-1 py-1 rounded-2xl bg-gray-100 border-gray-300  flex justify-center md:justify-start">
                <Image
                    src="/Profile Image.jpg"
                    alt="Profile Image"
                    width={300}
                    height={300}
                    className="w-full  rounded-xl" 
                />
               </div>
                <div className= " col-span-2 rounded-2xl  bg-gray-100 border-gray-300  p-1 space-y-1">
                    <div className="rounded-lg bg-white  border p-3 border-gray-200 py-2">
                        <h2 className="text-sm font-bold">শায়খ মোহাম্মদ আরিফুল হক</h2>
                        <p className="text-sm font-sans text-gray-600  py-2 ">
                        সিনিয়র কুরআন ও তাজবিদ ইন্সট্রাক্টর
                       </p>
                    </div>
                    <div className='rounded-lg border-1 overflow-hidden bg-white border-gray-200'>
                        <div className="  border-b border-gray-200 p-4">
                             <div className='text-xs font-bold text-gray-700'>
                                <p>স্নাতক, কিরআত ও তাজবিদ,
                                   <span className=' text-xs font-sans font-normal text-gray-600'>মাদানী বিশ্ববিদ্যালয়, মদিনাহ</span>
                                </p>
                             </div>
                        </div>
                        <div className=" border-b border-gray-200  p-4">
                            <div className='text-xs font-bold text-gray-700'>
                                 দাওয়াহ, ইসলামী ফিকহ ও উসূল, 
                                <span className=' text-xs font-sans font-normal text-gray-600'>দারুল উলুম দেওবন্দ</span>
                            </div>
                        </div>
                        <div className="rounded-lg  p-4">
                            <div className='text-xs font-bold text-gray-700'>
                                উচ্চতর সনদ, তাজবিদ ও ক্বিরাআত,
                                <span className=' font-normal font-sans text-xs text-gray-600'>রিয়াদ কিরাআত ইনস্টিটিউট</span>
                            </div>
                        </div>
                </div>

                        

                <div className="flex bg-white gap-4 rounded-lg border p-3 border-gray-200">
                    <a href="#" className="hover:text-blue-800 text-2xl">
                       <IoLogoFacebook />
                    </a>
                    <a href="#" className="hover:text-sky-800 text-2xl">
                       <TiSocialTwitter />
                    </a>
                    <a href="#" className="hover:text-blue-800 text-2xl">
                       <IoLogoLinkedin />
                    </a>
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-3  mt-4  rounded-2xl border bg-gray-100 border-gray-200">
            <div className=' p-1   px-0.75 py-0.75 '>
                <div className="bg-white rounded-xl gap-x-0.5   p-1 text-center  border border-gray-200">
                    <h3 className="text-base font-bold ">১২+ বছর</h3>
                    <p className= "font-sans text-gray-600 text-sm py-2">শিক্ষা অভিজ্ঞতা</p>
                </div>
            </div> 

            <div className=' -mx-0.5 p-1 space-y-0.5 gap-x-0.5 space-x-0.5 px-0.75 py-0.75'>
                <div className="bg-white rounded-xl   p-1 text-center  border  border-gray-100">
                    <h3 className="text-base font-bold">৫,০০০+</h3>
                    <p className="font-sans text-gray-600 text-sm py-2">শিক্ষার্থী প্রশিক্ষণ</p>
                </div>
            </div>

            <div className=' p-1 space-y-0.5 gap-x-0.5 space-x-0.5 px-0.75 py-0.75'>
                <div className=" bg-white rounded-xl  p-1 text-center  border  border-gray-100">
                    <h3 className="text-base font-bold">৩০+</h3>
                    <p className="font-sans text-gray-600 text-sm py-2">আন্তর্জাতিক সনদ</p>
                </div>
            </div>
        </div>
               

        <div className='grid gap-x-0  mt-4  rounded-2xl border bg-gray-100 border-gray-100'>
                
            <div className=" rounded-xl  p-1 ">
                <div className='bg-white rounded-xl border  border-gray-200 '>
                    <h3 className="text-sm font-bold font-sans p-3 ">পরিচয় ও শিক্ষাদর্শন</h3>
                    <p className="font-sans pt-0 text-gray-600 leading-relaxed text-xs p-3">
                         আমি শায়খ মোহাম্মদ আরিফুল হক। কিরাআত, তাজবিদ ও ইসলামী ফিকহ অধ্যয়ন ও
                         শিক্ষাদান—এ দুটিই আমার জীবনের বড় অংশ আলহামদুলিল্লাহ। গত ১২+ বছর ধরে 
                         দেশের ভিতরে ও বিদেশের বিভিন্ন প্রতিষ্ঠানে কুরআন শিক্ষা দেওয়ার সুযোগ পেয়েছি।
                         এই অভিজ্ঞতা আমাকে আরও বিনয়ী, দায়িত্বশীল এবং শিক্ষার্থীদের প্রতি মনোযোগী 
                         হতে শিখিয়েছে।
                    </p>

                    <p className='pt-0 font-sans text-gray-600 leading-relaxed text-xs  p-3'>
                        
                        আমি বিশ্বাস করি, কুরআন শেখা শুধু একটি বিষয় নয়—এটি একজন মুসলিমের জীবনে
                        পরিবর্তনের সূত্রপাত। তাই শিক্ষার্থীদের সাথে আমার সম্পর্ক শুধু শিক্ষক-শিক্ষার্থী নয়; বরং
                        একজন পথপ্রদর্শক হিসেবে তাদের মানসিক প্রস্তুতি, উচ্চারণ, ধ্বনি, এবং আধ্যাত্মিক
                        উপলব্ধি—সবকিছুতে সহায়তা করার চেষ্টা করি।
                    </p>
                    <p className='pt-0 font-sans text-gray-600 leading-relaxed text-xs p-3'> 
                        আমার লক্ষ্য হচ্ছে শুদ্ধ তাজবিদ, হৃদয়ছোঁয়া তিলাওয়াত এবং কুরআনকে জীবনে বাস্তবায়নের
                        সহজ-বোধ্য পথ সবার সামনে তুলে ধরা। আমার কাছে শেখানো মানে—শুধু জ্ঞান দেওয়া নয়;
                        বরং কুরআনের সাথে শিক্ষার্থীর আত্মিক সংযোগ গড়ে তুলতে সাহায্য করা।
                    </p>
                </div>
            </div>
        </div>

        <div className=' grid mt-4  rounded-2xl border p-1  bg-gray-100 border-gray-200'>
            <div className='bg-white rounded-xl p-2 border '>
                <h2 className="text-sm font-bold font-sans p-3 ">রচিত বইসমূহ</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1 gap-3 '>
                          {/* <!-- Image --> */}
                    <div className="max-w-xs rounded-xl  p-1 border border-gray-200 bg-gray-100">
                        <div className="  relative bg-gray-100 rounded-xl">
                            <Image
                                src="/Book Cover-2.png"
                                alt="Book Cover-2"
                                width={250}
                                height={300}
                                className="w-full h-full rounded-lg " 
                            />
                                      {/* Badge */}
                            <span className="absolute top-2 right-2  border-2 border-gray-100 bg-white flex 
                               items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                <Badge variant='default'   className=" m-0 p-0 rounded-none border-0 ">
                                   <ImBook /> 
                                </Badge>
                                 হার্ড কপি        
                            </span>
                        </div>
                               {/* Content */}
                        <div className=' bg-white max-w-xs rounded-lg p-2.5 mt-1 border
                            border-gray-200'>
                            <h3 className="text-xs   font-bold font-sans text-gray-700 ">
                                ইসলামে পর্দা গুরুত্বর এবং শর'ঈ <p className='mt-1.5'>নীতিমালা</p>
                             </h3>

                            <p className=" mt-2 font-sans text-gray-600 leading-relaxed text-[11px]">
                                 প্রফেসর ড. মোহাম্মদ মানজুরুল হক
                             </p>

                                        {/* Price + Button */}
                            <div className="mt-3 flex items-center justify-between p-0">
                                <div className="flex items-center  gap-1">
                                      <span className="text-sm font-bold font-sans text-gray-600">৳১২০</span>
                                      <span className="text-sm line-through text-gray-400">৳২৪০</span>
                                 </div>

                                    <Button variant="ghost" className=' bg-gray-100 text-[8px] text-gray-600 font-bold 
                                       px-1.5 h-6 py-0 font-sans rounded-sm '>
                                           <Link href="#">কার্টে যোগ করুন</Link>
                                     </Button>
                             </div>
                        </div>
                    </div>
                           {/* Image Book Cover-4 */}
                    <div className="max-w-xs rounded-xl  p-1 border border-gray-200 bg-gray-100">
                        <div className="  relative bg-gray-100 rounded-xl">
                            <Image
                                src="/Book Cover-4.png"
                                alt="Book Cover-2"
                                width={250}
                                height={300}
                                className="w-full h-full rounded-lg " 
                            />
                                      {/* Badge */}
                            <span className="absolute top-2 right-2  border-2 border-gray-100 bg-white flex 
                                 items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                               <Badge variant="default"   className=" m-0 p-0 rounded-none border-0 ">
                                    <ImBook /> 
                               </Badge>
                                   হার্ড কপি        
                            </span>
                        </div>
                               {/* Content */}
                        <div className=' bg-white max-w-xs rounded-lg p-2.5 mt-1 border
                             border-gray-200'>
                            <h3 className="text-xs   font-bold font-sans text-gray-700 ">
                                ফিকহুল  মু‘আমালাত  আল-মালিয়্যাহ
                            </h3>
                            <p className=" p-3 pl-0 mt-2 font-sans text-gray-600 leading-relaxed text-[11px]">
                               প্রফেসর ড. মোহাম্মদ মানজুরে ইলাহী
                            </p>

                                  {/* Price + Button */}
                            <div className="mt-3 flex items-center justify-between p-0">
                                 <div className="flex items-center  gap-1">
                                    <span className="text-sm font-bold font-sans text-gray-600">৳১২০</span>
                                    <span className="text-sm line-through text-gray-400">৳২৪০</span>
                                </div>

                                 <Button variant="ghost" className=' bg-gray-100 text-[8px] text-gray-600 font-bold 
                                       px-1.5 h-6 py-0 font-sans rounded-sm  '>
                                         <Link href="#">কার্টে যোগ করুন</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                         {/* image Book Cover */}
                    <div className="max-w-xs rounded-xl  p-1 border border-gray-200 bg-gray-100">
                        <div className="  relative bg-gray-100 rounded-xl">
                            <Image
                                src="/Book Cover.png"
                                alt="Book Cover-2"
                                 width={250}
                                 height={300}
                                 className="w-full h-full rounded-lg " 
                               />
                                      {/* Badge */}
                            <span className="absolute top-2 right-2  border-2 border-gray-100 bg-white flex 
                                  items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                <Badge variant='default'   className=" m-0 p-0 rounded-none border-0 ">
                                   <ImBook /> 
                                </Badge>
                                     পিডিএফ       
                            </span>
                            </div>
                                     {/* Content */}
                            <div className=' bg-white max-w-xs rounded-lg p-2.5 mt-1 border
                                    border-gray-200'>
                                <div className=" ">
                                    <h3 className="text-xs   font-bold font-sans text-gray-700 ">
                                           ফিকহুত তাহারাত
                                    </h3>

                                    <p className=" pl-0 mt-2 p-3 font-sans text-gray-600 leading-relaxed text-[11px]">
                                             প্রফেসর ড. মোহাম্মদ মানজুরে ইলাহী
                                    </p>
                                              {/* Price + Button */}
                                    <div className="mt-3 flex items-center justify-between p-0">
                                        <div className="flex items-center  gap-1">
                                            <span className="text-sm font-bold font-sans text-gray-600">৳১২০</span>
                                            <span className="text-sm line-through text-gray-400">৳২৪০</span>
                                        </div>

                                           <Button variant="ghost" className=' bg-gray-100 text-[8px] text-gray-600 font-bold 
                                               px-1.5 h-6 py-0 font-sans rounded-sm  '>
                                                  <Link href="#">কার্টে যোগ করুন</Link>
                                            </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' grid mt-4  rounded-2xl border p-1  bg-gray-100 border-gray-200'>
                <div className='bg-white rounded-xl p-2 border '>
                     <h2 className="text-sm font-bold font-sans p-3 ">তাইবাহ একাডেমিতে  কোর্সসমূহ</h2>
                    <div className=' grid  md:grid-cols-2 p-1 gap-3 '>
                         {/* <!-- Image --> */}
                        <div className="max-w-2xl rounded-xl  p-1 border border-gray-200 bg-gray-100">
                            <div className="  relative bg-gray-100 rounded-xl">
                                <Image
                                     src="/Thumbnail.png"
                                     alt="Book Cover-2"
                                     width={350}
                                     height={350}
                                     className="w-full  rounded-lg " 
                                />
                                <span className="absolute top-2 right-2  border-2 border-gray-100 bg-white flex 
                                  items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                <Badge variant='default'   className=" bg-red-700 m-0 p-0 rounded-2xl border-0 ">
                                   <BsRecord2 />
                                </Badge>
                                     রেকর্ডেড কোর্স       
                                </span>
                            </div>
                               {/* Content */}
                                
                            <div className=' bg-white  rounded-lg p-2.5 mt-1 border
                                    border-gray-200'>
                                <div className="flex bg-white gap-3  p-2 border-gray-200">
                                    <span className=" mt-0 top-2 right-2  border-2 border-gray-100 bg-gray-100 flex 
                                         items-center gap-1.5 ma-0 text-gray-700  px-1  rounded-md text-[9px] ">
                                         <Badge variant='default'   className="m-0 bg-white text-green-800 p-0 rounded-2xl border-0 ">
                                            <PiStudentDuotone />
                                          </Badge>
                                               ব্যাচ ২২      
                                            </span>
                                           <span className=" top-2 right-2  border-2 border-gray-100 bg-gray-100 flex 
                                              items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                              <Badge variant='default'   className=" bg-white text-green-800 m-0 p-0 rounded-2xl border-0 ">
                                               <MdEventSeat />
                                              </Badge>
                                               ৩৬ সিট বাকি      
                                            </span>
                                            <span className=" top-2 right-2  border-2 border-gray-100 bg-gray-100 flex 
                                              items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                              <Badge variant='default'   className="bg-white text-green-800  m-0 p-0 rounded-2xl border-0 ">
                                               <MdOutlineTimer />
                                              </Badge>
                                               ২ দিন বাকি      
                                            </span>
                                </div>
                                <div className="p-2 ">
                                    <h3 className="text-xs   font-bold font-sans text-gray-700 ">
                                        সহীহ হাদীসের প্রাথমিক পাঠ ও মুখস্থ শিক্ষা
                                    </h3>

                                    <p className=" line-clamp-2 pl-0 mt-2 p-3 font-sans text-gray-600 leading-relaxed text-[11px]">
                                        এই কোর্সে শিক্ষার্থীরা সহীহ হাদীসের বাছাইকৃত অংশ ধাপে ধাপে শিখবে ও মুখস্থ করবে। প্রতিটি 
                                         হাদীস সহজ ভাষায় ব্যাখ্যা করা হবে এবং জীবনের...
                                    </p>
                                              {/* Price + Button */}
                                    <div className="w-full p-0">
                                           <Button variant="ghost" className=' w-full bg-gray-100 text-[12px] text-gray-600 font-bold 
                                               px-1.5  py-0 font-sans rounded-sm  '>
                                                  <Link href="#">বিস্তারিত দেখি</Link>
                                                 <GrLinkNext  className='text-2xl' />
                                            </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* <!-- Image --> */}
                        <div className="max-w-2xl rounded-xl  p-1 border border-gray-200 bg-gray-100">
                            <div className="  relative bg-gray-100 rounded-xl">
                                <Image
                                     src="/Thumbnail-2.png"
                                     alt="Book Cover-2"
                                     width={250}
                                     height={300}
                                     className="w-full h-full rounded-lg " 
                                />
                                <span className="absolute top-2 right-2  border-2 border-gray-100 bg-white flex 
                                  items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                <Badge variant='default'   className=" bg-red-700 m-0 p-0 rounded-2xl border-0 ">
                                   <BsRecordFill />
                                </Badge>
                                     লাইভ কোর্স       
                                </span>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                                       <IoPlay className='text-green-800 cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                              {/* Content */}
                                
                            <div className=' bg-white  rounded-lg p-2.5 mt-1 border
                                    border-gray-200'>
                                <div className="flex bg-white gap-3  p-2 border-gray-200">
                                    <span className=" mt-0 top-2 right-2  border-2 border-gray-100 bg-gray-100 flex 
                                         items-center gap-1.5 ma-0 text-gray-700  px-1  rounded-md text-[9px] ">
                                         <Badge variant='default'   className="m-0 bg-white text-green-800 p-0 rounded-2xl border-0 ">
                                            <PiStudentDuotone />
                                          </Badge>
                                               ব্যাচ ২২      
                                            </span>
                                           <span className=" top-2 right-2  border-2 border-gray-100 bg-gray-100 flex 
                                              items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                              <Badge variant='default'   className=" bg-white text-green-800 m-0 p-0 rounded-2xl border-0 ">
                                               <MdEventSeat />
                                              </Badge>
                                               ৩৬ সিট বাকি      
                                            </span>
                                            <span className=" top-2 right-2  border-2 border-gray-100 bg-gray-100 flex 
                                              items-center gap-1.5 ma-1 text-gray-700  px-1 py-1 rounded-md text-[9px] ">
                                              <Badge variant='default'   className="bg-white text-green-800  m-0 p-0 rounded-2xl border-0 ">
                                               <MdOutlineTimer />
                                              </Badge>
                                               ২ দিন বাকি      
                                            </span>
                                </div>
                                <div className="p-2 ">
                                    <h3 className="text-xs   font-bold font-sans text-gray-700 ">
                                       হাদীসের আলোকে ইসলামী আদব ও আখলাক
                                    </h3>

                                    <p className="  line-clamp-2 pl-0 mt-2 p-3 font-sans text-gray-600 leading-relaxed text-[11px]">
                                        মুসলিম জীবনের সৌন্দর্য নিহিত রয়েছে আদব ও আখলাকে। এই কোর্সে হাদীসের আলোকে
                                         পরিবারে আচরণ, সামাজিক সম্পর্ক, দায়িত্ববোধ এবং...
                                    </p>
                                              {/* Price + Button */}
                                    <div className="w-full p-0">
                                           <Button variant="ghost" className=' w-full bg-gray-100 text-[12px] text-gray-600 font-bold 
                                               px-1.5  py-0 font-sans rounded-sm  '>
                                                 <Link href="#">বিস্তারিত দেখি</Link>
                                                 <GrLinkNext  className='text-2xl' />
                                            </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className=' grid mt-4  rounded-2xl border p-1  bg-gray-100 border-gray-200'>
           <div className='bg-white rounded-xl p-2 border '>
            <h2 className="text-sm text-gray-700 font-bold font-sans p-3 ">জ্ঞান ও দাওয়াহ বিষয়ক লেখাসমূহ</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1 gap-3 '>
                    <div className=" rounded-lg ">
                        <div className=" bg-gray-100 rounded-lg">
                            <Image
                                src="/Generated-Image.png"
                                alt="Book Cover-2"
                                 width={250}
                                 height={200}
                                 className="w-[500px] h-[125px] object-cover rounded-lg " 
                               />
                              
                        </div>
                          {/* Content */}
                         <h3 className="pl-1 text-[11px] bg-white mt-2 font-bold font-sans text-gray-700 ">
                               কুরআন ও হাদীসের আলোকে সুন্দর ও শান্তিময় ইসলামী জীবন গঠনের দিকনির্দেশনা
                         </h3>
                        
                        <div className=' bg-white rounded-lg p-1 mt-1'>
                            <p className=" line-clamp-2 text-ellipsis p-2 pl-0  font-sans text-gray-600 leading-relaxed text-[11px]">
                               কুরআন ও সহীহ হাদীস হলো ইসলামী শিক্ষার মূল উৎস। একজন মুসলিমের দৈনন্দিন জীবনে সঠিক..
                            </p>
                        </div>
                        
                    </div>
                    <div className="max-w-xs rounded-xl  p-1 ">
                        <div className="rounded-xl">
                            <Image
                                src="/Generated-Image_1.png"
                                alt="Generated-Image_1"
                                 width={250}
                                 height={200}
                                 className="w-[500px] h-[125px] object-cover rounded-lg " 
                               />
                        </div>
                         {/* Content */}
                         <h3 className="pl-1 text-[11px] bg-white mt-2 font-bold font-sans text-gray-700 ">
                               আকীদাহর আলোকে ইমান, ইসলামী বিশ্বাস ও দৃঢ় আচার-আচরণের বাস্তব শিক্ষা
                         </h3>
                         <div className=' bg-white rounded-lg p-1 mt-1'>
                            <p className=" line-clamp-2 text-ellipsis p-2 pl-0  font-sans text-gray-600 leading-relaxed text-[11px]">
                               আকীদাহ একজন মুসলিমের ঈমানের ভিত্তি। এটি ছাড়া ইবাদত, আমল বা নৈতিকতার কোনো মানে হ..
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-xl  p-1">
                        <div className=" rounded-xl">
                            <Image
                                src="/Generated-Image_2.png"
                                alt="Generated-Image_2"
                                 width={250}
                                 height={200}
                                 className="w-[500px] h-[125px] object-cover rounded-lg " 
                               />
                        </div>
                        {/* Content */}
                         <h3 className="pl-1 text-[11px] bg-white mt-2 font-bold font-sans text-gray-700 ">
                              ফিকহের আলোকে নামাজ, রোজা, যাকাত ও পূর্ণাঙ্গ ইবাদতের ইসলামী বিধান
                         </h3>
                         <div className=' bg-white rounded-lg p-1 mt-1'>
                            <p className=" line-clamp-2 text-ellipsis p-2 pl-0  font-sans text-gray-600 leading-relaxed text-[11px]">
                               ইসলামী ফিকহ মুসলিম সমাজকে আল্লাহর সঠিক ইবাদতের  নিয়ম শেখায়। নামাজের প্রতিটি রুকু...
                            </p>
                        </div>
                    </div>
                </div>
             
           </div>
        </div>
        <div className='h-[325px] flex grid grid-cols-[1fr_auto_1fr]  mt-4  rounded-2xl border-5 p-1
           gap-3 border-gray-100 bg-white'>
            <div className='bg-white  rounded-xl '>
                <h2 className="text-sm text-gray-700 font-bold font-sans p-3">
                    যোগাযোগ ও পরামর্শ
                </h2>
                <p className=" text-[11px] p-3  text-gray-600 leading-relaxed">
                    আপনি চাইলে এই ইন্সট্রাক্টরের সাথে সরাসরি পরামর্শ বা প্রশ্নোত্তর 
                    সেশনে যুক্ত হতে পারেন। নিচের ফর্মে আপনার নাম, বিষয় ও 
                    যোগাযোগের মাধ্যম প্রদান করুন। সময় অনুযায়ী আপনাকে ফোন
                     বা বার্তার মাধ্যমে উত্তর জানিয়ে দেওয়া হবে ইনশা’আল্লাহ।
                </p>
            </div>
              {/* DIVIDER */}
            <div className="w-px h-[88%]   bg-gray-200 translate-y-[11px]"></div>
            <div className='bg-white rounded-lg'>
                <form>
                    <div className=''>
                        <label className="block text-gray-600 text-[10px] font-bold font-sans p-3">
                           আপনার প্রশ্ন
                        </label>
                        <textarea
                            className="w-[95%] text-[11px] h-16 p-3 px-3 py-2 border-1 rounded-lg"
                            placeholder="এখানে লিখুন..."
                        />
                    </div>
                    <div className=''>
                        <label className='  text-gray-600 text-[10px] font-bold font-sans p-3'>
                            নাম *
                            <span className=" text-gray-400 text-[8px]">
                                গোপন থাকবে
                            </span>
                        </label>
                       <input
                            className="w-[95%] text-[11px] h-8 p-3 px-3 py-2 border-1 rounded-lg"
                            placeholder="এখানে লিখুন..."
                        />
                    </div>
                    <div className='mt-2'>
                        <label className=' text-gray-600 text-[10px] font-bold font-sans p-3'>
                            ফোন নাম্বার *
                            <span className=" text-gray-400 text-[8px]">
                                গোপন থাকবে
                            </span>
                        </label>
                          <div className=' w-[95%] text-[11px] h-8 p-3 px-3 py-2 border-1 rounded-lg'>
                             <p className='flex '>
                               <span className='text-[10px] mt-0.5 gap-2 text-cyan-500'><GiSouthAfricaFlag /></span>
                               <span className='text-[14px] mt-0 gap-2 text-gray-700'><RiArrowDropDownLine /></span>
                               <input  className="mt-0 gap-2 shrink-0 text-[10px]"
                                placeholder= '+880 -- -- -- -- --'/> 
                              </p>
                          </div>
                    </div>
                    <div className="mt-4">
                        <Button variant="ghost" className=' disabled:cursor-not-allowed w-[95%]
                         bg-cyan-600 text-[10px] text-white font-bold hover:bg-cyan-600  
                          font-sans rounded-sm hover:text-white-600   '>
                            <Link href="#"> সাবমিট করি </Link>
                       </Button>
                    </div>
                </form>
            </div>
            
        </div>
                

      </div>
    </section>
  )
};

export default SideBar
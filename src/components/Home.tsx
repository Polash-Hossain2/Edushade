"use client"

import { useState } from 'react'
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { PiStudentFill } from "react-icons/pi";
import { FcBusinessman } from "react-icons/fc";
import { PiNotebookFill } from "react-icons/pi";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BsRecord2 } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi";
import { MdEventSeat } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { IoArrowForward } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoPlayCircle } from "react-icons/io5";
import { TiMediaRecord } from "react-icons/ti";
import { IoPlay } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { TiArrowLeftThick } from "react-icons/ti";
import { title } from 'process'

const images = [
    "/Ellipse 22.png",
    "/headshot1.png",
    "/headshot2.png",
    "/headshot3.png",
    "/headshot4.png"
  ]
  const books = [
       { image: "/thumb-1.png", title: "ইসলামে পর্দার গুরুত্ব এবং শার'ঈ নীতিমালা" },
       { image: "/thumb-2.png", title: "ফিকহুল  মু‘আমালাত  আল-মালিয়্যাহ"},
       { image: "/thumb-3.png", title: "ফিকহুত তাহারাত"},
       { image: "/thumb-3.png" , title: "ফিকহুস সালাত"},
  ]

function Home() {
  const [ selected, setSelected] = useState(images[0])
  const [pos, setPos] = useState(0)
  const prev = () => pos > 0 && setPos(pos - 1)
 const next = () => pos<books.length - 4 && setPos(pos + 1)

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto -top-12s -mb-10 grid md:grid-cols-[56%_44%] gap-0 items-center ">

        {/* LEFT CONTENT */}
        <div className="relative mt-8 -ml-4">

          <h1 className="z-50 text-left text-[40px]  font-semibold font-sans  leading-18 text-gray-800">
            আল্লাহর পথে জ্ঞান <br />
            অর্জনের ডিজিটাল মাধ্যম
          </h1>

          <p className="text-[15px] font-medium font-sans  text-[#4B4B4B] leading-7 ">
           বিশ্বস্ত আলেমদের তত্ত্বাবধানে কুরআন, হাদীস, আরবি ও দ্বীনি শিক্ষা এখন ঘরে বসেই 
           প্রযুক্তির সাথে ইলম অর্জনের যাত্রা শুরু হোক আজই।
          </p>

          <div className="flex gap-3 mt-5 ">
            <Button variant="ghost" className="
               bg-cyan-600 text-[13px] text-white font-semibold hover:bg-cyan-600
                font-sans  hover:text-white-600
                 rounded-2xl w-[170px]"
                 >
              <Link href="#" className='flex gap-4'>
                 শেখা  শুরু  করুন
                  <span className='mt-0.5'><MdOutlineArrowForwardIos /></span>
              </Link>
            </Button>

            <Button variant="ghost" className='bg-white font-bold text-gray-800  w-[170px]
              border-[1.5px] border-cyan-600 rounded-2xl hover:bg-white
             '>
              <Link href="#">আমাদের  কোর্সসমূহ</Link>
            </Button>
          </div>
          <div className="mt-4 bg-white ">
             <p className="text-[15px] font-medium font-sans bg-gray-30  text-[#4B4B4B] leading-7
                relative max-w-md p-4 rounded-2xl rounded-br-md shadow
                before:content-[''] before:absolute before:-bottom-2 
                before:w-1 before:h-1
                before:border-t-[10px] before:border-t-transparent
                before:border-b-[10px] before:border-b-transparent
                before:border-r-[10px] before:border-r-gray-50
                ">
               আমি তাইবাহ একাডেমিতে কোর্স করার সুযোগ পেয়েছি এবং সত্যি বলতে অভিজ্ঞতাটা অসাধারণ।
               এখানে পাঠদান হয় বাংলা ভাষায়, তাই বিষয়গুলো সহজে বোঝা যায়। 
             </p>
          </div>

          {/* USERS ROW */}
          <div className="flex items-center gap-2 pt-4 cursor-pointer">

            <div className="flex -space-x-2 mt-4 gap-5 ">
                <div className="flex flex-col items-center gap-2 ">
                  <Avatar className="border h-8 w-8">
                    <AvatarImage src={selected} />
                  </Avatar>

                    {/* Progress bar */}
                  <div className="w-10 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
              <div className="flex -space-x-3">
                {images.slice(1).map((img, index) => (
                <Avatar
                key={index}
                className="border cursor-pointer hover:scale-105 transition"
                onClick={() => setSelected(img)}
               >
              <AvatarImage src={img} />
              </Avatar>
             ))}
           </div>
         </div>

          <Button variant="ghost" className="
            bg-white border-[1.5px] text-[11px] text-gray-700 font-semibold hover:bg-white
              font-sans  hover:text-white-600 ml-4
              rounded-2xl w-[70px] h-6.5"
            >
            <Link href="#" className='flex gap-4'>
              View All
            </Link>
          </Button>
        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative text-[55px] -ml-10  -top-18 ">
          <Image
            src="/image202.png"
            alt="Islamic teacher"
            width={1200}
            height={1000}
            className="w-[611px]  max-w-none  object-contain"
            priority
          />
        </div>
      </div>
    <div className="bg-gray-50 max-w-6xl  mx-auto -top-8 rounded-lg   px-6 py-6">
       <div className='bg-white rounded-lg px-3 py-3'>
           <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">

        {/* Item 1 */}
         
        <div className="flex items-center gap-4 px-4 py-3">
          <div className="bg-emerald-50 p-2 rounded-lg text-emerald-950 text-4xl">
            <LuBookOpenText />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-gray-700 font-sans ">৪২ +</h3>
            <p className="text-[14px] text-gray-500 font-sans">কোর্স ও কনটেন্ট</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4 px-4 py-3 ml-8">
          <div className="bg-emerald-50 p-2 rounded-lg text-emerald-950 text-4xl">
            <PiStudentFill />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-gray-700 font-sans">২৫ লক্ষ+</h3>
            <p className="text-[14px] text-gray-500 font-sans">শিক্ষার্থী</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4 px-4 py-3  ml-8">
          <div className="bg-emerald-50 p-2 rounded-lg text-emerald-950 text-4xl">
           <FcBusinessman />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-gray-700 font-sans">৬০+</h3>
            <p className="text-[14px] text-gray-500 font-sans">শিক্ষক</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4 px-4 py-3  ml-8">
          <div className="bg-emerald-50 p-2 rounded-lg text-emerald-950 text-4xl">
            <PiNotebookFill />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-gray-700 font-sans">১.৮ লক্ষ+ </h3>
            <p className="text-[14px] text-gray-500 font-sans">লার্নিং ম্যাটেরিয়াল</p>
          </div>
        </div>

       </div>
       </div>
    </div>
    <div className="max-w-6xl mx-auto text-right">
      {/* <div className=''>
         <p>আমাদের</p>
      </div> */}
  <p className="text-sm font-medium font-sans text-center">
    সহজ ভাষায় সাজানো কুরআন, হাদীস, আরবি ও দ্বীনি শিক্ষার মানসম্মত কোর্স। 
    আপনার প্রয়োজন <br/> <span> অনুযায়ী বেছে নিন বিভিন্ন বিষয়ভিত্তিক কোর্স।</span>
  </p>
</div>
    <div className='max-w-6xl grid mt-4 ml-12  rounded-2xl border p-1  bg-gray-100 border-gray-200'>
        <div className='grid grid-cols-3 gap-3 '>
           <div className='relative rounded-xl'>
               <Image
                    src="/logo1.png"
                    alt='logo1'
                    width={500}
                    height={300}
                    className=''
                />
                <span className='absolute flex h-5 top-3 px-3 right-3 bg-white text-gray-700 rounded-lg text-xs
                 gap-1'>
                  <Badge variant='default' className=" bg-red-700 m-0 p-0 rounded-lg border-0 w-4 h-4 mt-0.5 ">
                      <BsRecord2 />
                  </Badge>
                   লাইভ কোর্স
                </span>
                <div className='bg-white  rounded-lg p-2.5 mt-1 border border-gray-200'>
                  <div className='flex gap-2.5  p-1 border-gray-200'>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-16 px-1 py-1 gap-2'>
                      <Badge variant='default' className="m-0 bg-white text-green-800 p-0  border-0 ">
                             <PiStudentDuotone />
                      </Badge>
                      ব্যাচ ২২
                      </span>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-23 px-1 py-1 gap-2'>
                       <Badge variant='default'   className="m-0 bg-white text-green-800 p-0  border-0">
                             <MdEventSeat />
                      </Badge>
                      ৩৬ সিট বাকি
                    </span>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-21 px-1 py-1 gap-2'>
                      <Badge variant='default'   className="m-0 bg-white text-green-800 p-0  border-0">
                             <MdOutlineTimer />
                      </Badge>
                      ২ দিন বাকি
                    </span>
                  </div>
                  <div className='mt-2 p-0.5 '>
                    <p className='text-lg text-gray-800'>তা‘লীমুল কুরআন (অনলাইন কুরআন শিক্ষা কোর্স) - ২৫ তম ব্যাচ</p>
                    <p className='text-sm text-gray-600 line-clamp-2 mt-2'>
                      কুরআন বুঝে পড়া প্রতিটি মুসলিমের জন্য অপরিহার্য। তাইবাহ একাডেমির এই অনলাইন 
                      কোর্সে আপনি ধাপে ধাপে কুরআনের আয়াতের অর্থ, তাফসীর, সঠিক তিলাওয়াত ও তাজবিদ
                       শিখতে পারবেন অভিজ্ঞ ও বিশ্বস্ত আলেমদের তত্ত্বাবধানে।
                    </p>
                     <div className='mt-4'>
                        <Button 
                        className="disabled:cursor-not-allowed
                         w-[99%]
                         bg-gray-100 text-sm
                          text-gray-600 font-bold
                           hover:bg-gray-100 
                          font-sans rounded-sm 
                          hover:text-gray-600
                          cursor-pointer"
                       >
                         বিস্তারিত দেখি
                         <span><IoArrowForward /></span>
                      </Button>
                     </div>
                  </div>
                </div>

           </div>
            <div className='relative rounded-xl'>
               <Image
                    src="/rectangle.png"
                    alt='rectangle'
                    width={500}
                    height={300}
                    className='rounded-lg'
                />
                <span className='absolute  flex h-5 top-2 px-3 right-2 bg-white text-gray-700 rounded-lg text-xs
                 gap-1'>
                  <Badge variant='default' className=" bg-white  text-gray-800 m-0 p-0 rounded-lg border-0 w-4 h-4 mt-0.5 ">
                      <CiDiscount1 />
                  </Badge>
                  ফ্রি কোর্স
                </span>
                <div className='bg-white  rounded-lg p-2.5 mt-1 border border-gray-200'>
                  <div className='flex gap-2.5  p-1 border-gray-200'>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-16 px-1 py-1 gap-2'>
                      <Badge variant='default' className="m-0 bg-white text-green-800 p-0  border-0 ">
                             <PiStudentDuotone />
                      </Badge>
                      ব্যাচ ২২
                      </span>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-23 px-1 py-1 gap-2'>
                       <Badge variant='default'   className="m-0 bg-white text-green-800 p-0  border-0">
                             <MdEventSeat />
                      </Badge>
                      ৩৬ সিট বাকি
                    </span>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-21 px-1 py-1 gap-2'>
                      <Badge variant='default'   className="m-0 bg-white text-green-800 p-0  border-0">
                             <MdOutlineTimer />
                      </Badge>
                      ২ দিন বাকি
                    </span>
                  </div>
                  <div className='mt-2 p-0.5 '>
                    <p className='text-lg text-gray-800'>তা‘লীমুল কুরআন (অনলাইন কুরআন শিক্ষা কোর্স) - ২৫ তম ব্যাচ</p>
                    <p className='text-sm text-gray-600 line-clamp-2 mt-2'>
                      কুরআন বুঝে পড়া প্রতিটি মুসলিমের জন্য অপরিহার্য। তাইবাহ একাডেমির এই অনলাইন 
                      কোর্সে আপনি ধাপে ধাপে কুরআনের আয়াতের অর্থ, তাফসীর, সঠিক তিলাওয়াত ও তাজবিদ
                       শিখতে পারবেন অভিজ্ঞ ও বিশ্বস্ত আলেমদের তত্ত্বাবধানে।
                    </p>
                     <div className='mt-4'>
                        <Button 
                        className="disabled:cursor-not-allowed
                         w-[99%]
                         bg-gray-100 text-sm
                          text-gray-600 font-bold
                           hover:bg-gray-100 
                          font-sans rounded-sm 
                          hover:text-gray-600
                          cursor-pointer"
                       >
                         বিস্তারিত দেখি
                         <span><IoArrowForward /></span>
                      </Button>
                     </div>
                  </div>
                </div>
           </div>
            <div className='relative rounded-xl'>
               <Image
                    src="/reactangle1.png"
                    alt='rectangle1'
                    width={500}
                    height={300}
                    className='rounded-lg'
                />
                <div className="absolute flex inset-0 -mt-58 items-center justify-center">
                  <div className='bg-white px-2 py-2 rounded-full'>
                     <Link href="#" className='text-green-700  h-12 w-12  text-2xl '> <IoPlay /> </Link>
                  </div>
                 </div>
                <span className='absolute flex h-5 top-2 px-3 right-2 bg-white text-gray-700 rounded-lg text-xs
                 gap-1'>
                  <Badge variant='default' className=" bg-red-700 m-0 p-0 rounded-lg border-0 w-4 h-4 mt-0.5 ">
                      <TiMediaRecord />
                  </Badge>
                   লাইভ কোর্স
                </span>
                
                <div className='bg-white  rounded-lg p-2.5 mt-1 border border-gray-200'>
                  <div className='flex gap-2.5  p-1 border-gray-200'>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-16 px-1 py-1 gap-2'>
                      <Badge variant='default' className="m-0 bg-white text-green-800 p-0  border-0 ">
                             <PiStudentDuotone />
                      </Badge>
                      ব্যাচ ২২
                      </span>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-23 px-1 py-1 gap-2'>
                       <Badge variant='default'   className="m-0 bg-white text-green-800 p-0  border-0">
                             <MdEventSeat />
                      </Badge>
                      ৩৬ সিট বাকি
                    </span>
                    <span className='bg-gray-100 text-xs rounded-lg h-6 w-21 px-1 py-1 gap-2'>
                      <Badge variant='default'   className="m-0 bg-white text-green-800 p-0  border-0">
                             <MdOutlineTimer />
                      </Badge>
                      ২ দিন বাকি
                    </span>
                  </div>
                  <div className='mt-2 p-0.5 '>
                    <p className='text-lg text-gray-800'>তা‘লীমুল কুরআন (অনলাইন কুরআন শিক্ষা কোর্স) - ২৫ তম ব্যাচ</p>
                    <p className='text-sm text-gray-600 line-clamp-2 mt-2'>
                      কুরআন বুঝে পড়া প্রতিটি মুসলিমের জন্য অপরিহার্য। তাইবাহ একাডেমির এই অনলাইন 
                      কোর্সে আপনি ধাপে ধাপে কুরআনের আয়াতের অর্থ, তাফসীর, সঠিক তিলাওয়াত ও তাজবিদ
                       শিখতে পারবেন অভিজ্ঞ ও বিশ্বস্ত আলেমদের তত্ত্বাবধানে।
                    </p>
                     <div className='mt-4'>
                        <Button 
                        className="disabled:cursor-not-allowed
                         w-[99%]
                         bg-gray-100 text-sm
                          text-gray-600 font-bold
                           hover:bg-gray-100 
                          font-sans rounded-sm 
                          hover:text-gray-600
                          cursor-pointer"
                       >
                         বিস্তারিত দেখি
                         <span><IoArrowForward /></span>
                      </Button>
                  </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  <div className='max-w-6xl text-center px-3 py-3 '>
        <div className='mt-4'>
          <Button 
           className="disabled:cursor-not-allowed
             w-[10%]
            bg-white text-xs
            border-[1.5px]
            text-gray-600 font-bold
            hover:bg-white
            font-sans rounded-sm
            cursor-pointer"
         >
           সকল কোর্স
          <span><IoIosArrowForward /></span>
        </Button>
      </div>
    </div>
    <div className='max-w-6xl px-6 py-6'>
       <div className=''>
         <p className='text-center text-2xl'>
            ইসলামিক <span>বই সমগ্র</span>
         </p>
         <p className='text-sm text-gray-600 text-center p-4 leading-6'>
            কুরআন, হাদীস, ফিকহ, আকীদাহ ও ইসলামী ইতিহাসসহ মানসম্মত ইসলামিক
          বইয়ের সমৃদ্ধ সংগ্রহ। সহজ <br/>ভাষায় সাজানো এই বইগুলো থেকে জ্ঞান অর্জন করুন।
         </p>
       </div>
       <div className='relative max-w-6xl max-auto'>
          <Button onClick={prev}
           className="
             w-[1%]
            bg-white 
            border-[1.5px]
            border-cyan-800
            text-cyan-800 font-bold
            hover:bg-white
            font-sans rounded-full
            cursor-pointer"
         >
          <div className=''>
             <div className=' rounded-xl  p-1 border border-gray-200 bg-gray-100'>
              fgre
             </div>
          </div>
          <span><TiArrowLeftThick /></span>
        </Button>
         <div className='flex items-center '>
           
           <p></p>
           <p><BsArrowRightCircle /></p>
         </div>
       </div>
    </div>
    
    </section>
  )
}

export default Home
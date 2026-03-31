"use client"
import { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"
import { IoTrendingUp } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import Link from 'next/link'

function page() {
  const [count, setCount] = useState(1);
  const images = [
    "/BookCover-22.png",
    "/thumb-4.png",
    "/thumb-3.png",
    "/thumb-2.png",
    "/thumb-1.png",
  ]
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activepage, setActivePage] = useState("");
  const [activebook, setActiveBook] = useState("")
  return (
   
    <div className="container max-w-6xl mx-auto px-4 py-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT: Image Section */}
        <div>
          <div className="border-[1.5px] bg-white rounded-lg p-4 flex justify-center">
            <Image
              src={activeImage}
              alt="BookCover-22"
              width={320}
              height={450}
              className="h-75 rounded-md"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 h-38">
            {[4, 3, 2, 1].map((i) => (
              <div
                key={i}
                onClick={()=> setActiveImage(`/thumb-${i}.png`)}
                className="border-[1.5px] rounded-md p-1 cursor-pointer hover:ring-0 "
              >
                <Image
                  src={`/thumb-${i}.png`}
                  alt="thumbnail"
                  width={60}
                  height={80}
                  className="h-23 w-50 rounded-md mt-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Info Section */} 
         <div className="space-y-3">
          <div>
            <p className='flex text-teal-600 text-[11px] transition gap-2'>
              <span className='text-[12px] mt-0.5'><IoTrendingUp/></span> ৩০৫৮ জন সম্প্রতি এটি দেখেছেন
            </p>
            <p className="text-sm font-bold leading-snug transition text-gray-800 mt-2.5">
              ইসলামে পর্দার গুরুত্ব এবং শার'ঈ <br /> নীতিমালা
            </p>
            <div className='flex text-[10px] text-teal-600 mt-2 '>
                <Image
                  src="/brand-icon.png"
                  alt="Brand Container"
                  width={20}
                  height={15}
                  className=" rounded-md"
                />
                <p className='text-[10px] ml-1 cursor-pointer'>তাইবাহ প্রকাশনী</p>
                <p className='text-[14px] cursor-pointer'><IoMdArrowDropright /></p>
            </div>
            <div>
               <p className='text-[12px] line-clamp-3 transition mt-3'> ইসলামে পর্দার গুরুত্ব এবং শার'ঈ নীতিমালা” বইটি পর্দা
                 সম্পর্কে ইসলামের সুস্পষ্ট নির্দেশনা,
                 জ্ঞানসম্মত ব্যাখ্যা এবং দৈনন্দিন জীবনে পর্দা পালনের বাস্তব পদ্ধতিগুলো তুলে ধরে।
                কুরআন ও সহিহ হাদীসের আলোকে পর্দার মূল উদ্দেশ্য, নারী-পুরুষ উভয়ের দায়িত্ব,
                এবং সমাজে শালীনতা রক্ষার গুরুত্ব পাঠকের সামনে সহজ ভাষায় উপস্থাপন করা হয়েছে।
                বইটি বিশেষভাবে উপকারী যারা পর্দার ধারণা সঠিকভাবে বুঝতে  চান, পরিবারে ইসলামী পরিবেশ
                গড়ে তুলতে চান এবং নিজের জীবনে শার'ঈ নীতিমালাগুলো সঠিকভাবে অনুসরণ করতে আগ্রহী।</p>
                <p className='flex text-teal-600 text-[11px] transition gap-1.5 mt-2.5  cursor-pointer'>বিস্তারিত দেখুন <span className='mt-1 cursor-pointer'><IoArrowDown /></span></p>
            </div>

            <div className="flex items-center gap-2 mt-4 text-[11px] transition  text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>(৭২৯0)</span>
            </div>
          </div>
           <Separator className='' />

          

          {/* Price */}
          <div className="text-[14px] font-serif text-primary">
            ৳১২০ <span className='line-through text-gray-300'>৳৩৫০</span>
          </div>

          {/* Format */}
          <div>
            <div className="flex gap-2.5">
              <h3 className='mb-2 font-medium text-[12px] transition'> পৃষ্ঠার ধরন </h3>
             <div className='ml-9'>
                <Button variant="ghost" className={`
                   h-8 w-15 ml-18 cursor-pointer  text-[10px] bg-gray-100
                  ${activepage === "glossy"
                  ? "bg-teal-100 hover:bg-teal-100 text-green-400"
                   : "bg-gray-100"}`}
                  onClick={() => setActivePage("glossy")}
                >গ্লসি পেপার</Button>
                <Button variant="ghost"
                  onClick={()=> setActivePage("matt")}
                  className={`h-8 w-26 ml-1 cursor-pointer text-[11px] bg-gray-100
                    ${activepage === "matt"
                     ? "bg-teal-100 hover:bg-teal-100 text-green-400"
                    : "bg-gray-100"}
                     `}
                     >ম্যাট ফিনিশ পেপার
                </Button>
                <Button variant="ghost"
                  onClick={()=> setActivePage("news")}
                 className={`h-8  w-26 ml-1 cursor-pointer  text-[11px] bg-gray-100
                   ${activepage === "news"
                    ? "bg-teal-100 hover:bg-teal-100 text-green-400"
                    : "bg-gray-100"
                  }
                  `}
                  >
                  নিউজপ্রিন্ট পেপার
                </Button>
             </div>
            </div>
          </div>

          {/* Size */}
          <div className="flex gap-2.5">
              <h3 className='mb-2 font-medium text-[12px] transition'> বইয়ের সাইজ </h3>
              <div className='ml-6 '>
                <Button variant="outline"
                onClick={()=> setActiveBook("size")}
                 className={`h-8 w-15 ml-18 text-[10px] cursor-pointer bg-gray-100
                  ${activebook ==="size"
                    ? "bg-teal-100 hover:bg-teal-100 text-green-400"
                    : "bg-gray-100"
                  }`}
                >
                  এ৫ সাইজ
                </Button>
                <Button variant="outline"
                  onClick={()=> setActiveBook("eight")}
                  className={`h-8 w-26 ml-1  cursor-pointer text-[11px] bg-gray-100
                    ${activebook === "eight"
                     ? "bg-teal-100 hover:bg-teal-100 text-green-400"
                     : "bg-gray-100"
                     }`}
                >
                  এ৪ সাইজ
                </Button>
                <Button variant="outline"
                  onClick={() =>setActiveBook("pocket")}
                  className={`h-8  w-26 ml-1  cursor-pointer  text-[11px] bg-gray-100
                    ${ activebook ==="pocket"
                     ? "bg-teal-100 hover:bg-teal-100 text-gray-400"
                     : "bg-gray-100"
                     }`}
                 >
                  পকেট সাইজ
                </Button>
              </div>
            </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 ">
            <h3 className='text-sm font-semibold font-mono text-gray-600'>পরিমাণ</h3>
            <div className="flex ml-26 items-center border rounded-md bg-gray-200">
              <Button variant="ghost" className='bg-white cursor-pointer'
               onClick={()=>setCount(prev => Math.max(1, prev -1))}
              >−</Button>
              <span   className="px-4 bg-gray-200">{count}</span>
              <Button variant="ghost" className='bg-white cursor-pointer'
              onClick={() => setCount(prev => prev + 1)}
              >+</Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button 
            className="disabled:cursor-not-allowed
                         w-[50%]
                         bg-white text-[12px]
                          text-gray-600 font-bold
                           hover:bg-white 
                          font-sans rounded-sm 
                          hover:text-gray-600
                          cursor-pointer
                          border-[1.5px]
                          "
            >
              এখনই কিনুন
            </Button>
            <Button variant="outline" 
            className="disabled:cursor-not-allowed
                         w-[50%]
                         bg-[#089C8F] text-[12px]
                          text-white font-bold
                           hover:bg-[#089C8F] 
                          font-sans rounded-sm 
                          hover:text-white-600
                          cursor-pointer"
            >
              বইটি কিনুন
            </Button>
          </div>
          <div className='flex rounded-sm  bg-gray-100 w-[550px] h-9 gap-2 '>
              <span className='ml-3 mt-2.5  text-amber-600'><CiDeliveryTruck /></span>
              <p className='text-[11px] text-gray-600 transition mt-2.5'>৳১০০০ বা তার বেশি ক্রয়ে <Link href="#" className='text-teal-700'>ফ্রি ডেলিভারি</Link></p>
              <span className='text-teal-800 text-[18px] mt-2.5 ml-74'>
                <Link href="#"><IoMdArrowDropright /></Link>
              </span>
           </div>
        </div>
      </div>
    </div>

  )
}

export default page

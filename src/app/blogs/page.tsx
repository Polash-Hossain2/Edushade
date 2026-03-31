import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AiTwotoneGift } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"


function page() {
  return (
    <section>
    <div className="min-h-screen  max-w-5xl bg-white mx-auto pb-12 ">
      <div className=' py-4'>
              <h1 className='text-sm ml-4 text-gray-600 font-bold font-sans'>অর্ডার নিশ্চিতকরণ</h1>
              <div className='flex p-3 py-8 '>
                <span className='w-10 h-10 rounded-full  text-[18px] flex items-center justify-center bg-gray-100 text-teal-700'><AiTwotoneGift /></span>
                 <div className='flex flex-col gap-2'>
                   <h2 className='leading-[1.2] ml-2 text-[13px]  text-gray-500'>আপনার ক্রয়ের জন্য ধন্যবাদ, জন ডো</h2>
                   <h3 className='ml-2 text-[13px]  text-gray-500'>আপনার অর্ডার আইডি হল #TKM-165121</h3>
                 </div>
              </div>
              
           </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">
           
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-5 ">

          {/* Order Status */}
          <Card className='ml-2 -translate-y-4'>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle className='text-sm text-gray-600 font-bold font-sans'>অর্ডার গ্রহণ করা হয়েছে</CardTitle>
              <Badge className=" text-[13px]  text-gray-500 bg-white">
                <span className='text-green-600 text-[8px] bg-green-600 rounded-full'><  FaRegCircle /></span>
                প্রক্রিয়াধীন
                </Badge>
            </CardHeader>
            <p className="text-sm  text-gray-600 ml-6 -mt-3">
                  তাইবাহ একাডেমি বিতরণ কেন্দ্র থেকে।
                </p>
            <CardContent className="space-y-4">

              {/* Progress bar */}
              <div className="flex gap-1">
                  <div className="flex-1 h-1 rounded-full bg-cyan-400"></div>
                  <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
                  <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
                  <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
              </div>

              <p className="text-[13px]  text-gray-500">
                আনুমানিক আগমনের সময়
              </p>
              <p className='text-[11px]  text-gray-500'>ডিসেম্বর ৭-৯, ২০২৫</p>

            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className='-translate-y-3'>
            <CardHeader>
              <CardTitle className='text-sm text-gray-600 font-bold font-sans '>অর্ডার আইটেম (৫)</CardTitle>
            </CardHeader>
            <CardContent className="ml-4 space-y-4 rounded-lg border-[1.5px]  w-[95%] leading-[4] border-gray-200">

              {/* Item */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className=" bg-gray-200 rounded" />
                    <div className="  relative bg-gray-50 mt-4 rounded-xl">
                            <Image
                               src="/item-order-image.svg"
                               alt="Book Cover-2"
                               width={250}
                               height={300}
                               className="w-16 h-16 rounded-lg " 
                            />
                    </div>
                  <div>
                    <p className="text-[13px] mt-1.5 text-gray-500">
                      ইসলামে পর্দার গুরুত্ব এবং শার'ঈ নীতিমালা
                    </p>
                    <p className="text-xs text-gray-500">
                      ৳১২০ × ২
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">৳২৪০</p>
              </div>

              <div className="flex items-center  justify-between ">
                <div className="flex gap-4">
                     <div className="  relative bg-gray-50 mt-4 rounded-xl">
                            <Image
                               src="/item-order-image1.svg"
                               alt="Book Cover-2"
                               width={250}
                               height={300}
                               className="w-16 h-16 rounded-lg " 
                            />
                    </div>
                  <div className=" bg-gray-200 rounded" />
                  <div className='-ml-6'>
                    <p className="text-[13px] mt-1.5 text-gray-500">
                     ফিকহুল  মু‘আমালাত  আল-মালিয়্যাহ
                    </p>
                    <p className="text-xs text-gray-500">
                      ৳৩২০ × ১
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">৳৩২০</p>
              </div>

            </CardContent>
          </Card>

        </div>
        

        {/* RIGHT SIDE – Order Summary */}
        <div className='-translate-y-14'>
        <Card className="h-fit -mt-14  top-6 ">
          <CardHeader className=''>
            <CardTitle className='text-sm text-gray-600 font-bold font-sans'>অর্ডারের সারাংশ</CardTitle>
          </CardHeader>
           <Separator className="" />

          <CardContent className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span className='text-[13px]  text-gray-500'>উপমোট</span>
              <span className='text-xs text-gray-500'>৳৬৩০</span>
            </div>

            <div className="flex justify-between">
              <span className='text-[13px]  text-gray-500'>কুপন ছাড়</span>
              <span className='text-xs text-gray-500'>-৳২০</span>
            </div>

            <div className="flex justify-between">
              <span className='text-[13px]  text-gray-500'>ডেলিভারি চার্জ</span>
              <span className='text-xs text-gray-500'>৳৫০</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className='text-[13px]  text-gray-500'> কর (10%)</span>
              <span className='text-xs text-gray-500'>৳৪০</span>
            </div>
            <Separator className="" />

            <div className="flex justify-between font-semibold">
              <span className='text-sm text-gray-600 font-bold font-sans'>সর্বমোট</span>
              <span>৳৮০০</span>
            </div>
          </CardContent>
        </Card>
        <Button className="w-full
                bg-white
                text-gray-600
                border-[1.5px]
                border-teal-800
                mt-4
                hover:bg-white
                hover:text-gray-600
                hover:border-gray-600
                cursor-pointer"
                >
              আরো বই কিনি
            </Button>
        </div>
        

      </div>
     
    </div>
     <h2 className='ml-70 text-[11px]  text-gray-500 -translate-y-4'>আপনার অর্ডার নিয়ে সমস্যা আছে?<span className='text-cyan-500'> <Link href="#">যোগাযোগ করুন</Link></span></h2>
     </section>
  )
}

export default page
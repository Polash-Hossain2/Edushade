"use client"
import React from 'react'
import Image from "next/image"
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

const partners =[
  { icon: "/vortex.png",   meta: "$5M+ funding raised" },
  { icon: "/velocity.png",   meta: "3x program growth" },
  { icon: "/synergy.png",   meta: "$2M+ revenue" },
  { icon: "/spectrum.png",  meta: "150+ educators" },
  { icon: "/vortex.png",   meta: "$5M+ funding raised" },
  { icon: "/velocity.png",   meta: "3x program growth" },
  { icon: "/synergy.png",   meta: "$2M+ revenue" },
  { icon: "/spectrum.png",  meta: "150+ educators" },
];

function page() {
  const [active , setActive] = useState("monthly")

  const trackRef = useRef<HTMLDivElement>(null)
     const xRef = useRef(0)
     useEffect (() =>{
      const track  = trackRef.current
       if(!track) return
       const speed = window.innerWidth < 768 ? 0.2 : 0.4
       let rafId: number
       const animate = () => {
        xRef.current += speed
        const width = track.scrollWidth /2
  
        if (xRef.current >= width) {
          xRef.current = 0 
        }
  
        track.style.transform = `translateX(${-xRef.current}px)`
        rafId = requestAnimationFrame(animate)
       }
  
       rafId = requestAnimationFrame(animate)
       return () => cancelAnimationFrame(rafId)
     }, [])
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='text-center'>
           <p className=''>
            <Button className='bg-gray-100 text-gray-800
             hover:bg-gray-200 rounded-4xl border-2 bg-border-white cursor-pointer'>
              Pricing
            </Button>
           </p>
           <h2 className='text-3xl font-semibold text-gray-900 sm:text-4xl mt-6'>Flexible Pricing, Built In</h2>
           <p className='text-base text-gray-500 mt-6'>
              Design and organize learning experiences with flexible lesson <br/> types,
               structured paths, and clear progression logic.
           </p>
           <div className='flex flex-col items-center gap-2 mt-6'>
             {active === "monthly" &&(
              <span className="bg-black text-white text-xs px-3 py-1 rounded-md">
                 Save 20%
              </span>
             )}
             <div className="flex bg-gray-100 p-1 rounded-xl">
              <Button
                variant={active === "monthly" ? "default" : "ghost"}
                className="rounded-lg bg-blue-800 text-white hover:bg-blue-900 cursor-pointer"
                onClick={() => setActive("monthly")}
              >
                Monthly
              </Button>

              <Button
                variant={active === "annually" ? "default" : "ghost"}
                className="rounded-lg cursor-pointer"
                onClick={() => setActive("annually")}
              >
                Annually
              </Button>
             </div>
           </div>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6'>
          <div className=''>
             <Image
                src="/Plan.png"
                alt="logo_image"
                width={1200}  
                height={450} 
                className='mt-3'
              />
          </div>
          <div className=''>
             <Image
                src="/Plan 1.png"
                alt="logo_image"
                width={1200}  
                height={400} 
                className='mt-3'
              />
          </div>
          <div className=''>
            <Image
                src="/Plan 2.png"
                alt="logo_image"
                width={1200}  
                height={450} 
                className='mt-3'
              />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10 ml-8">
              {/* heading */}
              <p className="text-center  text-sm text-gray-500  ">We collaborate with over 250 Platforms</p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
                <div className="relative mt-10 overflow-hidden">
                  <div ref={trackRef} className=" flex w-max gap-12  will-change-transform">
                    {[...partners, ...partners].map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400">
                      <div className="relative h-26 w-32 shrink-0 opacity-80">
                        <Image
                          src={p.icon}
                            alt="image"
                            width={190}
                            height={150}
                            className="object-contain grayscale"
                        />
                      </div>
                    <div className="leading-tight whitespace-nowrap">
                  <div className="-ml-27 text-xs text-gray-400">{p.meta}</div>
              </div>         
            </div>
          ))}
        </div>
      </div>
    </div> 
  </div>
   <div className='mx-auto max-w-7xl px-6 py-6'>
     <div className='ml-4'>
      <h2 className='text-3xl font-semibold text-gray-900 sm:text-4xl mt-6'>Compare Pricing Plans</h2>
      <div className='flex items-center justify-between mt-6'>
        <div>
          <p className='text-base text-gray-500'>
            See what’s included in each plan and choose the one that fits your teaching goals and scale.
          </p>
        </div>
        <div className='mt-0'>
          <div className='flex flex-col items-center gap-2 mt-6'>
             {active === "monthly" &&(
              <span className="bg-black text-white text-xs px-3 py-1 rounded-md">
                 Save 20%
              </span>
             )}
             <div className="flex bg-gray-100 p-1 rounded-xl">
              <Button
                variant={active === "monthly" ? "default" : "ghost"}
                className="rounded-lg bg-blue-800 text-white hover:bg-blue-900 cursor-pointer"
                onClick={() => setActive("monthly")}
              >
                Monthly
              </Button>

              <Button
                variant={active === "annually" ? "default" : "ghost"}
                className="rounded-lg cursor-pointer"
                onClick={() => setActive("annually")}
              >
                Annually
              </Button>
             </div>
           </div>
        </div>
      </div>
     </div>
   </div>
   <div className='mx-auto max-w-7xl px-8 py-8'>
     <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <div></div>
       <div className='border rounded-lg  p-4'>
           <div className='text-center'>
            <h2 className='text-sm font-semibold text-gray-900 sm:text-2xl mt-3'>Starter</h2>
              <div className="text-center py-6">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>
           <h2>
            <Button className='bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer w-full'>
              Get Started
            </Button>
          </h2>
       </div>
       <div className='border rounded-lg  p-4'>
        <div className='text-center'>
          <h2 className='text-sm font-semibold text-gray-900 sm:text-2xl mt-3'>Growth</h2>
          <div className='text-center py-6'>
             <span className="text-4xl font-bold text-gray-900">$79</span>
             <span className="text-gray-500 ml-1">/month</span>
          </div>
        </div>
        <h2>
          <Button className='w-full cursor-pointer bg-blue-700 hover:bg-blue-800'>
            Get Started
          </Button>
        </h2>
       </div>
       <div className='border rounded-lg  p-4'>
        <div className='text-center'>
          <h2 className='text-sm font-semibold text-gray-900 sm:text-2xl mt-3'>Growth</h2>
          <div className='text-center py-6'>
             <span className="text-xl font-bold text-gray-900">Contact Us</span>
          </div>
        </div>
        <h2>
            <Button className='bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer w-full'>
              Get Started
            </Button>
          </h2>
       </div>
     </div>
   </div>
    </section>
  )
}

export default page
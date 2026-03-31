import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <nav className='bg-white border-b p-4 transition'>
      <div className='max-w-7xl mx-auto'>
        <ul className='flex  text-[12px] text-gray-500 font-semibold gap-6 ml-18'>
          <li><Link href="#">সকল কোর্স</Link></li>
           <li><Link href="#">কুরআন শিক্ষা</Link></li>
            <li><Link href="#">হাদীস শিক্ষা</Link></li>
             <li><Link href="#">ডিপ্লোমা প্রোগ্রাম</Link></li>
              <li><Link href="#">ইসলামী ইতিহাস</Link></li>
               <li><Link href="#">ইসলামী জীবনধারা</Link></li>
        </ul>
      </div>
      
    </nav>
  
  )
}

export default page
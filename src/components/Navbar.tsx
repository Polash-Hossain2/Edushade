
"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="h-8" alt="logo" />
            <span className="font-semibold text-gray-800">
              TAIBA ACADEMY
            </span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">

            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-600 outline-none">
                Courses <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40">
                <DropdownMenuItem>
                  <Link href="/courses/medical">Medical</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/engineering">Engineering</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/islamic">Islamic</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </li>

            <li>
              <Link href="/books" className="hover:text-blue-600">
                Books
              </Link>
            </li>

            <li>
              <Link href="/blogs" className="hover:text-blue-600">
                Blogs
              </Link>
            </li>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-green-600 outline-none">
                More <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-36">
                <DropdownMenuItem>
                  <Link href="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/faq">FAQ</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search course..."
                className="bg-transparent outline-none px-2 text-sm w-36"
              />
            </div>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium flex items-center gap-1">
              Let's Get Started →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
  
export default Navbar


//  <div className="w-full bg-white border-b h-8">
//         <div className="max-w-7xl mx-auto bg-gray-200 ">
//           <div className="flex  items-center justify-between  p-2 ">
//              <div className=''>
//                 <Image
//                  src="/Taibah.svg"
//                  alt="menu"
//                  width={20}
//                  height={20}
//                  className=" w-34 h-16 ml-8" 
//              />
//              </div>
//              <div className='flex gap-0  '>
            
//                <div className='flex  gap-4 pl-6'>
//                   <Link href="/" className="hover:text-blue-600 text-[18px]">
//                   Home
//                  </Link>


// <div className="w-full bg-white border-b h-8">
//         <div className="max-w-7xl mx-auto bg-gray-200 ">
//           <div className="flex  p-2 ">
//              <div className=''>
//                 <Image
//                  src="/Taibah.svg"
//                  alt="menu"
//                  width={20}
//                  height={20}
//                  className=" w-34 h-16 ml-8" 
//              />
//              </div>
//              <div className='flex gap-0  '>
            
//                <div className='flex items-center justify-between  gap-4 pl-6'>
//                   <Link href="/" className="hover:text-blue-600 text-[18px]">
//                   Home
//                  </Link>

//                  <Link href="/courses" className="hover:text-blue-600 flex items-center text-[18px]">
//                   Courses
//                    <GoChevronDown />
//                   </Link>

//                    <Link href="/books" className="hover:text-blue-600 text-[18px]">
//                    Books
//                   </Link>

//                  <Link href="/blogs" className="hover:text-blue-600 text-[18px]">
//                    Blogs
//                  </Link>

//                  <Link href="/more" className="hover:text-blue-600 flex items-center gap-1 text-[18px]">
//                    More
                 
//                   </Link>
//                   <div className="flex ">
//                          <h1 className=' '>sidujsd</h1>
//                          <p className=' '>difh</p>
//                      </div>
//                </div>
                      
//              </div>
//           </div>
//         </div>s
//      </div>
//    </nav>
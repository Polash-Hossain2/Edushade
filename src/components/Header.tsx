"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import { GoChevronRight } from "react-icons/go";
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const isCoursesActive =
  pathname === "/courses/sahih" ||
  pathname === "/courses/akhlaq" ||
  pathname === "/courses/arabic";

const isMoreActive =
  pathname === "/more/batch" ||
  pathname === "/more/student" ||
  pathname === "/more/review";

  return (
<nav className="sticky top-0 z-50  w-full bg-white">
  <div className='max-w-7xl mx-auto px-4'>
    <div className='flex items-center justify-between h-16'>
      <div className='flex items-center gap-4 ml-8'>
         <Link href="/"  className='cursor-pointer'>
         <Image
                src="/Taibah.svg"
                alt="menu"
                width={20}  
                height={20}
                className=" w-34 h-16 ml-8" 
            />
            </Link>
      </div>
      <ul className="absolute justify-end left-[18%] hidden md:flex items-center gap-5 text-[15px] font-medium text-gray-600 ml-10">
        <li>
          <Link href="/"
           className={`px-3 py-2 rounded-md ${
           pathname === "/"
            ? "text-green-600"
            : "text-gray-600 hover:text-green-600"
         }`}
        >
          Home
          </Link>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 cursor-pointer"
              >
                <span
                  className={`px-3 py-2 rounded-md ${
                    isCoursesActive
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  Courses
                </span>
                <GoChevronDown />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-36">
              <DropdownMenuItem asChild>
                <Link href="/courses/sahih">Sahih Hadith</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/courses/akhlaq">Akhlaq</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/courses/arabic">Arabic</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Link href="/about"
           className={`px-3 py-2 rounded-md ${
            pathname === "/about"
            ? "text-green-600"
            : "text-gray-600 hover:text-green-600"
          }`}
         >
              About
          </Link>
        </li>
        <li>
          <Link
              href="/blogs"
              className={`px-3 py-2 rounded-md ${
              pathname === "/blogs"
              ? "text-green-600"
              : "text-gray-600 hover:text-green-600"
             }`}
            >
             Blogs
           </Link>
        </li>
        <li>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 pl-2"
                >
                  <span
                    className={`px-3 py-2 rounded-md ${
                      isMoreActive
                        ? "text-green-600"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    More
                  </span>
                  <GoChevronDown
                    className={isMoreActive ? "text-green-600" : "text-gray-600"}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36">
                <DropdownMenuItem asChild>
                  <Link href="/more/batch">Batch</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/more/student">Student</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/more/review">Review</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
          </li>
      </ul>
      <div className="absolute left-[68%] flex items-center gap-4">
        <div className='hidden md:flex items-center bg-gray-100 rounded-sm px-2 py-1 h-8 w-[70%]'>
             <Link href="/" className="">
                <CiSearch size={18} className="text-gray-400" />
             </Link>
              <input
                type="text"
                placeholder="Search course..."
                className="bg-transparent outline-none px-2 text-sm w-36"
              />
        </div>
           <Button variant="ghost" className='h-8 disabled:cursor-not-allowed w-[45%]
                bg-cyan-600 text-[12px] text-white font-bold hover:bg-cyan-600  
                 font-sans rounded-sm hover:text-white-600'>
                  <Link href="/" className="hover:text-white-600">
              Let's Get Started 
          </Link>
          <GoChevronRight className='text-[12px]' />
         </Button>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Header
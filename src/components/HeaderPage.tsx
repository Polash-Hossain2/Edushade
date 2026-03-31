"use client"
import React from 'react'

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { 
   NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
 } from './ui/navigation-menu';
 import { cn } from "@/lib/utils"
import { Label } from '@radix-ui/react-dropdown-menu';
import { usePathname } from 'next/navigation';
import { GoArrowUpRight  } from "react-icons/go";

import { useState } from "react"
import { ChevronDown } from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
  FiBookOpen,
  FiGrid,
  FiFileText,
  FiRefreshCw,
  FiPlayCircle,
  FiHeadphones,
} from "react-icons/fi"
import { IoDocumentText } from "react-icons/io5";

 const nav = [

  {id : "Features",
    items : [
    { id: "Overview", label: "/courses" },
    { id: "Overview-one", label: "/" },
    { id: "Security", label: "/cohorts"},
   ],
  },
  {
    id : "Resources",
    items : [ 
      { id : "Documentation",  icon: <IoDocumentText />, label: "/recorded", },
      { id : "Integrations", label: "/class"},
      { id : "Blog", label: "/blog"},
      { id : "Changelog", label: "/changelog"},
      { id : "Videos", label: "/videos"},
      { id : "Help Center", label: "/help-center"},
    ],
  },
  {
    id : "Pricing",
    items : [
      { id : "Blog", label: "/class"},
      { id : "Docs", label: "/clas"},
      { id : "Help Center", label: "/help"},
    ],
  },
 ]

function HeaderPage() {
  const pathname = usePathname()
   const [showDemo, setShowDemo] = useState(false)
  return (
    <header className='sticky top-0 z-10 w-full border-b bg-white'>
      <div className='ml-4 mx-auto flex h-16 max-w-7xl items-center justify-between px-4'>
         <div className='gap-2 '>
           <Link href="/"  className='cursor-pointer flex items-center'>
           <Image
                src="/Logo_Image.png"
                alt="logo_image"
                width={50}  
                height={50} 
                className='mt-3'
            />
            <span className='flex font-semibold sm:text-lg md:text-2xl lg:text-3xl text-gray-700 hover:text-gray-900'>Edushade</span>
          </Link>
         </div>
         <nav className="hidden md:flex items-center gap-3">
            {nav.map((group) => (
              <NavigationMenu key={group.id}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 bg-transparent cursor-pointer px-3 sm:text-xs md:text-sm lg:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                      {group.id}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="p-2">
                      <ul className="min-w-[13rem] space-y-1 sm:text-xs md:text-sm lg:text-sm cursor-pointer">
                        {group.items.map((item) => {
                          const active = pathname === item.label
                          return (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.label}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
                                    active && "bg-slate-50 text-slate-900"
                                  )}
                                >
                                  {item.id}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}

            <Link
              href="/"
              className={cn(
                "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                pathname === "/" && "bg-slate-50 text-slate-900"
              )}
            >
              Contact Sales
            </Link>

            <Button className="border-gray-300 border rounded-full px-5 bg-white text-gray-700 hover:bg-white cursor-pointer">
              Sign In
            </Button>
         </nav>

          <div className="flex items-center gap-2">
      {!showDemo ? (
        <Button
          onClick={() => setShowDemo(true)}
          className="rounded-full px-5 bg-sky-700 hover:bg-sky-800 cursor-pointer"
        >
          Talk to Sales <GoArrowUpRight className="ml-1" />
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full px-5 bg-sky-700 hover:bg-sky-800 cursor-pointer">
              Request a Demo <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-52 rounded-2xl p-2">
            <DropdownMenuItem asChild>
              <Link href="/features">All Features</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/courses">Courses</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/pricing">Pricing</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/contract">Contact Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
      </div>

    </header>
  )
}

export default HeaderPage
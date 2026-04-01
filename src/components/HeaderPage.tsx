"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import { GoArrowUpRight } from "react-icons/go"
import { ChevronDown, Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const nav = [
  {
    id: "Features",
    items: [
      { id: "Overview", label: "/courses" },
      { id: "Overview-one", label: "/" },
      { id: "Security", label: "/cohorts" },
    ],
  },
  {
    id: "Resources",
    items: [
      { id: "Documentation", label: "/recorded" },
      { id: "Integrations", label: "/class" },
      { id: "Blog", label: "/blog" },
      { id: "Changelog", label: "/changelog" },
    ],
  },
  {
    id: "Pricing",
    items: [
      { id: "Plans", label: "/pricing" },
      { id: "Help", label: "/help" },
    ],
  },
]

function HeaderPage() {
  const pathname = usePathname()
  const [showDemo, setShowDemo] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo_Image.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700">
              Edushade
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">

            {nav.map((group) => (
              <NavigationMenu key={group.id}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm">
                      {group.id}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="p-2">
                      <ul className="min-w-[12rem] space-y-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.label}
                                className={cn(
                                  "block px-3 py-2 rounded-md text-sm hover:bg-gray-100",
                                  pathname === item.label && "bg-gray-100"
                                )}
                              >
                                {item.id}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Contact Sales
            </Link>

            <Button variant="outline" className="rounded-full">
              Sign In
            </Button>
          </nav>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            {!showDemo ? (
              <Button
                onClick={() => setShowDemo(true)}
                className="rounded-full bg-sky-700 hover:bg-sky-800"
              >
                Talk to Sales <GoArrowUpRight className="ml-1" />
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full bg-sky-700 hover:bg-sky-800">
                    Request Demo <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/features">Features</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/pricing">Pricing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/contact">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4">

          {nav.map((group) => (
            <div key={group.id}>
              <h3 className="font-semibold text-gray-800 mb-2">
                {group.id}
              </h3>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.label}
                    className="block text-gray-600 hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.id}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link href="/contact" className="block text-gray-700">
            Contact Sales
          </Link>

          <Button className="w-full rounded-full bg-sky-700">
            Talk to Sales
          </Button>

          <Button variant="outline" className="w-full rounded-full">
            Sign In
          </Button>
        </div>
      )}
    </header>
  )
}

export default HeaderPage
import React from "react"
import Image from "next/image"
import Link from "next/link";
import {
   FaLinkedin ,
   FaInstagram,
    FaSnapchat,
    FaFacebookSquare
  } from "react-icons/fa";
  import { FaXTwitter } from "react-icons/fa6";

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 font-semibold text-white">{title}</h4>
      <ul className="space-y-2">
        {links.map((item) => (
          <li
            key={item}
            className="cursor-pointer text-slate-400 hover:text-white transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FooterPage() {
  return (
    <footer className="relative overflow-hidden bg-black text-slate-300 h-142">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-indigo-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0  bg-gradient-to-t from-indigo-900/40 via-indigo-900/20 to-transparent" />
         <div className="pointer-events-none absolute inset-x-0 bottom-[-2.1rem] z-0 flex justify-center -translate-y-8.5 ">
          <Image
            src="/Edushade_bg.png"
            alt="Edushade watermark"
            width={1000}
            height={50}
            priority
            className="
              max-w-none
              w-[56.2rem] md:w-[56.2rem] lg:w-[71.8rem] lg:h-[9.62rem]
              opacity-[0.6]
              blur-[0.1px]
              saturate-0
            "
          />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-sm translate-x-8">
          <FooterCol title="Products" links={["Student Panel", "Teacher Panel", "Admin Panel", "Pricing", "Security"]} />
          <FooterCol title="Use Cases" links={["For Tutors", "For Educators", "For Academies", "For Schools & Universities", "For Training Teams"]} />
          <FooterCol title="Resources" links={["Resource Center", "Guides & How-To", "Product Updates", "Comparisons", "FAQs"]} />
          <FooterCol title="Company" links={["About Edushade", "Careers", "Contact", "Press"]} />
          <FooterCol title="Legal" links={["Terms of Service", "Privacy Policy", "Cookie Policy"]} />
        </div>

        <div className="my-13 h-px bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 ">
          <div className="flex items-center gap-5 ml-8 leading-tight ">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

          <p className="leading-tight ">Copyright © 2025 Edushade. All rights reserved.</p>

          <div className="flex items-center gap-3 text-3xl">
            <Link href="#"><span className="h-8 w-8 rounded-md bg-white/10" ><FaLinkedin /></span></Link>
            <Link href="#"><span className="h-8 w-8 rounded-md bg-white/10" ><FaInstagram /></span></Link>
            <Link href="#"><span className="h-8 w-8 rounded-md bg-white/10" ><FaXTwitter /></span></Link>
            <Link href="#"><span className="h-8 w-8 rounded-md bg-white/10" ><FaFacebookSquare /></span></Link>
            <Link href="#"><span className="h-8 w-8 rounded-md bg-white/10" ><FaSnapchat /></span></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaLinkedin,
  FaInstagram,
  FaSnapchat,
  FaFacebookSquare,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 font-semibold text-white text-sm md:text-base">
        {title}
      </h4>

      <ul className="space-y-2">
        {links.map((item) => (
          <li
            key={item}
            className="text-slate-400 hover:text-white cursor-pointer transition"
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
    <footer className="relative overflow-hidden bg-black text-slate-300">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-indigo-950" />

      {/* watermark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src="/Edushade_bg.png"
          alt="Edushade watermark"
          width={1000}
          height={80}
          className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] opacity-50"
        />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          <FooterCol
            title="Products"
            links={[
              "Student Panel",
              "Teacher Panel",
              "Admin Panel",
              "Pricing",
              "Security",
            ]}
          />

          <FooterCol
            title="Use Cases"
            links={[
              "For Tutors",
              "For Educators",
              "For Academies",
              "For Schools",
              "For Training Teams",
            ]}
          />

          <FooterCol
            title="Resources"
            links={[
              "Resource Center",
              "Guides",
              "Product Updates",
              "Comparisons",
              "FAQs",
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              "About Edushade",
              "Careers",
              "Contact",
              "Press",
            ]}
          />

          <FooterCol
            title="Legal"
            links={[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
            ]}
          />
        </div>

        {/* divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* bottom section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-400">

          {/* left links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>

          {/* copyright */}
          <p className="text-center">
            Copyright © 2025 Edushade. All rights reserved.
          </p>

          {/* social icons */}
          <div className="flex gap-4 text-xl">

            <Link href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <FaLinkedin />
            </Link>

            <Link href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <FaInstagram />
            </Link>

            <Link href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <FaXTwitter />
            </Link>

            <Link href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <FaFacebookSquare />
            </Link>

            <Link href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <FaSnapchat />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}
"use client"

import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const books = [
  { img: "/thumb-1.png", title: "Book 1" },
  { img: "/thumb-2.png", title: "Book 2" },
  { img: "/thumb-3.png", title: "Book 3" },
  { img: "/thumb-4.png", title: "Book 4" },
  { img: "/thumb-1.png", title: "Book 1" },
  { img: "/thumb-2.png", title: "Book 2" },
  { img: "/thumb-3.png", title: "Book 3" },
  { img: "/thumb-4.png", title: "Book 4" },
]

const VISIBLE = 4
const CARD_WIDTH = 260
const GAP = 24 // tailwind gap-6 = 24px

export default function Carousel() {
  const [pos, setPos] = useState(0)
  const prev = () => pos > 0 && setPos(pos - 1)
  const next = () => pos < books.length - 4 && setPos(pos + 1)
  return (
    <div className="relative max-w-6xl mx-auto px-6">

      {/* LEFT */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        <FaChevronLeft />
      </button>

      {/* VIEW */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${pos * (CARD_WIDTH + GAP)}px)`
          }}
        >
          {books.map((b, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white rounded-xl shadow p-4"
            >
              <img
                src={b.img}
                className="w-full h-60 object-cover rounded-lg"
              />

              <h3 className="mt-3 font-semibold">{b.title}</h3>

              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold text-emerald-600">৳320</span>
                <button className="text-xs bg-gray-100 px-3 py-1 rounded">
                  কার্টে যোগ করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

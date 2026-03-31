"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const items = [
  "Courses",
  "Analytics",
  "Cohorts",
  "Quizzes",
  "Live Exam",
  "Live Class",
  "Recorded",
  "Problem Solving",
  "PDFs",
]

function Chip({
  children,
  active,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <span
      className={[
        "relative inline-flex items-center px-4 py-1.5 text-sm",
        "rounded-full border bg-white",
        active ? "border-transparent chip-snake" : "border-gray-200",
      ].join(" ")}
    >
      {/* spinning ring শুধু active chip এ */}
      {active && (
        <span
          className="absolute inset-0 rounded-full"
          style={{ animation: "chipSpin 40s linear infinite" }}
        />
      )}

      {/* content (ring এর উপর যেন থাকে) */}
      <span className="relative z-10 text-gray-700">{children}</span>
    </span>
  )
}

export default function ChipsSnake() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % items.length)
    }, 40_000) // প্রতি chip 40s করে
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((label, i) => (
        <Link key={label} href="#">
          <Chip active={i === activeIndex}>{label}</Chip>
        </Link>
      ))}
    </div>
  )
}

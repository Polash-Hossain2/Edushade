import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Taibah Academy"
              width={32}
              height={32}
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-800">
                أكاديمية طيبة
              </p>
              <p className="text-[11px] text-gray-500 uppercase">
                Taibah Academy
              </p>
            </div>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/courses" className="hover:text-blue-600 flex items-center gap-1">
              Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link href="/books" className="hover:text-blue-600">
              Books
            </Link>

            <Link href="/blogs" className="hover:text-blue-600">
              Blogs
            </Link>

            <Link href="/more" className="hover:text-blue-600 flex items-center gap-1">
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="hidden sm:flex items-center border rounded-full px-3 h-9 bg-gray-50">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="text"
                placeholder="Search course..."
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>

            {/* CTA */}
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm px-4 h-9 rounded-full flex items-center hover:opacity-90"
            >
              Let's Get Started
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

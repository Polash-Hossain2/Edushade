import React from 'react'

function page() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 p-[2px]">
  
  <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2">
    
    <div className="flex -space-x-2">
      <img className="w-6 h-6 rounded-full border" src="/avatar1.jpg" />
      <img className="w-6 h-6 rounded-full border" src="/avatar2.jpg" />
      <img className="w-6 h-6 rounded-full border" src="/avatar3.jpg" />
    </div>

    <span className="text-sm font-medium">
      Trusted by 12,000+ creators
    </span>

    <span className="text-gray-500">›</span>

  </div>

</div>
  )
}

export default page
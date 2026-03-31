<footer className="relative bg-black text-white">
  {/* Background Image */}
    <div
         className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20"
        style={{
        backgroundImage: "url('/images/taibah-bg.png')",
        }}
      />

  {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
    {/* Logo + info */}
           <div>
              <h3 className="text-xl font-semibold">TAIBAH ACADEMY</h3>
              <p className="mt-4 text-sm text-gray-400">
               Dhaka, Bangladesh
               </p>
           </div>

      <div>
        <h4 className="mb-4 font-semibold">Quick Links</h4>
           <ul className="space-y-2 text-gray-400">
            <li>Live Batch</li>
           <li>Courses</li>
             <li>Student Review</li>
             <li>FAQ</li>
           </ul>
      </div>

       <div>
           <h4 className="mb-4 font-semibold">Legal</h4>
           <ul className="space-y-2 text-gray-400">
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
           </ul>
       </div>

      <div>
           <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Career</li>
             </ul>
       </div>

         <div>
           <h4 className="mb-4 font-semibold">Connect with Us</h4>
            <div className="flex gap-3">
              <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">F</span>
              <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">T</span>
              <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">in</span>
            </div>
         </div>
     </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          © 2025 Taibah Academy. All rights reserved.
      </div>
</footer>

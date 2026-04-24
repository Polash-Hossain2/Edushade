"use client";

import { useEffect, useState } from "react";

type Contact = {
  title: string;
  desc: string;
  email: string;
};

export default function Home() {
  const [data, setData] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("lib/api/contract")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-16 px-6">
      
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm bg-gray-200 px-4 py-1 rounded-full mb-4">
          Contact Us
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Let’s Start the Conversation
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Have a question, idea, or need support? Reach out to our team and
          we’ll get back to you shortly.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700">
          Start the Conversation
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-lg rounded-xl p-6 shadow-md"
          >
            <h2 className="font-semibold text-lg mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              {item.desc}
            </p>

            <p className="text-blue-600 text-sm underline cursor-pointer">
              {item.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
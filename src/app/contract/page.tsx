

"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "How is Edushade different from other LMS platforms?",
    answer:
      "Edushade provides flexible learning tools, analytics, and seamless integration for modern education systems.",
  },
  {
    id: 2,
    question: "Does Edushade support live classes and recorded content?",
    answer:
      "Yes. You can run live sessions, upload recorded lessons, and combine both into structured learning programs.",
  },
  {
    id: 3,
    question: "Can I manage multiple instructors or teachers?",
    answer:
      "Yes, you can manage multiple instructors with role-based access and permissions.",
  },
  {
    id: 4,
    question: "How does learner progress tracking work?",
    answer:
      "Track student progress with real-time analytics and performance dashboards.",
  },
  {
    id: 5,
    question: "Is Edushade suitable for schools and universities?",
    answer:
      "Yes, it is designed for institutions, training centers, and universities.",
  },
  {
    id: 6,
    question: "Can I start small and upgrade later?",
    answer:
      "Yes, you can start with a basic plan and upgrade anytime.",
  },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(2)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-6">

      {faqData.map((faq) => {
        const isOpen = openId === faq.id

        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all  
            ${isOpen ? "bg-gray-100 shadow-sm" : "bg-white"}`}
          >
            {/* Header */}
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="text-[17px] font-medium text-gray-800">
                {faq.question}
              </h3>

              <div
                className={`w-8 h-8 flex items-center justify-center rounded-md transition
                ${isOpen ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 pb-6 px-6" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}

    </div>
  )
}

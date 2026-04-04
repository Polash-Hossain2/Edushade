"use client"
import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { LuPencilLine } from "react-icons/lu";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaDiamondTurnRight } from "react-icons/fa6";
import { TbMessageUser } from "react-icons/tb";
import { PiPath } from "react-icons/pi";
import { TbMessageExclamation } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";

const items = [
  {
    title: "Course Builder",
    desc: "Organize lessons, modules, and sections into a clear structure, easy to manage.",
    icon: LuPencilLine,
  },
  {
    title: "Flexible Lesson Types",
    desc: "Combine video, text, slides, and documents to match different styles.",
    icon: FaEnvelopeOpenText,
  },

  {
    title: "Prerequisite Logic",
    desc: "Unlock lessons only after required content is completed.",
    icon: FaDiamondTurnRight,
  },
  {
    title: "Certificates",
    desc: "Automatically recognize course completion with certificates.",
    icon: TbMessageUser,
  },
  {
    title: "Learning Paths",
    desc: "Arrange lessons in a logical sequence that guides learners through the material.",
    icon: TbMessageExclamation,
  },
  {
    title: "Assignments & Quizzes",
    desc: "Reinforce learning with tasks and assessments that.",
    icon: MdOutlineMessage,
  },
]
const faqs = [
  {
    question: "What types of assessments can I create?",
    answer: "Organize lessons, modules, and sections into a clear structure, easy to manage.",
  },
  {
    question: "Can I use more than one assessment type in a course?",
    answer: "Organize lessons, modules, and sections into a clear structure, easy to manage.",
  },
   {
    question: "Can learners submit files or media?",
    answer: "Organize lessons, modules, and sections into a clear structure, easy to manage.",
  },
   {
    question: "Can I control when an assessment becomes available?",
    answer: "Organize lessons, modules, and sections modules, and sections into a clear structure, easy to manage.",
  },
  {
    question: "Can assessments be reused across courses?",
    answer: "Organize lessons, modules, and sections modules, and sections into a clear structure, easy to manage.",
  },
   {
    question: "Can I provide feedback to learners after submission?",
    answer: "Organize lessons, modules, and sections modules, and sections into a clear structure, easy to manage.",
  },


]

function page() {
 const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className=''>
           <Image 
            src="/Container 11.png"
            alt="lernars"
            width={1280}
            height={600}
            className="rounded-lg"
           />
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold text-gray-900 sm:text-4xl'>
            What Courses Lets You Do
          </h2>
          <p className='text-base text-gray-500 mt-4'>
            Edushade is designed by starting with how educators plan, teach, and support learners.
             Every part of the <br/> platform follows real instructional needs, not predefined software workflows.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {items.map((item, index) => {
               const Icon = item.icon
                 return (
                    <div
                      key={index}
                        className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                      >
                        <div className=" items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
                            <Icon className="h-10 w-10 text-blue-600 border rounded-lg" />
                          </div>
                        <div>
                       <h3 className="text-xl font-semibold text-gray-900 mt-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xl leading-6 text-gray-600">
                  {item.desc}
                </p>
               </div>
             </div>
            </div>
          )
          })}
        </div> 
      </div>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          <div className='rounded-lg'>
            <Image
              src="/Right Section32.png"
              alt="Right Section32"
              width={540}
              height={300}
             />
          </div>
          <div className='mt-5'>
            <h2 className='text-3xl leading-normal font-semibold tracking-tight text-gray-900 sm:text-4xl'>
              Choose the course type <br/> that fits your goals
            </h2>
            <p className='text-base text-gray-500 mt-7'>
               Design organized courses that guide learners step by step.<br/> Edushade gives
               educators full control over lessons, progression,<br/> and completion without 
               turning course setup into a technical task.
            </p>
            <p className='flex mt-7 gap-2 text-base text-gray-500'>
              <span className='mt-1.5'><IoMdCheckmark /></span>
              Build structured courses with lessons, modules, and sections
            </p>
             <p className='flex mt-3 gap-2 text-base text-gray-500'>
              <span className='mt-1.5'><IoMdCheckmark /></span>
              Support self-paced and cohort-based course formats
            </p>
             <p className='flex mt-3 gap-2 text-base text-gray-500'>
              <span className='mt-1.5'><IoMdCheckmark /></span>
              Control learner progression with prerequisites and completion rules
            </p>
             <p className='flex mt-3 gap-2 text-base text-gray-500'>
              <span className='mt-1.5'><IoMdCheckmark /></span>
              Deliver consistent learning experiences at any scale
            </p>
            <div className='mt-10'>
              <Button
                className='
                bg-sky-800
                hover:bg-sky-900
                cursor-pointer
                '
              >
                Get started
              </Button>
            </div>
          </div>
        </div>

      </div>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
         <div className='mt-8'>
          <h2 className='text-3xl leading-snug font-semibold  text-gray-900 sm:text-4xl'>
            Multiple Assessment <br/> Types for Better Learning
          </h2>
          <p className='text-base text-gray-500 mt-4'>
            Edushade lets educators evaluate understanding through quizzes,<br/>
             assignments, reflections, and more, without adding 
             friction to the<br/> course flow.
          </p>
          <div className='text-base text-gray-500 mt-6'>
            <p className='flex gap-1.5'>
              <span className='mt-5'><IoMdCheckmark />  </span>
              <span className='text-base text-gray-500 mt-4'>Quizzes for quick knowledge checks </span>
            </p>
            <p className='flex gap-1.5'>
              <span className='mt-5'><IoMdCheckmark />  </span>
              <span className='text-base text-gray-500 mt-4'>Assignments for deeper learning and practice</span>
            </p>
             <p className='flex gap-1.5'>
              <span className='mt-5'><IoMdCheckmark />  </span>
              <span className='text-base text-gray-500 mt-4'>Reflections and written responses</span>
            </p>
            <p className='flex gap-1.5'>
              <span className='mt-5'><IoMdCheckmark />  </span>
              <span className='text-base text-gray-500 mt-4'>Media-based submissions for flexible expression</span>
            </p>
          </div>
          <div className='mt-8'>
            <Button
                className='
                bg-sky-800
                hover:bg-sky-900
                cursor-pointer
                '
              >
                Get started
              </Button>
          </div>
         </div>
         <div className='rounded-lg'>
          <Image
              src="/Right Section111.png"
              alt="Right Section32"
              width={580}
              height={270}
             />
         </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <div className='rounded-lg'>
             <Image
              src="/Right Section444.png"
              alt="Right Section32"
              width={520}
              height={270}
             />
          </div>
          <div className='mt-8 ml-8'>
            <h2 className='text-3xl leading-snug font-semibold  text-gray-900 sm:text-4xl'>
              Manage Course <br/> Instructors with Ease
            </h2>
            <p className='text-base text-gray-500 mt-4'>
              Select, assign, and manage instructors across your courses.<br/> 
              Edushade keeps roles clear so teams can focus on delivering <br/> quality learning.
            </p>
            <div className='text-base text-gray-500 mt-8'>
              <p className='flex gap-1.5 '>
                <span className='mt-1 text-xl '><IoMdCheckmark /></span> 
                <span>Support single or multi-instructor courses</span>
              </p>
              <p className='flex gap-1.5 mt-3.5'>
                <span className='mt-1 text-xl '><IoMdCheckmark /></span> 
                <span>Role-based access for instructors and assistants</span>
              </p>
              <p className='flex gap-1.5 mt-3.5'>
                <span className='mt-1 text-xl '><IoMdCheckmark /></span> 
                <span>Clear ownership over course content</span>
              </p>
              <p className='flex gap-1.5 mt-3.5'>
                <span className='mt-1 text-xl '><IoMdCheckmark /></span> 
                <span>Smooth collaboration at scale</span>
              </p>
            </div>
            <div className='mt-8'>
            <Button
                className='
                bg-sky-800
                hover:bg-sky-900
                cursor-pointer
                '
               >
                Get started
              </Button>
          </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='text-center'>
          <h2 className='text-3xl leading-snug font-semibold text-gray-900 sm:text-4xl'>
            Start a Course in 60 Seconds
          </h2>
          <p className='mt-5 text-base text-gray-500'>
            Create, structure, and publish your course in three simple steps. No technical setup,
             no complex <br/> configuration. A quick, three-step process to get your course live.
          </p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          <div className='mt-8'>
            <div className=''>
              <h3 className='text-center '>
                 <Button
                className='
                border-2
                w-8
                h-8
                text-black
                rounded-full
                bg-gray-200
                hover:bg-gray-300
                cursor-pointer
                '
               >
                1
              </Button>
              </h3>
              <div className='mt-5'>
                
                <Image
                src="/Right Section55.png"
                alt="Right Section32"
                width={520}
                height={270}
              />
              </div>
            </div>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Create your course
              </h2>
              <p className='text-base text-gray-500 mt-2'>
                Add a course title and outline your lessons in <br/> seconds.
              </p>
            </div>

          </div>
          <div className='mt-8'>
            <div className=''>
              <h3 className='text-center '>
                 <Button
                className='
                border-2
                w-8
                h-8
                text-black
                rounded-full
                bg-gray-200
                hover:bg-gray-300
                cursor-pointer
                '
               >
                2
              </Button>
              </h3>
              <div className='mt-5'>
                
                <Image
                src="/Right Section333.png"
                alt="Right Section32"
                width={520}
                height={270}
              />
              </div>
            </div>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Add lessons and structure
              </h2>
              <p className='text-base text-gray-500 mt-2'>
                Upload content, organize modules, and set <br/> progression rules.
              </p>
            </div>

          </div>
           <div className='mt-8'>
            <div className=''>
              <h3 className='text-center '>
                 <Button
                className='
                border-2
                w-8
                h-8
                text-black
                rounded-full
                bg-gray-200
                hover:bg-gray-300
                cursor-pointer
                '
               >
                3
              </Button>
              </h3>
              <div className='mt-5'>
                
                <Image
                src="/Right Section342.png"
                alt="Right Section32"
                width={520}
                height={270}
              />
              </div>
            </div>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Publish and invite learners
              </h2>
              <p className='text-base text-gray-500 mt-2'>
                Make your course live and start enrolling <br/> students right away.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4'>
          <div className='mt-2 ml-3'>
            <h2 className='text-3xl leading-snug font-semibold text-gray-900 sm:text-4xl'>
              Frequently <br/> Asked Questions
            </h2>
            <p className='mt-6 text-base text-gray-500'>
              Answers to common questions about how Edushade works, pricing, <br/> and getting started.
            </p>
            <p className='mt-5 text-base text-gray-500'>
              Can’t find what you’re looking for?
            </p>
            <div className='mt-6'>
              <Button className='bg-blue-800 text-white hover:bg-blue-900 cursor-pointer'>
                Contact Support
              </Button>
            </div>
          </div>
          <div className='max-w-xl mx-auto space-y-3'>
            {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-4"
        > 
          {/* Question */}
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="font-medium text-gray-800">
              {faq.question}
            </span>

            {openIndex === index ? (
              <HiMinus className="h-5 w-5 text-blue-600 " />
            ) : (
              <FiPlus className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {/* Answer */}
          {openIndex === index && (
            <p className="mt-3 text-sm text-gray-600">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
      </div>
    </div>
  </div>
  <div className='mx-auto max-w-7xl px-8 py-8'>
    <div className=''>
       <Image
            src="/Container 543.png"
            alt="logo_image"
            width={1200}  
            height={450} 
           className='mt-3'
        />
    </div>
  </div>
  </section>
  )
}

export default page
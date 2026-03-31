"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";

import { PiStudentBold } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { PiArrowElbowLeftThin } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { Plus, Minus } from "lucide-react"

type Card = {
  title: string
  desc: string
  img: string
}



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



const originalCards: Card[] = [
  {
    title: "Smart Course Builder",
    desc: "Create engaging lessons with quizzes and assignments",
    img: "/Sidebar.png",
  },
  {
    title: "Progress Tracking",
    desc: "Visualize learner progress through modules and assessments.",
    img: "/Sidebar1.png",
  },
  {
    title: "Content Library",
    desc: "Access a variety of resources and materials for course creation.",
    img: "/Sidebar2.png",
  },
  {
    title: "Smart Course Builder",
    desc: "Create engaging lessons with quizzes and assignments",
    img: "/Sidebar.png",
  },
]

const cards1: Card[] = [...originalCards, ...originalCards]

const images = [
    "/Ellipse 22.png",
    "/headshot1.png",
    "/headshot2.png"
  ];

  const cards = [
  "/Card Container 1.png",
  "/Card Container 2.png",
  "/Card Container 3.png",
  "/Card Container 4.png",
]

  const items = [
  {
    id: "student",
    title: "Student",
    desc: "Learn and grow daily with engaging learning path",
    logo: <GiTeacher />,
  },
  {
    id: "teacher",
    title: "Teacher",
    desc: "Educate students effectively with the right tools",
   logo: <PiStudentBold />,
  },
  {
    id: "admin",
    title: "Admin",
    desc: "Manage the whole platform smoothly and confidently",
    logo: <GrUserAdmin />,
  },
]

  const chips = [
  "Courses",
  "Analytics",
  "Cohorts",
  "Quizzes",
  "Live Exam",
  "Live Class",
  "Recorded",
  "Problem Solving",
  "PDFs",
];
const partners =[
  { icon: "/vortex.png",   meta: "$5M+ funding raised" },
  { icon: "/velocity.png",   meta: "3x program growth" },
  { icon: "/synergy.png",   meta: "$2M+ revenue" },
  { icon: "/spectrum.png",  meta: "150+ educators" },
  { icon: "/vortex.png",   meta: "$5M+ funding raised" },
  { icon: "/velocity.png",   meta: "3x program growth" },
  { icon: "/synergy.png",   meta: "$2M+ revenue" },
  { icon: "/spectrum.png",  meta: "150+ educators" },
];
   

function Chip({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-4 py-1.5 text-sm",
        active
          ? "border-blue-200 bg-blue-50 text-blue-600"
          : "border-gray-200 bg-white text-gray-600",
      ].join(" ")}
    >
      {children}
    </span>
  )
}


export default function HomePage() {


  const [openId, setOpenId] = useState<number | null>(2)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

 
  const [index, setIndex] = useState<number>(0)
  const [transition, setTransition] = useState<boolean>(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  // 👉 reset without jump
  useEffect(() => {
    if (index === originalCards.length) {
      setTimeout(() => {
        setTransition(false)
        setIndex(0)
      }, 700) // same as duration

      setTimeout(() => {
        setTransition(true)
      }, 710)
    }
  }, [index])



  const images = ["/headshot0.png", "/headshot1.png", "/headshot2.png", "/headshot3.png"]
    const [selected, setSelected] = useState(images[0])
    const [active, setActive] = useState(0)
    
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % chips.length)
    }, 40000) //  each chip = 40 seconds

    return () => clearInterval(timer)
  }, [])

   const trackRef = useRef<HTMLDivElement>(null)
   const xRef = useRef(0)
   useEffect (() =>{
    const track  = trackRef.current
     if(!track) return
     const speed = window.innerWidth < 768 ? 0.2 : 0.4
     let rafId: number
     const animate = () => {
      xRef.current += speed
      const width = track.scrollWidth /2

      if (xRef.current >= width) {
        xRef.current = 0 
      }

      track.style.transform = `translateX(${-xRef.current}px)`
      rafId = requestAnimationFrame(animate)
     }

     rafId = requestAnimationFrame(animate)
     return () => cancelAnimationFrame(rafId)
   }, [])

   const [active1, setActive1] = useState("student")
   
     const activeItem = items.find(i => i.id === active1)

   
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = async () => {
    if (videoRef.current) {
      await videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const loopCards = [...cards, ...cards]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid items-center gap-4 lg:grid-cols-2 ml-4">
          
          <div className="ml-6">
            <div className=" inline-flex rounded-full bg-gradient-to-br from-pink-600 via-purple-600 to-emerald-500 p-0.5">
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2">

               <div className="inline-flex items-center gap-0">
                  <div className="flex -space-x-3">
                    {images.slice(1).map((img, index) => (
                      <Avatar
                        key={index}
                        className="border cursor-pointer hover:scale-105 transition"
                        onClick={() => setSelected(img)}
                      >
                        <AvatarImage src={img} />
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-gray-700 whitespace-nowrap">
                    Trusted by 12,000+ creators
                  </span>
                </div>
                <span className="text-gray-400 cursor-pointer "> <MdKeyboardArrowRight /></span>
              </div>
            </div>
            <h1 className="mt-7 text-4xl font-semibold leading-normal tracking-[-0.02em] text-gray-900">
              One platform for how
              <br />
              you actually teach
            </h1>

            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-gray-600">
              Courses, classrooms, communities, and coaching.
              <br />
              One platform that adapts to how you teach and scale.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button className="h-9 rounded-full px-6 text-sm shadow-md bg-blue-700 hover:bg-blue-800 cursor-pointer">
                Build Your Academy
              </Button>

              <button className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 underline decoration-dotted decoration-gray-400 underline-offset-4">
                <Link href="#">
                   <span className="inline-flex text-3xl h-9 w-9 items-center justify-center rounded-full
                    bg-white 
                    group-hover:bg-gray-50">
                  <FaRegPlayCircle className="text-xl"/>
                </span>
                </Link>
                Watch Demo
              </button>
            </div>

            <p className="mt-12 text-sm text-gray-500">
              You can compose your own learning model
            </p>

            <div className="mt-4 flex  flex-wrap gap-2">
                <Link href="/class"> <Chip >Courses  </Chip></Link>
                <Link href="/solving"> <Chip active>Analytics</Chip></Link>
                <Link href="#"> <Chip >Cohorts  </Chip></Link>
                <Link href="#"> <Chip >Quizzes  </Chip></Link>
                <Link href="#"> <Chip >Live Exam</Chip></Link>
                <Link href="#"> <Chip >Live Class</Chip></Link>
                <Link href="#"> <Chip >Recorded  </Chip></Link>
                <Link href="#"> <Chip >Problem Solving</Chip></Link>
                <Link href="#"> <Chip >PDFs      </Chip></Link>
            </div>
          </div>
         <div className="rounded-lg">
            <div className="rounded-lg border min-h-screen flex items-center justify-center
             bg-gradient-to-br from-[#6fa8dc] via-[white] to-[white] p-8">

            <div className="">
              <img src="/Libraries Container.png" className="rounded-xl" />
            </div>
        </div>

         </div>
        </div>
      </div>
    <div className="mx-auto max-w-7xl px-6 py-10 ml-8">
        {/* heading */}
        <p className="text-center  text-sm text-gray-500  ">We collaborate with over 250 Platforms</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          <div className="relative mt-10 overflow-hidden">
            <div ref={trackRef} className=" flex w-max gap-12  will-change-transform">
              {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-400">
                <div className="relative h-26 w-32 shrink-0 opacity-80">
                  <Image
                    src={p.icon}
                      alt="image"
                      width={190}
                      height={150}
                      className="object-contain grayscale"
                      />
                    </div>
                  <div className="leading-tight whitespace-nowrap">
                <div className="-ml-27 text-xs text-gray-400">{p.meta}</div>
              </div>         
            </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
   <div className="mx-auto max-w-7xl px-4 py-14 ml-3 ">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl ml-9">
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-800">
            Built for how you teach
          </h2>
          <p className="text-lg text-gray-700 mt-5">From solo creators to academies and universities, Edushade supports diverse teaching
             models with flexibility, clarity, and control.</p>
        </div>
         <Tabs defaultValue="creators" className="rounded-lg lg:w-auto mt-26  ">
           <TabsList className="h-12 w-full justify-between rounded-lg inset-ring-sidebar-border lg:w-[26.2rem] ">
              <TabsTrigger 
              value="creators"
              className="h-10 flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
               data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
               data-[state=active]:text-white data-[state=active] "
             >
                 <Link href="#">For Creators</Link>
              </TabsTrigger>

              <TabsTrigger
                value="academies"
                className="h-10 flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
               data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
               data-[state=active]:text-white data-[state=active]"
               >
               <Link href="#"> For Academies</Link>
              </TabsTrigger>

              <TabsTrigger
                  value="schools"
                  className="h-10 flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
                data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
                data-[state=active]:text-white data-[state=active]"
               >
                 <Link href="#" >For Schools</Link>
              </TabsTrigger>
           </TabsList>
         </Tabs>
      </div>
      <div className=" grid lg:grid-cols-2 items-center gap-8 mt-4 rounded-lg ml-8">
         <div className="">
           <Image 
            src="/Right Section321.png"
            alt="lernars"
            width={680}
            height={600}
            className="rounded-lg"
           />
         </div>
      <div className="relative h-110 w-150 rounded-lg overflow-hidden">
         <video
         ref={videoRef}
        className="h-full w-full object-cover"
        controls={isPlaying}
        onPause={handlePause}
          > 
          <source src="/Image_To_Animated_Video.mp4" type="video/mp4" />
         </video>
         {!isPlaying && (
         <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center "
         >
        <div className="  cursor-pointer p-2 flex items-center justify-center rounded-xl  transition">
         <p className="flex bg-white/20 text-white p-1 rounded-xl">
           <span className="mt-0.5 text-2xl"><MdOutlinePlayCircle /></span>
          <span className="">Watch Intro</span>
         </p>
         </div>
        </button>
        )}
      </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl p-4 ml-10 bg-gray-50 rounded-lg">
       <div className="grid lg:grid-cols-2 p-3 items-start justify-between gap-10 bg-gray-50 rounded-lg">
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-800 ml-3"> Everything you need for<br/> 
        your platform </h2>
        <p className="text-lg text-gray-700 ml-8"> We replaced the messy tech stack with a clean, all-in-one 
          <br/> engine. Create, market,
           and sell your courses without the 3 <br/> a.m. tech panic.</p>
      </div>
      <div className="mx-auto  overflow-hidden w-full py-10">
            <div
              className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${index * 25}%)` }}
            >
              {cards1.map((card: Card, i: number) => (
                <div key={i} className="w-1/4 flex-shrink-0 px-2">
                  <div className="bg-white  rounded-2xl shadow-lg p-3.5 text-center">
                   
                      <h2 className="text-lg font-semibold flex items-center justify-between ">
                      {card.title}
                      <span className="bg-gray-100 px-1.5 py-1.5 rounded-sm text-sm cursor-pointer mt-3"> <FaPlus /> </span>
                    </h2>
                    <p className="text-sm text-gray-500 text-start mt-3">
                      {card.desc}
                    </p>
                    <Image
                      src={card.img}
                      alt={card.title}
                      height={200}
                      width={300}
                      className="w-full  object-cover rounded-xl mb-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


     </div>

      <div className="max-w-7xl grid lg:grid-cols-2 gap-4 items-center py-8 ml-5">
         <div className="p-5  gap-3">
            <h1 className="text-4xl -mt-8 font-semibold">Personalized Experiences <br/>for Everyone</h1>
            <p className="text-sm text-gray-500 mt-4">Edushade offers tailored experiences for students, teachers, and<br/> admins, letting 
              each user quickly access the tools and insights that<br/> matter most to them.
            </p>

          <div className="space-y-8 mt-14">
              {items.map(item => {
                const isActive1 = active1 === item.id
                   return (
                      <button
                          key={item.id}
                          onClick={() => setActive1(item.id)}
                          className={[
                           "w-full flex items-start gap-4 p-4 rounded-xl  transition-all ",
                            isActive1
                                ? "bg-blue-50 border shadow-sm border-blue-200 rounded-xl " 
                                : "hover:bg-muted"
                            ].join(" ")}
                          >
                            <div
                              className={[
                                "h-10 w-10  flex items-center justify-center rounded-lg",
                                isActive1 ? "bg-blue-500 text-white" : "bg-muted "
                              ].join(" ")}
                            >
                              <span className=""><GrUserAdmin  /></span>
                            </div>
                        <div className="text-left">
                      <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                  {item.desc}
                </div>
             </div>
            </button>
            )
            })}
         </div>
         </div>
         <div className="rounded-lg">
           <Image
             src="/Right Section5.png"
             alt="Right Section5"
             width={580}
             height={20}
           />
         </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl -mt-8 font-semibold">Why educators loves Edushade</h2>
           <p className="text-sm text-gray-500 mt-4">Edushade is designed by starting with how 
              educators plan, teach, and support
              learners. Every part of the <br/> platform follows real instructional needs,
              not predefined software workflows.
           </p>
        </div> 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 p-2 ml-7">
           <Image
             src="/Container (4).png"
             alt="Right Section5"
             width={400}
             height={200}
            />
             <Image
             src="/Container (5).png"
             alt="Right Section5"
            width={400}
             height={20}
            />
             <Image
             src="/Container (6).png"
             alt="Right Section5"
             width={400}
             height={20}
            />
             <Image
             src="/Container (7).png"
             alt="Right Section5"
             width={400}
             height={20}
            />
             <Image
             src="/Container (8).png"
             alt="Right Section5"
             width={400}
             height={20}
            />
             <Image
             src="/Container (9).png"
             alt="Right Section5"
             width={400}
             height={20}
            />
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 space-y-2">
        <div className="grid grid-cols-2">
          <div className="p-3 ml-6 mt-30">
             <h2 className="text-4xl font-semibold">
                 Start Your EdTech <br/>
                 Platform in 60 Seconds 
             </h2>
             <p className="text-sm text-gray-500 mt-4">
               Set up your own learning platform without technical setup or long <br/> onboarding.
                Edushade gives you the structure so you can focus on <br/> building and teaching.
             </p> 
             <div className="mt-9">
                  <p className="flex ">
                  <span className="mt-1"><PiArrowElbowLeftThin /></span>
                <span className="text-sm text-gray-500"> No coding or integrations required</span>
                </p> 
                <p className="flex mt-2">
                  <span className="mt-1"><PiArrowElbowLeftThin /></span>
                  <span className="text-sm text-gray-500">Ready-to-use structure from day one</span>
                </p> 
                <p className="flex mt-2">
                  <span className="mt-1"><PiArrowElbowLeftThin /></span>
                  <span className="text-sm text-gray-500">Customize as you grow</span>
                </p> 
                <div className="mt-8">
                  <Button 
                    className="
                     w-full 
                     sm:w-auto 
                     md:w-1/3 
                     lg:w-1/4
                   bg-sky-700 text-sm
                   text-white font-bold
                   hover:bg-sky-800 
                   font-sans rounded-sm 
                  hover:text-white
                   cursor-pointer"
                  >
                    Get Started Free                     
                </Button>
                </div>
             </div>          
          </div>
           <div className="rounded-lg ">
            <Image
             src="/BG.png"
             alt="Right Section5"
             width={600}
             height={200}
            />
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 space-y-2">
        <div className="text-center ">
          <h2 className="text-4xl font-semibold">What educators say about Edushade</h2>
          <p className="text-sm text-gray-500 mt-4">Edushade is built for educators, focusing on how they plan, teach, and support students.
             The platform is tailored <br/> to instructional needs, not software.</p>
        </div>
        <div className=" p-8 ml-4">
          <Image
           src="/Frame.png"
           alt="Card Container a"
           width={1200}
           height={500}
         />
        </div>
        <div className="text-center">
          <Button 
             className="
             w-[8%]
             bg-gray-100 text-sm
            text-gray-700 font-bold
            hover:bg-gray-200
             font-sans rounded-sm 
            hover:text-gray-800
             cursor-pointer"
             >
                See More                     
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-lg p-5">
           <Image
           src="/Statistics Section.png"
           alt="Card Container a"
           width={1200}
           height={300}
         />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="ml-6">
          <h2 className="text-4xl font-semibold">Resource Center & Insights</h2>
          <p className="text-sm text-gray-500 mt-4">Thoughtful updates and practical insights on building and <br/>
           delivering modern learning experiences. 
           </p>
           <div className="text-right">
          <Button 
             className="
             w-[12%]
             bg-gray-100 text-sm
            text-gray-700 font-bold
            hover:bg-gray-200
             font-sans rounded-sm 
            hover:text-gray-800
             cursor-pointer"
             >
                Browse All Posts
                 <span className="text-right"><IoDocumentTextOutline /></span>         
          </Button>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ml-7">
          <div className="rounded-lg border-2 p-2 mt-5">
              <Image
                src="/Card Container t.png"
                alt="Card Container a"
                width={600}
                height={200}
              />
              <div className="p-3">
                <h2 className="text-2xl font-semibold">Designing Learning Systems From the <br/>
                 Educator’s Perspective</h2>
                 <p className="text-base text-gray-500 mt-4 line-clamp-2">
                   Why starting with educator intent leads to better learning outcomes and simpler
                    platforms. A clear comparison of system design, flexibility, and role-based experiences.
                 </p>
                 <div className="flex items-center justify-between mt-4">
                  <h1 className="">
                     <Tabs defaultValue="creators" className="rounded-lg lg:w-auto mt-2">
                        <TabsList className="h-10 w-full justify-between rounded-lg inset-ring-sidebar-border lg:w-[12.2rem] ">
                            <TabsTrigger 
                            value="creators"
                            className="h-10   flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
                            data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
                            data-[state=active]:text-white data-[state=active] "
                          >
                              <Link href="#">News</Link>
                            </TabsTrigger>

                            <TabsTrigger
                              value="academies"
                              className="h-10 w-[9%] flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
                            data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
                            data-[state=active]:text-white data-[state=active]"
                            >
                            <Link href="#"> Jan 31, 2026</Link>
                            </TabsTrigger>
                        </TabsList>
                      </Tabs>
                  </h1>
                  <h2 className="mt-3">
                <Button 
                  className="
                  w-[12%]
                  bg-gray-100 text-sm
                  text-gray-700 font-bold
                  hover:bg-gray-200
                  font-sans rounded-sm 
                  hover:text-gray-800
                  cursor-pointer"
                  >
                     
                      <span className="text-right"><LuPlus /></span>         
                </Button>
                  </h2>
                   
                 </div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-2  mt-4 rounded-lg bg-gray-50">
             <div>
               <Image
                src="/Card 22.png"
                alt="Card Container a"
                width={500}
                height={300}
              />
             </div>
              <div>
                <p className="text-xl mt-3 text-gray-900 ">
                Designing Learning Systems From the Educator’s Perspective
              </p>
              <h2 className="flex items-center justify-between mt-8">
                <Tabs defaultValue="creators" className="rounded-lg lg:w-auto mt-2">
                        <TabsList className="h-10 w-full justify-between rounded-lg inset-ring-sidebar-border lg:w-[12.2rem] ">
                            <TabsTrigger 
                            value="creators"
                            className="h-10   flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-black
                            data-[state=active]:from-sky-500 data-[state=active]:to-black-900
                            data-[state=active]:text-white data-[state=active] "
                          >
                              <Link href="#">Posts</Link>
                            </TabsTrigger>

                            <TabsTrigger
                              value="academies"
                              className="h-10 w-[9%] flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-black
                            data-[state=active]:from-sky-500 data-[state=active]:to-black-500
                            data-[state=active]:text-white data-[state=active]"
                            >
                            <Link href="#"> Jan 31, 2026</Link>
                            </TabsTrigger>
                        </TabsList>
                      </Tabs>
                <p>
                  <Button 
                  className="
                  w-[12%]
                  bg-gray-100 text-sm
                  text-gray-700 font-bold
                  hover:bg-gray-200
                  font-sans rounded-sm 
                  hover:text-gray-800
                  cursor-pointer"
                  >
                     
                    <span className="text-right"><LuPlus /></span>         
                </Button>
                </p>
              </h2>
             
              </div>
              <div>
                <Image
                src="/Card 22.png"
                alt="Card Container a"
                width={500}
                height={300}
              />
              </div>
              <div>
                <p className="text-xl mt-3 text-gray-900 ">
                Designing Learning Systems From the Educator’s Perspective
              </p>
              <h2 className="flex items-center justify-between mt-8">
                <Tabs defaultValue="creators" className="rounded-lg lg:w-auto mt-2">
                        <TabsList className="h-10 w-full justify-between rounded-lg inset-ring-sidebar-border lg:w-[12.2rem] ">
                            <TabsTrigger 
                            value="creators"
                            className="h-10   flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
                            data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
                            data-[state=active]:text-white data-[state=active] "
                          >
                              <Link href="#">Update</Link>
                            </TabsTrigger>

                            <TabsTrigger
                              value="academies"
                              className="h-10 w-[9%] flex-1 rounded-lg text-sm font-medium text-zinc-700 data-[state=active]:bg-gradient-to-b
                            data-[state=active]:from-sky-500 data-[state=active]:to-blue-500
                            data-[state=active]:text-white data-[state=active]"
                            >
                            <Link href="#"> Jan 31, 2026</Link>
                            </TabsTrigger>
                        </TabsList>
                      </Tabs>
                <p>
                  <Button 
                  className="
                  w-[12%]
                  bg-gray-100 text-sm
                  text-gray-700 font-bold
                  hover:bg-gray-200
                  font-sans rounded-sm 
                  hover:text-gray-800
                  cursor-pointer"
                  >
                     
                    <span className="text-right"><LuPlus /></span>         
                </Button>
                </p>
              </h2>
             
              </div>
              <div className="col-span-2">
                 <Image
                   src="/Frame 10.png"
                   alt="Card Container a"
                   width={1000}
                   height={500}
                   className="w-full"
                 />
              </div> 
          </div>

        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ml-10">
            <h2 className="text-3xl font-semibold"> Frequently <br/> Asked Questions</h2>
            <p className="text-base mt-6 text-gray-900">Answers to common questions about how Edushade works,
               pricing,<br/> and getting started.
            </p>
            <p className="text-base mt-6 text-gray-900">Can’t find what you’re looking for?</p>
            <div className="mt-6">
              <Button className="bg-blue-700 hover:bg-blue-800">
                <Link href="">Contact Support</Link>
              </Button>
            </div>
          </div>
        
        <div className=" mx-auto space-y-4 p-6">
              {faqData.map((faq) => {
                const isOpen = openId === faq.id
        
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all  
                    ${isOpen ? "bg-gray-100 " : "bg-white"}`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <h3 className="text-base font-medium text-gray-800">
                        {faq.question}
                      </h3>
        
                      <div
                        className={`w-8 h-8 flex items-center justify-center  rounded-md transition
                        ${isOpen ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
                      >
                        {isOpen ? <Minus size={16} className="cursor-pointer" /> : <Plus size={16} className="cursor-pointer" />}
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

        </div>
      </div>
    </section>
  )
}

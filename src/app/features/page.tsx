import React from 'react'
import Image from "next/image"
import { PiStudent } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { PiPath } from "react-icons/pi";
import { FcBusinessman } from "react-icons/fc";
import { TiMessages } from "react-icons/ti";
import { LuMessageCircleMore } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { FaUserCog } from "react-icons/fa";
import { RiProgress3Fill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { TbGlassChampagne } from "react-icons/tb";
import { Si4Chan } from "react-icons/si";
import { MdOutlineInsights } from "react-icons/md";



const items = [
  {
    title: "Courses",
    desc: "Organize lessons, modules, and sections into a clear structure, easy to manage.",
    icon: PiStudent,
  },
  {
    title: "Live Classes",
    desc: "Host real-time sessions where instructors teach, present lessons, and interact with learners instantly.",
    icon: FaBook,
  },
  {
    title: "Cohorts",
    desc: "Run guided programs where groups of learners progress together through structured content.",
    icon: SiGoogleclassroom,
  },
  {
    title: "Workshops",
    desc: "Create focused sessions for short-term learning, practical exercises, or topic deep dives.",
    icon: FaShoppingBag,
  },
  {
    title: "Assessments & Exams",
    desc: "Evaluate learner understanding with structured exams and track performance over time.",
    icon: MdAssignmentInd,
  },
  {
    title: "Assignments & Quizzes",
    desc: "Reinforce learning with quizzes and assignments that check understanding and progress.",
    icon: MdAssignment,
  },
  {
    title: "Certificates",
    desc: "Issue certificates to recognize course completion and celebrate learner achievements.",
    icon:TbCertificate,
  },
]

const item = [
  {
    title: "Recorded Lessons",
    desc: "Deliver on-demand lessons so learners can watch and learn at their own pace.",
    icon: MdOutlineVideoCameraBack,
  },
  {
    title: "Learning Paths",
    desc: "Organize courses and lessons into structured journeys that guide learner progression.",
    icon: PiPath,
  },
  {
    title: "Community",
    desc: "Create a shared space where learners can connect, interact, and learn together.",
    icon: FcBusinessman,
  },
  {
    title: "Discussions",
    desc: "Encourage meaningful conversations where learners ask questions and share ideas.",
    icon: TiMessages,
  },
  {
    title: "Announcements",
    desc: "Share important updates, reminders, and messages with your learners instantly.",
    icon: LuMessageCircleMore,
  },
  {
    title: "Feedback & Reviews",
    desc: "Collect learner feedback to understand experiences and improve your courses.",
    icon: BsStars,
  },
  {
    title: "Attendance Tracking",
    desc: "Track learner participation and monitor attendance in live sessions.",
    icon:FaCalendarAlt,
  },
]

const iteM = [
  {
    title: "Student Panel",
    desc: "A dedicated learning space where students access courses, track progress, and complete activities.",
    icon: MdManageAccounts,
  },
  {
    title: "Educator Panel",
    desc: "A workspace for instructors to create content, manage courses, and monitor learner progress.",
    icon: MdLibraryBooks,
  },
  {
    title: "Admin Panel",
    desc: "Control your entire platform from one place, including settings, users, and learning resources.",
    icon: MdAdminPanelSettings,
  },
  {
    title: "User Management",
    desc: "Add, organize, and manage learners, instructors, and teams across your platform.",
    icon: FaUserGroup,
  },
  {
    title: "Role Permissions",
    desc: "Define roles and assign permissions to control what each user can access or manage.",
    icon: GiStarsStack,
  },
  {
    title: "GiStarsStack",
    desc: "Secure your platform by managing access levels and protecting sensitive areas.",
    icon: FaUserCog,
  },
  
]

const iteMT = [
  {
    title: "Progress Tracking",
    desc: "Monitor learner progress and see how individuals move through courses and learning paths.",
    icon: RiProgress3Fill,
  },
  {
    title: "Learner Analytics",
    desc: "Understand learner behavior, engagement patterns, and overall course participation.",
    icon: SiSimpleanalytics,
  },

  {
    title: "Assessment Results",
    desc: "Review quiz and exam results to measure understanding and learning performance.",
    icon: TbGlassChampagne,
  },
  {
    title: "Completion Reports",
    desc: "Track course completions and evaluate learning outcomes across your platform.",
    icon: Si4Chan,
  },
  {
    title: "Engagement Insights",
    desc: "Measure learner activity to understand participation and overall learning engagement.",
    icon: MdOutlineInsights,
  },
  {
    title: "Assignments & Quizzes",
    desc: "Reinforce learning with tasks and assessments that.",
    icon: MdOutlineInsights,
  },
  
]


function page() {
  return (
    <section className='bg-white'>
        <div className='mx-auto max-w-full px-6 py-6'>
           <div className='rounded-lg '>
              <Image
                  src="/Container 12.png"
                  alt="Card Container a"
                  width={1400}
                  height={400}
                 />
           </div>
        </div>
        <div className='mx-auto max-w-[77.1rem] px-6 py-12'>
            <div className=''>
                <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>Build Learning</h2>
                <p className='text-base text-gray-500 mt-4'>Edushade is designed by starting with how educators plan, teach, and support learners.
                   Every part <br/> of the platform follows real instructional needs, not predefined software
                   workflows.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
               {items.map((item, index) => {
               const Icon = item.icon

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xl leading-6 text-gray-600">
                      {item.desc}
                    </p>

                    <button className="cursor-pointer mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition group-hover:gap-1">
                      Learn More
                      <span className='mt-1 '> <FaArrowRightLong /> </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div> 
        </div>
        <div className='mx-auto max-w-7xl px-6 py-6'>
            <div className='ml-3'>
                <h2 className='text-3xl font-semibold text-gray-900 sm:text-4xl'>Deliver & Engage</h2>
                <p className='text-base text-gray-500 mt-4'>Run live sessions, share recorded lessons, and create interactive experiences
                   with assignments, <br/> discussions, and announcements.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 ml-3">
               {item.map((item, index) => {
               const Icon = item.icon

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xl leading-6 text-gray-600">
                      {item.desc}
                    </p>

                    <button className="cursor-pointer mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition group-hover:gap-1">
                      Learn More
                      <span className='mt-1 '> <FaArrowRightLong /> </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <div className='mx-auto max-w-7xl px-6 py-6'>
            <div className='ml-3'>
                <h2 className='text-3xl font-semibold text-gray-900 sm:text-4xl'>
                    Manage Roles
                </h2>
                <p className='text-base text-gray-500 mt-4'>
                    Manage instructors, learners, and administrators with flexible roles and permissions. 
                    Assign <br/> responsibilities, control access, and keep your learning platform organized as
                     your team grows.
                </p>

            </div>
             <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 ml-3">
               {iteM.map((item, index) => {
               const Icon = item.icon

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xl leading-6 text-gray-600">
                      {item.desc}
                    </p>

                    <button className="cursor-pointer mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition group-hover:gap-1">
                      Learn More
                      <span className='mt-1 '> <FaArrowRightLong /> </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <div className='mx-auto max-w-7xl px-6 py-6'>
            <div className='ml-3'>
                <h2 className='text-3xl font-semibold text-gray-900 sm:text-4xl'>Track and Measure</h2>
                <p className='text-base text-gray-500 mt-4'>Track learner progress, completion rates, and 
                    engagement through
                     powerful analytics. Use real data <br/> to understand how your courses perform.</p>
            </div>

             <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 ml-3">
               {iteMT.map((item, index) => {
               const Icon = item.icon

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xl leading-6 text-gray-600">
                      {item.desc}
                    </p>

                    <button className="cursor-pointer mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition group-hover:gap-1">
                      Learn More
                      <span className='mt-1 '> <FaArrowRightLong /> </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <div className='mx-auto max-w-7xl px-6 py-6'>
            <div className='ml-3'>
                <Image
                  src="/Container 44.png"
                  alt="Card Container a"
                  width={1400}
                  height={400}
                 />
            </div>
        </div>
      
    </section>
  )
}

export default page
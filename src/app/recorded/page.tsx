"use client"

import { useEffect, useRef, useState } from "react"

const columns = [
  {
    title: "BUILD LEARNING",
    items: [
      { title: "Courses", desc: "Create structured lessons" },
      { title: "Live Classes", desc: "Teach in real time" },
      { title: "Cohorts", desc: "Run guided programs" },
      { title: "Workshops", desc: "Host focused sessions" },
      { title: "Assessments & Exams", desc: "Evaluate learner understanding" },
      { title: "Assignments & Quizzes", desc: " a\Reinforce learning outcomes" },
      { title: "Certificates", desc: "Recognize course completion" },
    ],
  },
  {
    title: "DELIVER & ENGAGE",
    items: [
      { title: "Recorded Lessons", desc: "Offer self paced learning" },
      { title: "Learning Paths", desc: "Guide learner progression" },
      { title: "Community", desc: "Build learner interaction" },
      { title: "Discussions", desc: "Encourage peer conversation" },
      { title: "Announcements", desc: "Share important updates" },
      { title: "Feedback & Reviews", desc: "Collect learner input" },
      { title: "Attendance Tracking", desc: "Monitor session participation" },
    ],
  },
  {
    title: "MANAGE ROLES",
    items: [
      { title: "Student Panel", desc: "Focused learning space" },
      { title: "Educator Panel", desc: "Teaching and content control" },
      { title: "Admin Panel", desc: "Platform level management" },
      { title: "User Management", desc: "Manage learners and teams" },
      { title: "Role Permissions", desc: "Control access levels" },
      { title: "Access Control", desc: "Secure platform usage" },
    ],
  },
  {
    title: "TRACK AND MEASURE",
    items: [
      { title: "Progress Tracking", desc: "Follow learner completion" },
      { title: "Learner Analytics", desc: "Understand engagement patterns" },
      { title: "Assessment Results", desc: "Review learner performance" },
      { title: "Completion Reports", desc: "Track learning outcomes" },
      { title: "Engagement Insights", desc: "Measure activity levels" },
    ],
  },
]

function useOutsideClick(
  refs: React.RefObject<HTMLElement>[],
  onOutside: () => void,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return

    function handler(e: MouseEvent) {
      const target = e.target as Node
      const inside = refs.some((r) => r.current && r.current.contains(target))
      if (!inside) onOutside()
    }

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onOutside()
    }

    document.addEventListener("mousedown", handler)
    document.addEventListener("keydown", onEsc)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("keydown", onEsc)
    }
  }, [enabled, onOutside, refs])
}

export default function HeaderWithFeaturesMegaMenu() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // useOutsideClick([btnRef, panelRef], () => setOpen(false), open)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-12 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-blue-600" />
            <span className="font-semibold">Edushade</span>
          </div>

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <div className="relative">
              <button
                ref={btnRef}
                onClick={() => setOpen((v) => !v)}
                className={[
                  "inline-flex items-center gap-1 rounded-full px-3 py-1.5",
                  "hover:bg-gray-100 transition",
                  open ? "bg-gray-100" : "",
                ].join(" ")}
                aria-haspopup="dialog"
                aria-expanded={open}
              >
                Features
                <svg
                  className={[
                    "h-4 w-4 transition-transform",
                    open ? "rotate-180" : "",
                  ].join(" ")}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* MEGA MENU */}
              <div
                ref={panelRef}
                className={[
                  "absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] max-w-[calc(100vw-1rem)]",
                  "rounded-2xl border bg-white shadow-xl overflow-hidden",
                  "transition-all duration-200 origin-top",
                  open
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-[0.98] -translate-y-2 pointer-events-none",
                ].join(" ")}
                role="dialog"
                aria-label="Features menu"
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {columns.map((col) => (
                      <div key={col.title}>
                        <p className="text-[11px] tracking-wider text-gray-400 font-semibold">
                          {col.title}
                        </p>

                        <div className="mt-4 space-y-3">
                          {col.items.map((it) => (
                            <a
                              key={it.title}
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="group flex gap-3 rounded-xl p-2 hover:bg-gray-50 transition"
                            >
                              <div className="h-9 w-9 rounded-xl bg-gray-100 border flex items-center justify-center">
                                <span className="h-4 w-4 rounded bg-blue-500/80" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                  {it.title}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {it.desc}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t bg-gray-50 px-6 py-4 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Want to launch fast?{" "}
                    <span className="text-gray-500">
                      Launch your EdTech platform in 60 seconds.
                    </span>
                  </div>

                  <button className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-full border px-4 py-2 text-sm hover:bg-gray-50">
              Sign In
            </button>
            <button className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition">
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      {/* optional: click করলে back-drop dim চাইলে */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  )
}
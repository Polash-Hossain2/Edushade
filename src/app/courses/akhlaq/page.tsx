// // // components/Header.tsx
// // "use client"

// // import Link from "next/link"
// // import Image from "next/image"
// // import { Button } from "@/components/ui/button"
// // import {
// //   NavigationMenu,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// //   NavigationMenuTrigger,
// //   NavigationMenuContent,
// // } from "@/components/ui/navigation-menu"

// // export default function Header() {
// //   return (
// //     <header className="w-full border-b bg-white">
// //       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
// //         {/* Left: Logo */}
// //         <Link href="/" className="flex items-center gap-2">
// //           {/* তোমার logo file থাকলে এখানে বসাও */}
// //           <div className="h-9 w-9 rounded-full bg-blue-600/10" />
// //           <span className="text-lg font-semibold text-gray-900">Edushade</span>
// //         </Link>

// //         {/* Middle: Nav */}
// //         <NavigationMenu className="hidden md:block">
// //           <NavigationMenuList className="gap-2">
// //             {/* Features */}
// //             <NavigationMenuItem>
// //               <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm font-medium text-gray-700 hover:bg-transparent hover:text-gray-900">
// //                 Features
// //               </NavigationMenuTrigger>
// //               <NavigationMenuContent>
// //                 <div className="w-[260px] p-3">
// //                   <NavItem href="/features/overview" title="Overview" />
// //                   <NavItem href="/features/ai-tools" title="AI Tools" />
// //                   <NavItem href="/features/integrations" title="Integrations" />
// //                 </div>
// //               </NavigationMenuContent>
// //             </NavigationMenuItem>

// //             {/* Use Cases */}
// //             <NavigationMenuItem>
// //               <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm font-medium text-gray-700 hover:bg-transparent hover:text-gray-900">
// //                 Use Cases
// //               </NavigationMenuTrigger>
// //               <NavigationMenuContent>
// //                 <div className="w-[260px] p-3">
// //                   <NavItem href="/use-cases/students" title="Students" />
// //                   <NavItem href="/use-cases/teachers" title="Teachers" />
// //                   <NavItem href="/use-cases/teams" title="Teams" />
// //                 </div>
// //               </NavigationMenuContent>
// //             </NavigationMenuItem>

// //             {/* Resources */}
// //             <NavigationMenuItem>
// //               <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm font-medium text-gray-700 hover:bg-transparent hover:text-gray-900">
// //                 Resources
// //               </NavigationMenuTrigger>
// //               <NavigationMenuContent>
// //                 <div className="w-[260px] p-3">
// //                   <NavItem href="/resources/blog" title="Blog" />
// //                   <NavItem href="/resources/docs" title="Docs" />
// //                   <NavItem href="/resources/support" title="Support" />
// //                 </div>
// //               </NavigationMenuContent>
// //             </NavigationMenuItem>

// //             {/* Pricing */}
// //             <NavigationMenuItem>
// //               <Link href="/pricing" legacyBehavior passHref>
// //                 <NavigationMenuLink className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:text-gray-900">
// //                   Pricing
// //                 </NavigationMenuLink>
// //               </Link>
// //             </NavigationMenuItem>
// //           </NavigationMenuList>
// //         </NavigationMenu>

// //         {/* Right: CTA */}
// //         <Button className="h-10 rounded-full bg-blue-600 px-5 text-sm font-semibold hover:bg-blue-700">
// //           Get Started
// //         </Button>
// //       </div>
// //     </header>
// //   )
// // }

// // function NavItem({ href, title }: { href: string; title: string }) {
// //   return (
// //     <Link
// //       href={href}
// //       className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
// //     >
// //       {title}
// //     </Link>
// //   )
// // }
// // // npx shadcn@latest add button navigation-menu


// "use client"

// import { cn } from "@/lib/utils"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"

// type ModelCardProps = {
//   title: string
//   desc: string
//   tag?: string
//   tone?: "teal" | "blue" | "purple" | "amber"
// }

// const toneMap = {
//   teal: {
//     ring: "hover:ring-emerald-200/60",
//     glow: "from-emerald-500/10 via-transparent to-transparent",
//     badge: "bg-emerald-500/10 text-emerald-700 border-emerald-200/60",
//     dot: "bg-emerald-500",
//   },
//   blue: {
//     ring: "hover:ring-blue-200/60",
//     glow: "from-blue-500/10 via-transparent to-transparent",
//     badge: "bg-blue-500/10 text-blue-700 border-blue-200/60",
//     dot: "bg-blue-500",
//   },
//   purple: {
//     ring: "hover:ring-violet-200/60",
//     glow: "from-violet-500/10 via-transparent to-transparent",
//     badge: "bg-violet-500/10 text-violet-700 border-violet-200/60",
//     dot: "bg-violet-500",
//   },
//   amber: {
//     ring: "hover:ring-amber-200/60",
//     glow: "from-amber-500/10 via-transparent to-transparent",
//     badge: "bg-amber-500/10 text-amber-700 border-amber-200/60",
//     dot: "bg-amber-500",
//   },
// }

// function ModelCard({ title, desc, tag = "AI Model", tone = "teal" }: ModelCardProps) {
//   const t = toneMap[tone]

//   return (
//     <Card
//       className={cn(
//         "group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm",
//         "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
//         "ring-1 ring-transparent hover:ring-2",
//         t.ring
//       )}
//     >
//       {/* soft gradient glow */}
//       <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", t.glow)} />

//       {/* header */}
//       <div className="relative flex items-start justify-between gap-3">
//         <div className="min-w-0">
//           <div className="flex items-center gap-2">
//             <span className={cn("h-2.5 w-2.5 rounded-full", t.dot)} />
//             <h3 className="truncate text-base font-semibold text-gray-900">{title}</h3>
//           </div>
//           <p className="mt-2 line-clamp-2 text-sm text-gray-600">{desc}</p>
//         </div>

//         <Badge variant="outline" className={cn("shrink-0 rounded-full border px-2.5 py-1 text-xs", t.badge)}>
//           {tag}
//         </Badge>
//       </div>

//       {/* footer */}
//       <div className="relative mt-4 flex items-center justify-between">
//         <p className="text-xs text-gray-500">Updated automatically</p>

//         <Button
//           variant="ghost"
//           className="h-8 rounded-full px-3 text-xs text-gray-700 hover:bg-gray-100"
//         >
//           View
//         </Button>
//       </div>
//     </Card>
//   )
// }

// export default function GoogleLikeAIModels() {
//   const models = [
//     { title: "Gemini Pro", desc: "General-purpose reasoning + coding.", tone: "blue" as const },
//     { title: "Gemini Flash", desc: "Fast responses for chat & apps.", tone: "teal" as const },
//     { title: "Vision", desc: "Understands images and documents.", tone: "purple" as const },
//     { title: "Embeddings", desc: "Search, retrieval, and similarity.", tone: "amber" as const },
//   ]

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-6xl px-4 py-10">
//         <div className="mb-6 flex items-center justify-between gap-3">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-900">AI Models</h2>
//             <p className="mt-1 text-sm text-gray-600">Google-style soft cards with auto rounded + colors</p>
//           </div>

//           <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700">
//             Explore
//           </Button>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {models.map((m) => (
//             <ModelCard key={m.title} title={m.title} desc={m.desc} tone={m.tone} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const nav = [
  {
    label: "Features",
    items: [
      { label: "Overview", href: "/features" },
      { label: "Integrations", href: "/features/integrations" },
      { label: "Security", href: "/features/security" },
    ],
  },
  {
    label: "Use Cases",
    items: [
      { label: "Teams", href: "/" },
      { label: "Education", href: "/use-cases/education" },
      { label: "Creators", href: "/use-cases/creators" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Docs", href: "/docs" },
      { label: "Help Center", href: "/help" },
    ],
  },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-100" />
          <span className="text-lg font-semibold text-slate-900">Edushade</span>
        </Link>

        {/* Center: Nav */}
        <nav aria-label="Main" className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {nav.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                    {group.label}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="p-2">
                    <ul className="min-w-[13.75rem] space-y-1">
                      {group.items.map((item) => {
                        const active = pathname === item.href
                        return (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
                                  active && "bg-slate-50 text-slate-900"
                                )}
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              {/* Pricing (simple link) */}
              <NavigationMenuItem>
                <Link
                  href="/pricing"
                  className={cn(
                    "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                    pathname === "/pricing" && "bg-slate-50 text-slate-900"
                  )}
                >
                 Pricing
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-2">
          <Button className="rounded-full px-5">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { motion } from "framer-motion"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? "bg-white backdrop-blur-md shadow-md py-2 md:py-3" : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="block">
            {/* Logo/Text transition container */}
            <div className="relative flex items-center h-10">
              {/* Text version - visible when not scrolled and on home page */}
              <motion.div
                className={`transition-all duration-500 absolute ${
                  !scrolled && isHomePage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <h1 className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">Finverge Advisors</h1>
              </motion.div>

              {/* Logo version with negative margin to pull it left */}
              <motion.div
                className={`transition-all duration-500 absolute -ml-10 ${
                  scrolled || !isHomePage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Logo />
              </motion.div>
            </div>
          </Link>
        </div>

        <div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              className={`transition-colors text-sm font-medium ${
                scrolled || !isHomePage ? "text-[#1B365D] hover:text-[#E6A44E]" : "text-white hover:text-[#E6A44E]"
              }`}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={`transition-colors text-sm font-medium ${
                scrolled || !isHomePage ? "text-[#1B365D] hover:text-[#E6A44E]" : "text-white hover:text-[#E6A44E]"
              }`}
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={`transition-colors text-sm font-medium ${
                scrolled || !isHomePage ? "text-[#1B365D] hover:text-[#E6A44E]" : "text-white hover:text-[#E6A44E]"
              }`}
              href="/insights"
            >
              Insights
            </Link>
            <Link
              className={`transition-colors text-sm font-medium ${
                scrolled || !isHomePage ? "text-[#1B365D] hover:text-[#E6A44E]" : "text-white hover:text-[#E6A44E]"
              }`}
              href="/testimonials"
            >
              Testimonials
            </Link>
            <Button className="bg-[#E6A44E] hover:bg-[#E6A44E]/90 text-white ml-4" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  scrolled || !isHomePage ? "text-[#1B365D] hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#1B365D] text-white border-[#E6A44E]/20">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
                <SheetDescription className="text-gray-300">
                  Navigate through our services and information.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  className="text-white hover:text-[#E6A44E] transition-colors py-2 border-b border-white/10"
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  className="text-white hover:text-[#E6A44E] transition-colors py-2 border-b border-white/10"
                  href="/about"
                >
                  About Us
                </Link>
                <Link
                  className="text-white hover:text-[#E6A44E] transition-colors py-2 border-b border-white/10"
                  href="/insights"
                >
                  Insights
                </Link>
                <Link
                  className="text-white hover:text-[#E6A44E] transition-colors py-2 border-b border-white/10"
                  href="/testimonials"
                >
                  Testimonials
                </Link>
                <Link
                  className="text-white hover:text-[#E6A44E] transition-colors py-2 border-b border-white/10"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}


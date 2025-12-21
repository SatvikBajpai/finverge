"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

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

  const navLinkClass = `relative transition-all duration-300 text-sm font-medium ${
    scrolled || !isHomePage
      ? "text-foreground/80 hover:text-amber-500"
      : "text-white/70 hover:text-white"
  }`

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "glass-nav shadow-lg py-2 md:py-3"
          : "bg-transparent py-4 md:py-5"
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
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link className={navLinkClass} href="/services">
              <span className="relative">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link className={navLinkClass} href="/about">
              <span className="relative">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link className={navLinkClass} href="/insights">
              <span className="relative">
                Insights
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link className={navLinkClass} href="/testimonials">
              <span className="relative">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Button
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 font-semibold ml-4 shadow-glow hover:shadow-glow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <ThemeToggle />
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:bg-foreground/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="glass-card border-l border-border">
              <SheetHeader>
                <SheetTitle className="text-foreground">Menu</SheetTitle>
                <SheetDescription className="text-muted-foreground">
                  Navigate through our services and information.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  className="text-foreground/80 hover:text-amber-500 transition-colors py-3 border-b border-border"
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  className="text-foreground/80 hover:text-amber-500 transition-colors py-3 border-b border-border"
                  href="/about"
                >
                  About Us
                </Link>
                <Link
                  className="text-foreground/80 hover:text-amber-500 transition-colors py-3 border-b border-border"
                  href="/insights"
                >
                  Insights
                </Link>
                <Link
                  className="text-foreground/80 hover:text-amber-500 transition-colors py-3 border-b border-border"
                  href="/testimonials"
                >
                  Testimonials
                </Link>
                <Link
                  className="text-foreground/80 hover:text-amber-500 transition-colors py-3 border-b border-border"
                  href="/contact"
                >
                  Contact
                </Link>
                <div className="flex items-center justify-between py-3">
                  <span className="text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

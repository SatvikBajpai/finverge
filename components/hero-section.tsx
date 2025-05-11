"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
          alt="Modern city skyline with clear sky"
          fill
          className="object-cover"
          priority
        />
        {/* Darker gradient at the top to improve logo visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B365D]/80 via-transparent to-transparent h-32" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/90 via-[#1B365D]/50 to-transparent" />
      </div>

      {/* Animated Graph Line */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0 600 L300 500 L600 450 L900 300 L1200 200 L1500 100"
          stroke="white"
          strokeWidth="3"
          fill="none"
          className="opacity-60"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          cx="300"
          cy="500"
          r="6"
          fill="white"
          className="opacity-70"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          cx="600"
          cy="450"
          r="6"
          fill="white"
          className="opacity-70"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          cx="900"
          cy="300"
          r="6"
          fill="white"
          className="opacity-70"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          cx="1200"
          cy="200"
          r="6"
          fill="#E6A44E"
          className="opacity-90"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-2 sm:px-3 md:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Financial Partners <br />
                In Growth
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                Empowering startups and SMEs with strategic financial solutions. Transform your business with expert
                guidance and comprehensive financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#1B365D] hover:bg-gray-100"
                  onClick={() => scrollToSection("services-section")}
                >
                  Explore Services
                </Button>
                <Button size="lg" className="bg-[#E6A44E] text-white hover:bg-[#E6A44E]/90" asChild>
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1B365D]/90 to-transparent" />
      </div>
    </section>
  )
}


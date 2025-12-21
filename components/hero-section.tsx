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
        {/* Modern gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/40 to-transparent h-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
        <div className="absolute inset-0 bg-navy-950/30" />
      </div>

      {/* Floating gradient orbs for depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl" />

      {/* Animated Graph Line */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0 600 L300 500 L600 450 L900 300 L1200 200 L1500 100"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          cx="300"
          cy="500"
          r="5"
          fill="rgba(255,255,255,0.5)"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          cx="600"
          cy="450"
          r="5"
          fill="rgba(255,255,255,0.5)"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          cx="900"
          cy="300"
          r="5"
          fill="rgba(255,255,255,0.6)"
        />
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          cx="1200"
          cy="200"
          r="8"
          fill="#c4915a"
          className="drop-shadow-lg"
        />
        {/* Glow effect for the final circle */}
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          cx="1200"
          cy="200"
          r="20"
          fill="#c4915a"
          className="blur-sm"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Financial Partners <br />
                <span className="gradient-text">In Growth</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Empowering startups and SMEs with strategic financial solutions. Transform your business with expert
                guidance and comprehensive financial services.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => scrollToSection("services-section")}
                >
                  Explore Services
                </Button>
                <Button variant="amber" size="lg" asChild>
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient - smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
    </section>
  )
}

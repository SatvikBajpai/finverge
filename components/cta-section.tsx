"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-section" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="mx-auto max-w-[700px] text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
            Partner with FinVerge for comprehensive financial solutions tailored to your growth needs.
          </p>
          <Button variant="amber" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

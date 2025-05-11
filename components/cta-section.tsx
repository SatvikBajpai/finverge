"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-2 sm:px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1B365D]">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl">
            Partner with FinVerge for comprehensive financial solutions tailored to your growth needs.
          </p>
          <Button className="bg-[#1B365D] text-white hover:bg-[#1B365D]/90" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FlippableCard } from "@/components/ui/flippable-card"
import * as LucideIcons from "lucide-react"

interface Service {
  icon: keyof typeof LucideIcons
  title: string
  description: string
  image: string
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".flippable-card")) {
        setFlippedIndex(null)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <section id="services-section" className="w-full py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-background" />

      {/* Decorative orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-[400px]"
              >
                <FlippableCard
                  title={service.title}
                  description={service.description}
                  icon={IconComponent}
                  image={service.image}
                  isFlipped={flippedIndex === index}
                  onClick={() => handleFlip(index)}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

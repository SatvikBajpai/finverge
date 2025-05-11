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
    <section id="services-section" className="w-full py-16 md:py-24 bg-[#1B365D] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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


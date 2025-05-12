"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const MotionDiv = motion.div

interface Testimonial {
  name: string
  role: string
  content: string
  image: string
  rating: number
}

export function TestimonialsContent() {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Patel",
      role: "Founder, EcoGreen Startups",
      content:
        "The team at FinVerge provided invaluable support during our company incorporation and initial funding rounds. Their expertise in startup finances is unparalleled.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Amit Kapoor",
      role: "CFO, Global Logistics Inc.",
      content:
        "FinVerge's business insights and MIS reporting have transformed how we view our financial data. Their actionable insights have directly contributed to our bottom line.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Confidential",
      role: "Founder, Dairy Tech Startup",
      content:
        "Finverge Advisors transformed our fundraising journey. After a year of rejections, their team built robust financial models and crafted a compelling growth narrative that finally convinced banks of our potential. Thanks to their expertise, we secured $500K in working capital at affordable rates with just 40% collateral. This funding has been a game-changer for our dairy tech startup, enabling us to scale and invest in growth. We highly recommend Finverge to any startup seeking strategic financial guidance.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Client Success Stories
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Discover how FinVerge has transformed businesses and empowered financial success across industries.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </>
  )
}


"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"

const MotionDiv = motion.div

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialsContent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      name: "Priya Patel",
      role: "Founder, EcoGreen Startups",
      content:
        "The team at FinVerge provided invaluable support during our company incorporation and initial funding rounds. Their expertise in startup finances is unparalleled.",
      rating: 5,
    },
    {
      name: "Amit Kapoor",
      role: "CFO, Global Logistics Inc.",
      content:
        "FinVerge's business insights and MIS reporting have transformed how we view our financial data. Their actionable insights have directly contributed to our bottom line.",
      rating: 5,
    },
    {
      name: "Confidential",
      role: "Founder, Dairy Tech Startup",
      content:
        "Finverge Advisors transformed our fundraising journey. After a year of rejections, their team built robust financial models and crafted a compelling growth narrative that finally convinced banks of our potential. Thanks to their expertise, we secured $500K in working capital at affordable rates with just 40% collateral. This funding has been a game-changer for our dairy tech startup, enabling us to scale and invest in growth. We highly recommend Finverge to any startup seeking strategic financial guidance.",
      rating: 5,
    },
  ]

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground mb-4">
          Client <span className="gradient-text">Success Stories</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how FinVerge has transformed businesses and empowered financial success across industries.
        </p>
      </MotionDiv>

      {/* Carousel */}
      <div className="relative z-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-4">
                <div className="glass-card p-8 h-full hover:border-amber-400/30 transition-all duration-500 group">
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-5xl text-amber-400/20 font-serif">"</span>
                    <p className="text-muted-foreground mb-6 leading-relaxed pl-4">{testimonial.content}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="glass"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full hover:border-amber-400/50 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-amber-400 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="glass"
            size="icon"
            onClick={scrollNext}
            className="rounded-full hover:border-amber-400/50 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

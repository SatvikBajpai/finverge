"use client"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import type React from "react"

interface FlippableCardProps {
  title: string
  description: string
  icon: LucideIcon
  image: string
  isFlipped: boolean
  onClick: () => void
}

export function FlippableCard({ title, description, icon: Icon, image, isFlipped, onClick }: FlippableCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <motion.div
      className="perspective-1000 w-full h-full cursor-pointer flippable-card"
      onClick={handleClick}
      animate={{
        scale: isFlipped ? 1.02 : 1,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500 transform-style-3d"
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
      >
        {/* Front of the card */}
        <Card className="absolute w-full h-full backface-hidden overflow-hidden glass-card border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
          <CardContent className="p-0 h-full flex flex-col justify-between">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 dark:from-navy-950/90 dark:via-navy-950/40 to-transparent flex items-center justify-center">
                {Icon && <Icon className="h-14 w-14 text-white dark:text-white/90 drop-shadow-lg" />}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
              <Button variant="glass" className="w-full mt-4">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back of the card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden glass-card border-amber-400/20">
          <CardContent className="p-8 h-full flex flex-col justify-between overflow-y-auto">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <Button variant="amber" className="w-full mt-6" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

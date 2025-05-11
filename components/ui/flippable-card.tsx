"use client"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

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
        scale: isFlipped ? 1.05 : 1,
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
        <Card className="absolute w-full h-full backface-hidden overflow-hidden">
          <CardContent className="p-0 h-full flex flex-col justify-between">
            <div className="relative h-48 w-full">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                {Icon && <Icon className="h-16 w-16 text-white" />}
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">{title}</h3>
              <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90 mt-4">Learn More</Button>
            </div>
          </CardContent>
        </Card>

        {/* Back of the card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden">
          <CardContent className="p-6 h-full flex flex-col justify-between overflow-y-auto">
            <div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90 mt-4" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}


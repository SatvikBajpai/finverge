"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const MotionDiv = motion.div

interface Insight {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export function InsightsContent() {
  // This component has been removed.
}


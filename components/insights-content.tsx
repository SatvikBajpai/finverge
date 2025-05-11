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
  const insights: Insight[] = [
    {
      title: "The Future of Cloud Accounting",
      excerpt: "Explore how cloud accounting is revolutionizing financial management for businesses of all sizes.",
      date: "May 15, 2024",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBhY2NvdW50aW5nfGVufDB8fDB8fHww",
    },
    {
      title: "Navigating GST Compliance in 2024",
      excerpt: "Stay up-to-date with the latest GST compliance requirements and best practices for Indian businesses.",
      date: "April 28, 2024",
      category: "Tax",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Startup Funding Trends in India",
      excerpt: "Discover the latest trends in startup funding and what investors are looking for in 2024.",
      date: "April 10, 2024",
      category: "Startups",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Maximizing Business Growth Through Financial Analytics",
      excerpt:
        "Learn how to leverage financial analytics to drive informed decision-making and accelerate business growth.",
      date: "March 22, 2024",
      category: "Business Strategy",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {insights.map((insight, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{insight.category}</Badge>
                    <span className="text-sm text-gray-500">{insight.date}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1B365D] mb-2">{insight.title}</CardTitle>
                  <p className="text-gray-600">{insight.excerpt}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#" className="inline-flex items-center justify-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </MotionDiv>
        ))}
      </div>

      <div className="mt-24">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1B365D] mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed mb-8">
            Contact us to learn more about our financial insights and expert analysis services.
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </MotionDiv>
      </div>
    </>
  )
}


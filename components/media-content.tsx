"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const MotionDiv = motion.div

interface PressRelease {
  title: string
  date: string
  excerpt: string
  image: string
}

interface MediaContact {
  name: string
  role: string
  email: string
  phone: string
  image: string
}

export function MediaContent() {
  const pressReleases: PressRelease[] = [
    {
      title: "FinVerge Launches Revolutionary AI-Powered Financial Analytics Platform",
      date: "June 1, 2024",
      excerpt:
        "FinVerge introduces a cutting-edge AI-driven analytics tool to help businesses make data-driven financial decisions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "FinVerge Expands Operations to Three New Cities",
      date: "May 15, 2024",
      excerpt: "In response to growing demand, FinVerge opens new offices in Mumbai, Hyderabad, and Pune.",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "FinVerge CEO Named 'Financial Innovator of the Year'",
      date: "April 22, 2024",
      excerpt:
        "Shreya Bajpai, CEO of FinVerge, receives prestigious award for contributions to the financial services industry.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  const mediaContacts: MediaContact[] = [
    {
      name: "Arjun Mehta",
      role: "Head of Public Relations",
      email: "arjun.mehta@finverge.com",
      phone: "+91 98765 43210",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Neha Gupta",
      role: "Media Relations Specialist",
      email: "neha.gupta@finverge.com",
      phone: "+91 87654 32109",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzd29tYW58ZW58MHx8MHx8fDA%3D",
    },
  ]

  return (
    <>
      <h2 className="text-3xl font-bold text-[#1B365D] mb-8">Press Releases</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pressReleases.map((release, index) => (
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
                    src={release.image || "/placeholder.svg"}
                    alt={release.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {release.date}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-[#1B365D] mb-2">{release.title}</CardTitle>
                  <p className="text-gray-600">{release.excerpt}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#" className="inline-flex items-center justify-center">
                    Read Full Release <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </MotionDiv>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-[#1B365D] mb-8 mt-16">Media Contacts</h2>
      <div className="grid gap-10 sm:grid-cols-2">
        {mediaContacts.map((contact, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Image
                  src={contact.image || "/placeholder.svg"}
                  alt={contact.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#1B365D]">{contact.name}</h3>
                  <p className="text-gray-600">{contact.role}</p>
                  <p className="text-gray-600">Email: {contact.email}</p>
                  <p className="text-gray-600">Phone: {contact.phone}</p>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>

      <div className="mt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">Media Kit</h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed mb-8">
            Download our media kit for company logos, executive bios, and fact sheets.
          </p>
          <Button size="lg" asChild>
            <Link href="#">Download Media Kit</Link>
          </Button>
        </MotionDiv>
      </div>
    </>
  )
}


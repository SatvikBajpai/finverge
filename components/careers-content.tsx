"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const MotionDiv = motion.div

interface JobOpening {
  title: string
  department: string
  location: string
  type: string
}

export function CareersContent() {
  const jobOpenings: JobOpening[] = [
    {
      title: "Senior Financial Analyst",
      department: "Finance",
      location: "Bengaluru",
      type: "Full-time",
    },
    {
      title: "Tax Consultant",
      department: "Tax Services",
      location: "Delhi NCR",
      type: "Full-time",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time",
    },
    {
      title: "Software Engineer",
      department: "Technology",
      location: "Bengaluru",
      type: "Full-time",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobOpenings.map((job, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="flex flex-col p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-[#1B365D] mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-1">Department: {job.department}</p>
          <p className="text-gray-600 mb-1">Location: {job.location}</p>
          <p className="text-gray-600 mb-4">Type: {job.type}</p>
          <Link href="#" className="inline-flex items-center text-[#1B365D] hover:underline mt-auto">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </MotionDiv>
      ))}
    </div>
  )
}


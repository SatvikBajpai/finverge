"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const MotionDiv = motion.div
const MotionSection = motion.section

interface ExpertiseArea {
  title: string
  description: string
  image: string
}

export function ExpertiseContent() {
  const expertiseAreas: ExpertiseArea[] = [
    {
      title: "Company Incorporation & Startup Registration",
      description:
        "We assist with company incorporation, secretarial compliances, and Startup India registration. Our team ensures all your legal and regulatory requirements are met efficiently.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Cloud Accounting Services",
      description:
        "Our cloud-based accounting approach ensures accurate and compliant books of accounts. We help automate your accounting processes, saving you time and resources.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBhY2NvdW50aW5nfGVufDB8fDB8fHww",
    },
    {
      title: "Income Tax and GST Compliances",
      description:
        "Our tax experts provide assistance in tax planning, GST returns, and overall compliance management to optimize your tax structure and ensure regulatory adherence.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Business Insights and MIS Reporting",
      description:
        "We help define and measure key financial and non-financial metrics, providing live dashboards and detailed analytics to drive informed decision-making.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Fund-raise and Capital Assistance",
      description:
        "We provide access to capital, assist with pitch deck preparation, financial modeling, and offer due diligence support to help you secure funding for your business.",
      image:
        "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZHJhaXNpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Social Media Marketing",
      description:
        "Our marketing experts help enhance your brand reach and improve conversion rates through strategic social media campaigns and content strategies.",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    },
  ]

  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.map((area, index) => (
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
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div>
                  <CardTitle className="text-2xl font-bold text-[#1B365D] mb-4">{area.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/contact" className="inline-flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
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
            Ready to Elevate Your Business?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed mb-8">
            Let our expertise drive your success. Schedule a consultation with our team today.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </MotionDiv>
      </div>
    </>
  )
}


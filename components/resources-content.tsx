"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMediaQuery } from "@/hooks/use-media-query"

const MotionDiv = motion.div

interface Resource {
  title: string
  description: string
  link: string
  image?: string
}

export function InsightsContent() {
  // Check if the screen is mobile-sized
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Organize resources by category
  const handbooks: Resource[] = [
    {
      title: "FinVerge Advisors Handbook",
      description: "Comprehensive guide to our services and financial advisory approach.",
      link: "https://drive.google.com/file/d/19AXz62NlOOJaBunStWuDXYQoS_KX7sWB/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "ESOP Handbook",
      description: "Complete guide to Employee Stock Ownership Plans for startups and growing businesses.",
      link: "https://drive.google.com/file/d/1JP9poDURv4H9GhpmeLa_t0jwKwBER4mP/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Working Capital Loans Handbook",
      description: "Everything you need to know about securing and managing working capital loans.",
      link: "https://drive.google.com/file/d/1TL6bd0sdDr_Wh6fOPGhEV4B1azzz_t9x/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9hbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Fund Raise Handbook",
      description: "Strategic guide to raising capital for your business at various growth stages.",
      link: "https://drive.google.com/file/d/1xKnQRgdXQAUTBOVQrEit91V7vGa1F3a7/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZHJhaXNpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Essential Financial Strategies for Early Stage",
      description: "Key financial strategies tailored for early-stage startups and businesses.",
      link: "https://drive.google.com/file/d/1IJfQnQsO-jiTY4oQT7Gl1p8Wjggufc5t/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  const financeHacks: Resource[] = [
    {
      title: "Finance Hacks and How to Apply Them",
      description: "Practical financial hacks to optimize your business operations and growth.",
      link: "https://drive.google.com/file/d/1N_w-7RzvhT2dBIjLwqMGce_0y0U0Ckem/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZSUyMGhhY2tzfGVufDB8fDB8fHww",
    },
    {
      title: "Financial Optimization Strategies",
      description: "Advanced strategies for optimizing your financial processes and outcomes.",
      link: "https://drive.google.com/file/d/1dLJB-9W3QhE5s340q5Ja5cMIy1vEjBel/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwc3RyYXRlZ3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Cash Flow Management Techniques",
      description: "Essential techniques for effective cash flow management in your business.",
      link: "https://drive.google.com/file/d/15rtystC0YP5n67mFs6QS3XgEVKK67Urr/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzaCUyMGZsb3d8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Tax Planning Strategies",
      description: "Smart tax planning strategies to minimize liabilities and maximize returns.",
      link: "https://drive.google.com/file/d/1GtQEDRkkR48sZWv1w5zPwFEcPQOQeUOj/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Investment Strategy Guide",
      description: "Comprehensive guide to developing effective investment strategies for businesses.",
      link: "https://drive.google.com/file/d/1TsguhjtpJzcXmtbpAEX5lq4gJRoy7nEN/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Financial Risk Management",
      description: "Strategies for identifying, assessing, and managing financial risks in your business.",
      link: "https://drive.google.com/file/d/1Der0Fm8aI2Fqzkx5NNxm1KSpQ3UNlIdh/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Business Valuation Guide",
      description: "Learn how to accurately value your business for various financial scenarios.",
      link: "https://drive.google.com/file/d/13odH48ku3j_3YUDpUAwe__dBcTGpFUS1/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjB2YWx1YXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Financial Forecasting Techniques",
      description: "Advanced techniques for accurate financial forecasting and planning.",
      link: "https://drive.google.com/file/d/16JwEg5JXUCaL8RCs5E7QzOMqC1UU9-Rz/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Mergers & Acquisitions Guide",
      description: "Comprehensive guide to navigating mergers and acquisitions successfully.",
      link: "https://drive.google.com/file/d/1IzrZ7MT1jIvloMZPhC2SDTIl_YwBIp_2/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyZ2VycyUyMGFuZCUyMGFjcXVpc2l0aW9uc3xlbnwwfHwwfHx8MA%3D",
    },
    {
      title: "Financial Compliance Framework",
      description: "Guide to establishing and maintaining financial compliance in your organization.",
      link: "https://drive.google.com/file/d/1D_fuDoSm7cbPbJg2b3-9pms8AGmlPBgP/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  const commentaries: Resource[] = [
    {
      title: "Budget Commentary FV Advisors",
      description:
        "Analysis & Commentary on India Union Budget 2025-26 with insights on fiscal policies and economic impact.",
      link: "https://drive.google.com/file/d/1qD4IxuOEJ8U5zFWsWfG_K9zThyjfXFSt/view?usp=sharing",
      image:
        "https://sjc.microlink.io/xJ20rqNUqIOTBanyzeD3jv-_37NVI59RnPTB5KtGQIY0ViWdID0CjiicOTtY3r84doaRFsg8Naz7d43WCV9tNA.jpeg",
    },
  ]

  return (
    <>
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Financial Resources
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Access our comprehensive collection of financial handbooks, guides, and resources
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="handbooks" className="w-full">
          {/* Modified TabsList to display full text on mobile */}
          <div className="mb-8 w-full">
            <TabsList className="w-full flex justify-between">
              <TabsTrigger value="handbooks" className="flex-1 text-xs sm:text-base py-2 px-2">
                Handbooks
              </TabsTrigger>
              <TabsTrigger value="finance-hacks" className="flex-1 text-xs sm:text-base py-2 px-2">
                Finance Hacks
              </TabsTrigger>
              <TabsTrigger value="commentaries" className="flex-1 text-xs sm:text-base py-2 px-2">
                {isMobile ? "Budget" : "Budget Commentaries"}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="handbooks" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {handbooks.map((resource, index) => (
                <ResourceCard key={index} resource={resource} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="finance-hacks" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {financeHacks.map((resource, index) => (
                <ResourceCard key={index} resource={resource} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commentaries" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {commentaries.map((resource, index) => (
                <ResourceCard key={index} resource={resource} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1B365D] text-white p-8 rounded-lg shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Additional Resources?</h2>
            <p className="text-gray-200 mb-6">
              Our team is available to provide you with any additional information or resources you may need to make
              informed decisions about your financial strategy.
            </p>
            <Button className="bg-[#E6A44E] hover:bg-[#E6A44E]/90 text-white" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </>
  )
}

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={resource.image || "/placeholder.svg?height=200&width=300"}
            alt={resource.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <FileText className="h-8 w-8 text-white opacity-80" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-[#1B365D]">{resource.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 mb-4">{resource.description}</p>
        </CardContent>
        <div className="p-4 pt-0 mt-auto">
          <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90" asChild>
            <Link href={resource.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Resource
            </Link>
          </Button>
        </div>
      </Card>
    </MotionDiv>
  )
}


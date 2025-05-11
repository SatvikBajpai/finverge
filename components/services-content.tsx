"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

const MotionDiv = motion.div

interface Service {
  title: string
  description: string
  image: string
  icon: keyof typeof LucideIcons
}

interface ServicesContentProps {
  services: Service[]
}

export function ServicesContent({ services }: ServicesContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-[#1B365D] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2lhbCUyMGFkdmlzb3J8ZW58MHx8MHx8fDA%3D"
          alt="Financial Services"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 text-center text-white space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            Comprehensive Financial Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Tailored solutions to empower your business growth and financial success
          </p>
          <Button size="lg" className="bg-[#E6A44E] text-white hover:bg-[#E6A44E]/90" asChild>
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B365D] mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        {service.icon && LucideIcons[service.icon]
                          ? React.createElement(LucideIcons[service.icon], { className: "h-16 w-16 text-white" })
                          : null}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-[#1B365D] mb-2">{service.title}</CardTitle>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-4">
                    <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-[#1B365D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Strategy?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Schedule a consultation with our expert team to discuss how we can tailor our services to your specific
              needs and help you achieve your financial goals.
            </p>
            <Button size="lg" className="bg-[#E6A44E] text-white hover:bg-[#E6A44E]/90" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}


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
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2lhbCUyMGFkdmlzb3J8ZW58MHx8MHx8fDA%3D"
          alt="Financial Services"
          fill
          className="object-cover opacity-10"
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 text-center space-y-8 max-w-4xl px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-foreground mb-6">
              Comprehensive <span className="gradient-text">Financial Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Tailored solutions to empower your business growth and financial success
            </p>
            <Button variant="amber" size="lg" asChild>
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="w-full py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-section" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expert financial solutions tailored to your business needs
            </p>
          </MotionDiv>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col glass-card border-white/10 hover:border-amber-400/30 transition-all duration-500 group overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent flex items-center justify-center">
                        {service.icon && LucideIcons[service.icon]
                          ? React.createElement(LucideIcons[service.icon], { className: "h-14 w-14 text-white/90 drop-shadow-lg" })
                          : null}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-3">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="glass" className="w-full" asChild>
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
      <section className="w-full py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-section" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your <span className="gradient-text">Financial Strategy</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with our expert team to discuss how we can tailor our services to your specific
              needs and help you achieve your financial goals.
            </p>
            <Button variant="amber" size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </MotionDiv>
        </div>
      </section>
    </>
  )
}

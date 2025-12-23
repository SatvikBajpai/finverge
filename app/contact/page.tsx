"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionDiv = motion.div

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.trim().length < 2 ? "Must be at least 2 characters" : ""
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email address" : ""
      case "phone":
        return !/^\+?[\d\s\-()]{10,}$/.test(value) ? "Invalid phone number" : ""
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : ""
      default:
        return ""
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("https://formspree.io/f/meoaqdbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
      setErrors({})
      setTouched({})

      setSubmitStatus({
        type: "success",
        message: "Your message has been received successfully!",
      })
    } catch (error) {
      console.error("Error sending form:", error)
      setSubmitStatus({
        type: "error",
        message: "There was a problem sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're here to answer your questions and provide the financial guidance you need
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Form Section */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-section" />
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Contact Form */}
              <MotionDiv
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-8">Send Us a <span className="gradient-text">Message</span></h2>

                    {submitStatus.type && (
                      <div
                        className={`mb-8 p-6 rounded-xl text-center ${
                          submitStatus.type === "success"
                            ? "glass-card border-amber-400/30"
                            : "glass-card border-red-500/30"
                        }`}
                        role="alert"
                        aria-live="polite"
                      >
                        <div className="flex flex-col items-center justify-center">
                          {submitStatus.type === "success" ? (
                            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-4 shadow-glow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-navy-950"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          )}
                          <h3
                            className={`text-xl font-bold mb-2 ${
                              submitStatus.type === "success" ? "text-amber-400" : "text-red-400"
                            }`}
                          >
                            {submitStatus.type === "success" ? "Thank You!" : "Something Went Wrong"}
                          </h3>
                          <p className={submitStatus.type === "success" ? "text-muted-foreground" : "text-red-400/80"}>
                            {submitStatus.message}
                          </p>
                          {submitStatus.type === "success" && (
                            <p className="text-muted-foreground/70 mt-2">Our team will get back to you shortly.</p>
                          )}
                        </div>
                      </div>
                    )}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className="text-sm font-medium text-foreground/80 mb-2 block"
                            htmlFor="first-name"
                          >
                            First Name
                          </label>
                          <Input
                            id="first-name"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`bg-muted/30 border-border text-white placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-amber-400/20 ${
                              touched.firstName && errors.firstName ? "border-red-400/50" : ""
                            }`}
                          />
                          {touched.firstName && errors.firstName && (
                            <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label
                            className="text-sm font-medium text-foreground/80 mb-2 block"
                            htmlFor="last-name"
                          >
                            Last Name
                          </label>
                          <Input
                            id="last-name"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`bg-muted/30 border-border text-white placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-amber-400/20 ${
                              touched.lastName && errors.lastName ? "border-red-400/50" : ""
                            }`}
                          />
                          {touched.lastName && errors.lastName && (
                            <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          className="text-sm font-medium text-foreground/80 mb-2 block"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`bg-muted/30 border-border text-white placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-amber-400/20 ${
                            touched.email && errors.email ? "border-red-400/50" : ""
                          }`}
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label
                          className="text-sm font-medium text-foreground/80 mb-2 block"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`bg-muted/30 border-border text-white placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-amber-400/20 ${
                            touched.phone && errors.phone ? "border-red-400/50" : ""
                          }`}
                        />
                        {touched.phone && errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label
                          className="text-sm font-medium text-foreground/80 mb-2 block"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <Textarea
                          className={`min-h-[150px] bg-muted/30 border-border text-white placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-amber-400/20 ${
                            touched.message && errors.message ? "border-red-400/50" : ""
                          }`}
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.message && errors.message && (
                          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        variant="amber"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </MotionDiv>

              {/* Company Brochure */}
              <MotionDiv
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="glass-card border-border h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-white mb-6">Company <span className="gradient-text">Brochure</span></h2>

                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        Learn more about our services, expertise, and how we can help your business grow by viewing our
                        company brochure.
                      </p>

                      <Button variant="glass" size="lg" className="self-center" asChild>
                        <Link
                          href="https://drive.google.com/file/d/1NKGsxA3DEYVJunXu6EBYof03MqtGbRr1/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-5 w-5" /> View Company Brochure
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

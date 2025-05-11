"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Replace YOUR_FORMSPREE_FORM_ID with the actual form ID from Formspree
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
          _replyto: formData.email, // This will set the reply-to email address
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })

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
        <section className="w-full py-12 md:py-24 bg-[#1B365D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4">
                We're here to answer your questions and provide the financial guidance you need
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Send Us a Message</h2>

                    {submitStatus.type && (
                      <div
                        className={`mb-8 p-6 rounded-lg shadow-md text-center ${
                          submitStatus.type === "success"
                            ? "bg-gradient-to-r from-[#1B365D]/10 to-[#E6A44E]/10 border border-[#E6A44E]/20"
                            : "bg-red-50 border border-red-200"
                        }`}
                        role="alert"
                        aria-live="polite"
                      >
                        <div className="flex flex-col items-center justify-center">
                          {submitStatus.type === "success" ? (
                            <div className="w-16 h-16 bg-[#1B365D] rounded-full flex items-center justify-center mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
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
                              submitStatus.type === "success" ? "text-[#1B365D]" : "text-red-700"
                            }`}
                          >
                            {submitStatus.type === "success" ? "Thank You!" : "Something Went Wrong"}
                          </h3>
                          <p className={submitStatus.type === "success" ? "text-gray-700" : "text-red-600"}>
                            {submitStatus.message}
                          </p>
                          {submitStatus.type === "success" && (
                            <p className="text-gray-600 mt-2">Our team will get back to you shortly.</p>
                          )}
                        </div>
                      </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                          />
                        </div>
                        <div>
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                        />
                      </div>
                      <div>
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                        />
                      </div>
                      <div>
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <Textarea
                          className="min-h-[150px]"
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Company Brochure - Simple Version */}
              <div>
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Company Brochure</h2>

                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-gray-600 mb-8">
                        Learn more about our services, expertise, and how we can help your business grow by viewing our
                        company brochure.
                      </p>

                      <Button size="lg" className="bg-[#1B365D] hover:bg-[#1B365D]/90 text-white self-center" asChild>
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


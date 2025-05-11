"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BlogContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Financial Insights
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Expert analysis and advice on wealth management, investments, and financial planning
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="group space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop"
              alt="Investment strategies"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-[#E6A44E]">Investment</span>
            <h3 className="text-xl font-bold group-hover:text-[#1B365D]">
              2024 Investment Strategies: Navigating Market Trends
            </h3>
            <p className="text-gray-500">
              Discover key investment strategies to help you make informed decisions in today's market.
            </p>
            <Button variant="link" className="p-0 text-[#1B365D] hover:text-[#E6A44E]" asChild>
              <Link href="/blog/investment-strategies-2024">Read More →</Link>
            </Button>
          </div>
        </div>
        <div className="group space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop"
              alt="Retirement planning"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-[#E6A44E]">Retirement</span>
            <h3 className="text-xl font-bold group-hover:text-[#1B365D]">
              Early Retirement Planning: What You Need to Know
            </h3>
            <p className="text-gray-500">
              Essential tips and strategies for planning your early retirement effectively.
            </p>
            <Button variant="link" className="p-0 text-[#1B365D] hover:text-[#E6A44E]" asChild>
              <Link href="/blog/early-retirement-planning">Read More →</Link>
            </Button>
          </div>
        </div>
        <div className="group space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
              alt="Tax planning"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-[#E6A44E]">Tax Planning</span>
            <h3 className="text-xl font-bold group-hover:text-[#1B365D]">
              Tax Optimization Strategies for High-Net-Worth Individuals
            </h3>
            <p className="text-gray-500">Learn about effective tax planning strategies to maximize your wealth.</p>
            <Button variant="link" className="p-0 text-[#1B365D] hover:text-[#E6A44E]" asChild>
              <Link href="/blog/tax-optimization-strategies">Read More →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


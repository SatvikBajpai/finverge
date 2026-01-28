import { AboutPageContent } from "@/components/about-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about FinVerge Advisors - our mission, values, and commitment to empowering startups and SMEs with strategic financial solutions in India.",
  openGraph: {
    title: "About FinVerge Advisors",
    description: "Your trusted partner in financial growth and strategy. Learn about our mission and values.",
  },
}

export default function AboutPage() {
  // Add padding-top to the main container to account for the fixed navbar
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground text-center">
              About <span className="gradient-text">FinVerge</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center mt-4">
              Your trusted partner in financial growth and strategy
            </p>
          </div>
        </section>

        <AboutPageContent />
      </main>
    </div>
  )
}


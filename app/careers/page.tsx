import { CareersContent } from "@/components/careers-content"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CareersPage() {
  // Add padding-top to the main container to account for the fixed navbar
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-[#1B365D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">
              Careers at FinVerge
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl text-center mt-4">
              Join our team and help shape the future of financial services
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1B365D] mb-8">Current Openings</h2>
            <CareersContent />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[#1B365D] mb-4">Why Join FinVerge?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              At FinVerge, we offer a dynamic work environment, opportunities for professional growth, and the chance to
              make a real impact in the financial services industry.
            </p>
            <Link href="/about" className="inline-flex items-center text-[#1B365D] hover:underline">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}


import { ExpertiseContent } from "@/components/expertise-content"

export default function ExpertisePage() {
  // Add padding-top to the main container to account for the fixed navbar
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-[#1B365D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">
              Our Expertise
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl text-center mt-4">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ExpertiseContent />
          </div>
        </section>
      </main>
    </div>
  )
}


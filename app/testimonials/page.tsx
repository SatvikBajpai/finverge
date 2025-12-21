import { TestimonialsContent } from "@/components/testimonials-content"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-section" />
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <TestimonialsContent />
          </div>
        </section>
      </main>
    </div>
  )
}


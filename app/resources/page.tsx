import { ResourcesContent } from "@/components/resources-content"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ResourcesContent />
          </div>
        </section>
      </main>
    </div>
  )
}


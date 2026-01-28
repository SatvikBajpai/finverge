import { InsightsContent } from "@/components/resources-content"
import { fetchSheetResources, fallbackResources } from "@/lib/googleSheets"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources",
  description: "Free financial resources, guides, and insights for startups and SMEs. Budget analysis, compliance guides, funding strategies, and more.",
  openGraph: {
    title: "Resources | FinVerge Advisors",
    description: "Free financial resources, guides, and insights for startups and SMEs.",
  },
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ResourcesPage() {
  let resources = await fetchSheetResources()

  // Use fallback if no resources from sheet
  if (resources.length === 0) {
    resources = fallbackResources
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-section" />
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <InsightsContent resources={resources} />
          </div>
        </section>
      </main>
    </div>
  )
}


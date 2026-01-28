import { getServices } from "@/lib/services"
import { ServicesContent } from "@/components/services-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive financial services for startups and SMEs: CFO Services, Fundraising, Financial Modeling, Compliance, Business Advisory, and more.",
  openGraph: {
    title: "Our Services | FinVerge Advisors",
    description: "CFO Services, Fundraising, Financial Modeling, Compliance, and Business Advisory for startups and SMEs.",
  },
}

export default async function ServicesPage() {
  const services = await getServices()

  // Add padding-top to the main container to account for the fixed navbar
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <ServicesContent services={services} />
      </main>
    </div>
  )
}


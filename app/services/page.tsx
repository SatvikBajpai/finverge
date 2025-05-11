import { getServices } from "@/lib/services"
import { ServicesContent } from "@/components/services-content"

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


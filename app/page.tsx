import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { getServices } from "@/lib/services"

export default async function Home() {
  const services = await getServices()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection services={services} />
        <CTASection />
      </main>
    </div>
  )
}


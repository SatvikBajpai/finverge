import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Linkedin, Mail, MapPin } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FinVerge Advisors - Financial Advisory for Startups & SMEs | Delhi NCR",
    template: "%s | FinVerge Advisors"
  },
  description: "FinVerge Advisors provides strategic financial solutions for startups and SMEs in India. Services include fundraising, CFO services, financial modeling, compliance, and business advisory. Based in Delhi NCR.",
  keywords: [
    "startup financial advisory",
    "CFO services India",
    "fundraising consultants",
    "financial modeling",
    "startup compliance",
    "SME advisory",
    "business financial planning",
    "Delhi NCR financial advisors",
    "startup funding India",
    "virtual CFO services"
  ],
  authors: [{ name: "FinVerge Advisors" }],
  creator: "FinVerge Advisors",
  publisher: "FinVerge Advisors",
  metadataBase: new URL("https://finvergeadvisors.com"),
  alternates: {
    canonical: "https://finvergeadvisors.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://finvergeadvisors.com",
    siteName: "FinVerge Advisors",
    title: "FinVerge Advisors - Your Financial Partners In Growth",
    description: "Empowering startups and SMEs with strategic financial solutions. Expert fundraising, CFO services, and business advisory in Delhi NCR.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinVerge Advisors - Financial Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinVerge Advisors - Financial Advisory for Startups & SMEs",
    description: "Empowering startups and SMEs with strategic financial solutions. Expert fundraising, CFO services, and business advisory.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "B2cKA-ssCVWeBq2exgFuJ8WqWloHhSCm9LTEbbIq6kU",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "FinVerge Advisors",
  "description": "Strategic financial advisory services for startups and SMEs in India",
  "url": "https://finvergeadvisors.com",
  "logo": "https://finvergeadvisors.com/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi NCR",
    "addressCountry": "IN"
  },
  "email": "contact@finvergeadvisors.com",
  "sameAs": [
    "https://www.linkedin.com/company/finvergeadvisors"
  ],
  "serviceType": [
    "Financial Advisory",
    "CFO Services",
    "Fundraising Consulting",
    "Financial Modeling",
    "Business Compliance",
    "Startup Advisory"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen bg-background">
            {/* Background gradient for dark mode */}
            <div className="fixed inset-0 gradient-mesh dark:opacity-100 opacity-0 transition-opacity duration-500 -z-10" />
            <div className="fixed inset-0 bg-white dark:opacity-0 opacity-100 transition-opacity duration-500 -z-10" />

            <Navigation />
            <main className="flex-1">{children}</main>
            <footer className="w-full py-12 glass-nav border-t border-border">
              <div className="container">
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">About FinVerge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your Financial Partners In Growth. Empowering startups and SMEs with strategic financial solutions.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Office</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-3 text-amber-500" />
                      <p>Delhi NCR</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Contact</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-3 text-amber-500" />
                      <p>contact@finvergeadvisors.com</p>
                    </div>
                    <Link
                      href="https://www.linkedin.com/company/finvergeadvisors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-amber-500 transition-colors group"
                    >
                      <div className="glass-light p-2 rounded-full mr-3 group-hover:bg-amber-400/20 transition-all duration-300">
                        <Linkedin className="h-4 w-4 text-amber-500" />
                      </div>
                      linkedin.com/company/finvergeadvisors
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Legal</h4>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">© 2026 FinVerge Advisors. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <ScrollToTop />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

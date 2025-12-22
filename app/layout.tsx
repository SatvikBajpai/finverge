import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import type { ReactNode } from "react"
import { Linkedin, Mail, MapPin } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FinVerge - Your Financial Partners In Growth",
  description: "Empowering startups and SMEs with strategic financial solutions",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
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
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Linkedin className="h-4 w-4 mr-3 text-amber-500" />
                      <Link
                        href="https://www.linkedin.com/company/finvergeadvisors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-500 transition-colors"
                      >
                        linkedin.com/company/finvergeadvisors
                      </Link>
                    </div>
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
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">© 2025 FinVerge Advisors. All rights reserved.</p>
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.linkedin.com/company/finvergeadvisors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <div className="glass-light p-2.5 rounded-full group-hover:bg-amber-400/20 transition-all duration-300 group-hover:shadow-glow">
                          <Linkedin className="h-5 w-5 text-foreground/70 group-hover:text-amber-500 transition-colors" />
                        </div>
                      </Link>
                    </div>
                  </div>
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

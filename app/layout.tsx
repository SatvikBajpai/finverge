import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import type { ReactNode } from "react"
import { Linkedin, Mail, MapPin } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FinVerge - Your Financial Partners In Growth",
  description: "Empowering startups and SMEs with strategic financial solutions",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <footer className="w-full py-6 bg-[#1B365D] text-white">
            <div className="container">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">About FinVerge</h4>
                  <p className="text-sm text-gray-300">
                    Your Financial Partners In Growth. Empowering startups and SMEs with strategic financial solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Office</h4>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 mr-2 text-[#E6A44E]" />
                    <p>Delhi NCR</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Contact</h4>
                  <div className="flex items-center text-sm text-gray-300">
                    <Mail className="h-4 w-4 mr-2 text-[#E6A44E]" />
                    <p>contact@finvergeadvisors.com</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Linkedin className="h-4 w-4 mr-2 text-[#E6A44E]" />
                    <Link
                      href="https://www.linkedin.com/company/finvergeadvisors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      linkedin.com/company/finvergeadvisors
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-300">© 2025 FinVerge Advisors. All rights reserved.</p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/company/finvergeadvisors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <div className="bg-white p-2 rounded-full group-hover:bg-[#E6A44E] transition-colors">
                        <Linkedin className="h-5 w-5 text-[#1B365D] group-hover:text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}


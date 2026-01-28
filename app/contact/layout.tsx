import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with FinVerge Advisors. Contact us for financial advisory, CFO services, fundraising consultation, and business growth strategies.",
  openGraph: {
    title: "Contact FinVerge Advisors",
    description: "We're here to answer your questions and provide the financial guidance you need.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

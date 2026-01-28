import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FinVerge Advisors terms of service - guidelines for using our website and services.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground mb-8 text-center">Terms of Service</h1>
            <p className="text-muted-foreground mb-4 text-sm text-center">Effective Date: 21st March 2025</p>
            <div className="prose dark:prose-invert max-w-none text-foreground">
              <p className="text-muted-foreground">Welcome to Finverge Advisors. By using our website, you agree to the following terms:</p>
              <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Acceptance of Terms:</strong> By accessing our website, you agree to be bound by these Terms of Service and our Privacy Policy.
                </li>
                <li>
                  <strong className="text-foreground">Use of Services:</strong> You agree to use our services lawfully and responsibly. Unlawful use, including unauthorized access or disruption of our website, is prohibited.
                </li>
                <li>
                  <strong className="text-foreground">Intellectual Property:</strong> All content on this website, including text, logos, and graphics, is the property of Finverge Advisors and may not be reproduced without permission.
                </li>
                <li>
                  <strong className="text-foreground">Limitation of Liability:</strong> Finverge Advisors is not liable for any direct, indirect, or consequential damages arising from your use of the website.
                </li>
                <li>
                  <strong className="text-foreground">Changes to Terms:</strong> We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
                </li>
                <li>
                  <strong className="text-foreground">Governing Law:</strong> These terms are governed by and construed in accordance with the laws of New Delhi, India.
                </li>
                <li>
                  <strong className="text-foreground">Contact Us:</strong> For any questions, please contact us at: <a href="mailto:vishal@finvergeadvisors.com" className="text-amber-500 hover:text-amber-400">vishal@finvergeadvisors.com</a>.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

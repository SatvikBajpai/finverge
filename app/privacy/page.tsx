export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1B365D] mb-8 text-center">Privacy Policy</h1>
            <p className="text-gray-500 mb-4 text-sm text-center">Effective Date: 21st March, 2025</p>
            <div className="prose prose-gray max-w-none">
              <p>Finverge Advisors ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website <span className='break-all'>www.finvergeadvisors.com</span>.</p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Information We Collect:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We only collect personal information when you voluntarily submit your details through our contact form, such as your name, email address, and phone number.</li>
                  </ul>
                </li>
                <li>
                  <strong>How We Use Your Information:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>To respond to inquiries and communicate with you.</li>
                    <li>To comply with legal obligations.</li>
                  </ul>
                </li>
                <li>
                  <strong>Information Sharing:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We do not sell, rent, or share your information with third parties, except if required by law.</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Security:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We implement reasonable measures to protect your information. However, no method of transmission over the Internet is 100% secure.</li>
                  </ul>
                </li>
                <li>
                  <strong>Cookies and Data Retention:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We do not use cookies or track your browsing activity.</li>
                    <li>We do not retain your personal data beyond what is necessary to respond to your inquiries.</li>
                  </ul>
                </li>
                <li>
                  <strong>Your Rights:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>You may access, update, or delete your personal information by contacting us at <a href="mailto:contact@finvergeadvisors.com">contact@finvergeadvisors.com</a>.</li>
                  </ul>
                </li>
                <li>
                  <strong>Changes to This Privacy Policy:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We may update this policy as needed. Please review this page periodically.</li>
                  </ul>
                </li>
                <li>
                  <strong>Contact Us:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>If you have any questions, contact us at: <a href="mailto:vishal@finvergeadvisors.com">vishal@finvergeadvisors.com</a>.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
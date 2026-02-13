const PrivacyPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/90">
            Effective Date: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              HappiJoy Waffles respects your privacy and is committed to protecting your personal information.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>Since we do not process orders directly on our website, we collect personal information primarily through WhatsApp when you place an order.</p>
              <p className="mt-4">This may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Delivery address</li>
                <li>Order details</li>
                <li>Proof of payment</li>
                <li>Bank transfer reference information</li>
              </ul>
              <p className="mt-4">We may also collect limited website analytics data such as page visits and browser type.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Process and confirm orders</li>
                <li>Arrange deliveries</li>
                <li>Communicate order updates</li>
                <li>Respond to customer inquiries</li>
                <li>Maintain transaction records</li>
              </ul>
              <p className="mt-4">We do not sell or rent your personal information to third parties.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Information</h2>
              <p>Payments are made via direct bank transfer. We do not collect or store your banking credentials. You are responsible for ensuring payment is sent to the correct account details provided by us.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
              <p>We take reasonable steps to protect your information from unauthorized access, misuse, or disclosure.</p>
              <p className="mt-4">However, no method of electronic communication is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing</h2>
              <p>We may share limited information with delivery personnel solely for the purpose of completing your delivery (name, phone number, address).</p>
              <p className="mt-4">We may disclose information if required by law.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p>You may request:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information where legally permitted</li>
              </ul>
              <p className="mt-4">Requests should be made via WhatsApp.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Policy Updates</h2>
              <p>We reserve the right to update this Privacy Policy at any time. Updates will be posted on this website with the revised effective date.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage

const TermsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Terms of Use
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
            <div className="mb-10">
              <p className="text-gray-600 mb-2"><strong>Business Name:</strong> HappiJoy Waffles</p>
              <p className="text-gray-600"><strong>Location:</strong> Jamaica</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>
              <p>This website is for informational purposes only. Orders are not placed through this website at this time.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ordering Process</h2>
              <p>All orders must be placed through WhatsApp using the contact number listed on our website and social media platforms.</p>
              <p className="mt-4">Orders are confirmed only after:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>We acknowledge your request via WhatsApp, and</li>
                <li>Payment is received via bank transfer.</li>
              </ul>
              <p className="mt-4">We do not accept orders through the website.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payments</h2>
              <p>Payment is accepted via bank transfer only.</p>
              <p className="mt-4">Orders are not confirmed until proof of payment is received and verified. We reserve the right to decline or cancel orders if payment is not received or cannot be verified.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery Policy Overview</h2>
              <p>We currently deliver only to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Spanish Town</li>
                <li>Portmore</li>
              </ul>
              <p className="mt-4">We do not offer same-day delivery.</p>
              <p className="mt-4">Orders for next-day delivery must be placed and paid for by 9:00 PM on the day before the required delivery date.</p>
              <p className="mt-4">Customers are encouraged to ask about delivery details when confirming their order via WhatsApp.</p>
              <p className="mt-4">Full delivery terms are outlined in our Delivery Policy.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Product Availability</h2>
              <p>All products are subject to availability. Because our waffles are freshly prepared, certain menu items may be unavailable due to ingredient supply.</p>
              <p className="mt-4">We reserve the right to substitute ingredients where necessary, while maintaining product quality and standards.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p>All content on this website, including text, logos, graphics, images, and branding, is the property of HappiJoy Waffles and may not be copied, reproduced, or distributed without written permission.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>HappiJoy Waffles shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or from the consumption of our products, except as required by Jamaican law.</p>
              <p className="mt-4">Customers are responsible for informing us of any allergies before placing an order.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p>We reserve the right to update these Terms at any time. Continued use of the website after updates means you accept the revised Terms.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p>These Terms are governed by the laws of Jamaica.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage

const DisclaimerPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Website Disclaimer
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
              The information provided on this website by HappiJoy Waffles is for general informational purposes only.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Information</h2>
              <p>While we strive to ensure that all information, including menu items, pricing, delivery areas, and policies, is accurate and up to date, we make no warranties or representations of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Information</h2>
              <p>Menu items, prices, delivery areas, and policies are subject to change without notice.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ordering Process</h2>
              <p>This website does not process orders. All orders must be placed via WhatsApp. Any reliance you place on information from this website is strictly at your own risk.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>To the fullest extent permitted by Jamaican law, HappiJoy Waffles shall not be liable for any loss or damage arising from the use of this website.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
              <p>This website may contain links to external websites. We are not responsible for the content or practices of any linked websites.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any questions about this disclaimer, please contact us via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DisclaimerPage

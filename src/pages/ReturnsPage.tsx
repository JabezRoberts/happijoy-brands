const ReturnsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Returns & Refund Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Because our products are freshly prepared food items, we do not offer returns.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Returns on Food Products</h2>
              <p>We do not accept returns or exchanges on food products once delivered.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Concerns</h2>
              <p>If there is an issue with your order (for example, incorrect item or quality concern), you must notify us immediately upon receipt by contacting us via WhatsApp with clear details and, where possible, photos.</p>
              <p className="mt-4">Refunds or replacements are considered at our sole discretion in cases of verified error on our part.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any concerns about your order, please contact us via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReturnsPage

const AllergyPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Allergy Disclaimer
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              HappiJoy Waffles prepares food in a kitchen that may handle common allergens, including but not limited to:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {['Dairy', 'Eggs', 'Wheat', 'Gluten', 'Nuts', 'Soy'].map((allergen) => (
                <div key={allergen} className="bg-gray-100 rounded-lg p-4 text-center">
                  <span className="font-semibold text-gray-800">{allergen}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cross-Contamination</h2>
              <p>While we take reasonable precautions to prevent cross-contamination, we cannot guarantee that any product is completely free of allergens.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibility</h2>
              <p>Customers with food allergies or dietary restrictions must inform us clearly at the time of ordering via WhatsApp.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
              <p>By placing an order, you acknowledge that you understand the risks associated with food allergens and accept full responsibility for your consumption decisions.</p>
              <p className="mt-4">HappiJoy Waffles shall not be held liable for allergic reactions or adverse effects resulting from the consumption of our products, except where required by Jamaican law.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any allergy concerns, please contact us via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a> before placing your order.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllergyPage

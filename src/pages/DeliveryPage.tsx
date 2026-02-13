const DeliveryPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Delivery Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Areas</h2>
              <p>We currently deliver to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Spanish Town</li>
                <li>Portmore</li>
              </ul>
              <p className="mt-4">If you are unsure whether your address qualifies, please ask us when confirming your order.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Schedule</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>We do not offer same-day delivery.</li>
                <li>Orders for next-day delivery must be placed and paid for by 9:00 PM the day before delivery.</li>
                <li>Orders placed after 9:00 PM will be scheduled for the following available delivery date.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Confirmation</h2>
              <p>Delivery details must be confirmed via WhatsApp at the time of order. Please ensure:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Correct address</li>
                <li>Accurate contact number</li>
                <li>Someone is available to receive the order</li>
              </ul>
              <p className="mt-4">We are not responsible for delays caused by incorrect delivery information.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Fees</h2>
              <p>Delivery fees may vary depending on location. Fees will be confirmed during your WhatsApp order confirmation.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed Deliveries</h2>
              <p>If no one is available to receive the order at the agreed time and location, additional delivery fees may apply.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any questions about delivery, please contact us via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeliveryPage

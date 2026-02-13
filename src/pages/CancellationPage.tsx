const CancellationPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Cancellation Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Because our products are freshly prepared to order, cancellations are limited.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Cancellation Before Preparation</h2>
              <p>Orders may be cancelled only if preparation has not yet begun.</p>
              <p className="mt-4">Cancellation requests must be made immediately via WhatsApp.</p>
              <p className="mt-4">If the order has not entered preparation, a refund may be issued at our discretion, less any applicable bank transfer or administrative fees.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cancellation After Preparation Has Begun</h2>
              <p>Once preparation has started, cancellations are not permitted.</p>
              <p className="mt-4">No refunds will be issued for orders that are already being prepared or completed.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Failure to Accept Delivery</h2>
              <p>If a customer fails to receive the order at the agreed delivery time and location:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>The order will be considered fulfilled.</li>
                <li>No refund will be issued.</li>
                <li>Redelivery may incur an additional delivery fee.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Processing</h2>
              <p>Approved refunds, where applicable, will be processed via bank transfer within a reasonable timeframe.</p>
              <p className="mt-4">HappiJoy Waffles is not responsible for delays caused by banking institutions.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you need to cancel an order, please contact us immediately via WhatsApp at <a href="tel:+18763165022" className="text-[#1a9b8a] hover:underline">+1 876 316 5022</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CancellationPage

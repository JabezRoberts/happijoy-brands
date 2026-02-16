import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long do the waffles last?',
      answer:
        'When stored in the freezer, they’re best enjoyed within 2–3 months for peak freshness. However, they may be kept longer for up to 6 months.',
    },
    {
      question: 'What makes HAPPIJOY Waffles different?',
      answer:
        'Our waffles are handcrafted with bold Jamaican-inspired flavors like Ackee Spice Delight, Scotch Bonnet Surprise, Coconut Pistachio, and more.',
    },
    {
      question: 'How do I place an order?',
      answer: (
        <>
          Orders can be placed through our website at{' '}
          <a
            href="https://www.happijoybrands.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a9b8a] font-medium hover:underline"
          >
            www.happijoybrands.com
          </a>
          .
        </>
      ),
    },
    {
      question: 'How do I store my HAPPIJOY Waffles?',
      answer: 'Keep them frozen until you’re ready to enjoy them.',
    },
    {
      question: 'Are HAPPIJOY Waffles egg-free?',
      answer: 'Yes! All our waffles are 100% egg-free.',
    },
    {
      question: 'Are your waffles spicy?',
      answer:
        'Only our Scotch Bonnet Surprise and Ackee Spice Delight have a mild kick. The rest are flavorful without heat.',
    },
    {
      question: 'Can I pick up my order?',
      answer:
        'Yes, pick-up options are available. We’ll confirm location and time after your order is placed.',
    },
    {
      question: 'What’s the best way to reheat them?',
      answer:
        'For the best texture, reheat in a toaster, oven, or air fryer. Avoid microwaving, as it may make them soggy.',
    },
    {
      question: 'How can I contact you?',
      answer: (
        <>
          Reach us via Phone/WhatsApp at{' '}
          <a href="tel:+18763165022" className="text-[#1a9b8a] font-medium hover:underline">
            876-316-5022
          </a>
          , Email:{' '}
          <a
            href="mailto:happijoywafflesja@gmail.com"
            className="text-[#1a9b8a] font-medium hover:underline"
          >
            happijoywafflesja@gmail.com
          </a>
          , or DM us on Instagram{' '}
          <a
            href="https://instagram.com/happijoywafflesja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a9b8a] font-medium hover:underline"
          >
            @happijoywafflesja
          </a>
          .
        </>
      ),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#fff9e6] to-[#e6f7f5] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to the most common questions about our Jamaican-inspired waffles.
            If you don’t see your question here, feel free to reach out!
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1a9b8a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-[#1a9b8a]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-[#1a9b8a] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-6 pb-5 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-2 pl-14">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out anytime.
            </p>
            <a href="https://wa.me/18763165022" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-full px-10 py-4 text-lg inline-flex items-center gap-2 shadow-lg">
                Contact Us on WhatsApp
                <span className="text-xl">↗</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
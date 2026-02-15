import { Star, Quote } from 'lucide-react'
import type { Page } from '../App'

interface TestimonialsSectionProps {
  navigateTo?: (page: Page) => void
}

const TestimonialsSection = ({ navigateTo }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      name: 'Shanique Smith',
      role: 'Local Guide',
      content: 'Very Very Very Delicious! 10/10 recommend. I tried the coconut pistachio waffles! 🤤',
      rating: 5,
      avatar: 'SS',
    },
    {
      name: 'Feevah Grass',
      role: 'Local Guide',
      content: 'The service was A1 from the moment I placed the order to the moment I received. The packaging was well thought out. None of the waffles stuck together despite me thawing them to toast.',
      rating: 5,
      avatar: 'FG',
    },
    {
      name: 'Gabrielle White',
      role: 'Verified Customer',
      content: 'Ok so I tried the Scotch Bonnet waffles and honestly I really loved and enjoyed it. It has a sweet yet spicy taste kind of like fritters and it tastes amazing with bacon.',
      rating: 5,
      avatar: 'GW',
    },
    {
      name: 'Daniel Simmonds',
      role: 'Verified Customer',
      content: 'It was my first time trying waffles, mine was the chocolate and I must say I\'m impressed by the quality, quantity and most importantly the taste. Yummi Waffles will definitely be going places!',
      rating: 5,
      avatar: 'DS',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            What HappiJoy Lovers Are Saying!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real Reviews, Real Flavor, Real Satisfaction! Our customers can't get enough of HappiJoy Waffles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-[#1a9b8a]/5 transition-colors relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#1a9b8a]/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffc107] text-[#ffc107]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a9b8a] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {navigateTo && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigateTo('testimonials')}
              className="inline-flex items-center gap-2 text-[#1a9b8a] font-semibold hover:underline"
            >
              View All Testimonials
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsSection

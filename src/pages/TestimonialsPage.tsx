import { Star, Quote } from 'lucide-react'

const TestimonialsPage = () => {
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
      content: 'The service was A1 from the moment I placed the order to the moment I received. The packaging was well thought out. None of the waffles stuck together despite me thawing them to toast. Most times I didn\'t have to use any effort to separate them.',
      rating: 5,
      avatar: 'FG',
    },
    {
      name: 'Gabrielle White',
      role: 'Verified Customer',
      content: 'Ok so I tried the Scotch Bonnet waffles and honestly I really loved and enjoyed it. It has a sweet yet spicy taste kind of like fritters and it tastes amazing with bacon. It\'s definitely for persons that loves pepper or a little spicy kick.',
      rating: 5,
      avatar: 'GW',
    },
    {
      name: 'Daniel Simmonds',
      role: 'Verified Customer',
      content: 'It was my first time trying waffles, mine was the chocolate and I must say I\'m impressed by the quality, quantity and most importantly the taste. With this in mind Yummi Waffles will definitely be going places. I wish for them continued success.',
      rating: 5,
      avatar: 'DS',
    },
    {
      name: 'Dominic Mitchell',
      role: 'Verified Customer',
      content: 'I recently purchased the ackee flavored and the coconut flavored waffles! I must say they exceeded my expectations! I have never envisioned flavored waffles but for sure this is a MUST try!',
      rating: 5,
      avatar: 'DM',
    },
    {
      name: 'Shyanne McIntosh',
      role: 'Verified Customer',
      content: 'Their waffles are absolutely delicious, my daughter who is 7 years old had them and she said they are so good that she felt like she was tasting a slice of heaven, she was so excited about the waffles she was fancing. 10/10 best seller.',
      rating: 5,
      avatar: 'SM',
    },
    {
      name: 'Camile James',
      role: 'Verified Customer',
      content: 'My favourite waffles is chocolate! The balance of chocolate with the burst of chocolate chips makes it a perfect breakfast addition! Love my Yummi Waffles!',
      rating: 5,
      avatar: 'CJ',
    },
    {
      name: 'Nick Classical',
      role: 'Verified Customer',
      content: 'Tastiest waffles I\'ve had (no cap). My favorite is the coconut-pistachio 😋',
      rating: 5,
      avatar: 'NC',
    },
    {
      name: 'De Andra Bartley',
      role: 'Verified Customer',
      content: 'So I tasted the chocolate waffles and I must say they are amaaaaaaaaazing!!!!!! Nah exaggerate!! Can\'t wait to try the other flavors.',
      rating: 5,
      avatar: 'DB',
    },
    {
      name: 'Owen Wright',
      role: 'Verified Customer',
      content: 'So yummy and delicious I got the coconut pistachio it was really good. Good Customer Service I highly recommend 😊',
      rating: 5,
      avatar: 'OW',
    },
    {
      name: 'Shaneil White',
      role: 'Verified Customer',
      content: 'It is delicious, I have tried all the flavors but my favorite is the Ackee spice being that I\'m savory girl',
      rating: 5,
      avatar: 'SW',
    },
    {
      name: 'Shelly-Ann Hemmings',
      role: 'Verified Customer',
      content: 'I bought the chocolate supreme and it was delicious 🤤😋😋',
      rating: 5,
      avatar: 'SH',
    },
    {
      name: 'Andre Stephen',
      role: 'Verified Customer',
      content: 'These waffles are fire! The flavors are unique and the quality is top notch. Will definitely be ordering again.',
      rating: 5,
      avatar: 'AS',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real reviews from real waffle lovers. See why our customers keep coming back for more!
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#ffc107] text-[#ffc107]" />
              ))}
            </div>
            <span className="text-2xl font-bold ml-2">4.9</span>
            <span className="text-white/80">(200+ reviews)</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-[#1a9b8a]/5 transition-colors relative h-full"
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
                <div className="flex items-center gap-4 mt-auto">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience the Joy?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join our happy customers and taste the difference of HappiJoy Waffles!
          </p>
          <a
            href="https://wa.me/18763165022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage

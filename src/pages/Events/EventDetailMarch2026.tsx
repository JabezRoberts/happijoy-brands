import { Calendar, Clock, MapPin, Phone, MessageCircle, ArrowRight, Apple, Soup } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '@/App'

interface EventDetailPageProps {
  navigateTo: (page: Page) => void
}

const EventDetailMarch2026 = ({ navigateTo }: EventDetailPageProps) => {
  const waffles = [
    'Coconut Pistachio',
    'Vanilla',
    'Cheddar Herb',
    'Scotch Bonnet Surprise',
  ]

  const chickenOptions = ['BBQ', 'Original']

  const sauces = [
    'Sorrel Syrup',
    'Rum Sauce',
    'Citrus Spicy Aioli',
    'Cinnamon Maple Syrup',
  ]

  const juices = [
    'Cranberry Lychee',
    'Orange Juice',
    'Grape',
  ]

  const extras = [
    { name: 'Mac & Cheese', price: '$800' },
    { name: 'Chicken Strips', price: '$600' },
    { name: 'Waffles', price: '$500' },
    { name: 'Sauce', price: '$300' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1a9b8a]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#ffc107] text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Calendar className="w-4 h-4" />
              <p>Limited Event • March 2026</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              HappiJoy Waffle Box{' '}
              <span className="text-[#ffc107]">Custom</span>
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Build your own waffle experience with bold flavors and comforting favorites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/18763165022" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#ffc107] hover:bg-[#e6ac00] text-gray-900 font-bold rounded-full px-10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order Now on WhatsApp
                </Button>
              </a>
              <Button
                onClick={() => navigateTo('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-full px-10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-[#1a9b8a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-[#1a9b8a]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Event Date</h3>
              <p className="text-2xl font-bold text-[#1a9b8a]">March 25, 2026</p>
              <p className="text-sm text-gray-500 mt-1">Delivery Day</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-[#ffc107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Deadline</h3>
              <p className="text-2xl font-bold text-gray-900">March 20, 2026</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-[#1a9b8a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-[#1a9b8a]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Price</h3>
              <p className="text-2xl font-bold text-[#1a9b8a]">$3,500</p>
              <p className="text-sm text-gray-500">per box</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mix & Match Intro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Mix & Match Your Perfect Box
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every HappiJoy Waffle Box is fully customizable. Choose your favorite combinations and create a box that fits your taste.
          </p>
        </div>
      </section>

      {/* What's Included / Choices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Core Items */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Soup, name: 'Mac and Cheese', desc: '(Non-baked)', color: '#ffc107' },
                { icon: Apple, name: 'An Apple', desc: 'Fresh & crisp', color: '#1a9b8a' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#1a9b8a]/5 transition-colors">
                  <div className={`w-16 h-16 bg-[${item.color}]/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-8 h-8 text-[${item.color}]`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Waffles */}
            <div className="bg-[#1a9b8a]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Waffles</h3>
              <p className="text-center text-gray-600 mb-6">Pick any 2 flavors</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {waffles.map((waffle) => (
                  <div key={waffle} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <p className="font-medium text-gray-900">{waffle}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 italic">
                From classic comfort to bold island flavors, every waffle brings something unique.
              </p>
            </div>

            {/* Chicken */}
            <div className="bg-[#ffc107]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Chicken Strips</h3>
              <p className="text-center text-gray-600 mb-6">Pick 1</p>
              <div className="flex flex-wrap justify-center gap-4">
                {chickenOptions.map((option) => (
                  <span key={option} className="bg-white px-6 py-3 rounded-full font-medium shadow-sm">
                    {option}
                  </span>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                Crispy chicken strips that balance perfectly with both sweet and savory waffles.
              </p>
            </div>

            {/* Sauce */}
            <div className="bg-[#1a9b8a]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Sauce</h3>
              <p className="text-center text-gray-600 mb-6">Pick 1</p>
              <div className="flex flex-wrap justify-center gap-3">
                {sauces.map((sauce) => (
                  <span key={sauce} className="bg-white px-5 py-2 rounded-full font-medium shadow-sm">
                    {sauce}
                  </span>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                Each sauce is crafted to complement your waffle combination.
              </p>
            </div>

            {/* Juice */}
            <div className="bg-[#ffc107]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Fresh Juice</h3>
              <p className="text-center text-gray-600 mb-6">Pick 1</p>
              <div className="flex flex-wrap justify-center gap-4">
                {juices.map((juice) => (
                  <span key={juice} className="bg-white px-6 py-3 rounded-full font-medium shadow-sm">
                    {juice}
                  </span>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Extras</h3>
              <p className="text-gray-600 mb-8">Want to add a little more?</p>
              <div className="flex flex-wrap justify-center gap-4">
                {extras.map((extra, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl px-6 py-4 min-w-[180px]">
                    <span className="font-medium text-gray-900 block">{extra.name}</span>
                    <span className="text-[#1a9b8a] font-bold">{extra.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Option */}
            <div className="bg-gradient-to-r from-[#1a9b8a] to-[#148a7a] rounded-3xl p-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Go Large</h3>
              <p className="text-2xl font-bold mb-2">Large Waffle Box — $6,500</p>
              <p className="text-lg opacity-90">Serves 2 • Perfect for sharing with a friend, partner, or family member.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Order
            </h2>
            <p className="text-xl text-gray-600">
              Orders close March 20, 2026. Secure your custom waffle box today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a9b8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Message Us</h3>
              <p className="text-gray-600">
                Send us a message on WhatsApp to place your order.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Customize & Confirm</h3>
              <p className="text-gray-600">
                Tell us your choices – we'll confirm details and total.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a9b8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Delivery</h3>
              <p className="text-gray-600">
                All orders delivered on March 25, 2026.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="https://wa.me/18763165022" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-10">
                <MessageCircle className="w-5 h-5 mr-2" />
                876-316-5022
              </Button>
            </a>
            <a href="https://wa.me/18763165814" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-[#1a9b8a] text-[#1a9b8a] hover:bg-[#1a9b8a]/10 rounded-full px-10">
                Alternative: 876-316-5814
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't Miss This Limited Box!
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Orders close March 20, 2026. Build your custom waffle box today.
          </p>
          <a href="https://wa.me/18763165022" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#ffc107] hover:bg-[#e6ac00] text-gray-900 font-bold rounded-full px-12 py-6 text-lg">
              <MessageCircle className="w-6 h-6 mr-2" />
              Order on WhatsApp Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default EventDetailMarch2026
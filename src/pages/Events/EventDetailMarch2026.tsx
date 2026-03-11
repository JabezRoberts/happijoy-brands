import { Calendar, Clock, MapPin, Phone, MessageCircle, ArrowRight, Apple, Soup } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '@/App'

interface EventDetailPageProps {
  navigateTo: (page: Page) => void
}

const EventDetailMarch2026 = ({ navigateTo }: EventDetailPageProps) => {
  const waffles = [
    { name: 'Coconut Pistachio', image: '/images/march-waffles-coconut-pistachio.jpg' },
    { name: 'Vanilla', image: '/images/march-waffles-vanilla.jpg' },
    { name: 'Cheddar Herb', image: '/images/march-waffles-cheddar-herb.jpg' },
    { name: 'Scotch Bonnet Surprise', image: '/images/march-waffles-scotch-bonnet.jpg' },
  ]

  const chickenOptions = [
    { name: 'BBQ', image: '/images/march-chicken-bbq.jpg' },
    { name: 'Original', image: '/images/march-chicken-original.jpg' },
  ]

  const sauces = [
    { name: 'Sorrel Syrup', image: '/images/march-sauce-sorrel.jpg' },
    { name: 'Rum Sauce', image: '/images/march-sauce-rum.jpg' },
    { name: 'Citrus Spicy Aioli', image: '/images/march-sauce-citrus-aioli.jpg' },
    { name: 'Cinnamon Maple Syrup', image: '/images/march-sauce-cinnamon-maple.jpg' },
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

  const goLargeImage = '/images/march-large-box-sharing.jpg'

  // Replace the placeholder image paths above with your actual file paths

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
                className="border-2 border-white hover:bg-white hover:text-[#1a9b8a] font-bold rounded-full text-lg text-black"
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

      {/* Enhanced What's Included / Choices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Core Items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Soup, name: 'Mac and Cheese', desc: '(Non-baked)', color: '#ffc107' },
              { icon: Apple, name: 'An Apple', desc: 'Fresh & crisp', color: '#1a9b8a' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-[${item.color}]/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`w-10 h-10 text-[${item.color}]`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Waffles – Image Showcase */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff9e6] to-[#e6f7f5] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Waffles</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Pick any 2 flavors — from creamy classics to bold island heat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {waffles.map((waffle) => (
                <div
                  key={waffle.name}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={waffle.image}
                      alt={waffle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h4 className="text-white text-xl font-bold drop-shadow-md">{waffle.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chicken Strips – Side-by-side with description */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {chickenOptions.map((option) => (
                  <div
                    key={option.name}
                    className="overflow-hidden rounded-3xl shadow-xl"
                  >
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Chicken Strips</h3>
              <p className="text-lg text-gray-600 mb-4">Pick 1 style</p>
              <p className="text-gray-700 leading-relaxed">
                Crispy, golden chicken strips that balance perfectly with both sweet and savory waffles.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                {chickenOptions.map((opt) => (
                  <span
                    key={opt.name}
                    className="bg-[#1a9b8a]/10 px-6 py-3 rounded-full font-medium text-[#1a9b8a] shadow-sm"
                  >
                    {opt.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sauces – Grid with images */}
          <div className="bg-[#1a9b8a]/5 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Sauce</h3>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Pick 1 — each one crafted to elevate your custom combination.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sauces.map((sauce) => (
                <div key={sauce.name} className="text-center group">
                  <div className="overflow-hidden rounded-2xl shadow-lg mb-4 aspect-square">
                    <img
                      src={sauce.image}
                      alt={sauce.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">{sauce.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Juice */}
          <div className="bg-[#ffc107]/5 rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Fresh Juice</h3>
            <p className="text-lg text-gray-600 mb-8">Pick 1 refreshing drink to complete your box.</p>
            <div className="flex flex-wrap justify-center gap-6">
              {juices.map((juice) => (
                <span
                  key={juice}
                  className="bg-white px-8 py-4 rounded-full font-medium shadow-md text-lg text-gray-900"
                >
                  {juice}
                </span>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Extras</h3>
            <p className="text-xl text-gray-600 mb-10">Want to add a little more?</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {extras.map((extra, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
                >
                  <h4 className="font-bold text-xl text-gray-900 mb-2">{extra.name}</h4>
                  <p className="text-2xl font-bold text-[#1a9b8a]">{extra.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Go Large – Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={goLargeImage}
              alt="Large Waffle Box for sharing"
              className="w-full h-[500px] lg:h-[600px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-10 lg:p-16 text-white max-w-3xl">
                <h3 className="text-4xl lg:text-5xl font-bold mb-4">Go Large</h3>
                <p className="text-2xl lg:text-3xl font-bold mb-3">Large Waffle Box — $6,500</p>
                <p className="text-xl lg:text-2xl opacity-90">
                  Serves 2 • Perfect for sharing with a friend, partner, or family member.
                </p>
              </div>
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
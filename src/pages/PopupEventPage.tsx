import { Calendar, Clock, MapPin, Phone, MessageCircle, ArrowRight, Check, Utensils, Grape, Soup, Salad } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface PopupEventPageProps {
  navigateTo: (page: Page) => void
}

const PopupEventPage = ({ navigateTo }: PopupEventPageProps) => {

  const boxContents = [
    { icon: Utensils, name: 'Chicken Bites', description: 'Crispy, golden chicken bites' },
    { icon: Soup, name: 'Mac & Cheese', description: 'Creamy, cheesy goodness (Non-Baked)' },
    { icon: Salad, name: 'Coleslaw', description: 'Fresh, crunchy coleslaw' },
    { icon: Grape, name: 'Grapes', description: 'Fresh, juicy grapes' },
  ]

  const sauces = [
    'Sorrel Sauce',
    'Rum Cream',
    'Scotch Bonnet Citrus Aioli',
  ]

  const sweetWaffles = [
    'Vanilla',
    'Coconut Pistachio',
  ]

  const savoryWaffles = [
    'Scotch Bonnet Surprise',
    'Cheddar & Herb',
  ]

  const extras = [
    { name: 'Chicken Bites', price: '$600' },
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
              <p>Our First Ever Pop-Up Event!</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              HappiJoy Waffle Box{' '}
              <span className="text-[#ffc107]">Pop-Up!</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Don't Miss Out On A Tasty Event You Won't Want To Miss!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/18763165022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#ffc107] hover:bg-[#e6ac00] text-gray-900 font-bold rounded-full px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pre-Order Now
                </Button>
              </a>
              <Button
                onClick={() => navigateTo('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-gray-800 hover:bg-white hover:text-gray-900 font-bold rounded-full px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-[#1a9b8a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-[#1a9b8a]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Event Date</h3>
              <p className="text-2xl font-bold text-[#1a9b8a]">February 24, 2026</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-[#ffc107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Deadline</h3>
              <p className="text-2xl font-bold text-gray-900">February 18, 2026</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-[#1a9b8a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-[#1a9b8a]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Price</h3>
              <p className="text-2xl font-bold text-[#1a9b8a]">$2,500</p>
              <p className="text-sm text-gray-500">per box</p>
            </div>
          </div>
        </div>
      </section>

      {/* Box Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              Choose Your Box
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Sweet Box or Savory Box
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Both boxes come with the same delicious sides. Just choose your waffle flavor!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sweet Box */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Sweet Box</h3>
                <p className="opacity-90">For those with a sweet tooth!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Choose Your Waffle:</h4>
                  <div className="space-y-2">
                    {sweetWaffles.map((waffle, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{waffle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src="/images/get-ready.jpg"
                  alt="Sweet Box"
                  className="w-full h-148 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Savory Box */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-[#1a9b8a] to-teal-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Savory Box</h3>
                <p className="opacity-90">For those who love savory flavors!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Choose Your Waffle:</h4>
                  <div className="space-y-2">
                    {savoryWaffles.map((waffle, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#1a9b8a] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{waffle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src="/images/get-ready.jpg"
                  alt="Savory Box"
                  className="w-full h-148 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every box comes packed with these delicious items!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {boxContents.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#1a9b8a]/5 transition-colors">
                <div className="w-16 h-16 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Sauces */}
          <div className="bg-[#1a9b8a]/10 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Choose 1 Sauce
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {sauces.map((sauce, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium shadow-sm"
                >
                  {sauce}
                </span>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Add Extras</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {extras.map((extra, index) => (
                <div key={index} className="bg-gray-100 rounded-xl px-6 py-3">
                  <span className="font-medium text-gray-900">{extra.name}</span>
                  <span className="text-[#1a9b8a] font-bold ml-2">{extra.price}</span>
                </div>
              ))}
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Place your order before February 18, 2026 to secure your waffle box!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a9b8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Contact Us</h3>
              <p className="text-gray-600">
                Message us on WhatsApp at <a href="tel:8763165022" className="text-[#1a9b8a] font-medium">876-316-5022</a> during business hours.
                {/* Message us on WhatsApp at <a href="tel:8763165022" className="text-[#1a9b8a] font-medium">876-316-5022</a> or <a href="tel:8763165814" className="text-[#1a9b8a] font-medium">876-316-5814</a> */}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Choose Your Box</h3>
              <p className="text-gray-600">
                Select Sweet or Savory box and your preferred waffle flavor
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a9b8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Confirm & Pickup</h3>
              <p className="text-gray-600">
                We'll confirm your order and arrange pickup for February 24th
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a9b8a] to-[#148a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Pre-orders close on February 18, 2026. Secure your waffle box today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/18763165022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#ffc107] hover:bg-[#e6ac00] text-gray-900 font-bold rounded-full px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order on WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a
              href="https://wa.me/18763165814"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-gray-800 border-2 border-white hover:bg-white hover:text-[#1a9b8a] font-bold rounded-full px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Alternative Number
              </Button>
            </a>
          </div>
          <p className="text-white/80 mt-6">
            Follow us on social media: <span className="font-semibold text-white">@happijoywafflesja</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default PopupEventPage

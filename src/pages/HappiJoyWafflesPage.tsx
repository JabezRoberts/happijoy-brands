import { ArrowRight, Check, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface HappiJoyWafflesPageProps {
  navigateTo: (page: Page) => void
}

const HappiJoyWafflesPage = ({ navigateTo }: HappiJoyWafflesPageProps) => {
  const products = [
    {
      name: 'Coconut Pistachio Mini Rounds',
      price: '$1,200',
      description: 'A tropical getaway in every bite! Blends creamy pistachios with exotic coconut sweetness.',
      image: '/images/happi-joy-tropical-waffles.jpg',
      badge: 'Best Seller',
    },
    {
      name: 'Chocolate Supreme Mini Rounds',
      price: '$1,200',
      description: 'Rich, bold, and irresistibly smooth. Packed with premium chocolate flavor.',
      image: '/images/get.jpg',
      badge: 'Popular',
    },
  ]

  const features = [
    '100% Egg Free',
    'Made in Jamaica',
    'Premium Ingredients',
    'Unique Caribbean Flavors',
    'Fresh & Tasty',
    'Family Friendly',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#fff9e6] via-white to-[#e6f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a9b8a]/10 text-[#1a9b8a] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>From HappiJoy Brands</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-[#1a9b8a]">HappiJoy</span> Waffles
              </h1>
              <p className="text-xl text-[#1a9b8a] font-medium mb-6">
                The Home of Exotic Waffles
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Jamaican-made waffles, bursting with exotic flavor! Deliciously unique, 
                perfectly crispy, and made with the finest local ingredients. From Coconut 
                Pistachio to Chocolate Supreme, every bite brings pure joy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/18763165022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-full px-8"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order Now
                  </Button>
                </a>
                <Button
                  onClick={() => navigateTo('products')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#ffc107] text-gray-800 hover:bg-[#ffc107] font-semibold rounded-full px-8"
                >
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/happijoy-logo.png"
                alt="HappiJoy Waffles Logo"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#1a9b8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              Our Flavors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Discover Our Waffles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#ffc107] text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="text-2xl font-bold text-[#1a9b8a]">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <Button
                    onClick={() => navigateTo('products')}
                    className="w-full bg-[#1a9b8a] hover:bg-[#148a7a] text-white rounded-full"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Size
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-[#ffc107]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🧇</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mini Rounds</h3>
              <p className="text-gray-600 mb-4">
                4-inch waffles, light and tasty, 8 per pack.
              </p>
              <p className="text-2xl font-bold text-[#1a9b8a]">$1,200</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-[#1a9b8a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🥞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Belgian Waffles</h3>
              <p className="text-gray-600 mb-4">
                6-inch waffles, thick and fluffy, 4 per pack. Available on request.
              </p>
              <p className="text-2xl font-bold text-[#1a9b8a]">$2,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a9b8a] to-[#148a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Crave It. Taste It. Love It.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Order your HappiJoy Waffles today!
          </p>
          <a
            href="https://wa.me/18763165022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#ffc107] hover:bg-[#e6ac00] text-black font-bold rounded-full px-8 py-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Order on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default HappiJoyWafflesPage

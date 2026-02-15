import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface ProductsSectionProps {
  navigateTo: (page: Page) => void
}

const ProductsSection = ({ navigateTo }: ProductsSectionProps) => {
  const products = [
    {
      id: 'coconut',
      name: 'Coconut Pistachio Mini Rounds',
      price: '$1,200.00',
      description: 'A tropical getaway in every bite! Blends the creamy, nutty goodness of pistachios with the exotic sweetness of coconut.',
      image: '/images/happi-joy-tropical-waffles.jpg',
      badge: 'Best Seller',
      badgeColor: 'bg-[#1a9b8a]',
    },
    {
      id: 'chocolate',
      name: 'Chocolate Supreme Mini Rounds',
      price: '$1,200.00',
      description: 'Decadence in every bite! Rich, bold, and irresistibly smooth, packed with premium chocolate flavor.',
      image: '/images/get.jpg',
      badge: 'Popular',
      badgeColor: 'bg-[#ffc107] text-gray-900',
    },
  ]

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Our Crowd Favorites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved waffles made with exotic ingredients, bursting with delicious flavors, and made with love in Jamaica.
            Indulge in the flavors our customers can't get enough of!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-2xl font-bold text-[#1a9b8a]">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => navigateTo(product.id === 'coconut' ? 'product-coconut' : 'product-chocolate')}
                    className="flex-1 bg-[#1a9b8a] hover:bg-[#148a7a] text-white rounded-full"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    onClick={() => navigateTo('contact')}
                    variant="outline"
                    className="border-2 border-[#ffc107] text-gray-800 hover:bg-[#ffc107] rounded-full"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            onClick={() => navigateTo('products')}
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:border-[#1a9b8a] hover:text-[#1a9b8a] rounded-full px-8"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Product Types */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#ffc107]/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🧇</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Mini Rounds</h3>
                <p className="text-gray-600 text-sm">4-inch waffles, light and tasty, 8 per pack, perfect for sharing.</p>
                <p className="text-[#1a9b8a] font-bold mt-1">$1,200</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#1a9b8a]/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🥞</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Belgian Waffles</h3>
                <p className="text-gray-600 text-sm">6-inch waffles, thick and fluffy, 4 per pack. Available on request.</p>
                <p className="text-[#1a9b8a] font-bold mt-1">$2,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection

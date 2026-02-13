import { ArrowRight, ShoppingBag, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface ProductsPageProps {
  navigateTo: (page: Page) => void
}

const ProductsPage = ({ navigateTo }: ProductsPageProps) => {
  const products = [
    {
      id: 'coconut',
      name: 'Coconut Pistachio Mini Rounds',
      price: '$1,200.00',
      description: 'A tropical getaway in every bite! Coconut Pistachio Mini Rounds blend the creamy, nutty goodness of pistachios with the exotic sweetness of coconut. Light, crispy, and packed with island vibes—this waffle is a must-try!',
      fullDescription: 'Tropical sweetness meets nutty perfection in our Coconut Pistachio Mini Rounds. These waffles combine the creamy richness of coconut with the crunchy, buttery goodness of pistachios for a unique flavor experience. Each bite brings a taste of the islands, making them the perfect breakfast treat, afternoon snack, or post-dinner delight.',
      image: '/images/🌴✨ Escape to tropical paradise with a nutty twist! Introducing our Coconut Pistachio Waffle 🧇.jpg',
      productImage: '/images/WEBCocoP-Side1 (1).jpg',
      badge: 'Best Seller',
      badgeColor: 'bg-[#1a9b8a]',
      features: [
        '8 Mini Rounds per pack',
        '100% Egg Free',
        'Made in Jamaica',
        'Premium Ingredients',
        '250 Calories per serving',
        'Bold Caribbean Flavor',
      ],
      servingSuggestions: [
        'Light dusting of powdered sugar',
        'Drizzle of maple syrup',
        'Scoop of vanilla ice cream',
        'Fresh berries on top',
      ],
    },
    {
      id: 'chocolate',
      name: 'Chocolate Supreme Mini Rounds',
      price: '$1,200.00',
      description: 'Decadence in every bite! Our Chocolate Supreme Mini Rounds are rich, bold, and irresistibly smooth, packed with premium chocolate flavor. Whether you enjoy them on their own or topped with a drizzle of caramel, these waffles are a chocoholic\'s dream.',
      fullDescription: 'Indulge in the deep, rich taste of pure chocolate with our Chocolate Supreme Mini Rounds. These perfectly portioned 4-inch waffles are packed with premium cocoa, delivering an irresistible blend of crisp edges and soft, chocolaty goodness. Whether you enjoy them as a snack, a dessert, or a morning pick-me-up, these waffles satisfy every chocolate craving.',
      image: '/images/get.jpg',
      productImage: '/images/DSC00651 (1).JPG',
      badge: 'Popular',
      badgeColor: 'bg-[#ffc107] text-gray-900',
      features: [
        '8 Mini Rounds per pack',
        '100% Egg Free',
        'Made in Jamaica',
        'Premium Cocoa',
        '190 Calories per serving',
        'Decadently Rich',
      ],
      servingSuggestions: [
        'Top with whipped cream',
        'Drizzle with chocolate sauce',
        'Add fresh strawberries',
        'Serve with ice cream',
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#fff9e6] to-[#e6f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Discover Our Waffle Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exotic flavors, premium quality, and the taste of Jamaica in every bite. 
            Explore our delicious waffle offerings!
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full rounded-3xl shadow-xl"
                    />
                    <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                      {product.badge}
                    </div>
                  </div>
                  
                  {/* Secondary Image */}
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                    <img
                      src={product.productImage}
                      alt={`${product.name} Package`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Product Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-[#ffc107] text-[#ffc107]" />
                    <span className="text-gray-600 text-sm">4.9 (200+ reviews)</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h2>

                  <p className="text-3xl font-bold text-[#1a9b8a] mb-6">
                    {product.price}
                  </p>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {product.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Product Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-[#1a9b8a] rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Serving Suggestions */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Serving Suggestions</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.servingSuggestions.map((suggestion, i) => (
                        <span
                          key={i}
                          className="bg-[#ffc107]/20 text-gray-800 px-4 py-2 rounded-full text-sm"
                        >
                          {suggestion}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => navigateTo(product.id === 'coconut' ? 'product-coconut' : 'product-chocolate')}
                      size="lg"
                      className="bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-full px-8"
                    >
                      View Full Details
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <a
                      href="https://wa.me/18763165022"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-[#ffc107] text-gray-800 hover:bg-[#ffc107] font-semibold rounded-full px-8"
                      >
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Order Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Size
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer two sizes to suit your needs — whether you're enjoying a quick snack 
              or sharing with family and friends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-[#1a9b8a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🧇</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mini Rounds</h3>
              <p className="text-gray-600 mb-4">
                4-inch waffles, light and tasty — 8 per pack, perfect for sharing 
                or enjoying throughout the week.
              </p>
              <p className="text-2xl font-bold text-[#1a9b8a]">$1,200</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-[#ffc107]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🥞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Belgian Waffles</h3>
              <p className="text-gray-600 mb-4">
                6-inch waffles, thick and fluffy — 4 per pack. Available on request.
              </p>
              <p className="text-2xl font-bold text-[#1a9b8a]">$2,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage

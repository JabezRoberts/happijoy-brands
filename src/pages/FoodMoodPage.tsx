import { ArrowRight, Sparkles, Check, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FoodMoodPage = () => {
  const products = [
    {
      name: 'Rum Cream Chantilly',
      tagline: 'Light. Lush. Indulgent.',
      description: 'Our Rum Cream Chantilly is whipped to silky perfection with a smooth rum cream finish that melts beautifully on cakes, waffles, pancakes, fresh fruit, and desserts.',
      features: [
        'Airy but rich texture',
        'Sweet but balanced flavor',
        'Perfect dessert topping',
      ],
      perfectFor: [
        'Cakes and cupcakes',
        'Waffles and pancakes',
        'Hot chocolate or coffee topping',
        'Fresh fruit bowls',
        'Dessert jars',
      ],
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Sorrel Sauce',
      tagline: 'Bold Caribbean flavor with a sweet tangy kick.',
      description: 'Inspired by the festive favorite, our Sorrel Sauce blends warm spice notes with just the right amount of sweetness and acidity. It\'s vibrant, slightly tart, and packed with character.',
      features: [
        'Warm spice notes',
        'Sweet and tangy balance',
        'Vibrant Caribbean flavor',
      ],
      perfectFor: [
        'Glazing meats',
        'Drizzling over waffles or cheesecake',
        'Pairing with savory dishes',
        'Holiday platters',
        'Cocktail or dessert accents',
      ],
      color: 'from-red-600 to-rose-700',
    },
    {
      name: 'Pineapple Compote',
      tagline: 'Bright. Juicy. Tropical.',
      description: 'Our Pineapple Compote is slow-cooked to bring out natural sweetness and a soft, jammy texture. It\'s fresh, golden, and bursting with island flavor.',
      features: [
        'Slow-cooked for depth',
        'Natural sweetness',
        'Soft, jammy texture',
      ],
      perfectFor: [
        'Yogurt and parfaits',
        'Cheesecake topping',
        'Waffles and pancakes',
        'Toast and pastries',
        'Ice cream and desserts',
      ],
      color: 'from-yellow-500 to-amber-500',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#fff9e6] via-white to-[#fff5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-[#d97706] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>From HappiJoy Brands</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-[#d97706]">FoodMood</span>
              </h1>
              <p className="text-xl text-[#d97706] font-medium mb-6">
                Flavor that sets the vibe.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At FoodMood, we don't just make toppings and sauces. We create bold, 
                feel-good flavors that turn simple bites into unforgettable moments. 
                Whether you're baking, plating, or just treating yourself, our handcrafted 
                creations bring the right energy to every dish.
              </p>
              <a
                href="https://wa.me/18763165022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold rounded-full px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/foodmood-logo.png"
                alt="FoodMood Logo"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d97706] font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Discover Our Flavors
            </h2>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-block bg-gradient-to-r ${product.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                    {product.tagline}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Why It's Special:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-[#d97706] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.perfectFor.map((use, i) => (
                        <span
                          key={i}
                          className="bg-[#ffc107]/20 text-gray-800 px-4 py-2 rounded-full text-sm"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center text-white">
                    <span className="text-6xl mb-4 block">🍯</span>
                    <h4 className="text-2xl font-bold">{product.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FoodMood?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '✨',
                title: 'Small Batch Crafted',
                description: 'Each product is made with care and attention to detail.',
              },
              {
                icon: '🌶️',
                title: 'Bold, Authentic Flavors',
                description: 'Caribbean-inspired taste that stands out.',
              },
              {
                icon: '🍽️',
                title: 'Versatile',
                description: 'Perfect for both sweet and savory dishes.',
              },
              {
                icon: '⭐',
                title: 'Elevates Every Meal',
                description: 'Transform everyday dishes into experiences.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Is FoodMood?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FoodMood is all about creating flavors that make you feel something.
                </p>
                <p>
                  We believe food is more than just something you eat. It's comfort after 
                  a long day. It's celebration with friends. It's that quiet moment when you 
                  treat yourself to something sweet. The right flavor can shift your mood instantly. 
                  That's where we come in.
                </p>
                <p>
                  FoodMood was created to craft bold, memorable toppings and sauces that 
                  elevate everyday dishes. We focus on rich textures, balanced sweetness, 
                  vibrant fruit flavors, and that extra touch that makes people pause and say, 
                  "Wait… what is that?"
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ffc107]/20 to-[#d97706]/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We're About</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d97706] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">We're about quality you can taste.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d97706] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">We're about flavors that stand out without being overwhelming.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#d97706] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">We're about turning simple meals into experiences.</p>
                </div>
              </div>
              <p className="text-gray-600 mt-6 italic">
                "Because when the flavor hits right, the mood follows."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#d97706] to-[#b45309]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Food tastes better when the mood is right.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            And we're here to set it.
          </p>
          <a
            href="https://wa.me/18763165022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-[#d97706] hover:bg-gray-100 font-bold rounded-full px-8 py-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Shop Now and Bring the Flavor Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default FoodMoodPage

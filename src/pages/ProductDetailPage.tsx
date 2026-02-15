import { ArrowLeft, ShoppingBag, Check, Star, Heart, Share2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface ProductDetailPageProps {
  flavor: 'coconut' | 'chocolate'
  navigateTo: (page: Page) => void
}

const ProductDetailPage = ({ flavor, navigateTo }: ProductDetailPageProps) => {
  const products = {
    coconut: {
      name: 'Coconut Pistachio Mini Rounds',
      price: '$1,200.00',
      tagline: 'A tropical getaway in every bite!',
      description: 'Coconut Pistachio Mini Rounds blend the creamy, nutty goodness of pistachios with the exotic sweetness of coconut. Light, crispy, and packed with island vibes—this waffle is a must-try!',
      fullDescription: 'Tropical sweetness meets nutty perfection in our Coconut Pistachio Mini Rounds. These waffles combine the creamy richness of coconut with the crunchy, buttery goodness of pistachios for a unique flavor experience. Each bite brings a taste of the islands, making them the perfect breakfast treat, afternoon snack, or post-dinner delight.',
      mainImage: '/images/happi-joy-tropical-waffles.jpg',
      galleryImages: [
        '/images/WEBCocoP-Side1 (1).jpg',
        '/images/DSC00636.JPG',
        '/images/DSC00616.JPG',
      ],
      badge: 'Best Seller',
      badgeColor: 'bg-[#1a9b8a]',
      features: [
        '8 Mini Rounds per pack',
        '100% Egg Free',
        'Made in Jamaica',
        'Premium Ingredients',
        '250 Calories per serving',
        '6g Sat Fat',
        '360mg Sodium',
        '8g Total Sugars',
      ],
      nutritionInfo: {
        calories: '250',
        fat: '6g',
        sodium: '360mg',
        carbs: '38g',
        protein: '6g',
      },
      servingSuggestions: [
        'Light dusting of powdered sugar',
        'Drizzle of maple syrup',
        'Scoop of vanilla ice cream',
        'Fresh berries on top',
        'Layer in a parfait with yogurt',
        'Top with chopped pistachios',
      ],
      reviews: 156,
      rating: 4.9,
    },
    chocolate: {
      name: 'Chocolate Supreme Mini Rounds',
      price: '$1,200.00',
      tagline: 'Decadence in every bite!',
      description: 'Our Chocolate Supreme Mini Rounds are rich, bold, and irresistibly smooth, packed with premium chocolate flavor. Whether you enjoy them on their own or topped with a drizzle of caramel, these waffles are a chocoholic\'s dream.',
      fullDescription: 'Indulge in the deep, rich taste of pure chocolate with our Chocolate Supreme Mini Rounds. These perfectly portioned 4-inch waffles are packed with premium cocoa, delivering an irresistible blend of crisp edges and soft, chocolaty goodness. Whether you enjoy them as a snack, a dessert, or a morning pick-me-up, these waffles satisfy every chocolate craving.',
      mainImage: '/images/get.jpg',
      galleryImages: [
        '/images/DSC00651 (1).JPG',
        '/images/DSC00655.JPG',
        '/images/DSC00617.JPG',
      ],
      badge: 'Popular',
      badgeColor: 'bg-[#ffc107] text-gray-900',
      features: [
        '8 Mini Rounds per pack',
        '100% Egg Free',
        'Made in Jamaica',
        'Premium Cocoa',
        '190 Calories per serving',
        '2g Sat Fat',
        '370mg Sodium',
        '11g Total Sugars',
      ],
      nutritionInfo: {
        calories: '190',
        fat: '2g',
        sodium: '370mg',
        carbs: '37g',
        protein: '4g',
      },
      servingSuggestions: [
        'Top with whipped cream',
        'Drizzle with chocolate sauce',
        'Add fresh strawberries',
        'Serve with vanilla ice cream',
        'Sprinkle with chocolate chips',
        'Pair with a hot coffee',
      ],
      reviews: 203,
      rating: 4.8,
    },
  }

  const product = products[flavor]

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigateTo('products')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1a9b8a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative mb-4">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full rounded-3xl shadow-lg"
                />
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>
                <button 
                  onClick={() => alert('Added to favorites!')}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-24 object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#ffc107] text-[#ffc107]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-[#1a9b8a] font-medium text-lg mb-4">
                {product.tagline}
              </p>

              <p className="text-4xl font-bold text-[#1a9b8a] mb-6">
                {product.price}
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/18763165022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-full py-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </Button>
                </a>
                <Button
                  onClick={() => alert('Added to order!')}
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-[#ffc107] text-gray-800 hover:bg-[#ffc107] font-semibold rounded-full py-6"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Order
                </Button>
              </div>

              {/* Share */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm">Share:</span>
                <button 
                  onClick={() => alert('Link copied to clipboard!')}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4">
                    <div className="w-8 h-8 bg-[#1a9b8a] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Serving Suggestions */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Serving Suggestions</h2>
              <div className="flex flex-wrap gap-3">
                {product.servingSuggestions.map((suggestion, index) => (
                  <span
                    key={index}
                    className="bg-[#ffc107]/20 text-gray-800 px-5 py-3 rounded-full text-sm font-medium"
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Nutrition Facts</h2>
              <p className="text-sm text-gray-500 mb-4">Per 2 waffles serving</p>
              <div className="space-y-4">
                {Object.entries(product.nutritionInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 capitalize">{key}</span>
                    <span className="font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500">
                  * Percent Daily Values are based on a 2,000 calorie diet. 
                  Your daily values may be higher or lower depending on your calorie needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a9b8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Order your {product.name} today and experience the joy of HappiJoy Waffles!
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
              Order Now on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage

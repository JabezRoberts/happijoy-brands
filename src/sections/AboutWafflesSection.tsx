import { Check, Leaf, Heart, Award } from 'lucide-react'

const AboutWafflesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Locally Sourced',
      description: 'We partner with local Jamaican farmers to get the freshest ingredients straight from the source.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every waffle is crafted with care and passion, bringing joy to every bite.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the highest-quality ingredients go into our exotic waffle creations.',
    },
  ]

  const benefits = [
    '100% Egg Free',
    'Made in Jamaica',
    'Premium Ingredients',
    'Unique Caribbean Flavors',
    'Perfect for Anytime',
    'Family Friendly',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/DSC00636.JPG"
                  alt="Coconut Pistachio Waffles"
                  className="w-full rounded-2xl shadow-lg object-cover h-64"
                />
                <img
                  src="/images/DSC00616.JPG"
                  alt="Waffle Products"
                  className="w-full rounded-2xl shadow-lg object-cover h-48"
                />
              </div>
              <div className="pt-8">
                <img
                  src="/images/DSC00618.JPG"
                  alt="Chocolate Supreme Waffles"
                  className="w-full rounded-2xl shadow-lg object-cover h-80"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 -right-4 bg-[#1a9b8a] text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-sm opacity-90">Years of<br />Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              Why Choose HappiJoy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              More Than Just Breakfast
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Enjoy Yummi Waffles anytime — perfect for breakfast, snacks, or dessert. 
              Our waffles are incredibly versatile and elevated with signature 
              Jamaican-inspired flavors you won't find anywhere else.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#ffc107] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gray-900" />
                  </div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-[#1a9b8a]/5 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-[#1a9b8a] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutWafflesSection

import { Target, Eye, Heart, Award, Users, Leaf } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { value: '1,000+', label: 'Waffles Sold' },
    { value: '50+', label: 'Happy Customers' },
    { value: '100%', label: 'Jamaican Made' },
    { value: '100%', label: 'Fresh & Tasty' },
  ]

  const team = [
    {
      name: 'Sherwayne Roberts',
      role: 'Founder, CEO',
      description: 'Passionate leader with a passion for bringing joy through food.',
    },
    {
      name: 'Shaniel Roberts',
      role: 'Co-Founder, COO',
      description: 'Operations expert ensuring every waffle meets our high standards.',
    },
    {
      name: 'Jabez Roberts',
      role: 'Co-Founder, CMO',
      description: 'Creative mind behind the HappiJoy brand and marketing.',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To build a globally recognized Jamaican food brand known not just for waffles, but for bold flavors, innovative products, and joyful food experiences.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the #1 waffle company in the world and redefine how people enjoy waffles.',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We believe food should be an experience that gives a smile, a memory, and a spark of joy.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#fff9e6] to-[#e6f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From Yummi Waffles to HappiJoy Brands. What started as a waffle idea has grown 
              into a Jamaican food brand built on bold flavor, creativity, and products that 
              bring joy to everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Yummi Waffles to HappiJoy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HappiJoy began long before the name existed. It started as Yummi Waffles, 
                  a small kitchen idea with a simple goal: create something warm, comforting, 
                  and genuinely enjoyable.
                </p>
                <p>
                  As more people tasted the waffles and kept coming back, it became clear 
                  this was bigger than one product. It was the start of a brand rooted in 
                  flavor, creativity, and Jamaican pride.
                </p>
                <p>
                  That evolution led to HappiJoy Brands. Today, we are more than waffles. 
                  Alongside our signature waffle creations, we introduced FoodMood, our line 
                  of bold, Caribbean-inspired sauces, syrups, and spreads designed to elevate 
                  every bite.
                </p>
                <p>
                  Together, HappiJoy Waffles and FoodMood allow us to control the full flavor 
                  experience. From the base to the topping, everything is crafted with care, 
                  personality, and intention.
                </p>
                <p>
                  HappiJoy represents who we are at our core: warm, uplifting, proudly local, 
                  and committed to making food that feels good and tastes even better.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/yummi-to-happijoy.png"
                alt="HappiJoy Waffles Products"
                className="w-full rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-18 -right-6 bg-[#ffc107] rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-gray-900">More Than Just Waffles</p>
                <p className="text-gray-800">Waffles. Sauces. Flavor Experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a9b8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Why We Exist
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#1a9b8a]/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#1a9b8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FoodMood Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              Our Flavor Line
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Introducing FoodMood
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              FoodMood is our signature line of Caribbean-inspired toppings and flavor 
              creations. From sorrel syrup to rum cream chantilly and pineapple compote, 
              every jar is crafted to complement our waffles and stand strong on its own.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Bold Caribbean Flavor</h3>
              <p className="text-gray-600 text-sm">
                Inspired by local ingredients and island traditions, FoodMood captures 
                the richness of Jamaican taste in every spoonful.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Made to Elevate</h3>
              <p className="text-gray-600 text-sm">
                Whether paired with waffles, desserts, breakfast dishes, or savory meals, 
                our flavor line is designed to transform simple food into something special.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Crafted with Care</h3>
              <p className="text-gray-600 text-sm">
                Small-batch production, quality ingredients, and thoughtful recipes ensure 
                every bottle and jar delivers consistency and character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                // src="/images/happijoy-favicon.png"
                src="/images/happijoy-brands-yellow-logo.png"
                alt="HappiJoy Waffle Box Menu"
                className="w-auto rounded-3xl shadow-xl bg-white p-8"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
                What Makes Us Different
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Why Choose HappiJoy Brands?
              </h2>
              <p className="text-gray-600 mb-8">
                From handcrafted waffles to our in-house FoodMood flavor line, everything we create is built around quality, creativity, and Jamaican pride.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Locally Sourced Ingredients</h3>
                    <p className="text-gray-600 text-sm">
                      We partner directly with local farmers and suppliers to get ingredients 
                      straight from the source.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a9b8a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">
                      We use only the freshest, highest-quality ingredients in every batch.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Premium Flavors</h3>
                    <p className="text-gray-600 text-sm">
                      Our recipes are crafted with the finest spices and ingredients that burst with flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
              The People Behind the Perfect Waffles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Meet the Makers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-[#1a9b8a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#1a9b8a] font-medium text-sm mb-4 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

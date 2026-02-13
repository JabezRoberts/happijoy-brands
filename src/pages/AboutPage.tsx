import { Target, Eye, Heart, Award, Users, Leaf } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { value: '230+', label: 'Waffles Sold' },
    { value: '500+', label: 'Happy Clients' },
    { value: '12+', label: 'Years Experience' },
    { value: '100%', label: 'Fresh & Tasty' },
  ]

  const team = [
    {
      name: 'Sherwayne Roberts',
      role: 'Founder, CEO',
      description: 'Visionary leader with a passion for bringing joy through food.',
    },
    {
      name: 'Shaniel Roberts',
      role: 'Founder, COO',
      description: 'Operations expert ensuring every waffle meets our high standards.',
    },
    {
      name: 'Jabez Roberts',
      role: 'Founder, CMO',
      description: 'Creative mind behind the HappiJoy brand and marketing.',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Bring joy to every bite. Through flavors inspired by home and crafted with care, we want to make food that feels familiar yet exciting.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the #1 waffle company in the world by 2035 and redefine how people enjoy waffles.',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We believe food should make people feel something — a smile, a memory, a spark of joy.',
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
              From Yummi Waffles to a True Jamaican Food Brand — a journey of passion, 
              flavor, and the desire to create something delicious that feels like home.
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
                  HappiJoy began long before the name existed. It started as Yummi Waffles: 
                  a small idea, a kitchen experiment, and a simple desire to create something 
                  delicious that felt like home.
                </p>
                <p>
                  But as people tasted the waffles, shared their excitement, and kept coming 
                  back for more, it became clear that this was more than just a fun weekend 
                  recipe. This was the beginning of a brand that could bring joy to everyday life.
                </p>
                <p>
                  We reimagined Yummi Waffles into HappiJoy not just for a new name, but for 
                  a bigger purpose. We wanted to build a Jamaican-born brand that celebrates 
                  flavor, comfort, creativity, and the little moments that make life brighter.
                </p>
                <p>
                  HappiJoy represents who we are at our core: warm, uplifting, playful, 
                  proudly local, and always dedicated to good taste.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/DSC00651.JPG"
                alt="HappiJoy Waffles Products"
                className="w-full rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#ffc107] rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-gray-900">100%</p>
                <p className="text-gray-800">Jamaican Made</p>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/Sweet-box-or-Savory-box.jpg"
                alt="HappiJoy Waffle Box Menu"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
                What Makes Us Different
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Why Choose HappiJoy Brands?
              </h2>
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
                    <h3 className="font-semibold text-gray-900 mb-1">Family Recipe</h3>
                    <p className="text-gray-600 text-sm">
                      Our recipes are crafted with love and passed down through generations.
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

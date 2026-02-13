import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface HeroSectionProps {
  navigateTo: (page: Page) => void
}

const HeroSection = ({ navigateTo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff9e6] via-white to-[#e6f7f5]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffc107] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a9b8a] rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#1a9b8a]/10 text-[#1a9b8a] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Jamaican-Made Waffles, Bursting with Exotic Flavor!</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Deliciously Unique,{' '}
              <span className="text-[#1a9b8a]">Perfectly Crispy</span>, Made with Love
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the taste of Jamaica with our exotic waffle flavors. 
              From Coconut Pistachio to Chocolate Supreme, every bite brings pure joy!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => navigateTo('products')}
                size="lg"
                className="bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-full px-8 py-6 text-lg"
              >
                Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => navigateTo('popup-event')}
                size="lg"
                variant="outline"
                className="border-2 border-[#ffc107] text-gray-800 hover:bg-[#ffc107] font-semibold rounded-full px-8 py-6 text-lg"
              >
                Pop-Up Event
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-[#1a9b8a]">500+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-[#1a9b8a]">2</p>
                <p className="text-sm text-gray-500">Unique Flavors</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-[#1a9b8a]">100%</p>
                <p className="text-sm text-gray-500">Fresh & Tasty</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/DSC00655.JPG"
                alt="HappiJoy Waffles Collection"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧇</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Premium Quality</p>
                  <p className="text-sm text-gray-500">Made in Jamaica</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1a9b8a] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌴</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Caribbean Flavors</p>
                  <p className="text-sm text-gray-500">Exotic & Unique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

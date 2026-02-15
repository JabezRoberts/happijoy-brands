import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface PopupEventSectionProps {
  navigateTo: (page: Page) => void
}

const PopupEventSection = ({ navigateTo }: PopupEventSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1a9b8a]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffc107] text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Calendar className="w-4 h-4" />
              <span>Special Event Coming Soon!</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              HappiJoy Waffle Box{' '}
              <span className="text-[#ffc107]">Pop-Up!</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Get ready for our first ever waffle box pop-up event! Choose between 
              our Sweet Box or Savory Box, each packed with delicious waffles, 
              chicken bites, mac & cheese, coleslaw, sauces, and grapes.
            </p>

            {/* Event Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a9b8a]/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#1a9b8a]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="text-lg font-semibold">February 24, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a9b8a]/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#1a9b8a]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Order Deadline</p>
                  <p className="text-lg font-semibold">February 18, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a9b8a]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#1a9b8a]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-lg font-semibold">$2,500 for Any Waffle Box</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => navigateTo('popup-event')}
              size="lg"
              className="bg-[#ffc107] hover:bg-[#e6ac00] text-gray-900 font-bold rounded-full px-8"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Event Image */}
          <div className="relative">
            <img
              src="/images/Sweet-box-or-Savory-box.jpg"
              alt="HappiJoy Waffle Box Pop-Up Event"
              className="w-full rounded-3xl shadow-2xl"
            />
            
            {/* Price Tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#ffc107] text-gray-900 rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-medium">Only</p>
              <p className="text-4xl font-bold">$2,500</p>
              <p className="text-sm">per box</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopupEventSection

import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface OrderCTASectionProps {
  navigateTo: (page: Page) => void
}

const OrderCTASection = ({ navigateTo }: OrderCTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1a9b8a] to-[#148a7a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Crave It. Taste It. Love It.
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Order Your Yummi Waffles Today and Indulge in Pure Deliciousness!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            onClick={() => navigateTo('products')}
            size="lg"
            className="bg-[#ffc107] hover:bg-[#e6ac00] text-black font-bold rounded-full px-8 py-6 text-lg"
          >
            Order Now
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
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a9b8a] font-bold rounded-full px-8 py-6 text-lg text-black"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Order
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
          <a href="tel:+18763165022" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            <span>+1 876 316 5022</span>
          </a>
          <span className="hidden sm:block">|</span>
          <span>Starting at $1,200</span>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-white/20">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold">1</span>
            </div>
            <p className="text-sm text-white/80">Place Your Order</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold">2</span>
            </div>
            <p className="text-sm text-white/80">Set Delivery Date</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold">3</span>
            </div>
            <p className="text-sm text-white/80">Pickup & Enjoy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderCTASection

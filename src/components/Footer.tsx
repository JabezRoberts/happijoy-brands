import { Phone, Mail, MapPin, Instagram, Facebook, Music2 } from 'lucide-react'
import type { Page } from '../App'

interface FooterProps {
  navigateTo: (page: Page) => void
}

const Footer = ({ navigateTo }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'About Us', page: 'about' as Page },
    { label: 'Our Products', page: 'products' as Page },
    { label: 'Pop-Up Event', page: 'popup-event' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ]

  const brandLinks = [
    { label: 'HappiJoy Waffles', page: 'happijoy-waffles' as Page },
    { label: 'Food Mood', page: 'foodmood' as Page },
  ]

  const helpLinks = [
    { label: 'FAQ', page: 'contact' as Page },
    { label: 'Delivery Info', page: 'delivery' as Page },
    { label: 'Returns & Exchanges', page: 'returns' as Page },
    { label: 'Cancellation Policy', page: 'cancellation' as Page },
    { label: 'Allergy Info', page: 'allergy' as Page },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', page: 'privacy' as Page },
    { label: 'Terms of Use', page: 'terms' as Page },
    { label: 'Disclaimer', page: 'disclaimer' as Page },
  ]

  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 bg-[#ffc107] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/happijoy-logo.png"
                  alt="HappiJoy Waffles"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-left">
                <span className="font-bold text-xl text-[#ffc107] block">HappiJoy</span>
                <span className="text-sm text-gray-300">Brands</span>
              </div>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Family of Flavor & Fun. Bringing joy to every bite with our 
              Jamaican-made, Caribbean-inspired waffle flavors.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/happijoywafflesja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc107] hover:text-gray-900 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/happijoywafflesja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc107] hover:text-gray-900 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@happijoywafflesja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc107] hover:text-gray-900 transition-all duration-300"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffc107]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffc107]">Our Brands</h3>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffc107]">Help & Support</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffc107]">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1a9b8a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Call or WhatsApp</p>
                  <a href="tel:+18763165022" className="text-white hover:text-[#ffc107] transition-colors">
                    +1 876 316 5022
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1a9b8a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:happijoybrands@gmail.com" className="text-white hover:text-[#ffc107] transition-colors text-sm">
                    happijoybrands@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1a9b8a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Delivery Areas</p>
                  <p className="text-white text-sm">
                    Spanish Town, Portmore
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} HappiJoy Brands | The Home of Exotic Waffles. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => navigateTo(link.page)}
                  className="text-gray-500 hover:text-[#ffc107] text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <a 
              href="https://zeilhan.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-[#ffc107] transition-colors"
            >
              Website by Zeilhan
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

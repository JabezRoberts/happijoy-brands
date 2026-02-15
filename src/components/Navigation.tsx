import { useState } from 'react'
import { Menu, X, ShoppingBag, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface NavigationProps {
  currentPage: Page
  navigateTo: (page: Page) => void
  isScrolled: boolean
}

const Navigation = ({ currentPage, navigateTo, isScrolled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBrandsOpen, setIsBrandsOpen] = useState(false)

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Pop-Up Event', page: 'popup-event' },
    { label: 'Contact', page: 'contact' },
  ]

  const brandLinks: { label: string; page: Page }[] = [
    { label: 'HappiJoy Waffles', page: 'happijoy-waffles' },
    { label: 'Food Mood', page: 'foodmood' },
  ]

  const handleNavClick = (page: Page) => {
    navigateTo(page)
    setIsMobileMenuOpen(false)
    setIsBrandsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/happijoy-logo.png"
                alt="HappiJoy Brands"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className={`font-bold text-lg leading-tight block ${isScrolled ? 'text-[#1a9b8a]' : 'text-[#1a9b8a]'}`}>
                HappiJoy
              </span>
              <span className={`text-xs block ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}>
                Brands
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === link.page
                    ? 'bg-[#1a9b8a] text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-[#1a9b8a]/10 hover:text-[#1a9b8a]'
                    : 'text-gray-800 hover:bg-white/20 hover:text-[#1a9b8a]'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  isBrandsOpen || brandLinks.some(l => l.page === currentPage)
                    ? 'bg-[#1a9b8a]/10 text-[#1a9b8a]'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-[#1a9b8a]/10 hover:text-[#1a9b8a]'
                    : 'text-gray-800 hover:bg-white/20 hover:text-[#1a9b8a]'
                }`}
              >
                Our Brands
                <ChevronDown className={`w-4 h-4 transition-transform ${isBrandsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBrandsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border border-gray-100">
                  {brandLinks.map((link) => (
                    <button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#1a9b8a]/10 hover:text-[#1a9b8a] transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18763165022"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-[#1a9b8a] hover:bg-[#1a9b8a]/10'
                  : 'text-gray-800 hover:bg-white/20'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>876-316-5022</span>
            </a>
            <Button
              onClick={() => handleNavClick('products')}
              className="bg-[#ffc107] hover:bg-[#e6ac00] text-black font-semibold rounded-full px-6"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/50 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
                    currentPage === link.page
                      ? 'bg-[#1a9b8a] text-white'
                      : 'text-gray-700 hover:bg-[#1a9b8a]/10 hover:text-[#1a9b8a]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Brands */}
              <div className="px-4 py-2">
                <p className="text-sm text-gray-500 mb-2">Our Brands</p>
                {brandLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className="block w-full text-left py-2 pl-4 text-gray-700 hover:text-[#1a9b8a]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-200/50 mt-2">
                <a
                  href="tel:+18763165022"
                  className="flex items-center gap-2 px-4 py-3 text-[#1a9b8a] font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>876-316-5022</span>
                </a>
                <Button
                  onClick={() => handleNavClick('products')}
                  className="w-full mt-2 bg-[#ffc107] hover:bg-[#e6ac00] text-black font-semibold rounded-xl"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

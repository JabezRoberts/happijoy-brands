import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PopupEventPage from './pages/Events/PopupEventPage'           // February event
import EventDetailMarch2026 from './pages/Events/EventDetailMarch2026' // March event
import { EventsListPage } from './pages/Events/EventsListPage'            // Events overview
import TestimonialsPage from './pages/TestimonialsPage'
import FoodMoodPage from './pages/FoodMoodPage'
import HappiJoyWafflesPage from './pages/HappiJoyWafflesPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import DeliveryPage from './pages/DeliveryPage'
import ReturnsPage from './pages/ReturnsPage'
import CancellationPage from './pages/CancellationPage'
import AllergyPage from './pages/AllergyPage'
import DisclaimerPage from './pages/DisclaimerPage'
import FAQPage from './pages/FAQPage'

export type Page = 
  | 'home' 
  | 'about' 
  | 'faq'
  | 'contact' 
  | 'products' 
  | 'product-coconut' 
  | 'product-chocolate' 
  | 'popup-event'               // February 2026 Pop-Up
  | 'events-list'               // Main events overview page
  | 'event-march-2026'          // March 2026 detail page
  | 'testimonials'
  | 'foodmood'
  | 'happijoy-waffles'
  | 'terms'
  | 'privacy'
  | 'delivery'
  | 'returns'
  | 'cancellation'
  | 'allergy'
  | 'disclaimer'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Improved: set initial page from URL on mount (no flash), and handle back/forward
  const getPageFromPath = (path: string): Page => {
    const cleanPath = path.replace(/^\/|\/$/g, '') // remove leading/trailing slashes

    if (!cleanPath) return 'home'
    if (cleanPath === 'about') return 'about'
    if (cleanPath === 'faq') return 'faq'
    if (cleanPath === 'contact') return 'contact'
    if (cleanPath === 'products') return 'products'
    if (cleanPath === 'product-coconut') return 'product-coconut'
    if (cleanPath === 'product-chocolate') return 'product-chocolate'
    if (cleanPath === 'popup-event') return 'popup-event'
    if (cleanPath === 'events-list') return 'events-list'
    if (cleanPath === 'event-march-2026') return 'event-march-2026'
    if (cleanPath === 'testimonials') return 'testimonials'
    if (cleanPath === 'foodmood') return 'foodmood'
    if (cleanPath === 'happijoy-waffles') return 'happijoy-waffles'
    if (cleanPath === 'terms') return 'terms'
    if (cleanPath === 'privacy') return 'privacy'
    if (cleanPath === 'delivery') return 'delivery'
    if (cleanPath === 'returns') return 'returns'
    if (cleanPath === 'cancellation') return 'cancellation'
    if (cleanPath === 'allergy') return 'allergy'
    if (cleanPath === 'disclaimer') return 'disclaimer'

    // Fallback
    return 'home'
  }

  useEffect(() => {
    const handlePopState = () => {
      const newPage = getPageFromPath(window.location.pathname)
      setCurrentPage(newPage)
    }

    window.addEventListener('popstate', handlePopState)
    // Set correct page immediately on mount (no flash to home)
    handlePopState()

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const navigateTo = (page: Page) => {
    const path = page === 'home' ? '/' : `/${page}`
    window.history.pushState({}, '', path)
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />
      case 'about':
        return <AboutPage />
      case 'faq':
        return <FAQPage />
      case 'contact':
        return <ContactPage />
      case 'products':
        return <ProductsPage navigateTo={navigateTo} />
      case 'product-coconut':
        return <ProductDetailPage flavor="coconut" navigateTo={navigateTo} />
      case 'product-chocolate':
        return <ProductDetailPage flavor="chocolate" navigateTo={navigateTo} />
      case 'popup-event':
        return <PopupEventPage navigateTo={navigateTo} />
      case 'events-list':
        return <EventsListPage navigateTo={navigateTo} />
      case 'event-march-2026':
        return <EventDetailMarch2026 navigateTo={navigateTo} />
      case 'testimonials':
        return <TestimonialsPage />
      case 'foodmood':
        return <FoodMoodPage />
      case 'happijoy-waffles':
        return <HappiJoyWafflesPage navigateTo={navigateTo} />
      case 'terms':
        return <TermsPage />
      case 'privacy':
        return <PrivacyPage />
      case 'delivery':
        return <DeliveryPage />
      case 'returns':
        return <ReturnsPage />
      case 'cancellation':
        return <CancellationPage />
      case 'allergy':
        return <AllergyPage />
      case 'disclaimer':
        return <DisclaimerPage />
      default:
        return <HomePage navigateTo={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} navigateTo={navigateTo} isScrolled={isScrolled} />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PopupEventPage from './pages/PopupEventPage'
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
  | 'popup-event'
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

  useEffect(() => {
  const handlePopState = () => {
    // Get the current path from URL
    const path = window.location.pathname;

    // Map path back to your Page type
    let newPage: Page = 'home';
    if (path === '/about') newPage = 'about';
    else if (path === '/faq') newPage = 'faq';
    else if (path === '/contact') newPage = 'contact';
    else if (path === '/products') newPage = 'products';
    else if (path === '/popup-event') newPage = 'popup-event';
    // ... add all other pages you care about
    // For dynamic ones like /product-coconut → you may need more parsing

    setCurrentPage(newPage);
  };

  // Listen for back/forward
  window.addEventListener('popstate', handlePopState);

  // Also run once on mount (in case user deep-links or refreshes)
  handlePopState();

  return () => {
    window.removeEventListener('popstate', handlePopState);
  };
}, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const navigateTo = (page: Page) => {
    // Optional: map 'home' → '/' and others → `/${page}`
    const path = page === 'home' ? '/' : `/${page}`;

    // Update browser URL without reload
    window.history.pushState({}, '', path);

    // Update internal state (what already works for you)
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

import HeroSection from '../sections/HeroSection'
import AboutWafflesSection from '../sections/AboutWafflesSection'
import FoodMoodSection from '../sections/FoodMoodSection'
import PopupEventSection from '../sections/PopupEventSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ProductsSection from '../sections/ProductsSection'
import OrderCTASection from '../sections/OrderCTASection'
import type { Page } from '../App'

interface HomePageProps {
  navigateTo: (page: Page) => void
}

const HomePage = ({ navigateTo }: HomePageProps) => {
  return (
    <div className="overflow-hidden">
      <HeroSection navigateTo={navigateTo} />
      <AboutWafflesSection />
      <ProductsSection navigateTo={navigateTo} />
      <FoodMoodSection navigateTo={navigateTo} />
      <PopupEventSection navigateTo={navigateTo} />
      <TestimonialsSection navigateTo={navigateTo} />
      <OrderCTASection navigateTo={navigateTo} />
    </div>
  )
}

export default HomePage

import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Page } from '../App'

interface FoodMoodSectionProps {
  navigateTo: (page: Page) => void
}

const FoodMoodSection = ({ navigateTo }: FoodMoodSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fff9e6] via-white to-[#fff5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-[#d97706] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>New from HappiJoy Brands</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Meet <span className="text-[#d97706]">Food Mood</span>
            </h2>

            <p className="text-xl text-[#d97706] font-medium mb-6">
              Food that matches your mood.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Food Mood is the newest concept from HappiJoy Brands, created for people 
              who want more than just a meal. Whether you're in the mood for something 
              sweet, something bold, or something comforting, we've built this experience 
              around how you want to feel.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
                <span className="text-gray-700">It's fun.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
                <span className="text-gray-700">It's flavorful.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
                <span className="text-gray-700">It's made to be shared.</span>
              </div>
            </div>

            <Button
              onClick={() => navigateTo('foodmood')}
              size="lg"
              className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold rounded-full px-8"
            >
              Explore Food Mood
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Logo/Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#ffc107]/20 rounded-full blur-3xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <img
                src="/images/foodmood-logo.png"
                alt="Food Mood Logo"
                className="w-full max-w-md"
              />
              <div className="mt-6 text-center">
                <p className="text-gray-600 italic">
                  "Flavor that sets the vibe."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodMoodSection

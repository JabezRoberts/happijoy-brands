import { Calendar, Clock, ArrowRight, Sparkles, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { EventsListPageProps } from '@/types'
import { events } from '@/constants'

export const EventsListPage = ({ navigateTo }: EventsListPageProps) => {
    return (
        <div className="pt-20">
            <section className="relative py-20 bg-gradient-to-br from-[#fff9e6] to-[#e6f7f5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#1a9b8a] font-semibold text-sm uppercase tracking-wider">
                        Limited Events
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        HappiJoy Monthly Waffle Boxes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Every month we create a special limited-edition waffle box experience. 
                        Customizable, flavorful, and made with love in Jamaica.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className={`absolute top-4 left-4 ${event.badgeColor} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                                    {event.badge}
                                </div>
                                </div>

                                <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-5 h-5 text-[#1a9b8a]" />
                                    <span>Event: {event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-5 h-5 text-[#1a9b8a]" />
                                    <span>Order by: {event.orderDeadline}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#1a9b8a] font-semibold">
                                    <Sparkles className="w-5 h-5" />
                                    <span>{event.price} per box</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>

                                <Button
                                    onClick={() => navigateTo(event.detailPage)}
                                    className="w-full bg-[#1a9b8a] hover:bg-[#148a7a] text-white rounded-full"
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="text-center mt-16">
                        <p className="text-gray-600 mb-6">
                        New limited box drops every month – stay tuned!
                        </p>
                        <a href="https://wa.me/18763165022" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="bg-[#ffc107] hover:bg-[#e6ac00] text-gray-900 font-bold rounded-full px-10"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Ask about next event
                        </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}



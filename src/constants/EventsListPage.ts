import type { Page } from "@/App"

export const events = [
    {
      id: 'march-2026',
      title: 'March 2026 Popup Event',
      date: 'March 25, 2026',
      orderDeadline: 'March 20, 2026',
      price: '$3,500',
      status: 'upcoming',
      badge: 'Next Event',
      badgeColor: 'bg-[#1a9b8a]',
      description: 'Build your own customizable waffle box with sweet & savory options, chicken strips, sauce, and fresh juice.',
      image: '/images/happijoy-waffle-box-march.jpg', // placeholder – replace with real promo image
      detailPage: 'event-march-2026' as Page,
    },
    {
      id: 'february-2026',
      title: 'February 2026 Popup Event',
      date: 'February 24, 2026',
      orderDeadline: 'February 18, 2026',
      price: '$2,500',
      status: 'past',
      badge: 'Past Event',
      badgeColor: 'bg-red-600',
      description: 'Our first limited pop-up with Sweet & Savory boxes, signature sides, and bold Jamaican flavors.',
      image: '/images/happijoy-waffle-box-feb.jpg', // use your existing event image
      detailPage: 'popup-event' as Page, // links back to your original page
    },
    // Add more past/upcoming events here as needed
  ]

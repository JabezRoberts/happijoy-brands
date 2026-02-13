import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Music2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

const ContactPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. We\'ll get back to you soon!',
    })
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 876 316 5022',
      href: 'tel:+18763165022',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@happijoybrands.com',
      href: 'mailto:info@happijoybrands.com',
    },
    {
      icon: MapPin,
      title: 'Delivery Areas',
      content: 'Kingston, St. Andrew, Spanish Town, Portmore',
      href: '#',
    },
  ]

  const workingHours = [
    { day: 'Monday', hours: '9:00 AM - 12:00 AM' },
    { day: 'Tuesday', hours: '9:00 AM - 12:00 AM' },
    { day: 'Wednesday', hours: 'CLOSED' },
    { day: 'Thursday', hours: '9:00 AM - 12:00 AM' },
    { day: 'Friday', hours: '9:00 AM - 2:00 AM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 AM' },
    { day: 'Sunday', hours: '9:00 AM - 2:00 AM' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a9b8a] to-[#148a7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're Here to Serve Up Delight! Have a question or craving? Reach out to HappiJoy Waffles!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-14 h-14 bg-[#1a9b8a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a9b8a] transition-colors">
                  <item.icon className="w-6 h-6 text-[#1a9b8a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Drop Us a Message!
              </h2>
              <p className="text-gray-600 mb-6">
                We're All Ears (and Waffles)! Fill out the form below and we'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact No.</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a9b8a] hover:bg-[#148a7a] text-white font-semibold rounded-xl py-6"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Working Hours & Social */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#1a9b8a]" />
                  <h2 className="text-xl font-bold text-gray-900">Working Hours</h2>
                </div>
                <div className="space-y-3">
                  {workingHours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 ${
                        item.hours === 'CLOSED' ? 'text-gray-400' : ''
                      }`}
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={item.hours === 'CLOSED' ? 'text-red-500 font-medium' : 'text-gray-600'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h2>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for the latest updates and promotions!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/happijoywafflesja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/happijoywafflesja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-medium">Facebook</span>
                  </a>
                </div>
                <a
                  href="https://tiktok.com/@happijoywafflesja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-black text-white rounded-xl py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Music2 className="w-5 h-5" />
                  <span className="font-medium">TikTok</span>
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/18763165022"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Order on WhatsApp</h3>
                    <p className="text-white/90 text-sm">Quick and easy ordering via WhatsApp</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

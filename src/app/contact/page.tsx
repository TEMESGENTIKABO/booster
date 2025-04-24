"use client"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
  const contactMethods = [
    {
      icon: <MapPin className="h-6 w-6 text-amber-900" />,
      title: "Location",
      content: "123 Coffee Street, Xuanwu District, Nanjing",
      link: "https://maps.google.com",
      linkText: "View on Map"
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-900" />,
      title: "Phone",
      content: "+86.....",
      link: "tel:+86.....",
      linkText: "Call Us +86....."
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-900" />,
      title: "Email",
      content: "info@boosterlover.com",
      link: "mailto:info@Boosterlover.com",
      linkText: "Send Email"
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-900" />,
      title: "Hours",
      content: "Monday - Sunday: 8:00 AM - 10:00 PM",
      link: "/",
      linkText: "See Holiday Hours"
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-64 rounded-xl overflow-hidden mb-12">
          <Image 
            src="/contact-hero.jpg"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
              <p className="text-xl">We&apos;d love to hear from you</p>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {method.icon}
                    <h3 className="text-lg font-bold text-amber-900">{method.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{method.content}</p>
                  <Link 
                    href={method.link}
                    className="text-amber-900 hover:text-amber-700 font-medium text-sm transition-colors"
                  >
                    {method.linkText}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.789103245786!2d118.7965703150827!3d32.05088298263526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAzJzAzLjEiTiAxMTjCsDQ3JzUyLjUiRQ!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do you offer Ethiopian coffee ceremonies for private events?",
                answer: "Yes! We host private coffee ceremonies for groups of 6 or more. Contact us to arrange a special event."
              },
              {
                question: "Where do you source your coffee beans from?",
                answer: "We work directly with smallholder farmers in Ethiopia's premier coffee regions including Yirgacheffe, Sidamo, and Harrar."
              },
              {
                question: "Do you have vegan options?",
                answer: "Absolutely! Many of our traditional Ethiopian snacks are naturally vegan, and we offer plant-based milk alternatives."
              },
              {
                question: "Can I purchase your coffee beans online?",
                answer: "Yes, visit our online store to purchase our single-origin beans and have them shipped to your door."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-amber-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
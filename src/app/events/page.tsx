"use client";
import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'

export default function Events() {
  const upcomingEvents = [
    {
      title: "Traditional Coffee Ceremony",
      date: "July 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Booster lover's Coffee Main Hall",
      description: "Experience the full Ethiopian coffee ceremony with our master brewer, complete with traditional incense and three rounds of serving.",
      price: "¥120",
      image: "/event-1.png"
    },
    {
      title: "Coffee Tasting Workshop",
      date: "July 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Booster lover's Coffee Tasting Room",
      description: "Learn to distinguish between Ethiopia's premier coffee regions with our guided tasting session.",
      price: "¥150",
      image: "/tasting-event.png"
    },
    {
      title: "Ethiopian Cultural Night",
      date: "July 29, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Booster lover's Coffee Courtyard",
      description: "An evening of Ethiopian music, dance, traditional food, and of course, exceptional coffee.",
      price: "¥200",
      image: "/cultural-event.png"
    }
  ]
  const recurringEvents = [
    {
      title: "Weekly Coffee Ceremony",
      schedule: "Every Saturday at 3:00 PM",
      description: "Our signature Ethiopian coffee ceremony experience",
      price: "¥100"
    },
    {
      title: "Brewing Class",
      schedule: "First Sunday of each month at 2:00 PM",
      description: "Learn traditional Ethiopian brewing methods",
      price: "¥180"
    },
    {
      title: "Coffee & Conversation",
      schedule: "Every Wednesday at 7:00 PM",
      description: "Casual meetup for coffee enthusiasts",
      price: "Free"
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-200 rounded-xl overflow-hidden mb-12">
          <Image 
            src="/events-hero.png"
            alt="Events"
            fill
            className="object-cover"
          />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Experiences</h1>
          <p className="text-xl">Immerse yourself in Ethiopian coffee culture</p>
        </div>
      </div>
    </div>

    {/* Upcoming Events */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-amber-900 mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 gap-8">
        {upcomingEvents.map((event, index) => (
          <EventCard 
            key={index}
            event={event}
            index={index}
          />
        ))}
      </div>
    </div>

    {/* Recurring Events */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-amber-900 mb-8">Recurring Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recurringEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-amber-900 mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="h-5 w-5" />
              <span>{event.schedule}</span>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-amber-900 font-bold">{event.price}</span>
              <button className="text-amber-900 hover:text-amber-700 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Private Events */}
    <div className="bg-amber-50 rounded-xl p-8 md:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Private Events & Group Bookings</h2>
          <p className="text-gray-600 mb-4">
            Host your next gathering at Booster Lover&apos;s! We offer private coffee ceremonies, tasting sessions, 
            and cultural experiences for groups of 6 or more.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-900">✓</span>
              <span className="text-gray-600">Corporate team-building events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-900">✓</span>
              <span className="text-gray-600">Birthday celebrations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-900">✓</span>
              <span className="text-gray-600">Cultural exchange programs</span>
            </li>
          </ul>
          <Link 
            href="/contact"
            className="inline-block bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Inquire About Private Events
          </Link>
        </div>
        <div className="lg:w-1/2">
          <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/private-event.jpg"
              alt="Private event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function EventCard({ event, index }: { event: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="md:w-1/3 h-64 relative">
        <Image 
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-2xl font-bold text-amber-900 mb-2">{event.title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-5 w-5" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{event.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-amber-900">{event.price}</span>
          <button className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition-colors">
            Reserve Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}
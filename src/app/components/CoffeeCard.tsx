import { motion } from 'framer-motion'
import Image from 'next/image'

interface CoffeeCardProps {
  name: string
  description: string
  price: string
  image: string
  index: number
}

export default function CoffeeCard({ name, description, price, image, index }: CoffeeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="h-64 relative">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-amber-900">{name}</h3>
          <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-2 rounded-full transition-colors">
          Add to Order
        </button>
      </div>
    </motion.div>
  )
}
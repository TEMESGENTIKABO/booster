import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function ProductCard({ product, index }: { product: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-64">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star}
              className={`h-4 w-4 ${star <= 4 ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">(24)</span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.options.map((option: string, i: number) => (
            <button 
              key={i}
              className={`text-xs px-3 py-1 rounded-full ${i === 0 ? 'bg-amber-900 text-white' : 'bg-amber-100 text-amber-900'}`}
            >
              {option}
            </button>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-amber-900">{product.price}</span>
          <button className="bg-amber-900 hover:bg-amber-800 text-white px-4 py-2 rounded-full transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}
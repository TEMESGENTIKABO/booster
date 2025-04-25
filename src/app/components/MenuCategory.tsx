/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'

export default function MenuCategory({ title, items }: { title: string, items: any[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6 pb-2 border-b border-amber-200">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
              <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">
                {item.price}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <button className="mt-4 text-amber-900 hover:text-amber-700 font-medium transition-colors">
              Add to Order
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
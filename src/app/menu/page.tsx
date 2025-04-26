"use client";
import { Coffee, Croissant, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuCategory from "../components/MenuCategory";

export default function Menu() {
  const categories = [
    {
      id: "coffee",
      title: "Coffee & Espresso",
      icon: <Coffee className="h-6 w-6 text-amber-900" />,
      items: [
        {
          name: "Yirgacheffe Pour Over",
          price: "¥18",
          description: "Floral and citrusy with a light body",
        },
        {
          name: "Sidamo French Press",
          price: "¥20",
          description: "Balanced with berry and wine notes",
        },
        {
          name: "Harrar Espresso",
          price: "¥25",
          description: "Bold and fruity with blueberry tones",
        },
        {
          name: "Macchiato",
          price: "¥17",
          description: "Espresso with a dollop of steamed milk",
        },
        {
          name: "Spiced Ethiopian Latte",
          price: "¥12",
          description: "With traditional berbere spice blend",
        },
      ],
    },
    {
      id: "food",
      title: "Food & Snacks",
      icon: <Croissant className="h-6 w-6 text-amber-900" />,
      items: [
        {
          name: "Injera Wrap",
          price: "¥42",
          description: "Traditional Ethiopian flatbread with spiced fillings",
        },
        {
          name: "Teff Pancakes",
          price: "¥38",
          description: "Gluten-free pancakes with honey and nuts",
        },
        {
          name: "Coffee Cake",
          price: "¥28",
          description: "Made with our signature coffee blend",
        },
        {
          name: "Fruit Plate",
          price: "¥35",
          description: "Seasonal fruits with Ethiopian honey",
        },
      ],
    },
    {
      id: "merch",
      title: "Merchandise",
      icon: <ShoppingBag className="h-6 w-6 text-amber-900" />,
      items: [
        {
          name: "250g Coffee Beans",
          price: "¥120",
          description: "Choose from our single-origin selections",
        },
        {
          name: "Jebena Pot",
          price: "¥280",
          description: "Traditional Ethiopian coffee brewing pot",
        },
        {
          name: "Ceramic Mug",
          price: "¥150",
          description: "Handcrafted with Ethiopian designs",
        },
        {
          name: "Coffee Gift Set",
          price: "¥350",
          description: "Beans, mug, and brewing instructions",
        },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-100 rounded-xl overflow-hidden mb-12">
          <Image
            src="/menu-hero.png"
            alt="Coffee menu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
              <p className="text-xl">
                Authentic Ethiopian flavors in every cup
              </p>
            </div>
          </div>
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 px-4 py-2 rounded-full transition-colors"
            >
              {category.icon}
              {category.title}
            </a>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuCategory title={category.title} items={category.items} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-amber-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Want to enjoy our coffee at home?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Purchase our premium Ethiopian coffee beans and brewing equipment to
            recreate the experience at home.
          </p>
          <Link
            href="/store"
            className="inline-block bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Visit Our Store
          </Link>
        </div>
      </div>
    </div>
  );
}

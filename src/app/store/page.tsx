"use client";
import { Coffee, Package, Gift } from "lucide-react";
import Image from "next/image";
import ProductCard from "../components/ProductCard";

export default function Store() {
  const products = [
    {
      id: 1,
      name: "Yirgacheffe Single Origin",
      category: "Coffee Beans",
      price: "¥60",
      description:
        "250g of our premium Yirgacheffe beans with floral and citrus notes",
      image: "/yirgacheffe.jpeg",
      options: ["250g", "500g"],
    },
    {
      id: 2,
      name: "Traditional Jebena Pot",
      category: "Brewing Equipment",
      price: "¥120",
      description:
        "Authentic Ethiopian clay coffee pot for traditional brewing",
      image: "/jebena.jpg",
      options: ["One Size"],
    },
    {
      id: 3,
      name: "Ceramic Coffee Cup Set",
      category: "Merchandise",
      price: "¥100",
      description: "Set of 2 handcrafted cups with Ethiopian designs",
      image: "/coffee cup.jpg",
      options: ["Set of 2"],
    },
    {
      id: 4,
      name: "Coffee Gift Box",
      category: "Gifts",
      price: "¥150",
      description:
        "Includes 250g beans, mug, and brewing guide - perfect present",
      image: "/coffee gift.jpg",
      options: ["Standard"],
    },
    {
      id: 5,
      name: "Monthly Subscription",
      category: "Subscription",
      price: "¥400/mo",
      description:
        "Receive a new Ethiopian single origin every month with brewing tips",
      image: "/product-5.jpg",
      options: ["Monthly"],
    },
    {
      id: 6,
      name: "Ethiopian Spice Blend",
      category: "Accessories",
      price: "¥65",
      description:
        "Traditional berbere spice mix for authentic Ethiopian coffee",
      image: "/spice blend.jpg",
      options: ["50g"],
    },
  ];

  const categories = [
    {
      name: "Coffee Beans",
      icon: <Coffee className="h-5 w-5" />,
      count: 12,
    },
    {
      name: "Brewing Equipment",
      icon: <Package className="h-5 w-5" />,
      count: 8,
    },
    {
      name: "Gifts",
      icon: <Gift className="h-5 w-5" />,
      count: 5,
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-64 rounded-xl overflow-hidden mb-12">
          <Image
            src="/store-hero.jpg"
            alt="Online store"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Online Store
              </h1>
              <p className="text-xl">
                Bring the Ethiopian coffee experience home
              </p>
            </div>
          </div>
        </div>

        {/* Store Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-amber-900 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="flex items-center justify-between w-full text-left p-2 hover:bg-amber-50 rounded transition-colors">
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span>{category.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        ({category.count})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-amber-900 mt-8 mb-4">
                Filter
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Price</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="price1"
                        className="rounded text-amber-900"
                      />
                      <label htmlFor="price1" className="text-gray-600">
                        Under ¥100
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="price2"
                        className="rounded text-amber-900"
                      />
                      <label htmlFor="price2" className="text-gray-600">
                        ¥100 - ¥200
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="price3"
                        className="rounded text-amber-900"
                      />
                      <label htmlFor="price3" className="text-gray-600">
                        Over ¥200
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Availability
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="stock"
                        className="rounded text-amber-900"
                      />
                      <label htmlFor="stock" className="text-gray-600">
                        In Stock
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-amber-900">
                All Products
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="bg-white border border-gray-300 rounded px-3 py-1 text-gray-700">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

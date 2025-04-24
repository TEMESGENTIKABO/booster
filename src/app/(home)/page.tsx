import { Coffee, MapPin, Clock, Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: <Coffee className="h-8 w-8 text-amber-900" />,
      title: "Authentic Ethiopian Coffee",
      description:
        "Directly sourced from family-owned farms in Yirgacheffe and Sidamo",
    },
    {
      icon: <MapPin className="h-8 w-8 text-amber-900" />,
      title: "Central Nanjing Location",
      description: "Conveniently located near Xinjiekou station",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-900" />,
      title: "Extended Hours",
      description: "Open late for your evening coffee cravings",
    },
    {
      icon: <Gift className="h-8 w-8 text-amber-900" />,
      title: "Loyalty Program",
      description: "Earn points with every purchase towards free drinks",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/coffee-ceremony.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Taste the Soul of Ethiopia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Authentic Ethiopian coffee experience in the heart of Nanjing
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Visit Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-amber-50 p-6 rounded-xl flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Showcase */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Signature Brews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the distinct flavors of Ethiopia&apos;s finest coffee
              regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Yirgacheffe",
                description: "Floral and citrusy with a light body",
                price: "¥35",
                image: "/yirgacheffe.jpg",
              },
              {
                name: "Sidamo",
                description: "Balanced with berry and wine notes",
                price: "¥32",
                image: "/sidamo.jpg",
              },
              {
                name: "Harrar",
                description: "Bold and fruity with blueberry tones",
                price: "¥38",
                image: "/harrar.jpg",
              },
            ].map((coffee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <Image
                    src={coffee.image}
                    alt={coffee.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-900">
                      {coffee.name}
                    </h3>
                    <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">
                      {coffee.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{coffee.description}</p>
                  <button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-2 rounded-full transition-colors">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/coffee-farm.jpg"
                  alt="Ethiopian coffee farm"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                From Ethiopian Highlands to Nanjing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began in the lush highlands of Ethiopia, where
                coffee was first discovered. We&apos;ve brought this
                centuries-old tradition to Nanjing, preserving the authentic
                flavors and rituals of Ethiopian coffee culture.
              </p>
              <Link
                href="/story"
                className="inline-block bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for authentic Ethiopian coffee experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Coffee Ceremony",
                date: "July 15, 2025",
                description:
                  "Experience the full Ethiopian coffee ceremony with our master brewer",
                image: "/ceremony-event.jpg",
              },
              {
                title: "Coffee Tasting Workshop",
                date: "July, 2025",
                description:
                  "Learn to distinguish between Ethiopia's premier coffee regions",
                image: "/tasting-event.jpg",
              },
              {
                title: "Ethiopian Cultural Night",
                date: "July 29, 2025",
                description:
                  "Live music, traditional food, and of course, exceptional coffee",
                image: "/cultural-event.jpg",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-600 font-medium">
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold text-amber-900 mb-2 mt-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-2 rounded-full transition-colors">
                    Reserve Spot
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-block border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Authentic Ethiopian Coffee?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us in Nanjing or order our premium coffee beans online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Find Our Location
            </Link>
            <Link
              href="/store"
              className="bg-transparent hover:bg-amber-800 border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Shop Coffee Beans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

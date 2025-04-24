"use client";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Story() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative w-full aspect-[16/9] md:aspect-[16/7] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/story-hero.jpg"
            alt="Our story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-xl">From Ethiopian highlands to Nanjing</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Preserving Tradition, Sharing Culture</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Booster lover&apos;s, we&apos;re more than just a coffee shop - we&apos;re custodians of Ethiopia&apos;s rich coffee heritage. 
            Our journey began with a simple mission: to bring the authentic Ethiopian coffee ceremony experience to Nanjing 
            while supporting the farmers who make it possible.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/ethiopian-farmers.jpg"
              alt="Ethiopian coffee farmers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>

        {/* Coffee Ceremony */}
        <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">The Ethiopian Coffee Ceremony</h2>
              <p className="text-gray-600 mb-4">
                The Ethiopian coffee ceremony is a centuries-old tradition that transforms coffee preparation into an art form. 
                From roasting the green beans to brewing in a jebena clay pot, every step is performed with care and respect.
              </p>
              <p className="text-gray-600 mb-6">
                We host authentic ceremonies every weekend, complete with traditional incense and three rounds of serving 
                (abol, tona, and baraka) representing the transformation of the spirit.
              </p>
              <Link 
                href="/events"
                className="inline-block bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              >
                View Ceremony Schedule
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full aspect-square lg:aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/coffee-ceremony.jpg"
                  alt="Ethiopian coffee ceremony"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "NELIA",
                role: "",
                bio: "",
                image: "/team-2.jpg"
              },
              {
                name: "TEMESGEN",
                role: "",
                bio: "",
                image: "/team-1.jpg"
              },
              {
                name: "Jessica",
                role: "",
                bio: "",
                image: "/team-2.jpg"
              },
              {
                name: "MOIRA",
                role: "",
                bio: "",
                image: "/team-2.jpg"
              },
              {
                name: "ABDOULAYE",
                role: "",
                bio: "",
                image: "/team-1.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-square">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
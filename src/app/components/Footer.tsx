import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const links = [
    {
      title: "Shop",
      items: [
        { name: "Coffee Beans", href: "/store" },
        { name: "Brewing Equipment", href: "/store" },
        { name: "Gifts", href: "/store" },
      ]
    },
    {
      title: "Learn",
      items: [
        { name: "Our Story", href: "/story" },
        { name: "Coffee Guide", href: "/blog" },
        { name: "Brewing Methods", href: "/blog" },
      ]
    },
    {
      title: "Connect",
      items: [
        { name: "Contact Us", href: "/contact" },
        { name: "Events", href: "/events" },
        { name: "Careers", href: "/careers" },
      ]
    }
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/boosterlovers?igsh=NndzOXZzanc3YWE3" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" }
  ]

  return (
    <footer className="bg-amber-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>Booster lover&apos;s Coffee</span>
            </h3>
            <p className="text-amber-100 mb-6">
              Bringing authentic Ethiopian coffee culture to Nanjing since 2025.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {links.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href={item.href}
                      className="text-amber-100 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-amber-100 mb-4">
              Subscribe for updates on new arrivals, events, and brewing tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-amber-800 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-amber-100 text-sm">
            © {new Date().getFullYear()} Booster lover&apos;s Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-amber-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-amber-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
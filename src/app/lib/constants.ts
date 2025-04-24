import { CoffeeType, MenuItem, EventType } from './types'

export const COFFEES: CoffeeType[] = [
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    description: 'Floral and citrusy with a light body',
    price: '¥35',
    image: '/yirgacheffe.jpg',
    region: 'Southern Ethiopia',
    flavorProfile: ['Floral', 'Citrus', 'Tea-like'],
    roastLevel: 'light'
  },
  {
    id: 'sidamo',
    name: 'Sidamo',
    description: 'Balanced with berry and wine notes',
    price: '¥32',
    image: '/sidamo.jpg',
    region: 'Sidamo Region',
    flavorProfile: ['Berry', 'Wine', 'Balanced'],
    roastLevel: 'medium'
  },
  {
    id: 'harrar',
    name: 'Harrar',
    description: 'Bold and fruity with blueberry tones',
    price: '¥38',
    image: '/harrar.jpg',
    region: 'Eastern Highlands',
    flavorProfile: ['Blueberry', 'Bold', 'Spicy'],
    roastLevel: 'dark'
  }
]

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Yirgacheffe Pour Over',
    price: '¥35',
    description: 'Floral and citrusy with a light body',
    category: 'coffee',
    dietary: []
  },
  {
    name: 'Injera Wrap',
    price: '¥42',
    description: 'Traditional Ethiopian flatbread with spiced fillings',
    category: 'food',
    dietary: ['vegan', 'gluten-free']
  },
  // Add more menu items...
]

export const EVENTS: EventType[] = [
  {
    title: "Traditional Coffee Ceremony",
    date: "July 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Main Hall",
    description: "Experience authentic Ethiopian coffee ceremony",
    price: "¥120",
    image: "/ceremony-event.jpg"
  },
  // Add more events...
]
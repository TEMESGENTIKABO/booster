export interface CoffeeType {
    id: string
    name: string
    description: string
    price: string
    image: string
    region: string
    flavorProfile: string[]
    roastLevel: 'light' | 'medium' | 'dark'
  }
  
  export interface MenuItem {
    name: string
    price: string
    description: string
    category: 'coffee' | 'food' | 'merch'
    dietary?: ('vegan' | 'gluten-free')[]
  }
  
  export interface EventType {
    title: string
    date: string
    time: string
    location: string
    description: string
    price: string
    image: string
  }
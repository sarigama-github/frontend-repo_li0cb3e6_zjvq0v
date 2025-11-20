import { Link, NavLink } from 'react-router-dom'
import { Coffee, Menu as MenuIcon, Phone } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
              <Coffee size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight">Blue Bean Café</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=>`hover:text-amber-700 transition ${isActive?'text-amber-700':'text-gray-700'}`}>Accueil</NavLink>
            <NavLink to="/menu" className={({isActive})=>`hover:text-amber-700 transition ${isActive?'text-amber-700':'text-gray-700'}`}>Menu</NavLink>
            <NavLink to="/contact" className={({isActive})=>`hover:text-amber-700 transition ${isActive?'text-amber-700':'text-gray-700'}`}>Contact</NavLink>
          </nav>
          <a href="/contact" className="hidden md:inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition">
            <Phone size={16} /> Réserver
          </a>
          <button className="md:hidden p-2 rounded-lg border border-black/10">
            <MenuIcon size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

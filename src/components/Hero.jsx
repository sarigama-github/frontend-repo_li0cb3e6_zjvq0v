import { Link } from 'react-router-dom'

function Hero(){
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-40"/>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-40"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Votre nouveau repère café et brunch
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Grains sélectionnés, lait micro-moussé, douceurs maison. Passez pour un espresso parfait ou installez-vous pour travailler dans une ambiance cosy.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-lg font-medium transition">Découvrir le menu</Link>
            <a href="#about" className="px-5 py-3 rounded-lg border border-black/10 font-medium text-gray-700 hover:bg-gray-50 transition">En savoir plus</a>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" alt="Café latte" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"/>
          <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl p-4 border border-black/5">
            <p className="text-sm font-medium">Ouvert 7j/7</p>
            <p className="text-xs text-gray-500">08:00 - 19:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

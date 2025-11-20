import { useEffect, useState } from 'react'

function MenuSection(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{ fetchMenu() },[])

  const fetchMenu = async () => {
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/menu`)
      if(!res.ok) throw new Error('Erreur de chargement du menu')
      const data = await res.json()
      setItems(data)
    } catch (e){
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Notre menu</h2>
            <p className="text-gray-600">Cafés de spécialité, thés, viennoiseries et petites faims</p>
          </div>
          <a href="/menu" className="text-amber-700 hover:underline">Voir tout</a>
        </div>

        {loading && <p className="text-gray-500">Chargement...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0,6).map((it, i)=> (
            <div key={i} className="p-5 rounded-xl border border-black/10 hover:shadow-md transition bg-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{it.name}</h3>
                <span className="text-amber-700 font-semibold">{Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(it.price)}</span>
              </div>
              {it.description && <p className="text-sm text-gray-600">{it.description}</p>}
              {it.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {it.tags.map((t, idx)=> (
                    <span key={idx} className="text-xxs uppercase tracking-wide bg-amber-100 text-amber-800 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection

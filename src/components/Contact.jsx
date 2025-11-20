import { useState } from 'react'

function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', text: '' })
    setLoading(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Une erreur est survenue')
      setStatus({ type: 'success', text: data.message || 'Message envoyé !' })
      setName(''); setEmail(''); setMessage('')
    } catch (err){
      setStatus({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="text-gray-600">Une question, une réservation, une commande ? Écrivez-nous.</p>
        </div>

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-black/10">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input value={name} onChange={e=>setName(e.target.value)} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="vous@exemple.com" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} required rows={6} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Votre message..." />
            <div className="mt-4 flex items-center gap-3">
              <button disabled={loading} className="bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white px-5 py-2 rounded-lg transition">{loading? 'Envoi...' : 'Envoyer'}</button>
              {status.text && (
                <span className={`${status.type==='success' ? 'text-green-700' : 'text-red-600'} text-sm`}>{status.text}</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

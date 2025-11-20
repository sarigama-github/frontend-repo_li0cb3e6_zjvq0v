function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-2">Blue Bean Café</h4>
          <p className="text-sm">123 Rue des Artisans, 75000 Paris</p>
          <p className="text-sm">Ouvert tous les jours 08:00 - 19:00</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">hello@bluebean.cafe</p>
          <p className="text-sm">01 23 45 67 89</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Suivez-nous</h4>
          <div className="flex gap-3 text-sm">
            <a className="hover:text-white" href="#">Instagram</a>
            <a className="hover:text-white" href="#">Facebook</a>
            <a className="hover:text-white" href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Blue Bean Café — Tous droits réservés</div>
    </footer>
  )
}

export default Footer

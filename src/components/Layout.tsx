import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              Configuratore Ambienti
            </Link>
            {!isHome && (
              <div className="flex gap-4">
                <Link
                  to="/configurations"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition"
                >
                  Le Mie Configurazioni
                </Link>
                <Link
                  to="/"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition"
                >
                  Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>Configuratore Ambienti - Software per la configurazione di spazi domestici</p>
        </div>
      </footer>
    </div>
  )
}

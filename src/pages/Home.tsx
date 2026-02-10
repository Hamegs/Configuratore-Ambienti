import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Benvenuto nel Configuratore Ambienti
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Progetta e configura i tuoi spazi domestici in modo semplice e intuitivo.
          Scegli un template, personalizza ogni stanza e calcola automaticamente le superfici.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold mb-3">Nuova Configurazione</h3>
            <p className="text-gray-600 mb-6">
              Inizia un nuovo progetto selezionando un template predefinito
            </p>
            <Link
              to="/templates"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Inizia Ora
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-semibold mb-3">Le Mie Configurazioni</h3>
            <p className="text-gray-600 mb-6">
              Visualizza, modifica o continua i tuoi progetti salvati
            </p>
            <Link
              to="/configurations"
              className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Vedi Configurazioni
            </Link>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Funzionalità</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-lg mb-2">📏 Calcolo Automatico</h4>
              <p className="text-gray-600">
                Calcola automaticamente i metri quadri di pareti, pavimenti e superfici
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">🚿 Configurazione Elementi</h4>
              <p className="text-gray-600">
                Aggiungi docce, nicchie, finestre e altri elementi personalizzati
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">🎨 Catalogo Materiali</h4>
              <p className="text-gray-600">
                Scegli materiali e prodotti dal catalogo integrato
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

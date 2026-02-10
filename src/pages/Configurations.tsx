import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Configuration } from '../types'
import { getAllConfigurations, deleteConfiguration, exportConfiguration, importConfiguration } from '../utils/storage'

export default function Configurations() {
  const [configurations, setConfigurations] = useState<Configuration[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    loadConfigurations()
  }, [])

  const loadConfigurations = () => {
    const configs = getAllConfigurations()
    setConfigurations(configs)
  }

  const handleDelete = (id: string) => {
    if (confirm('Sei sicuro di voler eliminare questa configurazione?')) {
      deleteConfiguration(id)
      loadConfigurations()
    }
  }

  const handleExport = (config: Configuration) => {
    exportConfiguration(config)
  }

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const config = await importConfiguration(file)
      loadConfigurations()
      navigate(`/editor/${config.id}`)
    } catch (error) {
      alert('Errore nell\'importazione del file')
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Le Mie Configurazioni
          </h1>
          <div className="flex gap-4">
            <label className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold cursor-pointer">
              Importa
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
            <Link
              to="/templates"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Nuova Configurazione
            </Link>
          </div>
        </div>

        {configurations.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nessuna configurazione trovata
            </h2>
            <p className="text-gray-600 mb-6">
              Inizia creando una nuova configurazione da un template
            </p>
            <Link
              to="/templates"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Crea Configurazione
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {configurations.map((config) => (
              <div
                key={config.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {config.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Creata: {new Date(config.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Modificata: {new Date(config.updatedAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {config.rooms.length} stanze configurate
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/editor/${config.id}`}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-semibold"
                    >
                      Modifica
                    </Link>
                    <button
                      onClick={() => handleExport(config)}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                    >
                      Esporta JSON
                    </button>
                    <button
                      onClick={() => handleDelete(config.id)}
                      className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

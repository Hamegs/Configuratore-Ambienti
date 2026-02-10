import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Configuration, Material } from '../types'
import { getConfiguration, saveConfiguration } from '../utils/storage'
import { materials } from '../data/materials'

type Category = 'all' | 'tiles' | 'paint' | 'flooring' | 'fixture'

const categoryLabels: Record<Category, string> = {
  'all': 'Tutti',
  'tiles': 'Piastrelle',
  'paint': 'Pitture',
  'flooring': 'Pavimenti',
  'fixture': 'Sanitari e Accessori'
}

export default function Catalog() {
  const { configId } = useParams<{ configId: string }>()
  const navigate = useNavigate()
  const [config, setConfig] = useState<Configuration | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null)

  useEffect(() => {
    if (configId) {
      const loadedConfig = getConfiguration(configId)
      if (loadedConfig) {
        setConfig(loadedConfig)
      } else {
        navigate('/configurations')
      }
    }
  }, [configId, navigate])

  const filteredMaterials = selectedCategory === 'all'
    ? materials
    : materials.filter(m => m.category === selectedCategory)

  const handleSelectMaterial = (material: Material) => {
    setSelectedMaterial(material)
  }

  const handleAddToConfig = (roomId: string, wallId?: string) => {
    if (!config || !selectedMaterial) return

    config.selectedMaterials.push({
      roomId,
      wallId,
      materialId: selectedMaterial.id
    })

    const updatedConfig = {
      ...config,
      updatedAt: new Date().toISOString()
    }

    saveConfiguration(updatedConfig)
    setConfig(updatedConfig)
    alert('Materiale aggiunto alla configurazione!')
  }

  if (!config) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-xl text-gray-600">Caricamento...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => navigate(`/editor/${configId}`)}
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            ← Torna all'Editor
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Catalogo Materiali</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Categorie
              </h2>
              <div className="space-y-2">
                {(Object.keys(categoryLabels) as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>

              {selectedMaterial && (
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Materiale Selezionato
                  </h3>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <img
                      src={selectedMaterial.image}
                      alt={selectedMaterial.name}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <p className="font-semibold text-sm">{selectedMaterial.name}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {selectedMaterial.pricePerSqm
                        ? `€${selectedMaterial.pricePerSqm}/m²`
                        : `€${selectedMaterial.pricePerUnit}/unità`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {categoryLabels[selectedCategory]}
                </h2>
                <span className="text-gray-600">
                  {filteredMaterials.length} prodotti
                </span>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition ${
                      selectedMaterial?.id === material.id
                        ? 'border-blue-600 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleSelectMaterial(material)}
                  >
                    <div className="h-40 bg-gray-100">
                      <img
                        src={material.image}
                        alt={material.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {material.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {material.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">
                          {material.pricePerSqm
                            ? `€${material.pricePerSqm.toFixed(2)}/m²`
                            : `€${material.pricePerUnit?.toFixed(2)}`}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">
                          {material.category === 'tiles' ? 'Piastrelle' :
                           material.category === 'paint' ? 'Pittura' :
                           material.category === 'flooring' ? 'Pavimento' : 'Sanitario'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedMaterial && (
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Aggiungi a Stanza
                </h2>
                <p className="text-gray-600 mb-4">
                  Seleziona una stanza per applicare il materiale "{selectedMaterial.name}"
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {config.rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => handleAddToConfig(room.id)}
                      className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition border-2 border-blue-200 hover:border-blue-400"
                    >
                      <p className="font-semibold text-gray-900">{room.name}</p>
                      <p className="text-sm text-gray-600 capitalize">{room.type}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

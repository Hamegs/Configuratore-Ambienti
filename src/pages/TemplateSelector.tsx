import { useNavigate } from 'react-router-dom'
import { templates } from '../data/templates'
import { Configuration } from '../types'
import { saveConfiguration } from '../utils/storage'

export default function TemplateSelector() {
  const navigate = useNavigate()

  const handleSelectTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (!template) return

    const newConfig: Configuration = {
      id: `config-${Date.now()}`,
      templateId: template.id,
      name: `${template.name} - ${new Date().toLocaleDateString()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rooms: JSON.parse(JSON.stringify(template.rooms)),
      selectedMaterials: []
    }

    saveConfiguration(newConfig)
    navigate(`/editor/${newConfig.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Seleziona un Template
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Scegli un template predefinito per iniziare la configurazione del tuo appartamento
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => handleSelectTemplate(template.id)}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">
                    {template.totalArea} m²
                  </span>
                  <span className="text-gray-500">
                    {template.rooms.length} stanze
                  </span>
                </div>
                <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                  Seleziona Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

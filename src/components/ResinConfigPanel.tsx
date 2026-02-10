import { ResinTexture } from '../types/resin'
import { getApplicableTexturesForZone, calculateConsumption } from '../data/resinTextures'
import { formatArea } from '../utils/calculations'

interface ResinConfigPanelProps {
  selectedSurfaceId: string | null;
  selectedSurfaceType: 'floor' | 'wall' | 'ceiling' | 'shower-base' | null;
  surfaceArea: number;
  currentTexture?: ResinTexture;
  onTextureSelect: (texture: ResinTexture) => void;
}

export default function ResinConfigPanel({
  selectedSurfaceId,
  selectedSurfaceType,
  surfaceArea,
  currentTexture,
  onTextureSelect
}: ResinConfigPanelProps) {
  
  if (!selectedSurfaceId || !selectedSurfaceType) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Seleziona una Superficie
          </h3>
          <p className="text-gray-600">
            Clicca su pavimento, parete o zona doccia nel viewer 3D per configurare la resina
          </p>
        </div>
      </div>
    );
  }

  const zoneMap: Record<typeof selectedSurfaceType, 'floor' | 'wall' | 'shower-area'> = {
    'floor': 'floor',
    'wall': 'wall',
    'ceiling': 'wall',
    'shower-base': 'shower-area'
  };

  const zone = zoneMap[selectedSurfaceType];
  const applicableTextures = getApplicableTexturesForZone(zone);

  const surfaceLabels: Record<typeof selectedSurfaceType, string> = {
    'floor': 'Pavimento',
    'wall': 'Parete',
    'ceiling': 'Soffitto',
    'shower-base': 'Piatto Doccia'
  };

  const selectedTextureSpec = applicableTextures.find(t => t.name === currentTexture);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Configurazione Resina
        </h2>
        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Superficie Selezionata:</p>
            <p className="text-lg font-bold text-blue-600">
              {surfaceLabels[selectedSurfaceType]} - {selectedSurfaceId}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Superficie:</p>
            <p className="text-lg font-bold text-gray-900">
              {formatArea(surfaceArea)}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Texture Disponibili
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Solo texture applicabili per questa zona
        </p>
        <div className="grid grid-cols-1 gap-3">
          {applicableTextures.map((texture) => (
            <button
              key={texture.id}
              onClick={() => onTextureSelect(texture.name)}
              className={`p-4 rounded-lg border-2 text-left transition ${
                currentTexture === texture.name
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={texture.image}
                  alt={texture.displayName}
                  className="w-20 h-20 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {texture.displayName}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {texture.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {texture.finish}
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      €{texture.pricePerSqm.toFixed(2)}/m²
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedTextureSpec && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Consumi Previsti
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-3">
              Per {formatArea(surfaceArea)} di {selectedTextureSpec.displayName}
            </p>
            <div className="space-y-2">
              {calculateConsumption(selectedTextureSpec, surfaceArea).map((cons, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{cons.phase}:</span>
                  <span className="font-semibold text-gray-900">
                    {cons.quantity.toFixed(2)} {cons.unit}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">Costo Stimato:</span>
                <span className="text-xl font-bold text-blue-600">
                  €{(selectedTextureSpec.pricePerSqm * surfaceArea).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Colori Disponibili
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedTextureSpec.colors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

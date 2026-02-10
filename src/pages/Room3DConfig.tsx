import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Configuration, Room } from '../types'
import { ResinTexture } from '../types/resin'
import { getConfiguration, saveConfiguration } from '../utils/storage'
import Room3DViewer from '../components/Room3DViewer'
import ResinConfigPanel from '../components/ResinConfigPanel'

export default function Room3DConfig() {
  const { configId, roomId } = useParams<{ configId: string; roomId: string }>()
  const navigate = useNavigate()
  const [config, setConfig] = useState<Configuration | null>(null)
  const [room, setRoom] = useState<Room | null>(null)
  const [selectedSurfaceId, setSelectedSurfaceId] = useState<string | null>(null)
  const [selectedSurfaceType, setSelectedSurfaceType] = useState<'floor' | 'wall' | 'ceiling' | 'shower-base' | null>(null)
  const [surfaceTextures, setSurfaceTextures] = useState<Record<string, ResinTexture>>({})

  useEffect(() => {
    if (configId) {
      const loadedConfig = getConfiguration(configId)
      if (loadedConfig) {
        setConfig(loadedConfig)
        const foundRoom = loadedConfig.rooms.find(r => r.id === roomId)
        if (foundRoom) {
          setRoom(foundRoom)
        }
      }
    }
  }, [configId, roomId])

  const handleSurfaceSelect = (surfaceId: string, surfaceType: 'floor' | 'wall' | 'ceiling' | 'shower-base') => {
    setSelectedSurfaceId(surfaceId)
    setSelectedSurfaceType(surfaceType)
  }

  const handleTextureSelect = (texture: ResinTexture) => {
    if (!selectedSurfaceId || !config) return

    const newSurfaceTextures = {
      ...surfaceTextures,
      [selectedSurfaceId]: texture
    }

    setSurfaceTextures(newSurfaceTextures)

    const updatedConfig = {
      ...config,
      updatedAt: new Date().toISOString()
    }

    saveConfiguration(updatedConfig)
    setConfig(updatedConfig)
  }

  const getSurfaceArea = (): number => {
    if (!selectedSurfaceId || !room) return 0

    if (selectedSurfaceId === 'floor') {
      return room.floorArea
    }

    if (selectedSurfaceId === 'shower-base') {
      const showerElement = room.elements.find(el => el.type === 'shower-base' || el.type === 'shower')
      if (showerElement) {
        return showerElement.dimensions.width * showerElement.dimensions.height
      }
      return 1.2 * 1.2
    }

    const wallMatch = selectedSurfaceId.match(/wall-(.+)/)
    if (wallMatch) {
      const wallIndex = room.walls.findIndex(w => 
        w.name.toLowerCase().includes(wallMatch[1]) ||
        wallMatch[1].includes(w.name.toLowerCase())
      )
      if (wallIndex >= 0) {
        const wall = room.walls[wallIndex]
        return wall.length * wall.height
      }
      return 15
    }

    return 0
  }

  if (!config || !room) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-xl text-gray-600">Caricamento...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => navigate(`/room/${configId}/${roomId}`)}
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            ← Torna alla Configurazione Classica
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
              <p className="text-gray-600 mt-1">Configurazione Resine 3D</p>
            </div>
            <button
              onClick={() => navigate(`/editor/${configId}`)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Torna alla Pianta
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Vista 3D Stanza
                </h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {room.floorArea} m² pavimento
                  </span>
                </div>
              </div>
              <Room3DViewer
                room={room}
                selectedSurface={selectedSurfaceId}
                onSurfaceSelect={handleSurfaceSelect}
                surfaceTextures={surfaceTextures}
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Superfici Configurate
              </h2>
              {Object.keys(surfaceTextures).length === 0 ? (
                <p className="text-gray-600 text-center py-8">
                  Nessuna superficie configurata. Seleziona una superficie nel viewer 3D e scegli una texture.
                </p>
              ) : (
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(surfaceTextures).map(([surfaceId, texture]) => (
                    <div
                      key={surfaceId}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <p className="font-semibold text-gray-900">{surfaceId}</p>
                      <p className="text-sm text-blue-600">{texture}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <ResinConfigPanel
              selectedSurfaceId={selectedSurfaceId}
              selectedSurfaceType={selectedSurfaceType}
              surfaceArea={getSurfaceArea()}
              currentTexture={selectedSurfaceId ? surfaceTextures[selectedSurfaceId] : undefined}
              onTextureSelect={handleTextureSelect}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

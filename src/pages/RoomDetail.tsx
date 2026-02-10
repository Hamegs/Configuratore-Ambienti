import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Configuration, Room, WallElement } from '../types'
import { getConfiguration, saveConfiguration } from '../utils/storage'
import { formatArea, formatLength, calculateWallArea } from '../utils/calculations'

export default function RoomDetail() {
  const { configId, roomId } = useParams<{ configId: string; roomId: string }>()
  const navigate = useNavigate()
  const [config, setConfig] = useState<Configuration | null>(null)
  const [room, setRoom] = useState<Room | null>(null)
  const [selectedWall, setSelectedWall] = useState<string | null>(null)

  useEffect(() => {
    if (configId) {
      const loadedConfig = getConfiguration(configId)
      if (loadedConfig) {
        setConfig(loadedConfig)
        const foundRoom = loadedConfig.rooms.find(r => r.id === roomId)
        if (foundRoom) {
          setRoom(foundRoom)
          if (foundRoom.walls.length > 0) {
            setSelectedWall(foundRoom.walls[0].id)
          }
        }
      }
    }
  }, [configId, roomId])

  const handleAddElement = (wallId: string, elementType: 'window' | 'door' | 'niche') => {
    if (!room || !config) return

    const wall = room.walls.find(w => w.id === wallId)
    if (!wall) return

    const newElement: WallElement = {
      id: `element-${Date.now()}`,
      type: elementType,
      width: elementType === 'door' ? 0.9 : elementType === 'window' ? 1.2 : 0.6,
      height: elementType === 'door' ? 2.1 : elementType === 'window' ? 1.4 : 2.0,
      position: 0.5
    }

    wall.elements.push(newElement)

    const updatedRooms = config.rooms.map(r =>
      r.id === room.id ? room : r
    )

    const updatedConfig = {
      ...config,
      rooms: updatedRooms,
      updatedAt: new Date().toISOString()
    }

    saveConfiguration(updatedConfig)
    setConfig(updatedConfig)
    setRoom({ ...room })
  }

  const handleRemoveElement = (wallId: string, elementId: string) => {
    if (!room || !config) return

    const wall = room.walls.find(w => w.id === wallId)
    if (!wall) return

    wall.elements = wall.elements.filter(e => e.id !== elementId)

    const updatedRooms = config.rooms.map(r =>
      r.id === room.id ? room : r
    )

    const updatedConfig = {
      ...config,
      rooms: updatedRooms,
      updatedAt: new Date().toISOString()
    }

    saveConfiguration(updatedConfig)
    setConfig(updatedConfig)
    setRoom({ ...room })
  }

  const handleUpdateWall = (wallId: string, field: 'length' | 'height', value: number) => {
    if (!room || !config) return

    const wall = room.walls.find(w => w.id === wallId)
    if (!wall) return

    wall[field] = value
    wall.area = wall.length * wall.height

    const updatedRooms = config.rooms.map(r =>
      r.id === room.id ? room : r
    )

    const updatedConfig = {
      ...config,
      rooms: updatedRooms,
      updatedAt: new Date().toISOString()
    }

    saveConfiguration(updatedConfig)
    setConfig(updatedConfig)
    setRoom({ ...room })
  }

  const handleUpdateElement = (wallId: string, elementId: string, field: 'width' | 'height', value: number) => {
    if (!room || !config) return

    const wall = room.walls.find(w => w.id === wallId)
    if (!wall) return

    const element = wall.elements.find(e => e.id === elementId)
    if (!element) return

    element[field] = value

    const updatedRooms = config.rooms.map(r =>
      r.id === room.id ? room : r
    )

    const updatedConfig = {
      ...config,
      rooms: updatedRooms,
      updatedAt: new Date().toISOString()
    }

    saveConfiguration(updatedConfig)
    setConfig(updatedConfig)
    setRoom({ ...room })
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

  const wall = selectedWall ? room.walls.find(w => w.id === selectedWall) : null
  const totalWallArea = room.walls.reduce((sum, w) => sum + calculateWallArea(w), 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => navigate(`/editor/${configId}`)}
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            ← Torna alla Pianta
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Superfici
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Pavimento</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatArea(room.floorArea)}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Pareti Totali</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatArea(totalWallArea)}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Numero Pareti</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {room.walls.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Seleziona Parete
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {room.walls.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWall(w.id)}
                    className={`p-4 rounded-lg border-2 text-left transition ${
                      selectedWall === w.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{w.name}</p>
                    <p className="text-sm text-gray-600">
                      {formatLength(w.length)} × {formatLength(w.height)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Area: {formatArea(calculateWallArea(w))}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {w.elements.length} elementi
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {wall ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {wall.name}
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lunghezza (m)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={wall.length}
                      onChange={(e) => handleUpdateWall(wall.id, 'length', parseFloat(e.target.value) || 0.1)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Altezza (m)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={wall.height}
                      onChange={(e) => handleUpdateWall(wall.id, 'height', parseFloat(e.target.value) || 0.1)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Area netta parete:</p>
                    <p className="text-xl font-bold text-gray-900">
                      {formatArea(calculateWallArea(wall))}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Aggiungi Elemento
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <button
                      onClick={() => handleAddElement(wall.id, 'window')}
                      className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                    >
                      Finestra
                    </button>
                    <button
                      onClick={() => handleAddElement(wall.id, 'door')}
                      className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                    >
                      Porta
                    </button>
                    <button
                      onClick={() => handleAddElement(wall.id, 'niche')}
                      className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-semibold"
                    >
                      Nicchia
                    </button>
                  </div>
                </div>

                {wall.elements.length > 0 && (
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Elementi ({wall.elements.length})
                    </h3>
                    <div className="space-y-3">
                      {wall.elements.map((element) => (
                        <div key={element.id} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900 capitalize">
                              {element.type === 'window' ? 'Finestra' : element.type === 'door' ? 'Porta' : 'Nicchia'}
                            </span>
                            <button
                              onClick={() => handleRemoveElement(wall.id, element.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-semibold"
                            >
                              Rimuovi
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">
                                Larghezza (m)
                              </label>
                              <input
                                type="number"
                                step="0.1"
                                min="0.1"
                                value={element.width}
                                onChange={(e) => handleUpdateElement(wall.id, element.id, 'width', parseFloat(e.target.value) || 0.1)}
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">
                                Altezza (m)
                              </label>
                              <input
                                type="number"
                                step="0.1"
                                min="0.1"
                                value={element.height}
                                onChange={(e) => handleUpdateElement(wall.id, element.id, 'height', parseFloat(e.target.value) || 0.1)}
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            Area: {formatArea(element.width * element.height)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <p className="text-gray-600">Seleziona una parete per configurarla</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

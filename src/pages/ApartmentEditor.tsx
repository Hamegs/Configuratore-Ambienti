import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Configuration, Room, RoomType } from '../types'
import { getConfiguration } from '../utils/storage'
import { formatArea } from '../utils/calculations'

const roomTypeColors: Record<RoomType, string> = {
  'bathroom': '#93C5FD',
  'bedroom': '#FCA5A5',
  'living-room': '#86EFAC',
  'kitchen': '#FDE047',
  'corridor': '#E9D5FF',
  'entrance': '#FDBA74',
  'balcony': '#A5F3FC',
  'storage': '#D1D5DB'
}

const roomTypeLabels: Record<RoomType, string> = {
  'bathroom': 'Bagno',
  'bedroom': 'Camera',
  'living-room': 'Soggiorno',
  'kitchen': 'Cucina',
  'corridor': 'Corridoio',
  'entrance': 'Ingresso',
  'balcony': 'Balcone',
  'storage': 'Ripostiglio'
}

export default function ApartmentEditor() {
  const { configId } = useParams<{ configId: string }>()
  const navigate = useNavigate()
  const [config, setConfig] = useState<Configuration | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

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

  const handleRoomClick = (roomId: string) => {
    setSelectedRoom(roomId)
  }

  const handleOpenRoomDetail = () => {
    if (selectedRoom && configId) {
      navigate(`/room/${configId}/${selectedRoom}`)
    }
  }

  const getCentroid = (room: Room) => {
    const sumX = room.polygon.reduce((sum, p) => sum + p.x, 0)
    const sumY = room.polygon.reduce((sum, p) => sum + p.y, 0)
    return {
      x: sumX / room.polygon.length,
      y: sumY / room.polygon.length
    }
  }

  const getPolygonPath = (room: Room) => {
    return room.polygon.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'
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

  const room = selectedRoom ? config.rooms.find(r => r.id === selectedRoom) : null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{config.name}</h1>
          <div className="flex gap-4">
            <Link
              to={`/catalog/${configId}`}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              Catalogo Materiali
            </Link>
            <Link
              to="/configurations"
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Torna alle Configurazioni
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Pianta Appartamento
              </h2>
              <p className="text-gray-600 mb-4">
                Clicca su una stanza per selezionarla e visualizzare i dettagli
              </p>
              <div className="bg-gray-50 rounded-lg p-4 overflow-auto">
                <svg viewBox="0 0 450 450" className="w-full h-auto max-h-[600px]">
                  {config.rooms.map((r) => {
                    const isSelected = r.id === selectedRoom
                    const centroid = getCentroid(r)
                    return (
                      <g key={r.id}>
                        <path
                          d={getPolygonPath(r)}
                          fill={roomTypeColors[r.type]}
                          stroke={isSelected ? '#1E40AF' : '#374151'}
                          strokeWidth={isSelected ? 3 : 1}
                          className="cursor-pointer hover:opacity-80 transition"
                          onClick={() => handleRoomClick(r.id)}
                        />
                        <text
                          x={centroid.x}
                          y={centroid.y - 10}
                          textAnchor="middle"
                          className="text-xs font-semibold pointer-events-none"
                          fill="#1F2937"
                        >
                          {r.name}
                        </text>
                        <text
                          x={centroid.x}
                          y={centroid.y + 5}
                          textAnchor="middle"
                          className="text-xs pointer-events-none"
                          fill="#4B5563"
                        >
                          {formatArea(r.floorArea)}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Dettagli Stanza
              </h2>
              {room ? (
                <div>
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: roomTypeColors[room.type] }}
                    >
                      {roomTypeLabels[room.type]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {room.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Superficie pavimento:</span>
                      <span className="font-semibold">{formatArea(room.floorArea)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Numero pareti:</span>
                      <span className="font-semibold">{room.walls.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Elementi:</span>
                      <span className="font-semibold">{room.elements.length}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleOpenRoomDetail}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    Configura Stanza
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">👆</div>
                  <p className="text-gray-600">
                    Seleziona una stanza dalla pianta per visualizzare i dettagli
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Legenda Stanze
              </h2>
              <div className="space-y-2">
                {Object.entries(roomTypeLabels).map(([type, label]) => (
                  <div key={type} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: roomTypeColors[type as RoomType] }}
                    />
                    <span className="text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

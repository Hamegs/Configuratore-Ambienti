import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { Room } from '../types'
import { ResinTexture } from '../types/resin'

interface Room3DViewerProps {
  room: Room;
  selectedSurface: string | null;
  onSurfaceSelect: (surfaceId: string, surfaceType: 'floor' | 'wall' | 'ceiling' | 'shower-base') => void;
  surfaceTextures: Record<string, ResinTexture>;
}

interface WallMeshProps {
  wallId: string;
  position: [number, number, number];
  width: number;
  height: number;
  rotation: [number, number, number];
  isSelected: boolean;
  onClick: () => void;
  texture?: ResinTexture;
  label: string;
}

const WallMesh = ({ position, width, height, rotation, isSelected, onClick, texture, label }: WallMeshProps) => {
  const [hovered, setHovered] = useState(false)
  
  const getColorByTexture = (tex?: ResinTexture): string => {
    if (!tex) return '#e0e0e0';
    const colors: Record<ResinTexture, string> = {
      'NATURAL': '#f5f5f5',
      'SENSE': '#e8e8e8',
      'DEKORA': '#f0f0f0',
      'LAMINE': '#ffd700',
      'CORLITE': '#959595',
      'CRYSTEPO_3': '#87CEEB',
      'CRYSTEPO_50': '#4682B4',
      'CRYSTEPO_V': '#6495ED',
      'MATERIAL': '#D3D3D3'
    };
    return colors[tex] || '#e0e0e0';
  };

  return (
    <group position={position} rotation={rotation}>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color={getColorByTexture(texture)}
          side={THREE.DoubleSide}
          emissive={isSelected ? '#4299e1' : hovered ? '#666' : '#000'}
          emissiveIntensity={isSelected ? 0.3 : hovered ? 0.1 : 0}
        />
      </mesh>
      <Text
        position={[0, height / 2 - 0.3, 0.01]}
        fontSize={0.25}
        color={isSelected ? '#2563eb' : '#555'}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      {texture && (
        <Text
          position={[0, -height / 2 + 0.3, 0.01]}
          fontSize={0.2}
          color="#333"
          anchorX="center"
          anchorY="middle"
        >
          {texture}
        </Text>
      )}
    </group>
  )
}

interface FloorMeshProps {
  position: [number, number, number];
  width: number;
  depth: number;
  isSelected: boolean;
  onClick: () => void;
  texture?: ResinTexture;
  label: string;
}

const FloorMesh = ({ position, width, depth, isSelected, onClick, texture, label }: FloorMeshProps) => {
  const [hovered, setHovered] = useState(false)
  
  const getColorByTexture = (tex?: ResinTexture): string => {
    if (!tex) return '#d0d0d0';
    const colors: Record<ResinTexture, string> = {
      'NATURAL': '#f5f5f5',
      'SENSE': '#e8e8e8',
      'DEKORA': '#f0f0f0',
      'LAMINE': '#ffd700',
      'CORLITE': '#959595',
      'CRYSTEPO_3': '#87CEEB',
      'CRYSTEPO_50': '#4682B4',
      'CRYSTEPO_V': '#6495ED',
      'MATERIAL': '#D3D3D3'
    };
    return colors[tex] || '#d0d0d0';
  };

  return (
    <group position={position}>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial
          color={getColorByTexture(texture)}
          emissive={isSelected ? '#4299e1' : hovered ? '#666' : '#000'}
          emissiveIntensity={isSelected ? 0.3 : hovered ? 0.1 : 0}
        />
      </mesh>
      <Text
        position={[0, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.3}
        color={isSelected ? '#2563eb' : '#555'}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      {texture && (
        <Text
          position={[0, 0.01, -depth / 4]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.25}
          color="#333"
          anchorX="center"
          anchorY="middle"
        >
          {texture}
        </Text>
      )}
    </group>
  )
}

export default function Room3DViewer({ room, selectedSurface, onSurfaceSelect, surfaceTextures }: Room3DViewerProps) {
  const roomWidth = 5;
  const roomDepth = 4;
  const roomHeight = 2.7;

  const hasShower = room.elements.some(el => el.type === 'shower' || el.type === 'shower-base');

  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [6, 5, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} />

        <FloorMesh
          position={[0, 0, 0]}
          width={roomWidth}
          depth={roomDepth}
          isSelected={selectedSurface === 'floor'}
          onClick={() => onSurfaceSelect('floor', 'floor')}
          texture={surfaceTextures['floor']}
          label="Pavimento"
        />

        {hasShower && (
          <FloorMesh
            position={[roomWidth / 4, 0.01, -roomDepth / 4]}
            width={1.2}
            depth={1.2}
            isSelected={selectedSurface === 'shower-base'}
            onClick={() => onSurfaceSelect('shower-base', 'shower-base')}
            texture={surfaceTextures['shower-base']}
            label="Piatto Doccia"
          />
        )}

        <WallMesh
          wallId="north"
          position={[0, roomHeight / 2, -roomDepth / 2]}
          width={roomWidth}
          height={roomHeight}
          rotation={[0, 0, 0]}
          isSelected={selectedSurface === 'wall-north'}
          onClick={() => onSurfaceSelect('wall-north', 'wall')}
          texture={surfaceTextures['wall-north']}
          label="Parete Nord"
        />

        <WallMesh
          wallId="south"
          position={[0, roomHeight / 2, roomDepth / 2]}
          width={roomWidth}
          height={roomHeight}
          rotation={[0, Math.PI, 0]}
          isSelected={selectedSurface === 'wall-south'}
          onClick={() => onSurfaceSelect('wall-south', 'wall')}
          texture={surfaceTextures['wall-south']}
          label="Parete Sud"
        />

        <WallMesh
          wallId="east"
          position={[roomWidth / 2, roomHeight / 2, 0]}
          width={roomDepth}
          height={roomHeight}
          rotation={[0, Math.PI / 2, 0]}
          isSelected={selectedSurface === 'wall-east'}
          onClick={() => onSurfaceSelect('wall-east', 'wall')}
          texture={surfaceTextures['wall-east']}
          label="Parete Est"
        />

        <WallMesh
          wallId="west"
          position={[-roomWidth / 2, roomHeight / 2, 0]}
          width={roomDepth}
          height={roomHeight}
          rotation={[0, -Math.PI / 2, 0]}
          isSelected={selectedSurface === 'wall-west'}
          onClick={() => onSurfaceSelect('wall-west', 'wall')}
          texture={surfaceTextures['wall-west']}
          label="Parete Ovest"
        />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />

        <gridHelper args={[10, 10, '#ccc', '#eee']} position={[0, -0.01, 0]} />
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-sm">
        <p className="font-semibold text-gray-700">Controlli 3D:</p>
        <p className="text-gray-600">• Click sinistro + trascina: Ruota</p>
        <p className="text-gray-600">• Rotella mouse: Zoom</p>
        <p className="text-gray-600">• Click destro + trascina: Pan</p>
        <p className="text-gray-600">• Click su superficie: Seleziona</p>
      </div>
    </div>
  )
}

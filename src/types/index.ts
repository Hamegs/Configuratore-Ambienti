export interface Point {
  x: number;
  y: number;
}

export interface Wall {
  id: string;
  name: string;
  length: number;
  height: number;
  area: number;
  elements: WallElement[];
}

export interface WallElement {
  id: string;
  type: 'window' | 'door' | 'niche';
  width: number;
  height: number;
  position: number;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  polygon: Point[];
  floorArea: number;
  walls: Wall[];
  elements: RoomElement[];
}

export type RoomType = 
  | 'bathroom'
  | 'bedroom'
  | 'living-room'
  | 'kitchen'
  | 'corridor'
  | 'entrance'
  | 'balcony'
  | 'storage';

export interface RoomElement {
  id: string;
  type: 'shower' | 'bathtub' | 'sink' | 'toilet' | 'bidet' | 'shower-base';
  position: Point;
  dimensions: { width: number; height: number };
}

export interface ApartmentTemplate {
  id: string;
  name: string;
  description: string;
  totalArea: number;
  rooms: Room[];
  preview: string;
}

export interface Material {
  id: string;
  name: string;
  category: 'tiles' | 'paint' | 'flooring' | 'fixture';
  pricePerSqm?: number;
  pricePerUnit?: number;
  image: string;
  description: string;
}

export interface Configuration {
  id: string;
  templateId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  rooms: Room[];
  selectedMaterials: {
    roomId: string;
    wallId?: string;
    materialId: string;
  }[];
}

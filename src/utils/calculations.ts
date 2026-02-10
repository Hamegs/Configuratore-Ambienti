import { Point, Room, Wall } from '../types';

export const calculatePolygonArea = (points: Point[]): number => {
  if (points.length < 3) return 0;
  
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    area += points[i].x * points[j].y;
    area -= points[j].x * points[i].y;
  }
  
  return Math.abs(area / 2) / 10000;
};

export const calculateWallArea = (wall: Wall): number => {
  let area = wall.length * wall.height;
  
  wall.elements.forEach(element => {
    area -= element.width * element.height;
  });
  
  return Math.max(0, area);
};

export const calculateRoomPerimeter = (points: Point[]): number => {
  if (points.length < 2) return 0;
  
  let perimeter = 0;
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    const dx = points[j].x - points[i].x;
    const dy = points[j].y - points[i].y;
    perimeter += Math.sqrt(dx * dx + dy * dy);
  }
  
  return perimeter / 100;
};

export const calculateTotalRoomWallArea = (room: Room): number => {
  return room.walls.reduce((total, wall) => total + calculateWallArea(wall), 0);
};

export const formatArea = (area: number): string => {
  return `${area.toFixed(2)} m²`;
};

export const formatLength = (length: number): string => {
  return `${length.toFixed(2)} m`;
};

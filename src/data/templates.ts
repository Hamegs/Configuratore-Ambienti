import { ApartmentTemplate, Room } from '../types';

const createWall = (id: string, name: string, length: number, height: number = 2.7) => ({
  id,
  name,
  length,
  height,
  area: length * height,
  elements: []
});

const bilocaleRooms: Room[] = [
  {
    id: 'room-1',
    name: 'Ingresso',
    type: 'entrance',
    polygon: [
      { x: 0, y: 0 },
      { x: 150, y: 0 },
      { x: 150, y: 120 },
      { x: 0, y: 120 }
    ],
    floorArea: 18,
    walls: [
      createWall('w1-1', 'Parete Nord', 5.5),
      createWall('w1-2', 'Parete Est', 3.3),
      createWall('w1-3', 'Parete Sud', 5.5),
      createWall('w1-4', 'Parete Ovest', 3.3)
    ],
    elements: []
  },
  {
    id: 'room-2',
    name: 'Soggiorno',
    type: 'living-room',
    polygon: [
      { x: 0, y: 120 },
      { x: 250, y: 120 },
      { x: 250, y: 270 },
      { x: 0, y: 270 }
    ],
    floorArea: 37.5,
    walls: [
      createWall('w2-1', 'Parete Nord', 5.5),
      createWall('w2-2', 'Parete Est', 6.8),
      createWall('w2-3', 'Parete Sud', 5.5),
      createWall('w2-4', 'Parete Ovest', 6.8)
    ],
    elements: []
  },
  {
    id: 'room-3',
    name: 'Cucina',
    type: 'kitchen',
    polygon: [
      { x: 250, y: 120 },
      { x: 350, y: 120 },
      { x: 350, y: 220 },
      { x: 250, y: 220 }
    ],
    floorArea: 10,
    walls: [
      createWall('w3-1', 'Parete Nord', 3.7),
      createWall('w3-2', 'Parete Est', 2.7),
      createWall('w3-3', 'Parete Sud', 3.7),
      createWall('w3-4', 'Parete Ovest', 2.7)
    ],
    elements: []
  },
  {
    id: 'room-4',
    name: 'Camera da Letto',
    type: 'bedroom',
    polygon: [
      { x: 150, y: 0 },
      { x: 350, y: 0 },
      { x: 350, y: 120 },
      { x: 150, y: 120 }
    ],
    floorArea: 24,
    walls: [
      createWall('w4-1', 'Parete Nord', 7.4),
      createWall('w4-2', 'Parete Est', 3.3),
      createWall('w4-3', 'Parete Sud', 7.4),
      createWall('w4-4', 'Parete Ovest', 3.3)
    ],
    elements: []
  },
  {
    id: 'room-5',
    name: 'Bagno',
    type: 'bathroom',
    polygon: [
      { x: 250, y: 220 },
      { x: 350, y: 220 },
      { x: 350, y: 270 },
      { x: 250, y: 270 }
    ],
    floorArea: 5,
    walls: [
      createWall('w5-1', 'Parete Nord', 3.7),
      createWall('w5-2', 'Parete Est', 1.4),
      createWall('w5-3', 'Parete Sud', 3.7),
      createWall('w5-4', 'Parete Ovest', 1.4)
    ],
    elements: [
      {
        id: 'el-1',
        type: 'shower',
        position: { x: 270, y: 230 },
        dimensions: { width: 0.9, height: 0.9 }
      },
      {
        id: 'el-2',
        type: 'toilet',
        position: { x: 320, y: 240 },
        dimensions: { width: 0.5, height: 0.7 }
      },
      {
        id: 'el-3',
        type: 'sink',
        position: { x: 290, y: 255 },
        dimensions: { width: 0.6, height: 0.5 }
      }
    ]
  }
];

const trilocaleRooms: Room[] = [
  {
    id: 'room-t1',
    name: 'Ingresso',
    type: 'entrance',
    polygon: [
      { x: 0, y: 0 },
      { x: 150, y: 0 },
      { x: 150, y: 100 },
      { x: 0, y: 100 }
    ],
    floorArea: 15,
    walls: [
      createWall('wt1-1', 'Parete Nord', 5.5),
      createWall('wt1-2', 'Parete Est', 2.7),
      createWall('wt1-3', 'Parete Sud', 5.5),
      createWall('wt1-4', 'Parete Ovest', 2.7)
    ],
    elements: []
  },
  {
    id: 'room-t2',
    name: 'Corridoio',
    type: 'corridor',
    polygon: [
      { x: 0, y: 100 },
      { x: 150, y: 100 },
      { x: 150, y: 250 },
      { x: 0, y: 250 }
    ],
    floorArea: 22.5,
    walls: [
      createWall('wt2-1', 'Parete Nord', 5.5),
      createWall('wt2-2', 'Parete Est', 4.1),
      createWall('wt2-3', 'Parete Sud', 5.5),
      createWall('wt2-4', 'Parete Ovest', 4.1)
    ],
    elements: []
  },
  {
    id: 'room-t3',
    name: 'Soggiorno',
    type: 'living-room',
    polygon: [
      { x: 0, y: 250 },
      { x: 250, y: 250 },
      { x: 250, y: 400 },
      { x: 0, y: 400 }
    ],
    floorArea: 37.5,
    walls: [
      createWall('wt3-1', 'Parete Nord', 5.5),
      createWall('wt3-2', 'Parete Est', 6.8),
      createWall('wt3-3', 'Parete Sud', 5.5),
      createWall('wt3-4', 'Parete Ovest', 6.8)
    ],
    elements: []
  },
  {
    id: 'room-t4',
    name: 'Cucina',
    type: 'kitchen',
    polygon: [
      { x: 250, y: 250 },
      { x: 400, y: 250 },
      { x: 400, y: 350 },
      { x: 250, y: 350 }
    ],
    floorArea: 15,
    walls: [
      createWall('wt4-1', 'Parete Nord', 5.5),
      createWall('wt4-2', 'Parete Est', 2.7),
      createWall('wt4-3', 'Parete Sud', 5.5),
      createWall('wt4-4', 'Parete Ovest', 2.7)
    ],
    elements: []
  },
  {
    id: 'room-t5',
    name: 'Camera Matrimoniale',
    type: 'bedroom',
    polygon: [
      { x: 150, y: 0 },
      { x: 400, y: 0 },
      { x: 400, y: 150 },
      { x: 150, y: 150 }
    ],
    floorArea: 37.5,
    walls: [
      createWall('wt5-1', 'Parete Nord', 9.2),
      createWall('wt5-2', 'Parete Est', 4.1),
      createWall('wt5-3', 'Parete Sud', 9.2),
      createWall('wt5-4', 'Parete Ovest', 4.1)
    ],
    elements: []
  },
  {
    id: 'room-t6',
    name: 'Camera Singola',
    type: 'bedroom',
    polygon: [
      { x: 150, y: 150 },
      { x: 400, y: 150 },
      { x: 400, y: 250 },
      { x: 150, y: 250 }
    ],
    floorArea: 25,
    walls: [
      createWall('wt6-1', 'Parete Nord', 9.2),
      createWall('wt6-2', 'Parete Est', 2.7),
      createWall('wt6-3', 'Parete Sud', 9.2),
      createWall('wt6-4', 'Parete Ovest', 2.7)
    ],
    elements: []
  },
  {
    id: 'room-t7',
    name: 'Bagno Principale',
    type: 'bathroom',
    polygon: [
      { x: 250, y: 350 },
      { x: 400, y: 350 },
      { x: 400, y: 400 },
      { x: 250, y: 400 }
    ],
    floorArea: 7.5,
    walls: [
      createWall('wt7-1', 'Parete Nord', 5.5),
      createWall('wt7-2', 'Parete Est', 1.4),
      createWall('wt7-3', 'Parete Sud', 5.5),
      createWall('wt7-4', 'Parete Ovest', 1.4)
    ],
    elements: [
      {
        id: 'el-t1',
        type: 'bathtub',
        position: { x: 270, y: 360 },
        dimensions: { width: 1.7, height: 0.7 }
      },
      {
        id: 'el-t2',
        type: 'toilet',
        position: { x: 350, y: 370 },
        dimensions: { width: 0.5, height: 0.7 }
      },
      {
        id: 'el-t3',
        type: 'bidet',
        position: { x: 380, y: 370 },
        dimensions: { width: 0.4, height: 0.6 }
      },
      {
        id: 'el-t4',
        type: 'sink',
        position: { x: 310, y: 385 },
        dimensions: { width: 0.6, height: 0.5 }
      }
    ]
  }
];

export const templates: ApartmentTemplate[] = [
  {
    id: 'bilocale-1',
    name: 'Bilocale Moderno',
    description: 'Appartamento bilocale 60 mq con cucina separata',
    totalArea: 60,
    rooms: bilocaleRooms,
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM0YTVTNjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJpbG9jYWxlPC90ZXh0Pjwvc3ZnPg=='
  },
  {
    id: 'trilocale-1',
    name: 'Trilocale Comfort',
    description: 'Appartamento trilocale 85 mq con due camere e doppio servizio',
    totalArea: 85,
    rooms: trilocaleRooms,
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM0YTVTNjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRyaWxvY2FsZTwvdGV4dD48L3N2Zz4='
  }
];

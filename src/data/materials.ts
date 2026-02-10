import { Material } from '../types';

export const materials: Material[] = [
  {
    id: 'tile-1',
    name: 'Ceramica Bianca Lucida',
    category: 'tiles',
    pricePerSqm: 25.50,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==',
    description: 'Piastrelle in ceramica bianca lucida, ideale per bagni e cucine'
  },
  {
    id: 'tile-2',
    name: 'Gres Porcellanato Grigio',
    category: 'tiles',
    pricePerSqm: 35.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzlDQTNCMiIvPjwvc3ZnPg==',
    description: 'Gres porcellanato effetto pietra, resistente e di alta qualità'
  },
  {
    id: 'tile-3',
    name: 'Mosaico Azzurro',
    category: 'tiles',
    pricePerSqm: 45.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzYzQjNFRCIvPjwvc3ZnPg==',
    description: 'Mosaico in vetro azzurro, perfetto per nicchie doccia'
  },
  {
    id: 'tile-4',
    name: 'Ceramica Beige Opaca',
    category: 'tiles',
    pricePerSqm: 28.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0YzRTVBQiIvPjwvc3ZnPg==',
    description: 'Piastrelle beige opache, stile classico ed elegante'
  },
  {
    id: 'paint-1',
    name: 'Pittura Lavabile Bianca',
    category: 'paint',
    pricePerSqm: 5.50,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0Y4RjlGQSIvPjwvc3ZnPg==',
    description: 'Idropittura lavabile bianca, elevata copertura'
  },
  {
    id: 'paint-2',
    name: 'Pittura Colorata Azzurra',
    category: 'paint',
    pricePerSqm: 6.50,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0E3RDhERSIvPjwvc3ZnPg==',
    description: 'Pittura lavabile azzurro chiaro, effetto rilassante'
  },
  {
    id: 'paint-3',
    name: 'Pittura Grigio Perla',
    category: 'paint',
    pricePerSqm: 6.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0QzRDNEMyIvPjwvc3ZnPg==',
    description: 'Pittura grigio perla, moderna ed elegante'
  },
  {
    id: 'floor-1',
    name: 'Parquet Rovere Naturale',
    category: 'flooring',
    pricePerSqm: 55.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0M0OTA2MSIvPjwvc3ZnPg==',
    description: 'Parquet in rovere naturale, caldo e accogliente'
  },
  {
    id: 'floor-2',
    name: 'Gres Effetto Legno',
    category: 'flooring',
    pricePerSqm: 42.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0I4ODY1NiIvPjwvc3ZnPg==',
    description: 'Gres porcellanato effetto legno, resistente e pratico'
  },
  {
    id: 'floor-3',
    name: 'Gres Antracite',
    category: 'flooring',
    pricePerSqm: 38.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzNGNEY1QSIvPjwvc3ZnPg==',
    description: 'Gres porcellanato antracite, stile moderno'
  },
  {
    id: 'fixture-1',
    name: 'Box Doccia Cristallo',
    category: 'fixture',
    pricePerUnit: 450.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0U4RjRGOCIgc3Ryb2tlPSIjNjRCNUY2IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
    description: 'Box doccia in cristallo temperato 8mm'
  },
  {
    id: 'fixture-2',
    name: 'Piatto Doccia Bianco',
    category: 'fixture',
    pricePerUnit: 180.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
    description: 'Piatto doccia in resina 90x90cm'
  },
  {
    id: 'fixture-3',
    name: 'Sanitari Sospesi Bianchi',
    category: 'fixture',
    pricePerUnit: 650.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
    description: 'Set completo sanitari sospesi con vaso, bidet e coprivaso'
  },
  {
    id: 'fixture-4',
    name: 'Lavabo da Appoggio',
    category: 'fixture',
    pricePerUnit: 320.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZWxsaXBzZSBjeD0iNTAiIGN5PSI1MCIgcng9IjQ1IiByeT0iMzAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTdFQiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+',
    description: 'Lavabo da appoggio in ceramica ovale'
  }
];

import { ResinTextureSpec, ResinTexture } from '../types/resin';

export const resinTextures: ResinTextureSpec[] = [
  {
    id: 'natural',
    name: 'NATURAL',
    displayName: 'Natural Spatola',
    finish: 'spatola',
    description: 'Texture spatol ata naturale, applicabile su pavimento, pareti e zona doccia',
    applicableZones: ['floor', 'wall', 'shower-area'],
    phases: [
      { phase: 'Carteggiatura', productName: 'Carteggiatura', kgPerSqm: 0, applicable: true },
      { phase: 'Primer SW', productName: 'Primer SW', kgPerSqm: 0.05, applicable: true },
      { phase: '1° Mano Rasante Base', productName: 'Rasante Base rete 160', kgPerSqm: 1.5, applicable: true },
      { phase: '2° Mano Rasante Base', productName: 'Rasante Base NATURAL/LAMINE', kgPerSqm: 0.6, applicable: true },
      { phase: '1° Mano Fondo Spatola', productName: 'Texture NATURAL', kgPerSqm: 0.6, applicable: true },
      { phase: '1° Mano Finitura', productName: 'Texture NATURAL', kgPerSqm: 0.2, applicable: true },
      { phase: 'Protettivo H20', productName: 'Proteggo Opaco H20', kgPerSqm: 0.09, applicable: true, notes: '3 mani' }
    ],
    colors: ['Bianco', 'Grigio Chiaro', 'Grigio Scuro', 'Beige', 'Tortora', 'Personalizzato RAL'],
    pricePerSqm: 85.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3BhdG9sYSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCAwIEw0MCA0MCBNNDAgMCBMMCA0MCIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjVmNWY1Ii8+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjc3BhdG9sYSkiLz48L3N2Zz4='
  },
  {
    id: 'sense',
    name: 'SENSE',
    displayName: 'Sense Spatola',
    finish: 'spatola',
    description: 'Texture spatola to Sense, applicabile su pavimento, pareti e zona doccia',
    applicableZones: ['floor', 'wall', 'shower-area'],
    phases: [
      { phase: 'Carteggiatura', productName: 'Carteggiatura', kgPerSqm: 0, applicable: true },
      { phase: 'Primer SW', productName: 'Primer SW', kgPerSqm: 0.1, applicable: true },
      { phase: '1° Mano Rasante Base', productName: 'Rasante Base rete 160', kgPerSqm: 1.5, applicable: true },
      { phase: '1° Mano Fondo Spatola', productName: 'Texture SENSE', kgPerSqm: 1.0, applicable: true },
      { phase: '1° Mano Finitura', productName: 'Texture SENSE', kgPerSqm: 0.5, applicable: true },
      { phase: '2° Mano Finitura', productName: 'Texture SENSE', kgPerSqm: 0.5, applicable: true },
      { phase: 'Protettivo H20', productName: 'Proteggo Opaco H20', kgPerSqm: 0.09, applicable: true, notes: '3 mani' }
    ],
    colors: ['Bianco', 'Grigio', 'Tortora', 'Cemento', 'Personalizzato RAL'],
    pricePerSqm: 95.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZThlOCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMiIGZpbGw9IiNkNWQ1ZDUiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSI1MCIgcj0iMyIgZmlsbD0iI2Q1ZDVkNSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMyIgZmlsbD0iI2Q1ZDVkNSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTUwIiByPSIzIiBmaWxsPSIjZDVkNWQ1Ii8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSIzIiBmaWxsPSIjZDVkNWQ1Ii8+PC9zdmc+'
  },
  {
    id: 'dekora',
    name: 'DEKORA',
    displayName: 'Dekora Spatola',
    finish: 'spatola',
    description: 'Texture spatola decorativa, applicabile su pavimento e pareti (NO zona doccia)',
    applicableZones: ['floor', 'wall'],
    phases: [
      { phase: 'Carteggiatura', productName: 'Carteggiatura', kgPerSqm: 0, applicable: true },
      { phase: 'Primer SW', productName: 'Primer SW', kgPerSqm: 0.1, applicable: true },
      { phase: 'Primer Bond SW', productName: 'Primer Bond SW', kgPerSqm: 0.1, applicable: true },
      { phase: '1° Mano Rasante Base', productName: 'Rasante Base rete 160', kgPerSqm: 1.5, applicable: true },
      { phase: '1° Mano Fondo Spatola', productName: 'Texture DEKORA', kgPerSqm: 1.5, applicable: true },
      { phase: '1° Mano Finitura', productName: 'Texture DEKORA', kgPerSqm: 0.5, applicable: true },
      { phase: '2° Mano Finitura', productName: 'Texture DEKORA', kgPerSqm: 0.5, applicable: true },
      { phase: 'Protettivo H20', productName: 'Proteggo Fix H20', kgPerSqm: 0.1, applicable: true }
    ],
    colors: ['Bianco', 'Avorio', 'Sabbia', 'Grigio Perla', 'Personalizzato RAL'],
    pricePerSqm: 105.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZGVrbyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCAwIFEzMCAzMCA2MCAwIiBzdHJva2U9IiNjY2MiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjBmMGYwIi8+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZGVrbykiLz48L3N2Zz4='
  },
  {
    id: 'lamine',
    name: 'LAMINE',
    displayName: 'Lamine Veneziana',
    finish: 'veneziana',
    description: 'Texture veneziana con lamine, applicabile su pavimento e zona doccia (NO pareti)',
    applicableZones: ['floor', 'shower-area'],
    phases: [
      { phase: 'Carteggiatura', productName: 'Carteggiatura', kgPerSqm: 0, applicable: true },
      { phase: 'Primer SW', productName: 'Primer SW', kgPerSqm: 0.1, applicable: true },
      { phase: '1° Mano Rasante Base', productName: 'Rasante Base rete 160', kgPerSqm: 1.5, applicable: true },
      { phase: '2° Mano Rasante Base', productName: 'Rasante Base NATURAL/LAMINE', kgPerSqm: 0.6, applicable: true },
      { phase: '1° Mano Fondo', productName: 'Fondo LAMINE', kgPerSqm: 0.37, applicable: true },
      { phase: 'Applicazione Lamine', productName: 'Lamine', kgPerSqm: 1.0, applicable: true, notes: 'Lo spaglio viene effettuato sulla resina appena stesa' },
      { phase: 'Protettivo H20', productName: 'Proteggo Lucido H20', kgPerSqm: 0.25, applicable: true, notes: 'Spatola o gomma' }
    ],
    colors: ['Oro', 'Argento', 'Bronzo', 'Rame', 'Mix Personalizzato'],
    pricePerSqm: 120.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxhbWluZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZDcwMDtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZjtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmQ3MDA7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjbGFtaW5lKSIvPjwvc3ZnPg=='
  },
  {
    id: 'corlite',
    name: 'CORLITE',
    displayName: 'Corlite Autolivellante',
    finish: 'autolivellante',
    description: 'Resina autolivellante, applicabile solo su pavimento (NO zona doccia, NO pareti)',
    applicableZones: ['floor'],
    phases: [
      { phase: 'Carteggiatura', productName: 'Carteggiatura', kgPerSqm: 0, applicable: true },
      { phase: 'Levigatura Diamante', productName: 'CLS', kgPerSqm: 0, applicable: true },
      { phase: 'Primer SW', productName: 'Primer SW', kgPerSqm: 0.2, applicable: true },
      { phase: '1° Mano Rasante Base Quarzo', productName: 'Rasante Base Quarzo CORLITE rete 160', kgPerSqm: 2.0, applicable: true },
      { phase: '2° Mano Rasante Base Quarzo', productName: 'Rasante Base Quarzo CORLITE', kgPerSqm: 0.6, applicable: true },
      { phase: 'Mano Unica Autolivellante', productName: 'CORLITE', kgPerSqm: 4.5, applicable: true },
      { phase: 'Protettivo Solvente', productName: 'Proteggo Opaco S', kgPerSqm: 0.1, applicable: true, notes: '3 mani' }
    ],
    colors: ['Trasparente', 'Grigio Cemento', 'Antracite'],
    pricePerSqm: 110.00,
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzk1OTU5NSIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9IiM3MDcwNzAiLz48Y2lyY2xlIGN4PSIxMjAiIGN5PSI2MCIgcj0iMiIgZmlsbD0iIzcwNzA3MCIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMTIwIiByPSIyIiBmaWxsPSIjNzA3MDcwIi8+PGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQwIiByPSIyIiBmaWxsPSIjNzA3MDcwIi8+PC9zdmc+'
  }
];

export const getTextureByName = (name: ResinTexture): ResinTextureSpec | undefined => {
  return resinTextures.find(t => t.name === name);
};

export const getApplicableTexturesForZone = (zone: 'floor' | 'wall' | 'shower-area'): ResinTextureSpec[] => {
  return resinTextures.filter(t => t.applicableZones.includes(zone));
};

export const calculateConsumption = (texture: ResinTextureSpec, areaSqm: number) => {
  return texture.phases.map(phase => ({
    phase: phase.phase,
    product: phase.productName,
    quantity: phase.applicable ? phase.kgPerSqm * areaSqm : 0,
    unit: 'kg' as const
  })).filter(c => c.quantity > 0);
};

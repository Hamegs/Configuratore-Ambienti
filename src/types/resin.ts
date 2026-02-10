export type ResinTexture = 
  | 'NATURAL'
  | 'SENSE'
  | 'DEKORA'
  | 'LAMINE'
  | 'CORLITE'
  | 'CRYSTEPO_3'
  | 'CRYSTEPO_50'
  | 'CRYSTEPO_V'
  | 'MATERIAL';

export type ResinZone = 'floor' | 'wall' | 'shower-area';

export type ResinFinish = 'spatola' | 'autolivellante' | 'veneziana' | 'verticale';

export interface ResinPhaseConsumption {
  phase: string;
  productName: string;
  kgPerSqm: number;
  applicable: boolean;
  notes?: string;
}

export interface ResinTextureSpec {
  id: string;
  name: ResinTexture;
  displayName: string;
  finish: ResinFinish;
  description: string;
  applicableZones: ResinZone[];
  phases: ResinPhaseConsumption[];
  colors: string[];
  pricePerSqm: number;
  image: string;
}

export interface SurfaceConfiguration {
  id: string;
  roomId: string;
  surfaceType: 'floor' | 'wall' | 'ceiling' | 'shower-base';
  wallId?: string;
  texture: ResinTexture;
  color?: string;
  area: number;
  consumption: {
    phase: string;
    product: string;
    quantity: number;
    unit: 'kg' | 'l';
  }[];
}

export interface ResinQuote {
  configurationId: string;
  surfaces: SurfaceConfiguration[];
  totalArea: number;
  totalCost: number;
  breakdown: {
    texture: ResinTexture;
    area: number;
    cost: number;
    consumption: {
      product: string;
      totalQuantity: number;
      unit: string;
    }[];
  }[];
  createdAt: string;
}

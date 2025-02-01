export interface Product {
  sku: string;
  upc: string;
  name: string;
  category: string;
  expiryDate: string;
  temperature: number;
  humidity: number;
  status: 'good' | 'vulnerable' | 'critical';
  location: string;
  batchId: string;
  aiPrediction?: {
    spoilageProbability: number;
    recommendedAction: 'monitor' | 'inspect' | 'sell';
    timeToSpoilage: number; // in hours
  };
  voc?: number; // Volatile Organic Compounds level
  lightExposure?: number;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  lastMaintenance: string;
  nextMaintenance: string;
  status: 'operational' | 'warning' | 'critical';
  frequency: number;
  location: string;
  spectralData: {
    timestamp: string;
    frequency: number;
    amplitude: number;
    anomalyScore: number;
  }[];
  maintenanceHistory: {
    date: string;
    type: string;
    findings: string;
  }[];
}

export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: 'in-transit' | 'delivered' | 'alert' | 'selling';
  temperature: number;
  humidity: number;
  lastChecked: string;
  nextCheckpoint: string;
  products: Product[];
  distanceCovered: number;
  totalDistance: number;
  checkpoints: {
    location: string;
    distance: number;
    status: 'pending' | 'passed' | 'alert';
    temperature: number;
    humidity: number;
    timestamp?: string;
    aiAnalysis?: {
      qualityScore: number;
      recommendation: string;
    };
  }[];
  aiPredictions: {
    spoilageRisk: number;
    estimatedTimeToSpoilage: number;
    recommendedAction: string;
    confidence: number;
  };
  saleInfo?: {
    listingPrice: number;
    discountPercentage: number;
    potentialBuyers: {
      id: string;
      name: string;
      distance: number;
      bidAmount?: number;
    }[];
    timeRemaining: number; // hours until product becomes unsellable
  };
}
import React from 'react';
import { AlertTriangle, Box, ThermometerSnowflake, Timer, Activity, BarChart3 } from 'lucide-react';
import type { Product, Equipment } from '../types';

const mockProducts: Product[] = [
  {
    sku: 'PRD001',
    upc: '123456789012',
    name: 'Organic Strawberries',
    category: 'Fruits',
    expiryDate: '2024-02-15',
    temperature: 4.2,
    humidity: 85,
    status: 'good',
    location: 'Zone A',
    batchId: 'BATCH001',
    aiPrediction: {
      spoilageProbability: 0.12,
      recommendedAction: 'monitor',
      timeToSpoilage: 72
    },
    voc: 120,
    lightExposure: 450
  },
  {
    sku: 'PRD002',
    upc: '123456789013',
    name: 'Fresh Milk',
    category: 'Dairy',
    expiryDate: '2024-02-10',
    temperature: 3.8,
    humidity: 82,
    status: 'vulnerable',
    location: 'Zone B',
    batchId: 'BATCH002',
    aiPrediction: {
      spoilageProbability: 0.68,
      recommendedAction: 'sell',
      timeToSpoilage: 24
    },
    voc: 180,
    lightExposure: 380
  }
];

const mockEquipment: Equipment[] = [
  {
    id: 'EQ001',
    name: 'Cooling Unit A1',
    type: 'Refrigeration',
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-02-15',
    status: 'operational',
    frequency: 60.0,
    location: 'Zone A',
    spectralData: [
      { timestamp: '2024-02-01 10:00', frequency: 60.0, amplitude: 0.95, anomalyScore: 0.02 },
      { timestamp: '2024-02-01 10:15', frequency: 59.8, amplitude: 0.94, anomalyScore: 0.03 }
    ],
    maintenanceHistory: [
      {
        date: '2024-01-15',
        type: 'Preventive',
        findings: 'Normal wear and tear, components within acceptable range'
      }
    ]
  },
  {
    id: 'EQ002',
    name: 'Humidity Controller B1',
    type: 'Climate Control',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-02-20',
    status: 'warning',
    frequency: 58.5,
    location: 'Zone B',
    spectralData: [
      { timestamp: '2024-02-01 10:00', frequency: 58.5, amplitude: 0.82, anomalyScore: 0.15 },
      { timestamp: '2024-02-01 10:15', frequency: 58.2, amplitude: 0.80, anomalyScore: 0.18 }
    ],
    maintenanceHistory: [
      {
        date: '2024-01-20',
        type: 'Corrective',
        findings: 'Replaced humidity sensor, calibrated control system'
      }
    ]
  }
];

const WarehousePanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Box className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Total Products</h3>
              <p className="text-3xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <AlertTriangle className="h-10 w-10 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">AI Alerts</h3>
              <p className="text-3xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500">4 require immediate action</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Timer className="h-10 w-10 text-red-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Expiring Soon</h3>
              <p className="text-3xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-500">Within 24 hours</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Activity className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Equipment Status</h3>
              <p className="text-3xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-500">Operational</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Inventory Status (FIFO)</h2>
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  AI Enabled
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">SKU/UPC</th>
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">AI Prediction</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockProducts.map((product) => (
                  <tr key={product.sku} className="border-t border-gray-100">
                    <td className="py-4">
                      <div className="text-sm font-medium">{product.sku}</div>
                      <div className="text-xs text-gray-500">{product.upc}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-sm font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.category}</div>
                      <div className="text-xs text-gray-500">
                        Temp: {product.temperature}°C | RH: {product.humidity}%
                      </div>
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          product.status === 'good'
                            ? 'bg-green-100 text-green-800'
                            : product.status === 'vulnerable'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.status}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Expires: {product.expiryDate}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-sm">
                        {(product.aiPrediction?.spoilageProbability || 0) * 100}% Risk
                      </div>
                      <div className="text-xs text-gray-500">
                        {product.aiPrediction?.timeToSpoilage}h remaining
                      </div>
                    </td>
                    <td className="py-4">
                      <button
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          product.aiPrediction?.recommendedAction === 'sell'
                            ? 'bg-red-100 text-red-800 hover:bg-red-200'
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                      >
                        {product.aiPrediction?.recommendedAction === 'sell' ? 'Sell Now' : 'Monitor'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Equipment Monitoring</h2>
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Spectral Analysis
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">Equipment</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Spectral Data</th>
                  <th className="pb-4">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {mockEquipment.map((equipment) => (
                  <tr key={equipment.id} className="border-t border-gray-100">
                    <td className="py-4">
                      <div className="text-sm font-medium">{equipment.name}</div>
                      <div className="text-xs text-gray-500">{equipment.type}</div>
                      <div className="text-xs text-gray-500">{equipment.location}</div>
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          equipment.status === 'operational'
                            ? 'bg-green-100 text-green-800'
                            : equipment.status === 'warning'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {equipment.status}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        {equipment.frequency.toFixed(1)} Hz
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-32 h-16 bg-gray-50 rounded-lg relative">
                        {equipment.spectralData.map((data, index) => (
                          <div
                            key={index}
                            className="absolute bottom-0 w-1 bg-blue-500 rounded-t"
                            style={{
                              height: `${data.amplitude * 100}%`,
                              left: `${(index / (equipment.spectralData.length - 1)) * 100}%`,
                              opacity: data.anomalyScore > 0.1 ? '0.5' : '1'
                            }}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Anomaly Score: {equipment.spectralData[equipment.spectralData.length - 1].anomalyScore.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-sm">Next: {equipment.nextMaintenance}</div>
                      <div className="text-xs text-gray-500">
                        Last: {equipment.lastMaintenance}
                      </div>
                      <button className="mt-1 px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">
                        View History
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehousePanel;
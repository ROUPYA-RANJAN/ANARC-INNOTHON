import React from 'react';
import { AlertTriangle, CheckCircle2, ThermometerSnowflake, Truck, Brain, DollarSign } from 'lucide-react';
import type { Shipment } from '../types';

const mockShipments: Shipment[] = [
  {
    id: 'SHP001',
    origin: 'Mumbai Warehouse',
    destination: 'Delhi Distribution Center',
    status: 'in-transit',
    temperature: 4.5,
    humidity: 82,
    lastChecked: '2024-02-01 10:30',
    nextCheckpoint: 'Nagpur Hub',
    products: [],
    distanceCovered: 450,
    totalDistance: 1200,
    checkpoints: [
      {
        location: 'Nashik Hub',
        distance: 200,
        status: 'passed',
        temperature: 4.2,
        humidity: 81,
        timestamp: '2024-02-01 08:30',
        aiAnalysis: {
          qualityScore: 0.95,
          recommendation: 'Continue transit'
        }
      },
      {
        location: 'Nagpur Hub',
        distance: 450,
        status: 'pending',
        temperature: 4.5,
        humidity: 82
      }
    ],
    aiPredictions: {
      spoilageRisk: 0.15,
      estimatedTimeToSpoilage: 96,
      recommendedAction: 'Continue monitoring',
      confidence: 0.92
    }
  },
  {
    id: 'SHP002',
    origin: 'Chennai Warehouse',
    destination: 'Bangalore Distribution Center',
    status: 'selling',
    temperature: 6.8,
    humidity: 78,
    lastChecked: '2024-02-01 11:15',
    nextCheckpoint: 'Salem Hub',
    products: [],
    distanceCovered: 200,
    totalDistance: 350,
    checkpoints: [
      {
        location: 'Vellore Hub',
        distance: 150,
        status: 'alert',
        temperature: 6.5,
        humidity: 77,
        timestamp: '2024-02-01 10:00',
        aiAnalysis: {
          qualityScore: 0.72,
          recommendation: 'Immediate intervention required'
        }
      }
    ],
    aiPredictions: {
      spoilageRisk: 0.68,
      estimatedTimeToSpoilage: 24,
      recommendedAction: 'Initiate sale process',
      confidence: 0.88
    },
    saleInfo: {
      listingPrice: 75000,
      discountPercentage: 35,
      potentialBuyers: [
        {
          id: 'BUY001',
          name: 'Local Market Chain',
          distance: 50,
          bidAmount: 72000
        },
        {
          id: 'BUY002',
          name: 'Food Processor Inc',
          distance: 80,
          bidAmount: 70000
        }
      ],
      timeRemaining: 12
    }
  }
];

const ShipmentPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Truck className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Active Shipments</h3>
              <p className="text-3xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Brain className="h-10 w-10 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">AI Monitoring</h3>
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-500">Confidence</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <AlertTriangle className="h-10 w-10 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Risk Alerts</h3>
              <p className="text-3xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-500">Require Action</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Active Sales</h3>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500">Time-sensitive</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Active Shipments</h2>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                AI Powered
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Smart Routing
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Shipment ID</th>
                <th className="pb-4">Route & Status</th>
                <th className="pb-4">AI Analysis</th>
                <th className="pb-4">Conditions</th>
                <th className="pb-4">Progress</th>
                <th className="pb-4">Action Required</th>
              </tr>
            </thead>
            <tbody>
              {mockShipments.map((shipment) => (
                <tr key={shipment.id} className="border-t border-gray-100">
                  <td className="py-4">
                    <div className="text-sm font-medium">{shipment.id}</div>
                    <div className="text-xs text-gray-500">
                      Last checked: {shipment.lastChecked}
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm font-medium">{shipment.origin}</div>
                    <div className="text-xs text-gray-500">to {shipment.destination}</div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        shipment.status === 'in-transit'
                          ? 'bg-blue-100 text-blue-800'
                          : shipment.status === 'delivered'
                          ? 'bg-green-100 text-green-800'
                          : shipment.status === 'selling'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="text-sm">
                      Risk: {(shipment.aiPredictions.spoilageRisk * 100).toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500">
                      {shipment.aiPredictions.estimatedTimeToSpoilage}h remaining
                    </div>
                    <div className="text-xs text-gray-500">
                      Confidence: {(shipment.aiPredictions.confidence * 100).toFixed(1)}%
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm">{shipment.temperature}°C</div>
                    <div className="text-xs text-gray-500">{shipment.humidity}% RH</div>
                    {shipment.saleInfo && (
                      <div className="text-xs font-medium text-green-600">
                        {shipment.saleInfo.potentialBuyers.length} potential buyers
                      </div>
                    )}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-600 rounded-full"
                          style={{
                            width: `${(shipment.distanceCovered / shipment.totalDistance) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {Math.round((shipment.distanceCovered / shipment.totalDistance) * 100)}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Next: {shipment.nextCheckpoint}
                    </div>
                  </td>
                  <td className="py-4">
                    {shipment.status === 'selling' ? (
                      <button className="px-3 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200">
                        View Offers ({shipment.saleInfo?.potentialBuyers.length})
                      </button>
                    ) : (
                      <button className="px-3 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {shipment.aiPredictions.recommendedAction}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Checkpoint Analysis</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mockShipments[0].checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    checkpoint.status === 'passed'
                      ? 'bg-green-500'
                      : checkpoint.status === 'alert'
                      ? 'bg-red-500'
                      : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{checkpoint.location}</div>
                    <div className="text-xs text-gray-500">
                      {checkpoint.temperature}°C | {checkpoint.humidity}% RH
                    </div>
                    {checkpoint.aiAnalysis && (
                      <div className="text-xs text-gray-500">
                        Quality Score: {checkpoint.aiAnalysis.qualityScore.toFixed(2)}
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {checkpoint.distance}km
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {mockShipments[1].saleInfo && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Active Sale Details</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <div className="text-sm font-medium">Original Price</div>
                <div className="text-2xl font-bold">₹{mockShipments[1].saleInfo.listingPrice}</div>
                <div className="text-sm text-red-600">
                  {mockShipments[1].saleInfo.discountPercentage}% Discount Applied
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium">Time Remaining</div>
                <div className="text-lg font-semibold text-orange-600">
                  {mockShipments[1].saleInfo.timeRemaining} hours
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium">Current Bids</div>
                {mockShipments[1].saleInfo.potentialBuyers.map((buyer) => (
                  <div key={buyer.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{buyer.name}</div>
                      <div className="text-xs text-gray-500">{buyer.distance}km away</div>
                    </div>
                    <div className="text-sm font-bold text-green-600">
                      ₹{buyer.bidAmount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShipmentPanel;
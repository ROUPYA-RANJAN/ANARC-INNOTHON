import React from 'react';
import { BarChart3, Box, Truck, Brain } from 'lucide-react';
import WarehousePanel from './WarehousePanel';
import ShipmentPanel from './ShipmentPanel';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'warehouse' | 'shipment'>('warehouse');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">ColdChain Analytics</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-purple-600">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Cold Chain Management System</h1>
          <p className="mt-1 text-sm text-gray-500">
            AI-driven analytics and real-time monitoring for perishable goods
          </p>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('warehouse')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'warehouse'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Box className="h-5 w-5 mr-2" />
            Warehouse Management
          </button>
          <button
            onClick={() => setActiveTab('shipment')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'shipment'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Truck className="h-5 w-5 mr-2" />
            Shipment Tracking
          </button>
        </div>

        {activeTab === 'warehouse' ? <WarehousePanel /> : <ShipmentPanel />}
      </div>
    </div>
  );
}

export default Dashboard;
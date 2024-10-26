import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Sun, Droplets, Wind, BarChart2, Calendar } from 'lucide-react';

const GrowGreenApp = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const MenuButton = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => setSelectedTab(id)}
      className={`flex items-center p-4 w-full hover:bg-green-50 transition-colors ${
        selectedTab === id ? 'bg-green-50 border-l-4 border-green-600' : ''
      }`}
    >
      <Icon className="w-5 h-5 text-green-600 mr-3" />
      <span className="text-gray-700">{label}</span>
    </button>
  );

  const WeatherCard = ({ icon: Icon, label, value }) => (
    <Card className="bg-white">
      <CardContent className="p-4 flex items-center">
        <Icon className="w-8 h-8 text-green-600 mr-3" />
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-xl font-bold text-gray-800">Grow Green</h1>
          </div>
        </div>
        
        <nav className="flex-1">
          <MenuButton icon={BarChart2} label="Dashboard" id="dashboard" />
          <MenuButton icon={Leaf} label="Crops" id="crops" />
          <MenuButton icon={Calendar} label="Planning" id="planning" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </header>

        <main className="p-6">
          {/* Weather Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Current Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <WeatherCard icon={Sun} label="Temperature" value="24°C" />
                <WeatherCard icon={Droplets} label="Humidity" value="65%" />
                <WeatherCard icon={Wind} label="Wind Speed" value="12 km/h" />
              </div>
            </CardContent>
          </Card>

          {/* Crop Status Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Active Crops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Tomatoes', 'Wheat', 'Corn'].map((crop) => (
                    <div key={crop} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-700">{crop}</span>
                      <span className="text-sm text-green-600">Growing</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Water Tomatoes', 'Check Soil pH', 'Apply Fertilizer'].map((task) => (
                    <div key={task} className="flex items-center p-2 bg-gray-50 rounded">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Harvest - Oct 25', 'Planting - Oct 28', 'Inspection - Oct 30'].map((event) => (
                    <div key={event} className="flex items-center p-2 bg-gray-50 rounded">
                      <Calendar className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-gray-700">{event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GrowGreenApp;

'use client';
import { useState } from 'react';
import { FaUsers, FaRobot, FaClock, FaExclamationTriangle, FaSmile, FaPhoneVolume, FaShieldAlt, FaHeadset, FaExchangeAlt } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const mockData = {
  dailyStats: [
    { date: '2023-07-01', sessions: 120, matchedIntents: 98, fallbacks: 22 },
    { date: '2023-07-02', sessions: 145, matchedIntents: 125, fallbacks: 20 },
    { date: '2023-07-03', sessions: 168, matchedIntents: 150, fallbacks: 18 },
    { date: '2023-07-04', sessions: 189, matchedIntents: 170, fallbacks: 19 },
    { date: '2023-07-05', sessions: 210, matchedIntents: 190, fallbacks: 20 },
  ],
  topIntents: [
    { name: 'Welcome Intent', count: 450 },
    { name: 'Product Inquiry', count: 380 },
    { name: 'Support Request', count: 320 },
    { name: 'Pricing Questions', count: 280 },
    { name: 'Order Status', count: 250 },
  ],
  csatTrends: [
    { date: '2023-07-01', score: 4.2 },
    { date: '2023-07-02', score: 4.5 },
    { date: '2023-07-03', score: 4.3 },
    { date: '2023-07-04', score: 4.6 },
    { date: '2023-07-05', score: 4.7 },
  ],
  transferDistribution: [
    { name: 'Self Served', value: 785 },
    { name: 'Technical Support', value: 120 },
    { name: 'Billing Support', value: 80 },
    { name: 'Sales Team', value: 45 },
  ],
  responseTimes: [
    { time: '0-1s', count: 450 },
    { time: '1-2s', count: 320 },
    { time: '2-3s', count: 180 },
    { time: '3-4s', count: 90 },
    { time: '4s+', count: 40 },
  ],
};

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Total Sessions',
      value: '1,234',
      change: '+12.5%',
      icon: <FaUsers className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: 'Intent Match Rate',
      value: '89.2%',
      change: '+3.1%',
      icon: <FaRobot className="h-6 w-6 text-green-500 dark:text-green-400" />,
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      change: '-0.3s',
      icon: <FaClock className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
    },
    {
      title: 'Fallback Rate',
      value: '10.8%',
      change: '-2.1%',
      icon: <FaExclamationTriangle className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
    },
    {
      title: 'CSAT Score',
      value: '4.5/5',
      change: '+0.2',
      icon: <FaSmile className="h-6 w-6 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Avg Handle Time',
      value: '3m 45s',
      change: '-30s',
      icon: <FaPhoneVolume className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Containment Rate',
      value: '78.5%',
      change: '+5.2%',
      icon: <FaShieldAlt className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      title: 'Transfer Rate',
      value: '21.5%',
      change: '-5.2%',
      icon: <FaExchangeAlt className="h-6 w-6 text-red-500 dark:text-red-400" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="rounded-md border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800 
                     text-gray-900 dark:text-white
                     shadow-sm focus:border-blue-500 focus:ring-blue-500 
                     dark:focus:border-blue-400 dark:focus:ring-blue-400"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">{metric.icon}</div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        {metric.title}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          metric.change.startsWith('+') 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                        }`}>
                          {metric.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Session Trends */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Session Trends</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData.dailyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.375rem',
                      color: '#F3F4F6'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="sessions" stroke="#3B82F6" />
                  <Line type="monotone" dataKey="matchedIntents" stroke="#10B981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Intents */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Top Intents</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.topIntents}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.375rem',
                      color: '#F3F4F6'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="count" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CSAT Trends */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">CSAT Trends</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData.csatTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis domain={[0, 5]} stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.375rem',
                      color: '#F3F4F6'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#10B981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transfer Distribution */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Agent Transfer Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockData.transferDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockData.transferDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.375rem',
                      color: '#F3F4F6'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Response Time Distribution */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Response Time Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.responseTimes}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.375rem',
                      color: '#F3F4F6'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="count" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
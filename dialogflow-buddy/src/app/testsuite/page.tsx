'use client';

import { useState } from 'react';
import { FaPlay, FaPlus, FaTrash, FaEdit, FaFilter, FaTimes, FaHeart } from 'react-icons/fa';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function TestSuite() {
  const [testCases, setTestCases] = useState([
    { id: 1, name: 'Welcome Intent Test', status: 'pending', type: 'intent' },
    { id: 2, name: 'Product Search Flow', status: 'passed', type: 'flow' },
    { id: 3, name: 'Error Handling', status: 'failed', type: 'error' },
    { id: 4, name: 'Small Talk Intent Test', status: 'passed', type: 'intent' },
    { id: 5, name: 'Order Status Intent', status: 'pending', type: 'intent' },
    { id: 6, name: 'Payment Flow Test', status: 'failed', type: 'flow' },
    { id: 7, name: 'Fallback Intent Test', status: 'passed', type: 'intent' },
    { id: 8, name: 'Multi-turn Dialog Test', status: 'pending', type: 'flow' },
    { id: 9, name: 'Entity Extraction Test', status: 'passed', type: 'intent' },
    { id: 10, name: 'Context Management', status: 'failed', type: 'flow' }
  ]);

  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [filter, setFilter] = useState('All Tests');

  const filteredTests = testCases.filter(test => {
    if (filter === 'Failed Tests') return test.status === 'failed';
    if (filter === 'Passed Tests') return test.status === 'passed';
    return true;
  });

  const handleRunAll = () => {
    setShowSponsorModal(true);
  };

  const SponsorModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-gray-800 rounded-xl border border-gray-700 p-6 max-w-md w-full mx-4">
        <button 
          onClick={() => setShowSponsorModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
          <FaTimes className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <FaHeart className="w-12 h-12 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Support Our Project
          </h2>
          <p className="text-gray-300 mb-6">
            Help us improve and maintain this test suite by becoming a sponsor. Your support enables us to add more features and enhance the testing capabilities.
          </p>
          <a
            href="/sponsor"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
                     text-white font-medium transition-all duration-300
                     hover:from-blue-600 hover:to-purple-700 transform hover:scale-105
                     shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Dialogflow Test Suite
        </h1>
        
        {/* Control Panel */}
        <div className="relative group mb-6">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-gray-800/80 p-4 rounded-xl border border-gray-700/50 flex justify-between items-center">
            <div className="flex gap-4">
              <button 
                onClick={handleRunAll}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 
                         text-white font-medium transition-all duration-300 flex items-center gap-2
                         hover:from-green-600 hover:to-emerald-700 transform hover:scale-105
                         shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                <FaPlay className="w-4 h-4" /> Run All Tests
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
                               text-white font-medium transition-all duration-300 flex items-center gap-2
                               hover:from-blue-600 hover:to-purple-700 transform hover:scale-105
                               shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                <FaPlus className="w-4 h-4" /> New Test Case
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select 
                  className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none
                           transition-all duration-300"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option>All Tests</option>
                  <option>Failed Tests</option>
                  <option>Passed Tests</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Test Cases List */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-gray-800/80 rounded-xl border border-gray-700/50">
            <div className="p-4 border-b border-gray-700/50">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Test Cases
              </h2>
            </div>
            <div className="divide-y divide-gray-700/50">
              {filteredTests.map((test) => (
                <div 
                  key={test.id} 
                  className="p-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-3 h-3 rounded-full ${
                      test.status === 'passed' ? 'bg-green-500 shadow-lg shadow-green-500/50' :
                      test.status === 'failed' ? 'bg-red-500 shadow-lg shadow-red-500/50' : 
                      'bg-yellow-500 shadow-lg shadow-yellow-500/50'
                    } animate-pulse`}></span>
                    <div>
                      <span className="font-medium text-gray-200">{test.name}</span>
                      <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-700 text-gray-300">
                        {test.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300">
                      <FaTrash className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleRunAll}
                      className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                               text-blue-400 border border-blue-500/20 transition-all duration-300
                               hover:bg-blue-500/20 hover:border-blue-500/30 transform hover:scale-105">
                      Run
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showSponsorModal && <SponsorModal />}
    </div>
  );
}
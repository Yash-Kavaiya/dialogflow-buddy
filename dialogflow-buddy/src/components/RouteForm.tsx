'use client';
import React, { useState } from 'react';
import axios from 'axios';

const RouteForm: React.FC = () => {
  const [intents, setIntents] = useState('');
  const [routes, setRoutes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/create-routes', { intents: JSON.parse(intents) });
      setRoutes(JSON.stringify(response.data.routes, null, 2));
    } catch (error) {
      setError('Error creating routes. Please check your JSON format.');
      console.error('Error creating routes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Route className="w-8 h-8 mr-3 text-cyan-400" />
            Create Routes
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="intents" className="block text-sm font-medium text-gray-200 mb-2">
                Intents (JSON format)
              </label>
              <div className="relative">
                <textarea
                  id="intents"
                  value={intents}
                  onChange={(e) => setIntents(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 
                    text-gray-100 shadow-inner focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                    sm:text-sm p-4 placeholder-gray-500 transition-all duration-200"
                  rows={10}
                  placeholder='{"intents": [...]}'
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 
                text-gray-900 font-semibold shadow-lg hover:from-cyan-400 hover:to-cyan-300 
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 
                focus:ring-offset-gray-900 transition-all duration-200 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating Routes...
                </span>
              ) : (
                'Generate Routes'
              )}
            </button>
          </form>

          {routes && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Share2 className="w-6 h-6 mr-2 text-cyan-400" />
                Generated Routes
              </h3>
              <pre className="p-4 bg-gray-800/50 rounded-xl overflow-auto whitespace-pre-wrap 
                text-gray-300 border-2 border-gray-700 shadow-inner">
                {routes}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteForm;
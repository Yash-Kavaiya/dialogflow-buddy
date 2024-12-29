"use client";

import { useState } from 'react';
import { SparklesIcon } from 'lucide-react';

interface EntityResult {
  category: string;
  name: string;
  extendable: boolean;
  description: string;
  outputFormat: string;
}

export default function EntitiesPage() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState<EntityResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEntityDetection = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/entities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) throw new Error('Failed to detect entities');
      
      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <main className="relative">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Entity Detection
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Automatically identify entities using OpenAI's GPT model.
            </p>

            <div className="mt-8 max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="relative w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 
                           placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           transition-all duration-300"
                  placeholder="Enter text for entity detection"
                  rows={4}
                />
              </div>

              <button
                onClick={handleEntityDetection}
                disabled={loading || !inputText.trim()}
                className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white font-medium transition-all duration-300
                         hover:from-blue-600 hover:to-purple-700
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:scale-[1.02] active:scale-[0.98]
                         shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Detecting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <SparklesIcon className="w-5 h-5" />
                    Detect Entities
                  </span>
                )}
              </button>
            </div>

            {loading && (
              <p className="text-center mt-4 text-gray-400">
                Processing text...
              </p>
            )}
            
            {error && (
              <p className="text-center mt-4 text-red-400 bg-red-500/10 py-2 px-4 rounded-lg inline-block">
                {error}
              </p>
            )}

            {results.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Detected Entities
                </h2>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20"></div>
                  <div className="relative overflow-x-auto rounded-xl">
                    <table className="w-full">
                      <thead className="bg-gray-800/80">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Extendable
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Output Format
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {results.map((result, idx) => (
                          <tr 
                            key={idx} 
                            className="bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                          >
                            <td className="px-6 py-4 text-sm text-gray-300">
                              {result.category}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-300">
                              {result.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-300">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                result.extendable 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-red-500/20 text-red-400'
                              }`}>
                                {result.extendable ? 'Yes' : 'No'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-300">
                              {result.description}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-300">
                              <code className="px-2 py-1 bg-gray-700/50 rounded-md">
                                {result.outputFormat}
                              </code>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { FaCopy, FaCode, FaCheckCircle, FaDownload, FaLightbulb } from 'react-icons/fa';

interface WebhookFormData {
  description: string;
  platform: string;
  language: string;
}

const sampleWebhooks = [
  {
    description: "Create a webhook that fetches real-time weather data based on the user's city. The webhook should handle different weather conditions and return appropriate responses with temperature, humidity, and weather description.",
    platform: "cloud-functions",
    language: "nodejs"
  },
  {
    description: "Build a webhook that integrates with a ticket booking system. It should check seat availability, handle ticket reservations, and return booking confirmation details including price, seat number, and booking reference.",
    platform: "cloud-run",
    language: "python"
  }
];

const WebhookForm: React.FC = () => {
  const [formData, setFormData] = useState<WebhookFormData>({
    description: '',
    platform: 'cloud-run',
    language: 'nodejs'
  });
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [showExamples, setShowExamples] = useState(false);

  // Keep existing platform and language arrays and all handlers...
  const platforms = [
    { value: 'cloud-run', label: 'Google Cloud Run' },
    { value: 'cloud-functions', label: 'Google Cloud Functions' },
    { value: 'others', label: 'Others' }
  ];

  const languages = [
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'go', label: 'Go' }
  ];

  // Keep all existing handler functions...
  const handleGenerate = async () => {
    if (!formData.description.trim()) {
      setError('Please provide a description of your webhook functionality');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/generate-webhook', formData);
      setGeneratedCode(response.data.code);
    } catch (error) {
      setError('Failed to generate webhook code. Please try again.');
      console.error('Error generating webhook:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedCode) return;
    
    const fileExtension = getFileExtension(formData.language);
    const fileName = `webhook.${fileExtension}`;
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getFileExtension = (language: string): string => {
    const extensions: Record<string, string> = {
      nodejs: 'js',
      python: 'py',
      java: 'java',
      go: 'go'
    };
    return extensions[language] || 'txt';
  };

  const loadExample = (index: number) => {
    setFormData(sampleWebhooks[index]);
    setShowExamples(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700/50 p-8">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 rounded-xl"></div>
        
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Webhook Generator
            </h2>
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="flex items-center px-4 py-2 text-sm text-blue-400 hover:text-blue-300 
                         bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all duration-300"
            >
              <FaLightbulb className="mr-2" />
              View Examples
            </button>
          </div>

          {showExamples && (
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-100">Sample Webhooks</h3>
              <div className="grid gap-4">
                {sampleWebhooks.map((example, index) => (
                  <div 
                    key={index}
                    className="group p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg 
                             hover:border-blue-500/30 hover:bg-gray-700/50 cursor-pointer 
                             transition-all duration-300"
                    onClick={() => loadExample(index)}
                  >
                    <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                      {example.description}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <span className="mr-3">{example.platform}</span>
                      <span>{example.language}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Webhook Description
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="relative w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 
                           placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           transition-all duration-300"
                  rows={4}
                  placeholder="Describe what your webhook should do..."
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-400">
                  {error}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Platform
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  {platforms.map((platform) => (
                    <option key={platform.value} value={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Programming Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                      {language.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full flex items-center justify-center px-6 py-3 rounded-lg
                       bg-gradient-to-r from-blue-500 to-purple-600 
                       text-white font-medium transition-all duration-300
                       hover:from-blue-600 hover:to-purple-700
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transform hover:scale-[1.02] active:scale-[0.98]
                       shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <FaCode className="mr-2" />
                  Generate Webhook
                </>
              )}
            </button>
          </div>

          {generatedCode && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Generated Code
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={handleCopy}
                    className="flex items-center px-3 py-1 text-sm text-blue-400 hover:text-blue-300 
                             bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all duration-300"
                  >
                    {copied ? (
                      <>
                        <FaCheckCircle className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy className="mr-2" />
                        Copy Code
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center px-3 py-1 text-sm text-blue-400 hover:text-blue-300 
                             bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all duration-300"
                  >
                    <FaDownload className="mr-2" />
                    Download Code
                  </button>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <pre className="relative bg-gray-800/80 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-gray-100 whitespace-pre-wrap font-mono">
                    {generatedCode}
                  </code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebhookForm;
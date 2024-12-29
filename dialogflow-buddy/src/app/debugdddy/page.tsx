'use client';

import { useState } from 'react';
import { FaUpload, FaSpinner, FaClock, FaCoins, FaCode, FaRobot, FaTrash, FaInfoCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Dialog } from '@headlessui/react';

interface DebugResult {
  solution: string;
  tokens: {
    prompt: number;
    completion: number;
    total: number;
  };
  timeMs: number;
  model: string;
  confidenceScore?: number;
}

export default function DebugPage() {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DebugResult | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Keep all existing handlers...
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file');
        return;
      }

      const MAX_FILE_SIZE = 10 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        toast.error('Image must be smaller than 10MB');
        return;
      }

      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.onerror = () => toast.error('Failed to read image file');
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text && !file) {
      toast.error('Please provide either text or an image');
      return;
    }
    
    setLoading(true);
    const startTime = Date.now();

    try {
      const formData = new FormData();
      if (file) formData.append('file', file);
      formData.append('text', text);

      const response = await fetch('/api/debug', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Debug request failed');
      }

      const data = await response.json();
      setResult({
        ...data,
        timeMs: Date.now() - startTime,
      });
      toast.success('Debug analysis completed!');
    } catch (error) {
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to process debug request');
    } finally {
      setLoading(false);
    }
  };

  const renderAnalytics = () => {
    if (!result) return null;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          {
            icon: <FaClock className="h-6 w-6 text-blue-400" />,
            title: "Processing Time",
            value: `${(result.timeMs / 1000).toFixed(2)}s`,
            subtitle: `${result.timeMs}ms`
          },
          {
            icon: <FaCoins className="h-6 w-6 text-blue-400" />,
            title: "Tokens Used",
            value: result.tokens.total,
            subtitle: `Prompt: ${result.tokens.prompt} | Response: ${result.tokens.completion}`
          },
          {
            icon: <FaRobot className="h-6 w-6 text-blue-400" />,
            title: "AI Model",
            value: result.model,
            subtitle: "Gemini Pro"
          }
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50
                     transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="relative">
              <div className="mx-auto flex justify-center mb-3">{item.icon}</div>
              <div className="text-sm font-medium text-gray-400">{item.title}</div>
              <div className="text-2xl font-bold text-gray-100">{item.value}</div>
              <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-gray-100">Dialogflow Debugger</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              with Gemini AI
            </span>
          </h1>
          <button
            onClick={() => setIsHelpOpen(true)}
            className="text-gray-400 hover:text-blue-400 transition-colors"
            title="Help"
          >
            <FaInfoCircle className="h-6 w-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700/50">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Describe your Dialogflow issue
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="relative w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 
                             placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all duration-300"
                    rows={6}
                    placeholder="Describe your problem or paste your Dialogflow code here..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Upload Screenshot (optional)
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg 
                              hover:border-blue-500/50 transition-all duration-300 bg-gray-800/50">
                  <div className="space-y-2 text-center">
                    {imagePreview ? (
                      <div className="relative inline-block">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-48 rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setFile(null);
                            setImagePreview(null);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500/80 text-white p-2 rounded-full
                                   hover:bg-red-600 transition-colors"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <FaUpload className="mx-auto h-12 w-12 text-gray-500" />
                        <div className="flex text-sm text-gray-400">
                          <label className="relative cursor-pointer rounded-md font-medium text-blue-400 
                                          hover:text-blue-300 transition-colors">
                            <span>Upload a screenshot</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || (!text && !file)}
                className="w-full flex justify-center items-center px-6 py-3 rounded-lg
                         bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white font-medium transition-all duration-300
                         hover:from-blue-600 hover:to-purple-700
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:scale-[1.02] active:scale-[0.98]
                         shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin h-5 w-5 mr-3" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  'Analyze Issue'
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {result && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700/50">
                {renderAnalytics()}

                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Analysis & Solution
                </h2>
                <div className="prose max-w-none">
                  <div className="bg-gray-800/50 p-6 rounded-lg overflow-auto border border-gray-700/50">
                    <div className="whitespace-pre-wrap text-gray-300">
                      {result.solution}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Dialog */}
      <Dialog
        open={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-xl border border-gray-700/50">
            <Dialog.Title className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              How to Use the Debugger
            </Dialog.Title>
            <div className="space-y-4 text-gray-300">
              <p>The Dialogflow Debugger helps you identify and fix issues in your Dialogflow implementation:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Describe your issue or paste your problematic code in the text area</li>
                <li>Optionally upload a screenshot of your Dialogflow console or error messages</li>
                <li>Click "Analyze Issue" to get AI-powered debugging suggestions</li>
                <li>Review the analysis metrics and detailed solution provided</li>
              </ol>
              <p className="text-sm text-gray-400 mt-4">
                Powered by Google's Gemini AI for accurate and context-aware debugging assistance.
              </p>
            </div>
            <button
              className="mt-6 w-full px-6 py-3 rounded-lg
                       bg-gradient-to-r from-blue-500 to-purple-600 
                       text-white font-medium transition-all duration-300
                       hover:from-blue-600 hover:to-purple-700
                       transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setIsHelpOpen(false)}
            >
              Got it, thanks!
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      
    </div>
  );
}
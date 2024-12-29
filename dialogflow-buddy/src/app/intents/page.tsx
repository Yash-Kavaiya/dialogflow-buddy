import React from 'react';
import IntentForm from '@/components/IntentForm';
import { SparklesIcon } from 'lucide-react';

export default function IntentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container relative mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-4xl font-bold">
              Intent Generator
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-4 text-gray-400 text-lg">
            Create and manage intents for your Dialogflow chatbot with AI assistance
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm flex items-center">
              <SparklesIcon className="w-4 h-4 mr-2" />
              AI-Powered Generation
            </div>
            <div className="px-4 py-1.5 bg-purple-500/10 text-purple-400 rounded-full text-sm">
              Easy Management
            </div>
            <div className="px-4 py-1.5 bg-green-500/10 text-green-400 rounded-full text-sm">
              One-Click Export
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <IntentForm />
        </div>
      </div>
      
    </div>
  );
}
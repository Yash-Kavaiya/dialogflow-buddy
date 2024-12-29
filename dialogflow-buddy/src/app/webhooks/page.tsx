'use client';

import React from 'react';
import WebhookForm from '../../components/WebhookForm';

export default function WebhooksPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Webhook Generator
          </h1>
          <p className="mt-2 text-gray-400">
            Create and customize webhooks for your Dialogflow chatbot with ease
          </p>
        </div>

        {/* Form Component */}
        <WebhookForm />

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>
    </div>
  );
}
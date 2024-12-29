"use client";

import React, { useState } from 'react';
import { Trash2Icon, PlusCircleIcon, DownloadIcon, PencilIcon, CheckIcon, XIcon, SparklesIcon } from 'lucide-react';

interface Intent {
  id: string;
  text: string;
}

interface Example {
  input: string;
  outputs: string[];
}

const exampleIntents: Example[] = [
  {
    input: "I want to book a flight",
    outputs: [
      "Book me a plane ticket",
      "I need to reserve a flight",
      "Help me find flight tickets",
      "Looking for available flights",
      "Can you assist with flight booking"
    ]
  },
  {
    input: "What's the weather like?",
    outputs: [
      "Tell me the weather forecast",
      "Is it going to rain today?",
      "What's the temperature outside",
      "How's the weather looking",
      "Check weather conditions"
    ]
  }
];

const IntentForm = () => {
  const [userInput, setUserInput] = useState('');
  const [intents, setIntents] = useState<Intent[]>([]);
  const [loading, setLoading] = useState(false);
  const [newIntent, setNewIntent] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [showProBanner, setShowProBanner] = useState(false);

  const loadExample = (example: Example) => {
    setUserInput(example.input);
    const exampleIntents = example.outputs.map(text => ({
      id: Math.random().toString(36).substr(2, 9),
      text
    }));
    setIntents(exampleIntents);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/generate_intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();
      const newIntents = data.intents.map((text: string) => ({
        id: Math.random().toString(36).substr(2, 9),
        text
      }));

      if (intents.length + newIntents.length > 10) {
        setShowProBanner(true);
        const allowedNewIntents = newIntents.slice(0, 10 - intents.length);
        setIntents([...intents, ...allowedNewIntents]);
      } else {
        setIntents([...intents, ...newIntents]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddIntent = () => {
    if (newIntent.trim()) {
      setIntents([
        ...intents,
        { id: Math.random().toString(36).substr(2, 9), text: newIntent.trim() }
      ]);
      setNewIntent('');
    }
  };

  const handleRemoveIntent = (id: string) => {
    setIntents(intents.filter(intent => intent.id !== id));
  };

  const startEditing = (intent: Intent) => {
    setEditingId(intent.id);
    setEditText(intent.text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  const saveEdit = (id: string) => {
    if (editText.trim()) {
      setIntents(intents.map(intent =>
        intent.id === id ? { ...intent, text: editText.trim() } : intent
      ));
      setEditingId(null);
      setEditText('');
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Intent'],
      ...intents.map(intent => [intent.text])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'intents.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Examples Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Example Intents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exampleIntents.map((example, index) => (
            <div 
              key={index}
              className="group p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 cursor-pointer
                         hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              onClick={() => loadExample(example)}
            >
              <p className="font-medium mb-2 text-gray-100">
                <SparklesIcon className="inline-block w-4 h-4 mr-2 text-blue-400" />
                "{example.input}"
              </p>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Click to load {example.outputs.length} similar intents
              </p>
            </div>
          ))}
        </div>
      </div>

      {showProBanner && (
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/20">
            <p className="text-gray-100">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Upgrade to Pro!
              </span>
              <span className="ml-2">
                You've reached the free limit of 10 intents. Get the Pro plan for 25+ intents and more features.
              </span>
              <a href="/contact" className="ml-2 text-blue-400 hover:text-blue-300 underline underline-offset-2">
                Learn More →
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="userInput" className="block font-medium text-gray-100">
            Enter your base intent:
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
            <textarea
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="relative w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300
                         placeholder-gray-500 resize-none h-24"
              placeholder="Enter your intent here..."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium
                   hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                   shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <SparklesIcon className="w-5 h-5" />
              Generate Similar Intents
            </span>
          )}
        </button>
      </form>

      <div className="space-y-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={newIntent}
              onChange={(e) => setNewIntent(e.target.value)}
              className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Add custom intent..."
            />
            <button
              onClick={handleAddIntent}
              className="p-3 rounded-xl bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20
                       transition-all duration-300"
            >
              <PlusCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {intents.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Generated Intents
            </h2>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600
                       text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300
                       shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-[1.02]"
            >
              <DownloadIcon className="w-4 h-4" />
              Export CSV
            </button>
          </div>
          
          <div className="space-y-3">
            {intents.map((intent) => (
              <div
                key={intent.id}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
                <div className="relative flex items-center justify-between p-4 bg-gray-800/80 rounded-xl border border-gray-700/50
                              group-hover:border-blue-500/30 transition-all duration-300">
                  {editingId === intent.id ? (
                    <div className="flex-grow flex items-center gap-2">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-grow px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100
                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      />
                      <button
                        onClick={() => saveEdit(intent.id)}
                        className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:text-green-300 hover:bg-green-500/20
                                 transition-all duration-300"
                      >
                        <CheckIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="p-2 rounded-lg bg-gray-500/10 text-gray-400 hover:text-gray-300 hover:bg-gray-500/20
                                 transition-all duration-300"
                      >
                        <XIcon className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="flex-grow text-gray-100">{intent.text}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startEditing(intent)}
                          className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20
                                   transition-all duration-300"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleRemoveIntent(intent.id)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:text-red-300 hover:bg-red-500/20
                                   transition-all duration-300"
                        >
                          <Trash2Icon className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IntentForm;
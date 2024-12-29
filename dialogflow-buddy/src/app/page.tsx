import { FC } from 'react';
import { FaRobot, FaRoute, FaCode, FaCogs, FaProjectDiagram, FaBug, FaChartLine, FaVial, FaInfoCircle } from 'react-icons/fa';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export default function Home() {
  const features: Feature[] = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Intent Generation",
      description: "AI-powered intent generation for your Dialogflow chatbot",
      link: "/intents"
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Entity Detection",
      description: "Automatically identify entities and parameters",
      link: "/entities"
    },
    {
      icon: <FaRoute className="w-6 h-6" />,
      title: "Route Creation",
      description: "Generate conversation flows and routes",
      link: "/routes"
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Webhook Generator",
      description: "Create webhooks and fulfillment code",
      link: "/webhooks"
    },
    {
      icon: <FaProjectDiagram className="w-6 h-6" />,
      title: "Flow Generator",
      description: "Design and generate custom workflow diagrams with an intuitive interface",
      link: "/flowmaker"
    },
    {
      icon: <FaBug className="w-6 h-6" />,
      title: "Debugddy",
      description: "Advanced debugging tool for tracking and resolving application issues",
      link: "/debugdddy"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track and analyze chatbot performance metrics and user interactions",
      link: "/analytics"
    },
    {
      icon: <FaVial className="w-6 h-6" />,
      title: "Test Suite",
      description: "Automated testing tools for validating chatbot responses and conversation flows",
      link: "/test-suite"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 relative">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-4xl">
                Powerful Features
              </h2>
              <div className="group relative inline-block">
                <FaInfoCircle className="inline-block ml-2 mb-1 text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-help" />
                <div className="invisible group-hover:visible absolute z-10 w-64 p-4 bg-gray-800 text-gray-200 text-sm rounded-lg shadow-lg -right-8 top-8">
                  Click on any feature card to explore detailed functionality and documentation
                </div>
              </div>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                Everything you need to build and manage your Dialogflow chatbots effectively
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
              />
              ))}
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10">
          </div>
        </section>
      </main>

      {/* Footer with Proper Spacing */}
      <div className="mt-auto bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}
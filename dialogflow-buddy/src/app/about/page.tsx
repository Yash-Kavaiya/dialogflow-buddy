import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaUsers, FaRobot, FaHandshake } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function About() {
  const missionStatements = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Our Mission",
      description: "We're dedicated to making chatbot development accessible to everyone. Our AI-powered platform simplifies the complex process of creating intelligent conversational interfaces, enabling developers and businesses to focus on what matters most - delivering value to their users."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Who We Serve",
      description: "From individual developers to enterprise teams, we support anyone looking to build sophisticated chatbots. Whether you're new to Dialogflow or an experienced developer, our tools adapt to your skill level and needs."
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Our Technology",
      description: "Leveraging cutting-edge AI and natural language processing, we've created a suite of tools that streamline the chatbot development process. Our platform integrates seamlessly with Dialogflow, providing intelligent suggestions and automated workflows."
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Our Commitment",
      description: "We believe in providing not just tools, but a complete development ecosystem. Our platform is continuously evolving, incorporating user feedback and the latest technological advancements to better serve our community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <main className="flex-grow relative">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Dialogflow Developer Buddy
              </h1>
              <p className="mt-6 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
                Empowering developers to build exceptional conversational experiences
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statements Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {missionStatements.map((statement, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50
                               hover:border-blue-500/30 transition-all duration-300">
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10
                                   text-blue-400 ring-1 ring-blue-500/20 group-hover:ring-blue-500/30 transition-all duration-300">
                      {statement.icon}
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {statement.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                      {statement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 border-t border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Behind the Platform
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
                We're a team of developers, AI specialists, and UX designers passionate about making chatbot development more accessible and efficient.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Chatbot Development?
              </h2>
              <p className="mt-6 text-xl text-gray-300">
                Join thousands of developers who are building better chatbots faster.
              </p>
              <div className="mt-8">
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                           bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white font-medium transition-all duration-300
                           hover:from-blue-600 hover:to-purple-700
                           transform hover:scale-105
                           shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
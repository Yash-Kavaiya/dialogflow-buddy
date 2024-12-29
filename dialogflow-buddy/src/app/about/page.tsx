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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                About Dialogflow Developer Buddy
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Empowering developers to build exceptional conversational experiences
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statements Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {missionStatements.map((statement, index) => (
              <div 
                key={index} 
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg 
                         transition-all duration-200 border border-gray-100 dark:border-gray-700"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 dark:bg-blue-900/30 
                                 text-blue-700 dark:text-blue-300">
                    {statement.icon}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {statement.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {statement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Behind the Platform
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                We're a team of developers, AI specialists, and UX designers passionate about making chatbot development more accessible and efficient.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-700 dark:bg-blue-800 transition-colors">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Ready to Transform Your Chatbot Development?
              </h2>
              <p className="mt-4 text-xl text-blue-100 dark:text-blue-200">
                Join thousands of developers who are building better chatbots faster.
              </p>
              <div className="mt-8">
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent 
                           text-base font-medium rounded-md text-blue-700 dark:text-blue-800 
                           bg-white dark:bg-gray-100 hover:bg-blue-50 dark:hover:bg-gray-200 
                           transition-colors"
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
import Image from "next/image";
import Link from "next/link";
import { 
  FaBrain, 
  FaRocket, 
  FaHandsHelping, 
  FaLaptopCode,
  FaGraduationCap,
  FaHeart,
  FaCalendar,
  FaGlobe 
} from "react-icons/fa";
import Footer from "@/components/Footer";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  email: string;
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function Careers() {
  const companyValues = [
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Innovation First",
      description: "We're pushing the boundaries of AI and chatbot development, creating tools that shape the future of conversation interfaces."
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "We believe in continuous learning and provide resources for our team to expand their skills and expertise."
    },
    {
      icon: <FaHandsHelping className="w-6 h-6" />,
      title: "Collaborative Spirit",
      description: "Our success comes from working together, sharing ideas, and supporting each other's growth."
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Comprehensive Healthcare",
      description: "Full medical, dental, and vision coverage for you and your dependents"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and learning materials"
    },
    {
      icon: <FaCalendar className="w-6 h-6" />,
      title: "Flexible Time Off",
      description: "Unlimited PTO policy with minimum 20 days encouraged annually"
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and home office setup support"
    }
  ];

  const openPositions: JobPosition[] = [
    // ... your existing positions array stays the same
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                Join Our Mission
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Help us revolutionize how developers build conversational experiences
              </p>
            </div>
          </div>
        </div>

        {/* Company Values Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {companyValues.map((value, index) => (
              <div 
                key={index} 
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg 
                         transition-all duration-200 border border-gray-100 dark:border-gray-700"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 dark:bg-blue-900/30 
                                 text-blue-700 dark:text-blue-300">
                    {value.icon}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-700 dark:bg-blue-800 transition-colors">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white text-center mb-12">
              Why Join Us?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-blue-800 dark:bg-blue-900 rounded-lg p-6">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-blue-200">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div 
                key={position.id}
                className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-200 
                         rounded-lg p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {position.department} • {position.location} • {position.type}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Experience: {position.experience}
                      </p>
                    </div>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                      {position.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Requirements:</h4>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      Contact: {position.email}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                    <Link 
                      href={`/careers/apply/${position.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium 
                               rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 
                               dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                               focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-100 dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Don't See the Right Role?
              </h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                We're always looking for talented individuals to join our team.
              </p>
              <div className="mt-8">
                <Link 
                  href="/careers/general-application"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent 
                           text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                           dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                >
                  Send General Application
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
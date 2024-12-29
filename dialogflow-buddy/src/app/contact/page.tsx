import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email - Yash Kavaiya",
      value: "arkavaiya@gmail.com",
      description: "Send me an email for business inquiries or technical support.",
      link: "mailto:arkavaiya@gmail.com"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub - Yash Kavaiya",
      value: "github.com/Yash-Kavaiya",
      description: "Check out our open-source contributions and project repositories.",
      link: "https://github.com/Yash-Kavaiya"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn - Yash Kavaiya",
      value: "linkedin.com/in/yashkavaiya",
      description: "Connect with me professionally on LinkedIn.",
      link: "https://linkedin.com/in/yashkavaiya"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email - Shrutika Shripat",
      value: "shrutika.shripat24@gmail.com",
      description: "Contact Shrutika for technical inquiries and collaboration.",
      link: "mailto:shrutika.shripat24@gmail.com"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub - Shrutika Shripat",
      value: "github.com/shripat213",
      description: "Explore Shrutika's contributions and repositories.",
      link: "https://github.com/shripat213"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn - Shrutika Shripat",
      value: "linkedin.com/in/shrutika-shripat",
      description: "Connect with Shrutika on LinkedIn.",
      link: "https://linkedin.com/in/shrutika-shripat"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <main className="flex-grow relative">
        {/* Contact Header Section */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
                Have questions about Dialogflow Developer Buddy? We're here to help you build better chatbots.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.link}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl
                         border border-gray-700/50 hover:border-blue-500/30
                         transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <span className="rounded-xl inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10
                                 text-blue-400 ring-1 ring-blue-500/20 group-hover:ring-blue-500/30 
                                 transition-all duration-300">
                    {method.icon}
                  </span>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-100 group-hover:text-white transition-colors">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-sm text-blue-400 font-medium">
                      {method.value}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 p-8">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Send us a Message
              </h3>
              <div className="mt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                               text-gray-100 placeholder-gray-500
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                               text-gray-100 placeholder-gray-500
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                               text-gray-100 placeholder-gray-500
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-300"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center px-6 py-3 rounded-lg
                               bg-gradient-to-r from-blue-500 to-purple-600 
                               text-white font-medium transition-all duration-300
                               hover:from-blue-600 hover:to-purple-700
                               transform hover:scale-[1.02] active:scale-[0.98]
                               shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
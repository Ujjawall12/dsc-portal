import { socialLinks } from "../Data/PageData";

export default function AboutUsSocialMedia() {
    
    return (
        <section id="contact" className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2
            group relative overflow-hidden dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <img
                      src={contact.logo}
                      alt={contact.title}
                      className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-xl font-bold dark:text-white">{contact.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contact.description}
                    </p>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${contact.gradient}
            opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
    );
}
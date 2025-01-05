import DOMAIN_DATA from "../Data/DomainData";

export default function AboutUsDomains() {
    return (
    <section id="domains" className="py-16 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Our Domains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOMAIN_DATA.map((domain, index) => (
                <div
                    key={index}
                    className="relative group p-6 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <div className="relative z-10">
                        <div className="text-white p-3 rounded-lg mb-4 w-fit bg-gradient-to-r from-blue-600 to-blue-700 transform group-hover:scale-110 transition-transform duration-300">
                            <domain.icon />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {domain.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {domain.description}
                        </p>
                    </div>
                    <div
                    className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
            </div>
            ))}
        </div>
        </section>
    );
}
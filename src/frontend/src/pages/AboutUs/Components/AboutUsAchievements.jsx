import { achievements } from "../Data/PageData";

export default function AboutUsAchievements() {
    
    return (
        <section id="stats" className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((stat, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2
          group relative overflow-hidden dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex flex-col gap-1">

                  <h3 className="text-3xl font-bold dark:text-white">{stat.count}</h3>
                  <h4 className="text-lg font-semibold dark:text-neutral-300">{stat.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
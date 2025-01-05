import PropTypes from "prop-types";

DomainCard.propTypes = {
  domain: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    gradient: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    projects: PropTypes.number.isRequired,
  }).isRequired,
};

// DomainCard component
function DomainCard({ domain }) {
  const Icon = domain.icon;

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${domain.gradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">{domain.title}</h3>
      </div>

      <p className="text-gray-600 mb-4">{domain.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {domain.skills.map((skill, index) => (
          <span
            key={index}
            className={`text-sm px-3 py-1 rounded-full bg-opacity-10
              ${
                domain.gradient.includes("blue")
                  ? "bg-blue-500 text-blue-700"
                  : domain.gradient.includes("red")
                    ? "bg-red-500 text-red-700"
                    : domain.gradient.includes("green")
                      ? "bg-green-500 text-green-700"
                      : domain.gradient.includes("yellow")
                        ? "bg-yellow-500 text-yellow-700"
                        : domain.gradient.includes("purple")
                          ? "bg-purple-500 text-purple-700"
                          : "bg-indigo-500 text-indigo-700"
              }`}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="font-medium">{domain.projects}</span>
        <span>projects delivered</span>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />
    </div>
  );
}

export default DomainCard;

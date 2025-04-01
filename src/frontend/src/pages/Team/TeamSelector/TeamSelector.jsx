import ProfileCard from "@/components/TeamPage/ProfileCard/ProfileCard";
import { useState } from "react";
import { teamMembers } from "./members";

// const Pagination = ({
//   currentPage,
//   totalItems,
//   itemsPerPage,
//   onPageChange,
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   return (
//     <div className='flex justify-center mt-6'>
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className={`px-4 py-2 mx-1 rounded-lg ${
//           currentPage === 1
//             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             : 'bg-orange-500 text-white'
//         }`}
//       >
//         Previous
//       </button>
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => onPageChange(index + 1)}
//           className={`px-4 py-2 mx-1 rounded-lg ${
//             currentPage === index + 1
//               ? 'bg-orange-500 text-white'
//               : 'bg-white text-black border border-gray-300 hover:bg-gray-200'
//           }`}
//         >
//           {index + 1}
//         </button>
//       ))}
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className={`px-4 py-2 mx-1 rounded-lg ${
//           currentPage === totalPages
//             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             : 'bg-orange-500 text-white'
//         }`}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

function TeamSelector() {
  const [selectedYear, setSelectedYear] = useState(3);
  const [filteredMembers, setFilteredMembers] = useState(
    teamMembers.filter((member) => member.year === 3),
  );

  const availableYears = [...new Set(teamMembers.map((member) => member.year))]
    .sort()
    .reverse();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(1);
  // const [teamMembers, setteamMembers] = useState([]);
  // const itemsPerPage = 10; // Set items per page

  const filterMembersByYear = (year) => {
    setSelectedYear(year);
    setFilteredMembers(teamMembers.filter((member) => member.year === year));
  };

  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen p-8">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-6 animate-fadeInUp relative group">
        <span className="text-neutral-800 dark:text-white">Meet Our</span>{" "}
        <span className="text-orange-500">Team</span>
        {/* <span className='absolute left-0 top-full w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' /> */}
      </h1>

      {/* Category Selector */}
      {/* <div className='flex flex-wrap justify-center gap-4 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-white text-black border border-gray-300 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div> */}
      <div className="flex gap-3 justify-center items-center mb-8">
        {availableYears.map((year) => (
          <button
            key={year}
            onClick={() => filterMembersByYear(year)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedYear === year
                ? "bg-orange-500 text-white"
                : "bg-white text-black border border-neutral-300 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {year === 4
              ? "Final Year"
              : year === 3
                ? "Third Year"
                : year === 2
                  ? "Second Year"
                  : year === 1
                    ? "First Year"
                    : `Year ${year}`}
          </button>
        ))}
      </div>

      {/* Team Members Display */}
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16 mx-10">
        {filteredMembers.map((member, index) => (
          <ProfileCard
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
            github={member.github}
            linkedin={member.linkedin}
            year={member.year}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredMembers.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg mt-6">
          No team members found in this category.
        </p>
      )}

      {/* Pagination Component */}
      {/* {totalItems > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )} */}
    </div>
  );
}

export default TeamSelector;

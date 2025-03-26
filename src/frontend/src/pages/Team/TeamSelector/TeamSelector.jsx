import ProfileCard from '@/components/TeamPage/ProfileCard/ProfileCard';
import { useState } from 'react';

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
const teamMembers = [
  {
      id: 1,
      name: "Raman Bansal",
      position: "Volunteer",
      image: "https://i.ibb.co/4ws9LVGn/prof.png",
      linkedin: "https://www.linkedin.com/in/-raman-bansal",
      year: 1,
      github: "https://github.com/ramanbansal1",
  }
  ,
  {
      id: 2,
      name: "SAURABH CHAUHAN",
      position: "Volunteer",
      image: "https://i.ibb.co/0ygqwzz5/IMG-20230529-164157.jpg",
      linkedin: "https://www.linkedin.com/in/saurabh-chauhan-a96413323/",
      year: 1,
      github: "https://github.com/Saurabh-1785",
  },
  {
      id: 3,
      name: "Prashant Bahuguna",
      position: "Volunteer",
      image: "https://i.ibb.co/LDLjJFQc/IMG-20230223-WA0006.jpg",
      linkedin: "https://www.linkedin.com/in/prashant-bahuguna-45559130b",
      year: 1,
      github: "https://github.com/devprashant19",
  },
  {
      id: 4,
      name: "Prashant Thakur ",
      position: "Volunteer",
      image: "https://i.ibb.co/HT4FN7CM/IMG-20250311-WA0090.jpg",
      linkedin: "https://www.linkedin.com/in/prashant-thakur-046678322/",
      year: 1,
      github: "https://github.com/Prashant-thakur77",
  }, {
      id: 5,
      name: "Lakshay",
      position: "Volunteer",
      image: "https://i.ibb.co/zWKc8tCL/24BCS065.jpg",
      linkedin: "https://www.linkedin.com/in/lakshay-deol-603b532b0/",
      year: 1,
      github: "",
  }, {
      id: 6,
      name: "Abhishika Choudhary",
      position: "Volunteer",
      image: "https://i.ibb.co/DHzr2zw3/mememe.jpg",
      linkedin: "https://www.linkedin.com/in/abhishika-choudhary-85434831b/",
      year: 1,
      github: "https://github.com/ika12345",
  }, {
      id: 7,
      name: "Prasmeta Behera",
      position: "Volunteer",
      image: "https://i.ibb.co/1NbDSg6/IMG-0207.jpg",
      linkedin: "www.linkedin.com/in/prasmeta-behera-11582b2a7",
      year: 1,
      github: "https://github.com/Prasmeta",
  }, {
      id: 8,
      name: "Shravani Vaishnav",
      position: "Volunteer",
      image: "https://i.ibb.co/99rF3VXv/IMG-20250315-WA0013.jpg",
      linkedin: "https://www.linkedin.com/in/shravani-vaishnav-90a8ab304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      year: 1,
      github: "https://github.com/Shravanivaishnav",
  }, {
      id: 9,
      name: "Anshu Kumari",
      position: "Volunteer",
      image: "https://i.ibb.co/9mWZQY6W/img.jpg",
      linkedin: "https://www.linkedin.com/in/anshu-kumari-903948324/",
      year: 1,
      github: "https://github.com/Anshudh",
  }, {
      id: 10,
      name: "Ayush Chauhan",
      position: "Volunteer",
      image: "https://i.ibb.co/WNyBwgMv/DSC-site.jpg",
      linkedin: "https://www.linkedin.com/in/ayush-chauhan-071918353",
      year: 1,
      github: "https://github.com/CoderChaos108",
  }, {
      id: 11,
      name: "Somya Verma",
      position: "Volunteer",
      image: "https://i.ibb.co/gnQGwCP/DSC-SITE.jpg",
      linkedin: "https://www.linkedin.com/in/somya-verma-nith",
      year: 1,
      github: "https://github.com/somya7verma",
  }, {
      id: 12,
      name: "Zulikha Banoo",
      position: "Volunteer",
      image: "https://i.ibb.co/S4n69xfN/20240903-130726.jpg",
      linkedin: "https://www.linkedin.com/in/zulikha-banoo-a636b7328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      year: 1,
      github: "https://github.com/zulikha-star",
  }, {
      id: 13,
      name: "Harsh Bhushan Pathak",
      position: "Volunteer",
      image: "https://i.ibb.co/HL32JpWP/IMG-20250111-WA0080-2.jpg",
      linkedin: "https://www.linkedin.com/in/harsh-bhushan-pathak-91590a312",
      year: 1,
      github: "https://github.com/harshbpathak",
  }, {
      id: 14,
      name: "Anshika Sharma",
      position: "Volunteer",
      image: "https://i.ibb.co/r2GPMJ25/AS.jpg",
      linkedin: "https://www.linkedin.com/in/anshika-sharma-135a47316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      year: 1,
      github: "https://github.com/Anshika17S",
  }, {
      id: 15,
      name: "Chetan",
      position: "Volunteer",
      image: "https://ibb.co/bnLKwqM",
      linkedin: "https://www.linkedin.com/in/chetan-nith-6218b3329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      year: 1,
      github: "https://github.com/chetan208",
  }, {
      id: 16,
      name: "Sarthak",
      position: "Volunteer",
      image: "https://i.ibb.co/Rk14MtB0/24BCS101.jpg",
      linkedin: "https://www.linkedin.com/in/sarthak-sharma-643706285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      year: 1,
      github: "https://github.com/Sarthak9291",
  }, {
      id: 17,
      name: "Puneet Yadav",
      position: "Volunteer",
      image: "https://i.ibb.co/23rsD79X/Puneet.jpg",
      linkedin: "https://github.com/puneetnith28",
      year: 1,
      github: "https://github.com/puneetnith28",
  }, {
      id: 18,
      name: "Jatin Sharma",
      position: "Volunteer",
      image: "https://github.com/Jatin0057",
      linkedin: "https://www.linkedin.com/in/jatin-sharma-b9b91030b",
      year: 1,
      github: "",
  }, {
      id: 19,
      name: "Deep Sharma",
      position: "Volunteer",
      image: "https://i.ibb.co/5xsQhmcB/20240816-121155-2.jpg",
      linkedin: "https://www.linkedin.com/in/deep-sharma-015146348",
      year: 1,
      github: "https://github.com/Deep-Sharma28",
  }, {
      id: 20,
      name: "Pradyuman",
      position: "Volunteer",
      image: "https://i.ibb.co/B2Gz8Gz2/Whats-App-Image-2025-01-29-at-10-36-10-f8b155ec.jpg",
      linkedin: "https://www.linkedin.com/in/pradyuman-sharma-01832631b/",
      year: 1,
      github: "https://github.com/its-me-meax",
  },{
      id: 21,
      name: "Harshit",
      position: "Volunteer",
      image: "https://i.ibb.co/1tkzryGV/24-BCS049.jpg",
      linkedin: "https://www.linkedin.com/in/harshit-b43a60325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      year: 1,
      github: "https://github.com/Harshit82198",
  }
]


function TeamSelector(){
  const [selectedYear, setSelectedYear] = useState(1);
  const [filteredMembers, setFilteredMembers] = useState(
    teamMembers.filter((member) => member.year === 1)
  );

  const availableYears = [...new Set(teamMembers.map(member => member.year))].sort();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(1);
  // const [teamMembers, setteamMembers] = useState([]);
  // const itemsPerPage = 10; // Set items per page

  const filterMembersByYear = (year) => {
    setSelectedYear(year);
    setFilteredMembers(teamMembers.filter((member) => member.year === year));
  }

  return (
    <div className='bg-gray-100 dark:bg-neutral-900 min-h-screen p-8'>
      <h1 className='text-4xl sm:text-6xl font-extrabold text-center mb-6 animate-fadeInUp relative group'>
        <span className='text-neutral-800 dark:text-white'>Meet Our</span>{' '}
        <span className='text-orange-500'>Team</span>
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
      <div className='flex gap-3 justify-center items-center mb-8'>
        {availableYears.map(year => (
          <button 
            key={year}
            onClick={() => filterMembersByYear(year)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedYear === year
                ? "bg-orange-500 text-white"
                : "bg-white text-black border border-neutral-300 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {year === 1 ? 'First Year' : 
             year === 2 ? 'Second Year' :
             year === 3 ? 'Third Year' : 
             year === 4 ? 'Fourth Year' : `Year ${year}`}
          </button>
        ))}
      </div>

      {/* Team Members Display */}
      <div className='grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16 mx-10'>
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
        <p className='text-center text-gray-500 dark:text-gray-400 text-lg mt-6'>
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
};

export default TeamSelector;

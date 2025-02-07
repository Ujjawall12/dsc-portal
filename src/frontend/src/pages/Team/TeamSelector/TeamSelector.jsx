import React, { useEffect, useState } from 'react';
import ProfileCard from '@/components/TeamPage/ProfileCard/ProfileCard';
import MainLayout from '@/Layout/MainLayout';

const categories = [
  'All',
  'Web Team',
  'AI/ML Team',
  'UI/UX Team',
  'Android Team',
];

const validNames = [
  'Alice',
  'Bob',
  'Charlie',
  'Daisy',
  'Evan',
  'Fayla',
  'George',
  'Henry',
  'Ivy',
  'Jack',
  'Kimberly',
  'Liam',
  'Mona',
  'Nina',
  'Oscar',
  'Paul',
  'Quinn',
  'Rita',
  'Sam',
  'Tom',
  'Uma',
  'Vicky',
  'Will',
  'Xander',
  'Yara',
  'Zane',
];

const getRandomName = (gender) => {
  const genderFilter = gender === 'male' ? 'veryShortHair' : 'longHair';
  const facialHair = gender === 'male' ? 'facialHair' : 'noFacialHair';
  const accessories = gender === 'female' ? 'pins' : 'noEarrings';
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${validNames[Math.floor(Math.random() * validNames.length)]}&${genderFilter}&${facialHair}&${accessories}`;
};

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className='flex justify-center mt-6'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 rounded-lg ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-orange-500 text-white'
        }`}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === index + 1
              ? 'bg-orange-500 text-white'
              : 'bg-white text-black border border-gray-300 hover:bg-gray-200'
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 rounded-lg ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-orange-500 text-white'
        }`}
      >
        Next
      </button>
    </div>
  );
};

const TeamSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [teamMembers, setteamMembers] = useState([]);
  const itemsPerPage = 10; // Set items per page

  async function getTeamMembers() {
    const URL = `${process.env.BACKEND_URL}/members?max=${itemsPerPage}&page=${currentPage}`;
    const OPTIONS = {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
      },
    };
    const response = await fetch(URL, OPTIONS);
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.ok && data.success) {
      console.log(data.data);
      setCurrentPage(data.meta.current);
      setTotalItems(data.meta.total); // Update totalItems with the total number of items
      setteamMembers(data.data);
    } else {
      console.log('Error fetching team members');
    }
  }

  useEffect(() => {
    getTeamMembers();
  }, [currentPage, selectedCategory]);

  // const filteredTeamMembers =
  //   selectedCategory === 'All'
  //     ? teamMembers
  //     : teamMembers.filter(
  //         (member) =>
  //           member.category === selectedCategory ||
  //           member.year === selectedCategory
  //       );

  // const paginatedTeamMembers = filteredTeamMembers.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  return (
    <div className='bg-gray-100 dark:bg-neutral-900 min-h-screen p-8'>
      <h1 className='text-4xl sm:text-6xl font-extrabold text-center mb-6 animate-fadeInUp relative group'>
        <span className='text-gray-800 dark:text-white'>Meet Our</span>{' '}
        <span className='text-orange-500'>Team</span>
        <span className='absolute left-0 top-full w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
      </h1>

      {/* Category Selector */}
      <div className='flex flex-wrap justify-center gap-4 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to page 1 when category changes
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
      </div>

      {/* Team Members Display */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            image={member.image || getRandomName(member.gender)}
            name={member.name}
            position={member.position}
            category={member.category}
            year={member.year}
          />
        ))}
      </div>

      {/* No Results Message */}
      {teamMembers.length === 0 && (
        <p className='text-center text-gray-500 dark:text-gray-400 text-lg mt-6'>
          No team members found in this category.
        </p>
      )}

      {/* Pagination Component */}
      {totalItems > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default TeamSelector;

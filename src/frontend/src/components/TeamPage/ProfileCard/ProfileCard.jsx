import { useState } from 'react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const ProfileCard = ({ image, name, position, github, linkedin }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverOrigin, setHoverOrigin] = useState('left'); // Tracks the animation origin

  const handleMouseEnter = (e) => {
    setIsHovered(true);

    // Calculate the cursor's position relative to the card
    const rect = e.currentTarget.getBoundingClientRect();
    const cursorX = e.clientX - rect.left; // Cursor's X position relative to the card
    const cardWidth = rect.width;

    // Determine if the cursor is near the center
    const isFromCenter = Math.abs(cursorX - cardWidth / 2) < cardWidth * 0.2; // Adjust 0.2 for sensitivity
    setHoverOrigin(
      isFromCenter ? 'center' : cursorX < cardWidth / 2 ? 'left' : 'right'
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-700 transition-all duration-500 ${
        isHovered ? 'hover:shadow-md hover:scale-[1.02]' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Image with Hover Animation */}
      <div className='relative h-72  overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover'
          loading='lazy'
        />
        {/* <div
          className={`absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        /> */}
      </div>
      <div className='p-4 pt-2 dark:text-white text-center'>
        <div className='flex flex-col'>
          <h2 className='font-normal text-lg'>
            {name}
          </h2>
          <h3 className='text-neutral-500 dark:text-neutral-300 text-sm'>
            {position}
          </h3>
          <div className='flex items-center justify-center gap-2 mt-2'>
            <a className='cursor-pointer' href={github} target='_blank'>
              <FaGithub className='text-xl text-neutral-700 dark:text-neutral-300'/>
            </a>
            <a className='cursor-pointer' href={linkedin} target='_blank'>
              <FaLinkedin className='text-xl text-neutral-700 dark:text-neutral-300'/>
            </a>
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          } transition-transform duration-500`}
          style={{
            transformOrigin:
              hoverOrigin === 'center'
                ? 'center'
                : hoverOrigin === 'left'
                  ? 'left'
                  : 'right', // Dynamically set transform-origin
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;

import image from 'assets/rasp_one.png';
import cat from 'assets/cat.png';
import PropTypes from 'prop-types';
import Card from '../../../components/Homepage/SectionThree/Card'; // Import the Card component

const cardData = [
  {
    parentClassName:
      'bg-[#f1ecda] sm:col-span-12 sm:row-span-2 lg:col-span-8 lg:row-span-3 flex items-center justify-center',
    contentType: 'image',
    imageSrc: image,
    imageAlt: 'raspberry pi',
    imageClassName: 'w-1/2 lg:w-1/3',
  },
  {
    parentClassName:
      'bg-neutral-900 sm:col-span-5 sm:row-span-6 lg:col-span-4 lg:row-span-4 flex flex-col justify-between px-4 pt-3 pb-6 hover:bg-neutral-800 cursor-grab transition-colors hover:text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 dark:hover:text-white text-neutral-200',
    contentType: 'text',
    heading: '03',
    subheading: 'Core Values',
    text: 'Collaboration, Inclusion, Continuous Learning, and Impactful Solutions. These principles drive every initiative we take as a community',
    headingClassName: 'text-4xl font-Exo font-semibold',
    innerDivClassName: 'flex flex-col gap-3',
    subheadingClassName: 'text-xl font-Exo font-semibold',
    textClassName: 'text-white text-sm font-Exo font-medium',
  },
  {
    parentClassName:
      'bg-neutral-200 sm:col-span-5 sm:row-span-2 sm:col-start-1 sm:row-start-3 lg:row-span-2 lg:col-start-auto lg:row-start-auto flex flex-col justify-between px-6 pt-3 pb-6 hover:bg-neutral-100 cursor-grab transition-colors hover:text-neutral-800 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white dark:hover:text-white text-neutral-800',
    contentType: 'text',
    heading: '01',
    subheading: 'Mission',
    text: 'To inspire and enable students to become changemakers through technical skills, collaboration, and real-world projects that positively impact communities.',
    headingClassName: 'text-4xl font-Exo font-semibold',
    innerDivClassName: 'flex flex-col gap-2',
    subheadingClassName: 'text-xl font-semibold',
    textClassName: 'text-sm font-medium dark:tracking-wide',
  },
  {
    parentClassName:
      'bg-neutral-200 sm:col-span-7 sm:row-span-2 lg:col-span-5 lg:row-span-2 flex flex-col justify-between px-6 pt-3 pb-6 hover:bg-neutral-100 cursor-grab transition-colors hover:text-neutral-800',
    contentType: 'text',
    heading: '02',
    subheading: 'Vision',
    text: 'To build a community of innovative and ethical developers who shape the future of technology by addressing local and global challenges.',
    headingClassName: 'text-4xl font-Exo font-semibold',
    innerDivClassName: 'flex flex-col gap-2',
    subheadingClassName: 'text-xl font-semibold',
    textClassName: 'text-sm font-medium dark:tracking-wide',
  },
  {
    parentClassName:
      'bg-orange-600 sm:col-span-9 sm:row-span-2 lg:col-span-4 lg:row-span-4 lg:col-start-5 lg:row-start-4 lg:row-start-auto row-start-3 flex flex-col justify-between px-4 pt-3 pb-6 hover:bg-orange-500 cursor-grab transition-colors hover:text-white',
    contentType: 'text',
    heading: '150+',
    subheading: 'Countries with Active GDSCs',
    text: 'Our reach extends across universities worldwide, fostering innovation at a global scale.',
    headingClassName: 'text-white text-4xl font-Exo font-semibold',
    innerDivClassName: 'flex flex-col gap-3',
    subheadingClassName: 'text-white text-xl font-Exo font-semibold',
    textClassName: 'text-white text-sm font-Exo font-medium',
  },
  {
    parentClassName:
      'bg-neutral-200 sm:col-span-5 sm:row-span-2 lg:col-start-1 lg:col-span-4 lg:row-span-3 flex flex-col justify-between gap-3 p-4 hover:bg-neutral-100 cursor-grab transition-colors hover:text-neutral-800 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white dark:hover:text-white text-neutral-800',
    contentType: 'text',
    heading: '35+',
    subheading: 'Active Members in Our Chapter',
    text: 'Engaging with a diverse group of students from various disciplines.',
    headingClassName: 'text-3xl font-Exo font-semibold',
    innerDivClassName: 'flex flex-col gap-2',
    subheadingClassName: 'text-xl font-semibold',
    textClassName: 'text-sm font-medium dark:tracking-wide',
  },
  {
    parentClassName:
      'bg-[#6295af] sm:col-span-12 sm:row-span-2 lg:col-span-9 lg:row-span-3 flex items-center justify-center',
    contentType: 'image',
    imageSrc: cat,
    imageAlt: 'cat',
    imageClassName: 'w-1/3',
  },
  {
    link: 'https://www.google.com',
    parentClassName:
      'sm:bg-neutral-200 bg-neutral-200 dark:bg-[#0a66c2] h-32 sm:h-auto sm:w-auto sm:col-span-3 sm:col-start-1 sm:row-start-5 lg:col-span-2 lg:row-span-1 lg:row-start-4 flex items-center justify-center hover:bg-[#0a66c2] dark:bg-slate-600 dark:hover:bg-[#0a66c2] cursor-pointer transition-colors hover:text-neutral-800 group',
    contentType: 'svg',
    svgClassName:
      'stroke-neutral-700 fill-neutral-700 w-12 h-12 group-hover:stroke-white group-hover:fill-white transition-colors dark:fill-white',
    svgContent: (
      <path d='M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z' />
    ),
  },
  {
    link: 'https://www.google.com',
    parentClassName:
      'instagram bg-neutral-200 hidden sm:flex sm:col-span-3 sm:row-start-6 lg:col-span-2 lg:row-span-1 lg:col-start-auto lg:row-start-4 flex items-center justify-center cursor-pointer transition-colors bg-[linear-gradient(45deg,_#405de6,_#5851db,_#833ab4,_#c13584,_#e1306c,_#fd1d1d)] hover:bg-[linear-gradient(45deg,_#405de6,_#5851db,_#833ab4,_#c13584,_#e1306c,_#fd1d1d)] instagram',
    contentType: 'svg',
    svgClassName: 'stroke-neutral-700 fill-white w-12 h-12 transition-colors',
    svgContent: (
      <path d='M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z' />
    ),
  },
];

export default function SectionThree() {
  return (
    <div className='flex flex-col gap-2 sm:gap-4 px-20 min-h-screen items-center'>
      <h1 className='font-sans font-medium text-2xl sm:text-5xl self-center mb-2 text-center dark:text-white'>
        Introducing our
        <br /> Intentions in Focus
      </h1>
      <span className='text-md sm:text-lg font-medium max-w-2xl text-neutral-700 self-center text-center dark:text-neutral-200'>
        Empowering students to grow, collaborate, and innovate through
        technology and community-driven solutions.
      </span>
      <div
        id='grid'
        className='section-three-grid flex flex-col sm:grid grid-cols-17 grid-rows-7 gap-3 flex-1 self-stretch mt-6'
      >
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

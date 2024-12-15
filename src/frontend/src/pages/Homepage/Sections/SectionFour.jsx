import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

BentoLink.propTypes = {
  link: PropTypes.string,
  svg: PropTypes.element,
  parentClassName: PropTypes.string,
  text: PropTypes.string,
  textClassName: PropTypes.string,
};

function BentoLink({
  link = '',
  svg = '',
  parentClassName = '',
  text = '',
  textClassName = '',
}) {
  return (
    <Link
      to={link}
      className={`transition-colors duration-300 relative overflow-hidden group cursor-pointer ${parentClassName}`}
    >
      {svg}
      <span
        className={`text-white font-semibold ltext-xl g:text-3xl ml-2 absolute -bottom-12 left-1/2 transition-transform duration-300 whitespace-nowrap ${textClassName}`}
      >
        {text}
      </span>
    </Link>
  );
}

const list = [
  {
    link: '#home',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        className='size-7 sm:size-10 md:size-12 lg:size-16 fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[80%] transition-transform duration-300'
      >
        <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
        <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
      </svg>
    ),
    parentClassName:
      'bg-blue-500 col-span-1 h-24 lg:h-48 row-span-1 rounded-s-full rounded-tr-full hover:bg-blue-700',
    text: 'Home',
    textClassName: '-translate-x-[58%] group-hover:-translate-y-[260%]',
  },
  {
    link: '/about',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='size-7 sm:size-10 md:size-12 lg:size-16 fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[80%] transition-transform duration-300'
      >
        <path
          fillRule='evenodd'
          d='M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z'
          clipRule='evenodd'
        />
      </svg>
    ),
    parentClassName:
      'bg-red-300 col-span-3 row-span-1 rounded-tl-full rounded-br-full hover:bg-red-500',
    text: 'About',
    textClassName: '-translate-x-[60%] group-hover:-translate-y-[260%]',
  },
  {
    link: '/events',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='size-7 sm:size-10 md:size-12 lg:size-16 fill-white absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[60%] group-hover:-translate-y-[80%] transition-transform duration-300'
      >
        <path d='M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z' />
        <path
          fillRule='evenodd'
          d='M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z'
          clipRule='evenodd'
        />
      </svg>
    ),
    parentClassName:
      'bg-green-500 col-span-1 row-span-1 rounded-bl-full hover:bg-green-700',
    text: 'Events',
    textClassName: '-translate-x-[35%] group-hover:-translate-y-[260%]',
  },
  {
    link: '/resources',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='size-7 sm:size-10 md:size-12 lg:size-16 fill-white absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-1/2 group-hover:-translate-y-[80%] transition-transform duration-300'
      >
        <path d='M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z' />
      </svg>
    ),
    parentClassName:
      'bg-yellow-400 col-span-1 row-span-2 rounded-s-full rounded-br-full',
    text: 'Resources',
    textClassName: '-translate-x-[50%] group-hover:-translate-y-[500%]',
  },
  {
    svg: (
      <>
        <div className='-z-10 bg-violet-400 group-hover:bg-violet-600 h-full w-1/3 rounded-tr-full absolute right-0'></div>
        <div className='-z-10 bg-violet-400 group-hover:bg-violet-600 h-full w-2/3 absolute left-0'></div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='size-7 sm:size-10 md:size-12 lg:size-16 fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[80%] transition-transform duration-300'
        >
          <path d='M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z' />
          <path
            fillRule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z'
            clipRule='evenodd'
          />
        </svg>
      </>
    ),
    link: '/team',
    parentClassName: 'col-span-3 row-span-2',
    text: 'Meet the Team',
    textClassName: '-translate-x-[50%] group-hover:-translate-y-[500%]',
  },
  {
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='size-7 sm:size-10 md:size-12 lg:size-14 fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[80%] transition-transform duration-300'
      >
        <path
          fillRule='evenodd'
          d='M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z'
          clipRule='evenodd'
        />
        <path d='m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z' />
        <path
          fillRule='evenodd'
          d='m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z'
          clipRule='evenodd'
        />
      </svg>
    ),
    link: '/projects',
    parentClassName: 'bg-neutral-800 col-span-1 row-span-2 rounded-tl-full',
    text: 'View Projects',
    textClassName: '-translate-x-[55%] group-hover:-translate-y-[500%]',
  },
];

export default function SectionFour() {
  return (
    <div className='flex flex-col gap-4 min-h-[80vh] md:min-h-screen px-8 items-center'>
      <SectionHeading
        title='Expore Our Website'
        description='Explore the different sections of our website.'
      />
      <div className='grid grid-cols-5 grid-rows-3 m-auto gap-2 w-full'>
        {list.map((item, index) => (
          <BentoLink
            key={index}
            link={item.link}
            svg={item.svg}
            parentClassName={item.parentClassName}
            text={item.text}
            textClassName={item.textClassName}
          />
        ))}
      </div>
    </div>
  );
}

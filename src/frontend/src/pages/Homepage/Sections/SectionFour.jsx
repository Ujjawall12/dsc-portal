import SectionHeading from '@/components/SectionHeading';

export default function SectionFour() {
  return (
    <div className='flex flex-col gap-4 min-h-screen px-8 items-center'>
      <SectionHeading
        title='Expore Our Website'
        description='Explore the different sections of our website.'
      />
      <div className='grid grid-cols-5 grid-rows-3 m-auto gap-2 w-full'>
        <a
          href='#home'
          className='bg-blue-500 col-span-1 h-48 row-span-1 rounded-s-full rounded-tr-full cursor-pointer hover:bg-blue-600 transition-colors relative overflow-hidden group'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='size-16 fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[80%] transition-transform'
          >
            <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
            <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
          </svg>
          <span className='text-white font-semibold text-3xl ml-2 absolute -bottom-12 left-1/2 -translate-x-[55%] group-hover:-translate-y-[260%] transition-transform'>
            Home
          </span>
        </a>
        <div className='bg-red-300 col-span-3 row-span-1 rounded-tl-full rounded-br-full'></div>
        <div className='bg-green-500 col-span-1 row-span-1 rounded-bl-full'></div>
        <div className='bg-yellow-400 col-span-1 row-span-2 rounded-s-full rounded-br-full'></div>
        <div className='col-span-3 row-span-2 bg-clip-content relative'>
          <div className='bg-violet-400 h-full w-1/3 rounded-tr-full absolute right-0'></div>
          <div className='bg-violet-400 h-full w-2/3 absolute left-0'></div>
        </div>
        <div className='bg-neutral-800 col-span-1 row-span-2 rounded-tl-full'></div>
      </div>
    </div>
  );
}

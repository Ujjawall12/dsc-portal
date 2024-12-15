import image from 'assets/Coding.jpg';

export default function SectionThree() {
  return (
    <div className='flex flex-col gap-4 px-12 h-screen'>
      <h1 className='font-sans font-medium text-5xl mb-2 self-center text-center'>
        Introducing our
        <br /> Intentions in Focus
      </h1>
      <span className='text-lg font-medium max-w-2xl text-neutral-700 self-center text-center'>
        Empowering students to grow, collaborate, and innovate through
        technology and community-driven solutions.
      </span>
      <div
        id='grid'
        className='grid grid-cols-9 grid-rows-6 gap-2 flex-1 h-full'
      >
        <div
          id='grid-photo'
          className='col-span-4 row-span-2 rounded-lg h-full overflow-hidden'
        >
          <img src={image} alt='Coding' className='rounded-lg bg-cover' />
        </div>
        <div className='bg-neutral-800 col-span-2 row-span-3 rounded-lg'></div>
        <div className='bg-neutral-300 col-span-3 row-span-2 rounded-lg'></div>
        <div className='bg-neutral-300 col-span-3 row-span-2 col-start-7 rounded-lg'></div>
        <div className='bg-neutral-900 row-start-3 rounded-lg'></div>
        <div className='bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,#d6249f_60%,#285AEB_90%)] row-start-3 rounded-lg'></div>
        <div className='bg-orange-400 row-start-3 row-span-3 col-span-2 rounded-lg'></div>
        <div className='bg-neutral-300 col-span-2 row-span-2 col-start-1 rounded-lg'></div>
      </div>
    </div>
  );
}

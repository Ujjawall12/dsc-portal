import stars from 'assets/stars_two.png';

export default function Footer() {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-4/5 h-64 rounded-xl overflow-hidden relative bg-violet-300 mx-auto translate-y-16 footer-head'>
        <img
          src={stars}
          alt='stars'
          className='w-full mx-auto absolute animate-stars'
        />
      </div>
      <div className='flex flex-row gap-4 min-h-72 bg-blue-200'></div>
    </div>
  );
}

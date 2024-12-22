import CTA_Button from '@/components/CTA_Button';
import TextHighlighter from '@/components/Homepage/TextHighlighter';
import MainLayout from '@/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const history = useNavigate();
  return (
    <MainLayout>
      <section
        className={`flex flex-col w-full min-h-screen dark:bg-neutral-900 bg-white`}
      >
        <div className='flex flex-col justify-center items-center flex-1 px-20 sm:px-24 md:px-48 lg:px-12'>
          <div className='flex flex-col gap-4 items-center'>
            <span
              style={{ lineHeight: '1.5' }}
              className={`font-Exo text-center font-medium text-2xl sm:text-3xl md:text-4xl dark:text-neutral-300 text-neutral-700`}
            >
              Oops!
              <TextHighlighter
                text='Page Not Found'
                className='text-neutral-700 dark:text-neutral-800 bg-yellow-200 dark:bg-yellow-300'
              />
            </span>
            <span className='font-Exo font-normal text-center text-md dark:text-neutral-300 text-neutral-600'>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </span>
            <CTA_Button
              text='Go Back'
              onClick={() => {
                history(-1);
              }}
              className='mt-8'
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFound;

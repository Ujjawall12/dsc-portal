import PropTypes from 'prop-types';

Section.propTypes = {
  children: PropTypes.node,
};

export default function Section({ children }) {
  return (
    <section className='flex flex-col w-full min-h-screen dark:bg-neutral-900 bg-white'>
      {children}
    </section>
  );
}

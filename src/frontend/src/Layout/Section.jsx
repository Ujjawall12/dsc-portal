import PropTypes from 'prop-types';

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default function Section({ children, className = '' }) {
  return (
    <section className={`flex flex-col w-full min-h-screen ${className}`}>
      {children}
    </section>
  );
}

import PropTypes from "prop-types";
import Navbar from "components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen w-screen flex flex-col gap-4 bg-white dark:bg-neutral-900">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

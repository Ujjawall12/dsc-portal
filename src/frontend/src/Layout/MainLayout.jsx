import PropTypes from "prop-types";
import Navbar from "components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen w-screen flex flex-col py-2 gap-4">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

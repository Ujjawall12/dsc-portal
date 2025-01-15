import PropTypes from "prop-types";
import Navbar from "components/Navbar/Navbar";
import Footer from "@/components/Footer";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen w-screen flex flex-col bg-white dark:bg-neutral-900">
      <Navbar />
      <main className="flex-1 flex flex-col gap-20">{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

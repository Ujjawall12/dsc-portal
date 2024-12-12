import MainLayout from "Layout/MainLayout";
import SectionOne from "pages/Homepage/Sections/SectionOne";

function Homepage() {
  const darkMode = true; // This should be dynamically set based on user preference

  return (
    <MainLayout>
      <SectionOne darkMode={darkMode} />
    </MainLayout>
  );
}

export default Homepage;

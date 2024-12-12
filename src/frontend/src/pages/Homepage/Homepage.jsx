import MainLayout from "Layout/MainLayout";
import SectionOne from "pages/Homepage/Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";

function Homepage() {
  return (
    <MainLayout>
      <SectionOne />
      <SectionTwo />
    </MainLayout>
  );
}

export default Homepage;

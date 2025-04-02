import MainLayout from "Layout/MainLayout";
import SectionOne from "pages/Homepage/Sections/SectionOne";
// import SectionTwo from './Sections/SectionTwo';
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";

function Homepage() {
  return (
    <MainLayout>
      <SectionOne />
      {/* <SectionTwo /> */}
      <SectionThree />
      <SectionFour />
    </MainLayout>
  );
}

export default Homepage;

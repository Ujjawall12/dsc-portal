import MainLayout from 'Layout/MainLayout';
import SectionOne from 'pages/Homepage/Sections/SectionOne';
import SectionTwo from './Sections/SectionTwo';
import SectionThree from './Sections/SectionThree';

function Homepage() {
  return (
    <MainLayout>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </MainLayout>
  );
}

export default Homepage;

import MainLayout from "Layout/MainLayout";
import Section from "@/Layout/Section";

import AboutUsFAQSection from "./Components/AboutUsFAQSection";
import AboutUsAchievements from "./Components/AboutUsAchievements";
import AboutUsDomains from "./Components/AboutUsDomains";
import AboutUsHeadingSection from "./Components/AboutUsHeadingSection";
import AboutUsSocialMedia from "./Components/AboutUsSocialMedia";


function AboutUs() {
  return (
    <MainLayout>
      <Section>
        <AboutUsHeadingSection />
        <AboutUsAchievements />
        <AboutUsDomains />
        <AboutUsSocialMedia />
       <AboutUsFAQSection />
      </Section>
    </MainLayout>
  );
}

export default AboutUs;

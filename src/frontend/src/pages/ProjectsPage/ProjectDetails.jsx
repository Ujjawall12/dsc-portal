import MainLayout from "@/Layout/MainLayout";
import Section from "@/Layout/Section";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { slug } = useParams();

  return <MainLayout>
    <Section>
      <div className="dark:text-white px-5">
        Project Details Page: {slug}
      </div>
    </Section>
  </MainLayout>
}

export default ProjectDetails;
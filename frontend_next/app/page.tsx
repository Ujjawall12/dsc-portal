import Footer from "@/components/app/footer";
import SectionOne from "@/components/app/home/sections/section-one";
import Navbar from "@/components/app/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <SectionOne />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

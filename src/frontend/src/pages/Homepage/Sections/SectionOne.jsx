import CTA_Button from "@/components/CTA_Button";
import TextHighlighter from "@/components/Homepage/TextHighlighter";
import Card from "components/Homepage/SectionOne/Card";

function SectionOne() {
  return (
    <section
      className={`flex flex-col w-full min-h-[150vh] md:min-h-[120vh] lg:min-h-[90vh] md:h-screen dark:bg-neutral-900 bg-white`}
    >
      <div className="flex flex-row justify-around items-center basis-1/2 flex-1 overflow-hidden">
        <div className="flex flex-col gap-4 items-center flex-1 flex-shrink-0">
          <div className="flex flex-col gap-4 max-w-[80%] overflow-hidden ">
            <span
              className={`font-Exo leading-relaxed font-medium text-4xl dark:text-neutral-300 text-neutral-700`}
            >
              Empowering
              <TextHighlighter
                text="Developers"
                className="text-neutral-700 dark:text-neutral-800 bg-yellow-200 dark:bg-yellow-300"
              />
              and{" "}
              <TextHighlighter
                text="Innovators"
                className="text-neutral-700 dark:text-neutral-800 bg-blue-200 dark:bg-blue-300 ml-0"
              />
              at National Insitute of Technology,
              <TextHighlighter
                text="Hamirpur"
                className="text-neutral-700 dark:text-neutral-800 bg-red-200 dark:bg-red-300"
              />
            </span>
            <span className="font-Exo font-normal text-md dark:text-neutral-300 text-neutral-600">
              Google Developer Student Clubs are university-based communities
              where students collaborate, learn, and solve real-world problems
              with technology.
            </span>
            <CTA_Button className="lg:hidden mt-8" />
          </div>
        </div>
        <div className="min-h-32 flex-1 flex-shrink-0 justify-center items-center hidden lg:flex"></div>
      </div>
      <div
        className={`grid grid-cols-4 sm:grid-cols-3 lg:flex lg:flex-row dark:bg-neutral-800 bg-neutral-200 p-1 gap-1`}
      >
        <Card className="md:col-start-1 md:col-end-3 hidden lg:flex">
          <CTA_Button />
        </Card>
        <Card className="sm:col-span-1 col-span-2" />
        <Card className="sm:col-span-1 col-span-2" />
        <Card className="sm:col-span-1 col-span-4" />
      </div>
    </section>
  );
}

export default SectionOne;

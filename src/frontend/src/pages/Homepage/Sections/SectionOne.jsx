import Card from "components/Homepage/SectionOne/Card";

function SectionOne() {
  return (
    <section
      className={`flex flex-col w-full h-[150vh] md:h-screen dark:bg-neutral-900 bg-white`}
    >
      <div className="flex flex-row justify-around items-center w-full flex-1">
        <div className="flex flex-col gap-4 items-center">
          <span
            className={`font-Exo font-medium text-3xl dark:text-neutral-300 text-neutral-700`}
          >
            Welcome to the Developers Club
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col md:grid md:grid-cols-4 lg:flex lg:flex-row dark:bg-neutral-800 bg-neutral-200 p-1 gap-1`}
      >
        <Card className="md:col-start-1 md:col-end-3" />
        <Card className="md:col-start-3 md:col-end-5" />
        <Card className="md:col-start-1 md:col-end-5" />
      </div>
    </section>
  );
}

export default SectionOne;

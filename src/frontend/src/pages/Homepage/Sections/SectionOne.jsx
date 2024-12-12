function SectionOne() {
  return (
    <section className="flex flex-col w-full h-screen">
      <div className="flex flex-row justify-around items-center w-full flex-1">
        <div className="flex flex-col gap-4 items-center">
          <span className="font-Exo font-medium text-4xl text-neutral-700">
            Welcome to the Developers Club
          </span>
        </div>
      </div>
      <div className="flex flex-row bg-neutral-200 h-64 p-1 gap-1">
        <div className="flex flex-row gap-2 items-center justify-center flex-1 bg-white rounded-md h-full"></div>
        <div className="flex flex-row gap-2 items-center justify-center flex-1 bg-white rounded-md h-full"></div>
        <div className="flex flex-row gap-2 items-center justify-center flex-1 bg-white rounded-md h-full"></div>
      </div>
    </section>
  );
}

export default SectionOne;

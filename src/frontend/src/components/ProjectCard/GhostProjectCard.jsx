export default function GhostProjectCard() {
  return (
    <div className="flex flex-col md:flex-row h-fit self-stretch rounded-lg bg-neutral-50 dark:bg-neutral-800 shadow-slate-300 dark:shadow-neutral-700 overflow-hidden max-w-xs min-w-xs md:max-w-5xl">
      <div className="relative h-52 md:aspect-square aspect-auto ghost-card"></div>
      <div className="flex flex-col gap-2 p-4 w-full">
        <div className="flex flex-row justify-between">
          <span className="text-sm ghost-card rounded w-1/4 h-4"></span>
          <div className="flex flex-col gap-1 w-1/4">
            <div className="w-full h-1 ghost-card rounded-lg"></div>
            <span className="text-xs ghost-card rounded w-1/2 h-3"></span>
          </div>
        </div>
        <h2 className="mt-4 text-lg ghost-card rounded w-3/4 h-5"></h2>
        <span className="text-sm ghost-card rounded w-full h-3"></span>
        <span className="text-sm ghost-card rounded w-full h-3"></span>
        <button className="btn-primary mt-auto ghost-card rounded h-10"></button>
      </div>
    </div>
  );
}

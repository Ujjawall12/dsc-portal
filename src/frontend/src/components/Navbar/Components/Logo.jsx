export default function Logo() {
  return (
    <div className="flex flex-row items-end gap-2 dark">
      <img className="h-8 dark:invert" src="/knight.png" alt="logo" />
      <span className="font-Exo font-medium text-lg text-neutral-700 dark:text-neutral-300">
        DEVELOPERS CLUB
      </span>
    </div>
  );
}

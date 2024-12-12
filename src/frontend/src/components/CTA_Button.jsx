export default function CTA_Button({ className }) {
  return (
    <button
      className={`bg-black h-12 w-48 text-white font-Tektur tracking-wide rounded-full hover:bg-neutral-900 ${className}`}
    >
      View All Events
    </button>
  );
}

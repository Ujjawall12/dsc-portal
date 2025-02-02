import { FcGoogle } from "react-icons/fc";

function SignInWithGoogle() {
  return (
    <button className="flex gap-2 items-center justify-center rounded-md dark:bg-neutral-700 transition-all hover:opacity-90 duration-200 text-neutral-800 dark:text-white ease-out px-2 py-1.5 border dark:border-neutral-600 w-full">
      <FcGoogle className="w-5 h-5" />
      Sign in with Google
    </button>
  );
}

export default SignInWithGoogle;

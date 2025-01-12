import React from "react";
import { SiLinkedin } from "react-icons/si";

function SignInWithLinkedIn() {
  return (
    <button className="flex gap-2 items-center justify-center rounded-md bg-blue-700 transition-all hover:opacity-90 duration-200 ease-out px-2 py-1.5 border border-blue-600 w-full">
      <SiLinkedin className="w-5 h-5" />
      Sign in with LinkedIn
    </button>
  );
}

export default SignInWithLinkedIn;

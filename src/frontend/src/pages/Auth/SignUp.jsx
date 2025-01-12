import SignInWithGoogle from "@/components/Auth/SigninWithGoogle";
import SignInWithLinkedIn from "@/components/Auth/SigninWithLinkedIn";
import AuthLayout from "@/Layout/AuthLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const inputClasses =
    "px-2 py-1.5 rounded-md w-full bg-neutral-800 border border-neutral-500";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <AuthLayout>
      <div className="h-full w-full max-w-[26rem] text-white flex flex-col justify-center p-5">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Create an account
          </h2>
          <div className="flex items-center gap-1 text-sm">
            <p className="text-neutral-300">Already have an account?</p>
            <Link
              className="text-[#8B5CF6] hover:underline duration-200 ease-out transition-all"
              to="/sign-in"
            >
              Signin
            </Link>
          </div>
        </div>
        <form className="space-y-4 w-full mt-5" onSubmit={handleSubmit}>
          <div>
            <input
              className={inputClasses}
              type="text"
              name="fullName"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              className={inputClasses}
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className={inputClasses}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              className={`${inputClasses} peer pe-9`}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <div
              className="absolute bg-neutral-800 rounded-r-md inset-y-0 end-0 flex items-center border border-l-0 border-neutral-500 justify-center pe-3 text-muted-foreground/80 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
              role="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Eye size={16} strokeWidth={2} aria-hidden="true" />
              )}
            </div>
          </div>
          <div>
            <button className="w-full bg-[#8B5CF6]  hover:bg-[#7C3AED] text-white py-2 rounded-md hover:opacity-90 transition-all duration-200 ease-out">
              Signup
            </button>
          </div>
          <div className="flex items-center gap-3 py-1 w-full">
            <div className="border-b border-neutral-700 flex-1 block"></div>
            <p className="text-neutral-500 text-xs">OR CONTINUE WITH</p>
            <div className="border-b border-neutral-700 flex-1 block"></div>
          </div>
        </form>
        <div className="flex flex-col gap-4 w-full pt-3">
          <SignInWithGoogle />
          <SignInWithLinkedIn />
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignUp;

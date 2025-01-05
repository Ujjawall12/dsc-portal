import React, { useState } from "react";
import AnimatedBackground from "../../components/SignUp/AnimatedBackground.jsx";
import HeroContent from "./HeroContent.jsx";
import Button from "../../components/SignUp/Button.jsx";
import Input from "../../components/SignUp/Input.jsx";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex min-h-screen w-screen">
      {/* Left Section with Animated Background */}
      <div className="hidden lg:flex lg:w-1/2 relative  overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <HeroContent />
      </div>

      {/* Right Section with Form */}
      <div className="flex-1 bg-[#1a1a1a] flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4 sm:px-0">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              {isLogin ? "Log in to your account" : "Create an account"}
            </h2>
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={toggleForm}
                className="text-[#8B5CF6] hover:underline"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
            )}

            <Input type="email" placeholder="Email" />
            <Input
              type="password"
              placeholder="Enter your password"
              showPasswordToggle
            />

            {!isLogin && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2 h-4 w-4 rounded border-[#3a3a3a] bg-[#2a2a2a] text-[#8B5CF6] focus:ring-[#8B5CF6]"
                />
                <label htmlFor="terms" className="text-gray-400 text-sm">
                  I agree to the{" "}
                  <a href="/terms" className="text-[#8B5CF6] hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2 h-4 w-4 rounded border-[#3a3a3a] bg-[#2a2a2a] text-[#8B5CF6] focus:ring-[#8B5CF6]"
                  />
                  <label htmlFor="remember" className="text-gray-400 text-sm">
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-[#8B5CF6] text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <Button type="submit">
              {isLogin ? "Log in" : "Create account"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3a3a3a]" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#1a1a1a] px-2 text-gray-400">
                  Or {isLogin ? "log in" : "register"} with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2 inline-block"
                />
                <span>Google</span>
              </Button>
              <Button>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-5 h-5 mr-2 inline-block"
                />
                <span>Apple</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

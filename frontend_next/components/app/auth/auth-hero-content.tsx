"use client";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
// import logo from "../../assets/logo.png";
import Image from "next/image";

export default function AuthHeroContent() {
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  const [text] = useTypewriter({
    words: ["Developer Students Club"],
    typeSpeed: 70,
    onLoopDone: () => setTypewriterComplete(true),
  });

  return (
    <div className="z-10 w-full h-full flex flex-col px-12">
      <div className="flex items-center gap-3 mb-8 mt-8">
        <Image width={1200} height={900} src={"/assets/logo.png"} alt="Logo" className="h-12 w-12" />
        <span className="text-white text-sm">NIT Hamirpur</span>
      </div>

      <div className="flex-grow flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            {typewriterComplete ? (
              <>
                <span className="text-[#4285F4]">Developer</span>{" "}
                <span className="text-[#DB4437]">Students</span>{" "}
                <span className="text-[#F4B400]">Club</span>
              </>
            ) : (
              <>
                <span className="text-white">{text}</span>
                {/* <Cursor cursorStyle="_" /> */}
              </>
            )}
          </h1>
          <p className="text-white text-lg max-w-md font-medium">
            Join a community of student developers, designers, and innovators.
            Build solutions for real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
}
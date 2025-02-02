import AnimatedBackground from "@/components/app/auth/animated-background";
import AuthHeroContent from "@/components/app/auth/auth-hero-content";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-screen">
      <div className="hidden lg:flex lg:w-1/2 relative  overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <AuthHeroContent />
      </div>
      <div className="flex justify-center items-center flex-1">{children}</div>
    </div>
  );
}

export default AuthLayout;

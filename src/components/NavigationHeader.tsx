import HeaderProfileBtn from "@/app/editor/_components/HeaderProfileBtn";
import { SignedOut } from "@clerk/nextjs";
import { Code, Container, LucideIcon } from "lucide-react";
import Link from "next/link";

// Navigation links data
const navLinks = [
  { href: "/editor", label: "Code", icon: Code },
  { href: "/snippets", label: "Snippets", icon: Container },
];

// NavLink component for consistent styling
function NavLink({ 
  href, 
  label, 
  icon: Icon 
}: { 
  href: string; 
  label: string; 
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="relative group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 
        hover:text-white transition-all duration-300 overflow-hidden"
    >
      {/* Background and border effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary-600/10 rounded-lg transition-opacity duration-300" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
        bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg blur-md transition-opacity duration-300" />
      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left h-[1px] bottom-0 bg-gradient-to-r from-primary-400 to-secondary-400 transition-transform duration-300" />
      
      {/* Icon and text */}
      <Icon className="w-4 h-4 relative z-10 group-hover:text-primary-400 transition-colors duration-300" />
      <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </Link>
  );
}

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Outer glassmorphism container */}
      <div className="glassmorphism-dark border-b border-gray-800/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-16 flex items-center justify-between">
            {/* Left Section: Logo + Links */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group relative">
                {/* Logo glow effect */}
                <div
                  className="absolute -inset-2 rounded-lg opacity-0 
                  group-hover:opacity-100 group-hover:animate-pulse-slow transition-all duration-500 
                  bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl"
                />
                {/* Logo container */}
                <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-dark-100 to-dark-300 
                  ring-1 ring-gray-700/30 shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <Code className="w-5 h-5 text-primary-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                {/* Text */}
                <div className="relative">
                  <span className="block text-lg font-semibold bg-gradient-to-r 
                    from-primary-400 via-blue-300 to-secondary-400 text-transparent bg-clip-text bg-size-200 
                    group-hover:animate-gradient-x">
                    Elif
                  </span>
                  <span className="block text-xs text-primary-400/60 font-medium">
                    Code Beyond Limits!
                  </span>
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map(link => (
                  <NavLink 
                    key={link.href}
                    href={link.href} 
                    label={link.label} 
                    icon={link.icon}
                  />
                ))}
              </nav>
            </div>

            {/* Right Section: Profile and Auth */}
            <div className="flex items-center gap-4">
              <SignedOut>
                {/* You can optionally show a SignIn button or message here */}
              </SignedOut>
              <HeaderProfileBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;

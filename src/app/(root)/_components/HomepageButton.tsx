import { Rocket, Zap } from "lucide-react";
import Link from "next/link";

export default function HomepageButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/editor"
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 
        rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 ${className}`}
    >
      <Zap className="w-5 h-5" />
      <span className="font-medium">Try it now</span>
    </Link>
  );
}
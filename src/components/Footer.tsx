import { Code, Github, Heart, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto pt-10 pb-6 relative">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-gray-300">
              <Code className="size-4 text-primary-400" />
              <span className="font-medium text-sm bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
                Elif - Code Beyond Limits!
              </span>
            </div>
            <p className="text-gray-500 text-xs">
              © {currentYear} Elif. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Site links */}
            <div className="flex items-center gap-6">
              <Link href="/support" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Support
              </Link>
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Terms
              </Link>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </a>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <span>Made with</span>
                <Heart className="size-3 text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

interface LoginButtonProps {
  fullWidth?: boolean;
}

const LoginButton = ({ fullWidth = false }: LoginButtonProps) => {
  return (
    <SignInButton mode="modal">
      <button
        className={`flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-primary-600 to-primary-500 
          hover:from-primary-500 hover:to-primary-400 rounded-xl text-white shadow-inner shadow-white/10 
          hover:shadow-primary-400/20 transition-all duration-200 
          ${fullWidth ? 'w-full' : 'hover:scale-105'}`}
      >
        <LogIn className="w-4 h-4" />
        <span>Login</span>
      </button>
    </SignInButton>
  );
};

export default LoginButton;
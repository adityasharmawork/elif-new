import { Check } from "lucide-react";

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 group">
    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center 
      border border-primary-500/20 group-hover:border-primary-500/50 group-hover:bg-primary-500/20 
      shadow-sm group-hover:shadow-glow transition-all duration-300">
      <Check className="w-3 h-3 text-primary-400" />
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{children}</span>
  </div>
);

export default FeatureItem;
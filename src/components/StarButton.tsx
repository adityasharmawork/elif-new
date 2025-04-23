import { useAuth } from "@clerk/nextjs"
import { Id } from "../../convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Star } from "lucide-react";

function StarButton({snippetId}: {snippetId: Id<"snippets">}) {
    const { isSignedIn } = useAuth();
    const isStarred = useQuery(api.snippets.isSnippetStarred, { snippetId });
    const starCount = useQuery(api.snippets.getSnippetStarCount, { snippetId });
    const star = useMutation(api.snippets.starSnippet);

    const handleStar = async () => {
        if(!isSignedIn) return;
        await star({ snippetId });
    }

    return (
        <button 
            className={`group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all duration-300
            border overflow-hidden
            ${isStarred 
                ? "bg-secondary-500/10 border-secondary-500/30 text-secondary-300 hover:bg-secondary-500/20 hover:shadow-glow" 
                : "bg-gray-800/40 border-gray-700/30 text-gray-300 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-300 hover:shadow-glow"
            }`}
            onClick={handleStar}
        >
            {/* Background effect */}
            <div className={`absolute inset-0 opacity-0 transition-opacity duration-300
                ${isStarred 
                    ? "bg-gradient-to-r from-secondary-500/10 to-secondary-600/10 group-hover:opacity-100" 
                    : "bg-gradient-to-r from-primary-500/10 to-primary-600/10 group-hover:opacity-100"
                }`}
            />

            {/* Star icon */}
            <Star 
                className={`w-4 h-4 relative z-10 transition-all duration-300
                ${isStarred 
                    ? "fill-secondary-400 text-secondary-300" 
                    : "fill-none group-hover:fill-primary-400 text-gray-300 group-hover:text-primary-300"
                }`}
            />

            {/* Star count */}
            <span className={`text-xs font-medium relative z-10 transition-colors duration-300
                ${isStarred 
                    ? "text-secondary-300" 
                    : "text-gray-300 group-hover:text-primary-300"
                }`}>
                {starCount}
            </span>
        </button>
    )
}

export default StarButton
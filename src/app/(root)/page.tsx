// import { currentUser } from "@clerk/nextjs/server"
// import { ConvexHttpClient } from "convex/browser";
import NavigationHeader from "@/components/NavigationHeader";
import { ENTERPRISE_FEATURES, FEATURES } from "./_constants";
import { ExternalLink, Star } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import FeatureCategory from "./_components/FeatureCategory";
import FeatureItem from "./_components/FeatureItem";
import HomepageButton from "./_components/HomepageButton";
import LoginButton from "@/components/LoginButton";

async function LandingPage() {

    // const user = await currentUser();

    // const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

    // const convexUser = await convex.query(api.users.getUser, {
    //     userId: user?.id || ""
    // });

  return (
    <div className="relative min-h-screen selection:bg-primary-500/20 selection:text-primary-100">
      <NavigationHeader />

      {/* main content */}
      <main className="relative pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-28">
            {/* Hero gradient orbs */}
            <div className="absolute top-32 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full filter blur-[120px] opacity-70" />
            <div className="absolute top-40 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-[120px] opacity-70" />
            
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 blur-xl opacity-10 rounded-3xl" />
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r
                from-gray-50 via-gray-200 to-gray-100 text-transparent bg-clip-text mb-8 leading-tight">
                Elevate Your <br />
                Development Experience
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Join the next generation of developers with our professional suite of tools
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <SignedIn>
                <HomepageButton className="glassmorphism-dark hover:shadow-glow px-8 py-3 rounded-lg text-white
                   bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400
                   border border-primary-500/30 transition-all duration-300" />
              </SignedIn>
              <SignedOut>
                {/* <LoginButton className="glassmorphism-dark hover:shadow-glow px-8 py-3 rounded-lg text-white
                   bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400
                   border border-primary-500/30 transition-all duration-300" /> */}
                   <LoginButton />
              </SignedOut>
              
              {/* <a href="#features" className="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-200 hover:text-white
                bg-transparent hover:bg-gray-800/40 border border-gray-700/50 hover:border-primary-500/30
                transition-all duration-300">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {/* Enterprise Features */}
          <div id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
            {ENTERPRISE_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="group relative overflow-hidden glassmorphism-dark rounded-2xl p-6 hover:shadow-glow
                  hover:border-primary-500/30 hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 
                    flex items-center justify-center mb-4 ring-1 ring-gray-700/60 group-hover:ring-primary-500/30
                    shadow-lg group-hover:shadow-glow transition-all duration-300"
                  >
                    <feature.icon className="w-5 h-5 text-primary-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">{feature.label}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/30
              to-secondary-500/30 rounded-2xl blur-md opacity-75" />
              
            <div className="relative glassmorphism-dark rounded-2xl overflow-hidden">
              {/* Border gradients */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r 
                from-transparent via-primary-400/50 to-transparent" />
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r 
                from-transparent via-secondary-400/50 to-transparent" />

              <div className="relative p-8 md:p-12">
                {/* header */}
                <div className="text-center mb-12">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 
                    ring-1 ring-gray-700/60 shadow-glow mb-6">
                    <Star className="w-8 h-8 text-primary-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Lifetime Pro Access for Free
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Unlock the full potential of Elif
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <FeatureCategory label="Development">
                    {FEATURES.development.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>

                  <FeatureCategory label="Collaboration">
                    {FEATURES.collaboration.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>

                  <FeatureCategory label="Productivity">
                    {FEATURES.productivity.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>
                </div>

                {/* CTA */}
                <div className="flex justify-center">

                  <SignedIn>
                    <HomepageButton className="w-full max-w-xs glassmorphism-dark hover:shadow-glow px-6 py-3 rounded-lg text-white
                      bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400
                      border border-primary-500/30 transition-all duration-300 font-medium" />
                  </SignedIn>

                  {/* <SignedOut>
                    <LoginButton className="w-full max-w-xs glassmorphism-dark hover:shadow-glow px-6 py-3 rounded-lg text-white
                      bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400
                      border border-primary-500/30 transition-all duration-300 font-medium" />
                  </SignedOut> */}
                  
                  <SignedOut>
                    {/* <div className="glassmorphism-dark hover:shadow-glow px-8 py-3 rounded-lg text-white
                      bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400
                      border border-primary-500/30 transition-all duration-300"> */}
                        <LoginButton />
                    {/* </div> */}
                </SignedOut>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elif - Code Beyond Limits!",
  description: "Elif is a community-driven code library that allows you to share, discover, and collaborate on code snippets with ease. Join us today and unlock the power of code sharing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}>
          {/* Background with subtle patterns and gradients */}
          <div className="fixed inset-0 bg-dark-400 bg-mesh-pattern z-[-2]" />
          <div className="fixed inset-0 bg-gradient-radial from-primary-600/5 to-transparent z-[-1] opacity-60" />
          
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>

          <Footer/>

          <Toaster 
            position="bottom-right"
            toastOptions={{
              className: 'glassmorphism-dark text-white',
              style: {
                background: 'rgba(15, 17, 23, 0.8)',
                color: '#f9fafb',
                border: '1px solid rgba(99, 102, 241, 0.2)',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}


// https://emkc.org/api/v2/piston/runtimes
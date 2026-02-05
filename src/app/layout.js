import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/scroll";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raja Muhammad Farhan Zahputra",
  description: "Website to know who Raja Muhammad Farhan Zahputra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body
        className={`
          relative min-h-screen 
          bg-indigo-950 
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          ${montserrat.className}
        `}
      >
        <SmoothScroll>
          {/* WRAPPER UTAMA */}
          <div className="relative min-h-screen overflow-hidden">

            {/* BACKGROUND */}
            <ParticlesBackground />

            {/* CONTENT */}
            <div className="relative z-10 bg-indigo-800/10 min-h-screen flex flex-col">
              <Navbar />

              <main className="flex-1 max-w-8xl mx-4 sm:mx-8 md:mx-12 lg:mx-64 mt-8 sm:mt-16 md:mt-24 lg:mt-32 mb-4 sm:mb-8 md:mb-12 lg:mb-16">
                {children}
              </main>

              <Footer />
            </div>

          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}


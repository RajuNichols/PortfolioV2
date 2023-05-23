"use client";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Contact from "../../components/Contact";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import { ThemeProvider } from "next-themes";
import Lottie from "lottie-react";
import animationData from "../../public/loading.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Lottie animationData={animationData} />
        </div>
      ) : (
        <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
}

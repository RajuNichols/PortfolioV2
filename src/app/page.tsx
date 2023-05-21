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
    }, 1500); // 3000 milliseconds (3 seconds) delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount
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
        <ThemeProvider>
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

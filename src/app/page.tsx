"use client"
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Contact from "../../components/Contact";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

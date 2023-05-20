import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Contact from '../../components/Contact'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

import Image from "next/image";
import CurrentSection from "./components/CurrentSection"
import Navbar from "./components/Navbar"
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import { Roboto, DM_Sans, PT_Sans } from '@next/font/google'

const roboto = DM_Sans({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <main className={`" ${roboto.className} flex max-w-screen flex-col bg-gradient-to-r from-[#151414] via-[#282727] to-[#252424] "`}>
      <Navbar/>
      <div className="container mx-auto px-8 py-8 mt-24">
        <CurrentSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

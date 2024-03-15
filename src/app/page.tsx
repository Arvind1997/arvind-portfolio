import Image from "next/image";
import CurrentSection from "./components/CurrentSection"
import Navbar from "./components/Navbar"
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#151414] via-[#282727] to-[#252424] ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 mt-24">
        <CurrentSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}

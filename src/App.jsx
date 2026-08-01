import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolverSection from './components/ProblemSolverSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import FooterSection from './components/FooterSection';

export default function App() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <>
      <Navbar />

      <main>
        {/* Dark — Hero */}
        <HeroSection />

        {/* Torn edge → Paper */}
        <div className="torn-edge torn-edge--to-paper" />
        <ProblemSolverSection />

        {/* Torn edge → Dark */}
        <div className="torn-edge torn-edge--to-dark" />
        <ProjectsSection onOpenModal={setModalProject} />

        {/* Torn edge → Paper */}
        <div className="torn-edge torn-edge--to-paper" />
        <ExperienceSection />

        {/* Torn edge → Dark */}
        <div className="torn-edge torn-edge--to-dark" />
        <SkillsSection />

        {/* Torn edge → Paper */}
        <div className="torn-edge torn-edge--to-paper" />
        <EducationSection />

        {/* Torn edge → Dark */}
        <div className="torn-edge torn-edge--to-dark" />
        <ContactSection />
      </main>

      <FooterSection />

      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </>
  );
}

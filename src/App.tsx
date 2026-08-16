import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { ProjectIndexNav } from './components/layout/ProjectIndexNav';
import { Hero } from './components/hero/Hero';
import { EditorialIntro } from './components/intro/EditorialIntro';
import { TechMatrix } from './components/stack/TechMatrix';
import { SelectedWork } from './components/projects/SelectedWork';
import { HowIBuild } from './components/engineering/HowIBuild';
import { BackendSystems } from './components/engineering/BackendSystems';
import { AIApplied } from './components/engineering/AIApplied';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { ProjectDetailView } from './components/case-study/ProjectDetailView';
import { PROJECTS_DATA } from './data/projectsData';

export const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle URL hash changes for deep linking (e.g. #work/medlens)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('work/')) {
        const pId = hash.replace('work/', '');
        const exists = PROJECTS_DATA.some((p) => p.id === pId);
        if (exists) {
          setActiveProjectId(pId);
          return;
        }
      }
      setActiveProjectId(null);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (activeProjectId) return;

    const sections = ['hero', 'work', 'engineering', 'stack', 'about', 'contact'];

    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sId of sections) {
        const el = document.getElementById(sId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeProjectId]);

  const handleNavigate = (sectionId: string) => {
    if (activeProjectId) {
      setActiveProjectId(null);
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCaseStudy = (projectId: string) => {
    setActiveProjectId(projectId);
    window.location.hash = `work/${projectId}`;
  };

  const handleBackToWork = () => {
    setActiveProjectId(null);
    window.location.hash = '';
    setTimeout(() => {
      const el = document.getElementById('work');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const currentProject = PROJECTS_DATA.find((p) => p.id === activeProjectId);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen selection:bg-[#3B82F6] selection:text-white relative">
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Case study view or Main portfolio view */}
      {currentProject ? (
        <ProjectDetailView
          project={currentProject}
          onBack={handleBackToWork}
          onSelectOtherProject={handleOpenCaseStudy}
        />
      ) : (
        <main>
          {/* Persistent Project Index for quick jumping on desktop */}
          <ProjectIndexNav
            activeProjectId={undefined}
            onSelectProject={(id) => {
              const el = document.getElementById(`project-${id}`);
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 1. Asymmetric Editorial Hero */}
          <Hero onExploreClick={() => handleNavigate('work')} />

          {/* 2. Editorial Approach Intro */}
          <EditorialIntro />

          {/* 3. The 5 Selected Projects */}
          <SelectedWork
            projects={PROJECTS_DATA}
            onOpenCaseStudy={handleOpenCaseStudy}
          />

          {/* 4. Methodology: How I Build */}
          <HowIBuild />

          {/* 5. Backend Architecture: Behind the Interface */}
          <BackendSystems />

          {/* 6. AI, Applied */}
          <AIApplied />

          {/* 7. Structured Technical Matrix */}
          <TechMatrix />

          {/* 8. About & Education */}
          <AboutSection />

          {/* 9. Engineering Contact */}
          <ContactSection />
        </main>
      )}

      {/* Minimal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;

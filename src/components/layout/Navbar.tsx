import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';
import { GITHUB_PROFILE } from '../../data/githubData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenProject?: (projectId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'stack', label: 'Stack' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-7 h-7 rounded border border-white/15 bg-[#141414] flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
            <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
          </div>
          <div>
            <span className="font-semibold tracking-tight text-sm text-[#F5F5F5] block group-hover:text-white">
              ARSHAD AHAMED
            </span>
            <span className="mono-label text-[10px] text-[#A1A1AA] tracking-widest block">
              BACKEND & AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded transition-colors text-xs font-mono tracking-wide ${
                  isActive
                    ? 'text-white bg-white/[0.06] border border-white/10'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          {/* GitHub Profile Link */}
          <a
            href={GITHUB_PROFILE.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/10"
            data-cursor="OPEN REPO"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
          </a>

          {/* Get in Touch CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="ml-2 px-3.5 py-1.5 rounded text-xs font-mono bg-[#1A1A1A] hover:bg-[#242424] text-[#F5F5F5] border border-white/15 hover:border-accent/50 transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span>Get in touch</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A1A1AA] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-[#0A0A0A]/98 backdrop-blur-lg z-40 border-t border-white/10 px-6 py-8 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="mono-label text-[11px] text-[#71717A] mb-4">NAVIGATION</div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-3 px-4 rounded border border-white/5 bg-[#111111] text-sm font-mono text-[#F5F5F5] hover:border-accent/40 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#71717A]">→</span>
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-3 px-4 rounded border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-sm font-mono text-white flex items-center justify-between mt-4"
            >
              <span>Get in touch</span>
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            </button>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href={GITHUB_PROFILE.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 w-full rounded border border-white/10 bg-[#141414] text-xs font-mono text-[#A1A1AA]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/arshad-2311</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="text-center mt-4 text-[11px] font-mono text-[#52525B]">
              ARSHAD AHAMED — 2026
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';
import { GITHUB_PROFILE } from '../../data/githubData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0A0A] py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-semibold tracking-tight text-base text-[#F5F5F5]">
              ARSHAD AHAMED
            </div>
            <p className="text-xs font-mono text-[#A1A1AA] max-w-md leading-relaxed">
              Backend & AI Engineer. Systems underneath. Intelligence within. Software that works.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[11px] font-mono text-[#A1A1AA]">
                ENGINEERING / BUILDING / LEARNING
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="mono-label text-[11px] text-[#71717A]">NAVIGATION</div>
            <ul className="space-y-2 text-xs font-mono text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-white transition-colors"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('engineering')}
                  className="hover:text-white transition-colors"
                >
                  Engineering Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stack')}
                  className="hover:text-white transition-colors"
                >
                  Technical Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About & Background
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-3">
            <div className="mono-label text-[11px] text-[#71717A]">DIRECT CHANNELS</div>
            <ul className="space-y-2 text-xs font-mono text-[#A1A1AA]">
              <li>
                <a
                  href={GITHUB_PROFILE.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:arshadasik.7@gmail.com"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>arshadasik.7@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918667760793"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 8667760793</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#52525B]">
          <div>
            © 2026 Arshad Ahamed. BCA graduate from DG Vaishnav College.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#A1A1AA] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

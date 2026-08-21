import React from 'react';
import { ArrowDown, ArrowUpRight, Database, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';
import { HeroSystemVisual } from './HeroSystemVisual';
import { GITHUB_PROFILE } from '../../data/githubData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-28 px-4 sm:px-8 border-b border-white/[0.08] tech-grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Top Category Label & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-[#D4D4D8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span>BACKEND / AI ENGINEERING</span>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#121212] border border-white/[0.08] text-[10px] sm:text-[11px] font-mono text-[#A1A1AA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>BUILDING / LEARNING</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F5F5] leading-[1.15] break-words">
              I build systems that work behind the interface.
            </h1>

            {/* Sub-line */}
            <div className="text-xs sm:text-base font-mono text-[#3B82F6] font-medium tracking-wide break-words">
              APIs · DATA · COMPUTER VISION · AI APPLICATIONS
            </div>

            {/* Supporting paragraph */}
            <p className="text-sm sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-light">
              I build reliable backend systems and intelligent software — from APIs and databases to practical AI-powered applications that turn complex problems into reliable products.
            </p>

            {/* Technical Metadata Row */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono text-[#71717A]">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] border border-white/[0.06]">
                <Layers className="w-3 h-3 text-[#A1A1AA]" /> Python / FastAPI
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] border border-white/[0.06]">
                <Database className="w-3 h-3 text-[#A1A1AA]" /> SQL / Relational
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] border border-white/[0.06]">
                <Cpu className="w-3 h-3 text-[#A1A1AA]" /> Computer Vision & AI
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreClick}
                className="px-5 py-3 rounded bg-white text-black hover:bg-[#E4E4E7] font-medium text-xs font-mono tracking-wide flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                data-cursor="EXPLORE WORK"
              >
                <span>Explore selected work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <a
                href={GITHUB_PROFILE.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded bg-[#141414] hover:bg-[#1C1C1C] text-[#F5F5F5] border border-white/15 hover:border-white/30 text-xs font-mono tracking-wide flex items-center justify-center gap-2 transition-all"
                data-cursor="OPEN GITHUB"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Canvas */}
          <div className="lg:col-span-5 w-full">
            <HeroSystemVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

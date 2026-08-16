import React, { useState } from 'react';
import { ProjectData } from '../../types';
import { Play, Pause, Mic, ShieldAlert } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

interface CompanionAIShowcaseProps {
  project: ProjectData;
  onOpenCaseStudy: (projectId: string) => void;
}

export const CompanionAIShowcase: React.FC<CompanionAIShowcaseProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSignal, setActiveSignal] = useState<'pace' | 'pauses' | 'fillers' | 'restarts'>('pace');

  return (
    <div id="project-companion-ai" className="border border-white/[0.08] bg-[#0E0E0E] rounded-lg p-6 sm:p-8 transition-all hover:border-white/20">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl font-mono font-bold text-[#A1A1AA]">
            04
          </span>
          <div>
            <div className="mono-label text-[11px] text-[#3B82F6]">
              {project.category} // SPEECH CADENCE & VOCAL AWARENESS
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-[#141414] hover:bg-[#1A1A1A] text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors border border-white/[0.08]"
            data-cursor="OPEN GITHUB"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Source ↗</span>
          </a>

          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="px-3.5 py-1.5 rounded bg-[#1A1A1A] hover:bg-[#242424] text-xs font-mono text-white border border-white/15 hover:border-accent/40 transition-colors"
          >
            <span>Case Study →</span>
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-4">
          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed font-light">
            {project.tagline}
          </p>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            {project.summary}
          </p>

          {/* Key Product Principle */}
          <div className="p-3 bg-[#121212] border border-white/[0.06] rounded text-xs font-mono text-[#A1A1AA] space-y-1">
            <div className="text-white font-medium flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Core Product Philosophy</span>
            </div>
            <div className="text-[11px] text-[#71717A]">
              NO SCORING · NO RANKING · NO JUDGMENT. Focuses purely on reflection and cadence self-awareness.
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#141414] text-[#A1A1AA] text-[11px] font-mono border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dark Audio Signal Visualizer */}
        <div className="lg:col-span-6 border border-white/[0.08] bg-[#0A0A0A] rounded p-4 space-y-4 font-mono text-xs">
          
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#71717A]">
            <div className="flex items-center gap-2">
              <Mic className="w-3 h-3 text-[#3B82F6]" />
              <span>SAMPLE_INTERVIEW_RESPONSE.WAV</span>
            </div>
            <span className="text-[10px] text-[#52525B]">[SIGNAL ANALYZER]</span>
          </div>

          {/* Waveform Canvas Simulation */}
          <div className="p-4 bg-[#111111] rounded border border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-1 bg-white text-black hover:bg-[#E4E4E7] rounded text-[11px] font-medium"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? 'Pause Audio' : 'Play Sample Audio'}</span>
              </button>
              <span className="text-[11px] text-[#71717A]">00:18 / 00:45</span>
            </div>

            {/* Fake Waveform Bars */}
            <div className="flex items-end gap-1 h-14 pt-2">
              {[40, 65, 80, 45, 20, 15, 75, 90, 85, 60, 20, 10, 10, 50, 70, 85, 95, 40, 25, 60, 80, 70, 55, 30, 20].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-300 ${
                    isPlaying
                      ? i === 11 || i === 12
                        ? 'bg-[#F59E0B] opacity-90' // Pause
                        : i === 17
                        ? 'bg-[#F43F5E] opacity-90' // Filler
                        : 'bg-[#3B82F6] opacity-90'
                      : 'bg-white/20'
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between text-[10px] text-[#52525B] pt-1">
              <span>0.0s</span>
              <span className="text-[#F59E0B]">Pause [1.2s]</span>
              <span className="text-[#F43F5E]">Filler &quot;like&quot;</span>
              <span>45.0s</span>
            </div>
          </div>

          {/* Signal Diagnostics Tabs */}
          <div className="grid grid-cols-4 gap-1.5">
            {(['pace', 'pauses', 'fillers', 'restarts'] as const).map((sig) => (
              <button
                key={sig}
                onClick={() => setActiveSignal(sig)}
                className={`py-1.5 px-2 rounded text-[10px] uppercase text-center transition-colors ${
                  activeSignal === sig
                    ? 'bg-[#1F1F1F] text-white border border-[#3B82F6]'
                    : 'bg-[#111111] text-[#71717A] hover:text-white border border-white/[0.04]'
                }`}
              >
                {sig}
              </button>
            ))}
          </div>

          {/* Signal Feedback Box */}
          <div className="p-3 bg-[#111111] rounded border border-white/[0.04] text-[11px] text-[#A1A1AA]">
            {activeSignal === 'pace' && (
              <div>
                <span className="text-white font-medium">Speaking Pace: </span>
                Average 142 WPM. Steady flow across technical explanation with brief deceleration during architectural reasoning.
              </div>
            )}
            {activeSignal === 'pauses' && (
              <div>
                <span className="text-[#F59E0B] font-medium">Hesitation Windows: </span>
                Detected 2 pause intervals (&gt;800ms) at 00:14 and 00:28 preceding database query complexity breakdown.
              </div>
            )}
            {activeSignal === 'fillers' && (
              <div>
                <span className="text-[#F43F5E] font-medium">Filler Occurrences: </span>
                2 instances of &quot;like&quot; and 1 instance of &quot;um&quot; logged during conceptual transition.
              </div>
            )}
            {activeSignal === 'restarts' && (
              <div>
                <span className="text-white font-medium">Sentence Restarts: </span>
                1 phrase restructuring detected at 00:32 without breakdown in coherence.
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

import React, { useEffect } from 'react';
import { ProjectData } from '../../types';
import { ArrowLeft, ArrowUpRight, Code, CheckCircle, AlertTriangle, Lightbulb, Layers } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

interface ProjectDetailViewProps {
  project: ProjectData;
  onBack: () => void;
  onSelectOtherProject?: (projectId: string) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pt-28 pb-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Navigation / Back Button */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-colors border border-white/10"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#141414] hover:bg-[#1A1A1A] text-xs font-mono text-white flex items-center gap-1.5 transition-colors border border-white/[0.08]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Inspect Source ↗</span>
            </a>
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-4">
          <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2">
            <span>PROJECT {project.index}</span>
            <span>//</span>
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-lg text-[#D4D4D8] font-light leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded bg-[#121212] text-xs font-mono text-[#A1A1AA] border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* System Flow Pipeline */}
        <div className="p-6 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-4">
          <div className="mono-label text-xs text-[#71717A] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#3B82F6]" />
            <span>END-TO-END DATA FLOW PIPELINE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
            {project.systemFlow.map((flow) => (
              <div
                key={flow.step}
                className="p-3 bg-[#111111] rounded border border-white/[0.04] space-y-1"
              >
                <div className="text-[10px] text-[#3B82F6] font-bold">
                  STEP {flow.step} // {flow.label}
                </div>
                <p className="text-[11px] text-[#A1A1AA] leading-snug">
                  {flow.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 1. Problem Statement */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">01. The Problem</h2>
          <div className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] text-sm text-[#A1A1AA] leading-relaxed">
            {project.problem}
          </div>
        </div>

        {/* 2. Engineering Approach */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">02. Engineering Approach</h2>
          <div className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] text-sm text-[#A1A1AA] leading-relaxed">
            {project.approach}
          </div>
        </div>

        {/* 3. Key Architecture Notes */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">03. Architecture & System Design</h2>
          <div className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-2.5">
            {project.architectureNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-[#D4D4D8]">
                <span className="text-[#3B82F6] mt-0.5">•</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Verified Code Snippets */}
        {project.keyImplementations.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">04. Key Implementation</h2>
            {project.keyImplementations.map((impl, idx) => (
              <div key={idx} className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-3 font-mono">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#3B82F6]" />
                  <span>{impl.title}</span>
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  {impl.description}
                </p>
                {impl.codeSnippet && (
                  <pre className="p-4 bg-[#080808] rounded text-xs text-[#D4D4D8] overflow-x-auto border border-white/[0.06] leading-relaxed">
                    {impl.codeSnippet}
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 5. Challenges & Trade-offs */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
            <span>05. Technical Challenges & Trade-offs</span>
          </h2>
          <div className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-2.5">
            {project.challenges.map((ch, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA] leading-relaxed">
                <span className="text-[#F59E0B] font-mono mt-0.5">[{idx + 1}]</span>
                <span>{ch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. What Was Learned */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#3B82F6]" />
            <span>06. Engineering Lessons</span>
          </h2>
          <div className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-2.5">
            {project.whatWasLearned.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4D8] leading-relaxed">
                <CheckCircle className="w-3.5 h-3.5 text-[#10B981] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back and Source Footer Links */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 rounded bg-white text-black hover:bg-[#E4E4E7] text-xs font-mono font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </button>

          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#141414] hover:bg-[#1A1A1A] text-xs font-mono text-white flex items-center gap-2 border border-white/10"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
          </a>
        </div>

      </div>
    </div>
  );
};

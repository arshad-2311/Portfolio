import React, { useState } from 'react';
import { ProjectData } from '../../types';
import { ArrowUpRight, Camera, Shield, GraduationCap } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

interface AttendanceShowcaseProps {
  project: ProjectData;
  onOpenCaseStudy: (projectId: string) => void;
}

export const AttendanceShowcase: React.FC<AttendanceShowcaseProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const [activeRole, setActiveRole] = useState<'PROFESSOR' | 'ADMIN' | 'STUDENT'>('PROFESSOR');
  const [matchTolerance, setMatchTolerance] = useState<number>(0.48);

  const mockStudents = [
    { id: 101, name: 'Aarav Patel', rollNo: 'CS2026-01', dist: 0.38, status: 'MATCHED (PRESENT)' },
    { id: 102, name: 'Diya Sharma', rollNo: 'CS2026-04', dist: 0.44, status: 'MATCHED (PRESENT)' },
    { id: 103, name: 'Karan Mehta', rollNo: 'CS2026-09', dist: 0.52, status: matchTolerance >= 0.52 ? 'MATCHED (PRESENT)' : 'BELOW THRESHOLD' },
    { id: 104, name: 'Sneha Roy', rollNo: 'CS2026-15', dist: 0.71, status: 'NO MATCH (ABSENT)' },
  ];

  return (
    <div id="project-attendance" className="border border-white/[0.08] bg-[#0E0E0E] rounded-lg p-5 sm:p-8 transition-all hover:border-white/20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl font-mono font-bold text-[#A1A1AA] flex-shrink-0">
            03
          </span>
          <div>
            <div className="mono-label text-[10px] sm:text-[11px] text-[#3B82F6]">
              {project.category} // DLIB + FASTAPI + MYSQL
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-colors border border-white/10"
              data-cursor="OPEN APP"
            >
              <span>Live App</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}

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

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#141414] text-[#A1A1AA] text-[10px] sm:text-[11px] font-mono border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Biometric Vector Flow & Role Viewer */}
        <div className="lg:col-span-6 border border-white/[0.08] bg-[#0A0A0A] rounded p-3.5 sm:p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-2 text-xs font-mono">
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveRole('PROFESSOR')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                  activeRole === 'PROFESSOR' ? 'bg-[#1F1F1F] text-white' : 'text-[#71717A] hover:text-white'
                }`}
              >
                <Camera className="w-3 h-3 text-[#3B82F6]" />
                <span>Prof Capture</span>
              </button>
              <button
                onClick={() => setActiveRole('ADMIN')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                  activeRole === 'ADMIN' ? 'bg-[#1F1F1F] text-white' : 'text-[#71717A] hover:text-white'
                }`}
              >
                <Shield className="w-3 h-3 text-[#3B82F6]" />
                <span>Admin Portal</span>
              </button>
              <button
                onClick={() => setActiveRole('STUDENT')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                  activeRole === 'STUDENT' ? 'bg-[#1F1F1F] text-white' : 'text-[#71717A] hover:text-white'
                }`}
              >
                <GraduationCap className="w-3 h-3 text-[#3B82F6]" />
                <span>Student View</span>
              </button>
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#52525B]">[SANDBOX]</span>
          </div>

          {activeRole === 'PROFESSOR' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-[#71717A]">
                <span>EUCLIDEAN DISTANCE THRESHOLD: &lt; 0.60</span>
                <span className="text-[#3B82F6]">CURRENT: {matchTolerance.toFixed(2)}</span>
              </div>

              {/* Slider simulation */}
              <input
                type="range"
                min="0.30"
                max="0.65"
                step="0.02"
                value={matchTolerance}
                onChange={(e) => setMatchTolerance(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#222222] rounded appearance-none cursor-pointer accent-[#3B82F6]"
                aria-label="Adjust biometric match threshold"
              />

              {/* Results table */}
              <div className="space-y-1.5 pt-1">
                {mockStudents.map((st) => {
                  const isPresent = st.dist <= matchTolerance;
                  return (
                    <div
                      key={st.id}
                      className="p-2 bg-[#111111] rounded border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-[11px]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{st.name}</span>
                        <span className="text-[9px] sm:text-[10px] text-[#52525B]">({st.rollNo})</span>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-2.5">
                        <span className="text-[#71717A]">dist: {st.dist.toFixed(2)}</span>
                        <span
                          className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            isPresent ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F43F5E]/10 text-[#F43F5E]'
                          }`}
                        >
                          {isPresent ? 'PRESENT' : 'ABSENT'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeRole === 'ADMIN' && (
            <div className="space-y-2 font-mono text-xs text-[#A1A1AA] p-3 bg-[#111111] rounded border border-white/[0.04]">
              <div className="text-white font-medium flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Department & Batch CSV Enrollment</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#71717A] leading-relaxed">
                Admin extracts single-face portraits from batch zip uploads, generates 128-d floating point arrays using dlib, and seeds MySQL <code className="text-[#D4D4D8]">attendance_db</code>.
              </div>
            </div>
          )}

          {activeRole === 'STUDENT' && (
            <div className="space-y-2 font-mono text-xs text-[#A1A1AA] p-3 bg-[#111111] rounded border border-white/[0.04]">
              <div className="flex justify-between items-center text-white">
                <span>Semester Attendance Rate:</span>
                <span className="text-[#10B981] font-bold text-sm">92.4%</span>
              </div>
              <div className="w-full bg-[#222222] h-1.5 rounded overflow-hidden">
                <div className="bg-[#10B981] h-full w-[92.4%]" />
              </div>
              <div className="text-[10px] text-[#52525B] pt-1">
                Total Classes: 48 · Attended: 44 · Verified via SAS Facial Logs
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

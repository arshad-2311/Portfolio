import React from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';

interface ProjectIndexNavProps {
  activeProjectId?: string;
  onSelectProject: (projectId: string) => void;
}

export const ProjectIndexNav: React.FC<ProjectIndexNavProps> = ({
  activeProjectId,
  onSelectProject,
}) => {
  return (
    <aside className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-[#0D0D0D]/90 backdrop-blur-md border border-white/[0.08] rounded-md p-3.5 shadow-2xl">
        <div className="mono-label text-[9px] text-[#71717A] mb-3 px-1">
          PROJECT INDEX
        </div>
        <div className="space-y-1">
          {PROJECTS_DATA.map((proj) => {
            const isActive = activeProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded transition-all text-xs font-mono flex items-center justify-between gap-3 group ${
                  isActive
                    ? 'bg-white/10 text-white border-l-2 border-[#3B82F6]'
                    : 'text-[#71717A] hover:text-[#A1A1AA] hover:bg-white/[0.03]'
                }`}
              >
                <span className="text-[10px] text-[#52525B] group-hover:text-[#71717A]">
                  {proj.index}
                </span>
                <span className="truncate text-[11px] font-medium tracking-wide">
                  {proj.title.toUpperCase()}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isActive ? 'bg-[#3B82F6]' : 'bg-transparent'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

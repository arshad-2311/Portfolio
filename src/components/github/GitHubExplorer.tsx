import React from 'react';
import { GITHUB_PROFILE } from '../../data/githubData';
import { ArrowUpRight, GitCommit, Code2, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

export const GitHubExplorer: React.FC = () => {
  return (
    <section id="github" className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>07 / OPEN SOURCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              The code is public.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={GITHUB_PROFILE.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-white text-black hover:bg-[#E4E4E7] text-xs font-mono font-medium flex items-center gap-2 transition-colors shadow-sm"
              data-cursor="OPEN GITHUB"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/arshad-2311</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Language Breakdown Bar */}
        <div className="p-4 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs text-[#71717A]">
            <span className="flex items-center gap-2 text-white">
              <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>LANGUAGE DISTRIBUTION (VERIFIED REPOSITORIES)</span>
            </span>
            <span className="text-[10px] text-[#52525B]">5 PUBLIC PROJECTS</span>
          </div>

          <div className="flex h-2 w-full rounded overflow-hidden bg-[#222222]">
            <div style={{ width: '45%' }} className="bg-[#3178C6]" title="TypeScript 45%" />
            <div style={{ width: '35%' }} className="bg-[#3572A5]" title="Python 35%" />
            <div style={{ width: '12%' }} className="bg-[#F7DF1E]" title="JavaScript 12%" />
            <div style={{ width: '8%' }} className="bg-[#0C344B]" title="Prisma / SQL 8%" />
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] text-[#A1A1AA] pt-1">
            {GITHUB_PROFILE.languages.map((l) => (
              <span key={l.name} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-white">{l.name}</span>
                <span className="text-[#52525B]">({l.percentage})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono">
          {GITHUB_PROFILE.repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] hover:border-[#3B82F6]/60 hover:bg-[#121212] transition-all flex flex-col justify-between space-y-4 group"
              data-cursor="INSPECT REPO"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white font-semibold group-hover:text-[#3B82F6] transition-colors truncate">
                    <FolderGit2 className="w-4 h-4 text-[#71717A] flex-shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#52525B] group-hover:text-white transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-2">
                <div className="flex flex-wrap gap-1">
                  {repo.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded bg-[#161616] text-[10px] text-[#71717A]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#52525B] pt-1">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="text-[#A1A1AA]">{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <GitCommit className="w-3 h-3 text-[#71717A]" />
                    <span>{repo.commits} commits</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

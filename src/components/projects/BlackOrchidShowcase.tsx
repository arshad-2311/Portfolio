import React, { useState } from 'react';
import { ProjectData } from '../../types';
import { ArrowUpRight, Radio, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

interface BlackOrchidShowcaseProps {
  project: ProjectData;
  onOpenCaseStudy: (projectId: string) => void;
}

export const BlackOrchidShowcase: React.FC<BlackOrchidShowcaseProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'websocket-sim' | 'schema'>('architecture');
  const [selectedTable, setSelectedTable] = useState<number>(4);
  const [tableStatus, setTableStatus] = useState<Record<number, 'OCCUPIED' | 'AVAILABLE' | 'RESERVED'>>({
    1: 'AVAILABLE',
    2: 'OCCUPIED',
    3: 'AVAILABLE',
    4: 'RESERVED',
    5: 'AVAILABLE',
    6: 'OCCUPIED',
  });

  const toggleTableStatus = (tblId: number) => {
    const nextStatus =
      tableStatus[tblId] === 'AVAILABLE'
        ? 'RESERVED'
        : tableStatus[tblId] === 'RESERVED'
        ? 'OCCUPIED'
        : 'AVAILABLE';
    setTableStatus((prev) => ({ ...prev, [tblId]: nextStatus }));
    setSelectedTable(tblId);
  };

  return (
    <div id="project-black-orchid" className="border border-white/[0.08] bg-[#0E0E0E] rounded-lg p-5 sm:p-8 transition-all hover:border-white/20">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl font-mono font-bold text-[#A1A1AA] flex-shrink-0">
            02
          </span>
          <div>
            <div className="mono-label text-[10px] sm:text-[11px] text-[#3B82F6]">
              {project.category} // 78 COMMITS
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
              <span>Live Site</span>
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

      {/* Main Content */}
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

        {/* Tab Switcher & Preview Window */}
        <div className="lg:col-span-6 border border-white/[0.08] bg-[#0A0A0A] rounded p-3.5 sm:p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-2 text-xs font-mono">
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === 'architecture' ? 'bg-[#1F1F1F] text-white' : 'text-[#71717A] hover:text-white'
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab('websocket-sim')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === 'websocket-sim' ? 'bg-[#1F1F1F] text-white' : 'text-[#71717A] hover:text-white'
                }`}
              >
                WebSocket Sync
              </button>
              <button
                onClick={() => setActiveTab('schema')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  activeTab === 'schema' ? 'bg-[#1F1F1F] text-white' : 'text-[#71717A] hover:text-white'
                }`}
              >
                Prisma Schema
              </button>
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#52525B]">NEXT.JS APP ROUTER</span>
          </div>

          {activeTab === 'architecture' && (
            <div className="space-y-3 font-mono text-xs text-[#A1A1AA]">
              <div className="p-3 bg-[#111111] rounded border border-white/[0.06] space-y-2">
                <div className="text-white font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                  <span>Production Topology</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#71717A] space-y-1 leading-relaxed">
                  <div>1. Caddy reverse-proxy receives incoming client requests with TLS 1.3.</div>
                  <div>2. Next.js server pre-renders dynamic catalog & dining zones via SSR.</div>
                  <div>3. Prisma ORM queries relational Postgres instances for reservations.</div>
                  <div>4. WebSocket worker maintains connection pool for real-time table sync.</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'websocket-sim' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-[#71717A]">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-[#3B82F6] animate-pulse flex-shrink-0" />
                  <span>CLICK TABLE TO TRIGGER WEBSOCKET BROADCAST:</span>
                </span>
                <span className="text-[9px] text-[#52525B]">[SANDBOX]</span>
              </div>

              {/* Table Grid (2 columns on mobile, 3 on sm+) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((tbl) => {
                  const status = tableStatus[tbl];
                  return (
                    <button
                      key={tbl}
                      onClick={() => toggleTableStatus(tbl)}
                      className={`p-2 sm:p-2.5 rounded border text-left transition-all ${
                        selectedTable === tbl
                          ? 'border-[#3B82F6] bg-[#161616]'
                          : 'border-white/[0.06] bg-[#111111] hover:border-white/20'
                      }`}
                    >
                      <div className="text-[11px] text-white font-semibold">Table #{tbl}</div>
                      <div
                        className={`text-[10px] ${
                          status === 'AVAILABLE'
                            ? 'text-[#10B981]'
                            : status === 'OCCUPIED'
                            ? 'text-[#F43F5E]'
                            : 'text-[#F59E0B]'
                        }`}
                      >
                        {status}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Emitted WS Payload */}
              <div className="p-2.5 bg-[#111111] rounded text-[10px] text-[#A1A1AA] border border-white/[0.04] break-all leading-relaxed">
                <span className="text-[#3B82F6]">WS_EVENT // </span>
                {JSON.stringify({
                  event: 'TABLE_STATUS_CHANGED',
                  tableId: selectedTable,
                  status: tableStatus[selectedTable],
                  broadcastTime: new Date().toISOString()
                })}
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <pre className="p-3 bg-[#111111] rounded text-[10px] sm:text-[11px] font-mono text-[#D4D4D8] overflow-x-auto border border-white/[0.04]">
{`model Table {
  id          Int          @id @default(autoincrement())
  tableNumber Int          @unique
  capacity    Int          @default(4)
  status      TableStatus  @default(AVAILABLE)
  orders      Order[]
  createdAt   DateTime     @default(now())
}`}
            </pre>
          )}
        </div>
      </div>

    </div>
  );
};

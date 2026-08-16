import React, { useState } from 'react';
import { ProjectData } from '../../types';
import { API_EXPLORER_ENDPOINTS } from '../../data/projectsData';
import { Terminal, Play } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

interface AppointmentAPIShowcaseProps {
  project: ProjectData;
  onOpenCaseStudy: (projectId: string) => void;
}

export const AppointmentAPIShowcase: React.FC<AppointmentAPIShowcaseProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [customPayload, setCustomPayload] = useState<string>(
    API_EXPLORER_ENDPOINTS[0].defaultPayload || ''
  );
  const [activeResponse, setActiveResponse] = useState<any>(
    API_EXPLORER_ENDPOINTS[0].mockResponse
  );
  const [isExecuting, setIsExecuting] = useState(false);

  const handleSelectEndpoint = (index: number) => {
    setSelectedEndpointIndex(index);
    const ep = API_EXPLORER_ENDPOINTS[index];
    setCustomPayload(ep.defaultPayload || '');
    setActiveResponse(ep.mockResponse);
  };

  const handleSendRequest = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      const ep = API_EXPLORER_ENDPOINTS[selectedEndpointIndex];
      setActiveResponse(ep.mockResponse);
    }, 180);
  };

  const currentEp = API_EXPLORER_ENDPOINTS[selectedEndpointIndex];

  return (
    <div id="project-appointment-api" className="border border-white/[0.08] bg-[#0E0E0E] rounded-lg p-6 sm:p-8 transition-all hover:border-white/20">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl font-mono font-bold text-[#A1A1AA]">
            05
          </span>
          <div>
            <div className="mono-label text-[11px] text-[#3B82F6]">
              {project.category} // FOUNDATIONS & SCHEMA MODELING
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
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed font-light">
            {project.tagline}
          </p>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            {project.summary}
          </p>

          <div className="p-3 bg-[#111111] border border-white/[0.06] rounded text-xs font-mono text-[#71717A] space-y-1.5">
            <div className="text-white font-medium flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Architectural Layers</span>
            </div>
            <div className="text-[11px] leading-relaxed">
              Client → FastAPI Routing → Pydantic Request Validation → SQLAlchemy ORM Layer → SQLite/MySQL Database Engine.
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

        {/* Live Interactive API Explorer */}
        <div className="lg:col-span-7 border border-white/[0.08] bg-[#0A0A0A] rounded p-4 space-y-4 font-mono text-xs">
          
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="mono-label text-xs text-[#F5F5F5]">FASTAPI INTERACTIVE API EXPLORER</span>
            </div>
            <span className="text-[10px] text-[#71717A] bg-[#141414] px-2 py-0.5 rounded border border-white/[0.06]">
              [MOCK REQUEST — FRONTEND EVALUATION SANDBOX]
            </span>
          </div>

          {/* Endpoints Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {API_EXPLORER_ENDPOINTS.map((ep, idx) => {
              const isSelected = selectedEndpointIndex === idx;
              return (
                <button
                  key={ep.path + ep.method}
                  onClick={() => handleSelectEndpoint(idx)}
                  className={`p-2 rounded text-left transition-all border ${
                    isSelected
                      ? 'bg-[#181818] border-[#3B82F6] text-white'
                      : 'bg-[#111111] border-white/[0.04] text-[#71717A] hover:text-[#A1A1AA]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span
                      className={`font-bold px-1 rounded ${
                        ep.method === 'GET'
                          ? 'bg-[#10B981]/20 text-[#10B981]'
                          : ep.method === 'POST'
                          ? 'bg-[#3B82F6]/20 text-[#3B82F6]'
                          : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="truncate">{ep.path}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Request Header Bar */}
          <div className="p-2.5 bg-[#121212] rounded border border-white/[0.06] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 truncate">
              <span className="text-white font-bold text-[11px]">{currentEp.method}</span>
              <span className="text-[#A1A1AA] truncate text-[11px]">{currentEp.path}</span>
            </div>
            <button
              onClick={handleSendRequest}
              disabled={isExecuting}
              className="px-3 py-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded text-[11px] flex items-center gap-1.5 transition-colors"
            >
              {isExecuting ? (
                <span>Executing...</span>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>Send Request</span>
                </>
              )}
            </button>
          </div>

          {/* Payload Editor if method is POST or PUT */}
          {currentEp.defaultPayload && (
            <div className="space-y-1">
              <div className="text-[10px] text-[#71717A] flex justify-between">
                <span>REQUEST BODY (JSON):</span>
                <span>Content-Type: application/json</span>
              </div>
              <textarea
                value={customPayload}
                onChange={(e) => setCustomPayload(e.target.value)}
                rows={3}
                className="w-full bg-[#111111] border border-white/[0.06] rounded p-2.5 text-[11px] text-[#D4D4D8] focus:outline-none focus:border-[#3B82F6] font-mono resize-none"
                aria-label="Request Payload Body"
              />
            </div>
          )}

          {/* Response Inspector */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] text-[#71717A]">
              <span>RESPONSE PAYLOAD</span>
              <div className="flex items-center gap-2">
                <span className="text-[#10B981] font-semibold">
                  STATUS: {activeResponse.status} {activeResponse.statusText}
                </span>
                <span>· 12ms</span>
              </div>
            </div>
            <pre className="bg-[#111111] p-3 rounded text-[11px] text-[#D4D4D8] overflow-x-auto border border-white/[0.04] max-h-48">
              {JSON.stringify(activeResponse.data, null, 2)}
            </pre>
          </div>

        </div>
      </div>

    </div>
  );
};

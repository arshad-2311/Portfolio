import React, { useState } from 'react';

export const BackendSystems: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      title: 'CLIENT / INGESTION',
      tech: 'HTTP/2 · WebSockets · Browser Audio',
      desc: 'Edge entry points that transmit structured JSON payloads, multipart image files (MedLens/Attendance), or real-time binary audio streams.',
      focus: 'Payload limits, CORS policies, client validation'
    },
    {
      id: 1,
      title: 'API GATEWAY & ROUTING',
      tech: 'FastAPI Router · Next.js Handlers · Caddy',
      desc: 'Directs requests to dedicated micro-routes (/register, /appointments, /professor/capture) with centralized error catching and dependency injection.',
      focus: 'Async request dispatch, TLS termination, session isolation'
    },
    {
      id: 2,
      title: 'VALIDATION & SCHEMAS',
      tech: 'Pydantic BaseModel · TypeScript Domain Types',
      desc: 'Guarantees strictly typed request payloads and model serializations before executing database queries or machine learning pipelines.',
      focus: 'Input sanitization, date/time consistency, schema integrity'
    },
    {
      id: 3,
      title: 'CORE LOGIC & ENGINES',
      tech: 'OpenCV / dlib · Signal Windows · Vector Match',
      desc: 'Deterministic backend processing: calculating 128-d Euclidean distance vectors, running silence windowing for speech cadence, or slot conflict validations.',
      focus: 'Algorithmic efficiency, vectorized distance matching, time complexity'
    },
    {
      id: 4,
      title: 'PERSISTENCE & STORAGE',
      tech: 'SQLAlchemy ORM · MySQL · PostgreSQL · Supabase',
      desc: 'Relational storage with foreign key constraints, connection pooling, and atomic transaction commits.',
      focus: 'Schema normalization, query optimization, data reliability'
    },
    {
      id: 5,
      title: 'INTELLIGENT SERVICES',
      tech: 'Gemini 2.5 Flash · ElevenLabs TTS',
      desc: 'External and local AI services integrated as deterministic pipelines with bounded temperature and structured output constraints.',
      focus: 'Structured prompting, latency management, graceful fallbacks'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>04 / ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Behind the interface
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            How systems are structured from ingress to persistence and model execution.
          </p>
        </div>

        {/* Layer Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Stack Visual */}
          <div className="lg:col-span-6 space-y-2 font-mono">
            {layers.map((layer) => {
              const isSelected = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 ${
                    isSelected
                      ? 'bg-[#181818] border-[#3B82F6] text-white shadow-lg'
                      : 'bg-[#101010] border-white/[0.06] text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-[10px] text-[#52525B]">0{layer.id + 1}</span>
                    <span className="text-xs font-semibold">{layer.title}</span>
                  </div>
                  <span className="text-[10px] text-[#71717A] truncate">
                    {layer.tech}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Details */}
          <div className="lg:col-span-6 p-5 sm:p-6 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-4 font-mono">
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-white/[0.06] pb-3">
              <div className="text-xs text-[#3B82F6] font-semibold break-words">
                LAYER INSPECTOR // {layers[activeLayer].title}
              </div>
              <span className="text-[10px] text-[#52525B]">SYSTEM TIER 0{activeLayer + 1}</span>
            </div>

            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-semibold text-white">
                Technologies & Protocols
              </div>
              <div className="text-xs text-[#3B82F6] bg-[#141414] p-2.5 rounded border border-white/[0.04] break-words">
                {layers[activeLayer].tech}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-[#D4D4D8]">
                Function & Responsibilities
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {layers[activeLayer].desc}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/[0.04]">
              <div className="text-[11px] text-[#71717A]">
                Primary Engineering Focus:
              </div>
              <div className="text-xs text-[#D4D4D8]">
                {layers[activeLayer].focus}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

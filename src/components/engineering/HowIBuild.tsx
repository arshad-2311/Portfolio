import React, { useState } from 'react';
import { Search, Network, Code, Link2, CheckSquare, RefreshCw } from 'lucide-react';

export const HowIBuild: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Search,
      summary: 'Break the problem into requirements, boundaries, and failure modes.',
      detail: 'Before writing code, analyze real-world constraints: latency thresholds, data scale, API payload limits, and whether AI is genuinely required or if deterministic code is better.'
    },
    {
      num: '02',
      title: 'Model',
      icon: Network,
      summary: 'Design data structures, API contracts, and database schemas.',
      detail: 'Draft relational schemas (SQLAlchemy / Prisma) and strict input/output Pydantic schemas. Define exact HTTP verbs, status codes, and error formats.'
    },
    {
      num: '03',
      title: 'Build',
      icon: Code,
      summary: 'Implement core backend services and validation logic.',
      detail: 'Construct clean route handlers, database session dependencies, and modular business logic with high cohesion and low coupling.'
    },
    {
      num: '04',
      title: 'Integrate',
      icon: Link2,
      summary: 'Connect AI models, external APIs, databases, and interfaces.',
      detail: 'Integrate vision pipelines (Gemini / OpenCV), audio streamers (ElevenLabs / Web Audio), or WebSocket channels with resilient retry logic.'
    },
    {
      num: '05',
      title: 'Test',
      icon: CheckSquare,
      summary: 'Validate behavior, edge cases, and failure states.',
      detail: 'Test schema violations, duplicate requests, boundary limits (e.g. Euclidean distance thresholds in face recognition), and error responses.'
    },
    {
      num: '06',
      title: 'Iterate',
      icon: RefreshCw,
      summary: 'Refine architecture based on what runtime telemetry reveals.',
      detail: 'Optimize slow queries, add vector caching, fine-tune prompt temperature, and streamline frontend state management.'
    },
  ];

  return (
    <section id="engineering" className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>03 / METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              How I build
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            A disciplined engineering process from problem decomposition to runtime verification.
          </p>
        </div>

        {/* 6 Step Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={st.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded border transition-all cursor-pointer bg-[#0F0F0F] ${
                  isSelected
                    ? 'border-[#3B82F6] bg-[#141414]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold text-[#3B82F6]">
                      {st.num}
                    </span>
                    <h3 className="text-sm font-semibold text-[#F5F5F5]">
                      {st.title}
                    </h3>
                  </div>
                  <Icon className="w-4 h-4 text-[#71717A]" />
                </div>

                <p className="text-xs text-[#D4D4D8] font-medium leading-snug mb-2">
                  {st.summary}
                </p>
                <p className="text-[11px] text-[#71717A] leading-relaxed">
                  {st.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

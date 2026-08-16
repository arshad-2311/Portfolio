import React from 'react';

export const EngineeringTimeline: React.FC = () => {
  const milestones = [
    {
      period: 'FOUNDATIONS',
      title: 'Appointment Booking API',
      focus: 'FastAPI · Pydantic · SQLAlchemy · REST Architecture',
      description: 'First backend project during internship. Implemented relational data modeling, time-slot validation logic, and automated OpenAPI documentation.'
    },
    {
      period: 'BIOMETRICS & BACKEND',
      title: 'Smart Attendance System (SAS)',
      focus: 'OpenCV · dlib · 128-d Vector Encodings · MySQL',
      description: 'Engineered an automated attendance system converting webcam classroom frames into 128-dimensional face vectors and matching them via Euclidean distance.'
    },
    {
      period: 'MULTIMODAL AI & ACCESSIBILITY',
      title: 'MedLens',
      focus: 'Gemini 2.5 Flash · Computer Vision · ElevenLabs · TanStack',
      description: 'Built a health companion that extracts pharmacological data from packaging photos, simplifying prescriptions into regional languages and synthesized audio.'
    },
    {
      period: 'SPEECH & SIGNAL PROCESSING',
      title: 'Companion AI',
      focus: 'Web Audio API · Energy Windowing · Express · Cadence Analysis',
      description: 'Created a non-judgmental speech delivery reflection tool that maps speaking pace, pauses, and filler words without arbitrary scores.'
    },
    {
      period: 'FULL-STACK PLATFORM',
      title: 'Black Orchid',
      focus: 'Next.js · Prisma ORM · WebSockets · Caddyfile · Vercel',
      description: 'Constructed a full-stack platform with 78 verified commits, featuring live dining state synchronization, Prisma relational modeling, and production reverse proxying.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>08 / PROGRESSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Building in public
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            A factual chronological progression from backend foundations to computer vision, speech analysis, and full-stack systems.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 font-mono">
          {milestones.map((m, idx) => (
            <div
              key={m.title}
              className="p-5 rounded border border-white/[0.08] bg-[#0E0E0E] flex flex-col md:flex-row md:items-start justify-between gap-6 hover:border-white/20 transition-all"
            >
              <div className="md:w-1/4 space-y-1">
                <span className="text-[10px] text-[#3B82F6] font-semibold">
                  0{idx + 1} // {m.period}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {m.title}
                </h3>
              </div>

              <div className="md:w-3/4 space-y-2">
                <div className="text-xs text-[#3B82F6] bg-[#141414] px-2.5 py-1 rounded inline-block border border-white/[0.04]">
                  {m.focus}
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Eye, MessageSquareCode, Mic } from 'lucide-react';

export const AIApplied: React.FC = () => {
  const paradigms = [
    {
      domain: 'Computer Vision',
      title: 'Vision for Environmental & Physical Context',
      project: 'MedLens & Smart Attendance',
      systemFlow: 'Image / Camera Stream → Bounding Box Detection → 128-d Face Vectors & OCR Text → Structured Entity Extraction',
      description: 'Applied in MedLens for extracting illegible prescription/packaging information, and in Smart Attendance for vectorized Euclidean distance facial identity matching.',
      icon: Eye
    },
    {
      domain: 'Structured Language',
      title: 'LLMs for Transformation & Schema Normalization',
      project: 'MedLens & AI Applications',
      systemFlow: 'Raw Unstructured Text → Constrained Prompting (temp: 0.2) → Deterministic JSON Schema → Vernacular Translation',
      description: 'Using generative models not as open-ended chatbots, but as reliable semantic transformers that convert complex pharmacological data into localized plain language.',
      icon: MessageSquareCode
    },
    {
      domain: 'Signal & Speech Processing',
      title: 'Audio Signals for Delivery & Vocal Awareness',
      project: 'Companion AI',
      systemFlow: 'Browser Audio Stream → Energy Windowing (50ms) → Pause & Filler Detection → Non-Judgmental Habit Reflection',
      description: 'Using signal analysis to identify pauses, filler words, and vocal pacing to encourage speaker self-awareness without arbitrary scoring.',
      icon: Mic
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
              <span>05 / PRACTICAL AI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              AI, applied.
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            I use AI where it directly solves engineering bottlenecks — vision for extracting physical context, language models for data transformation, and speech analysis for vocal reflection.
          </p>
        </div>

        {/* The 3 Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paradigms.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.domain}
                className="p-5 sm:p-6 rounded border border-white/[0.08] bg-[#0E0E0E] flex flex-col justify-between space-y-6 hover:border-white/20 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                      <span className="mono-label text-xs text-white">
                        {item.domain}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#52525B]">
                      {item.project}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-[#F5F5F5] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* System Flow Pill */}
                <div className="pt-4 border-t border-white/[0.06] space-y-1.5 font-mono">
                  <div className="text-[10px] text-[#71717A] uppercase">
                    DATA FLOW PIPELINE
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#3B82F6] bg-[#141414] p-2.5 rounded border border-white/[0.04] leading-relaxed break-words">
                    {item.systemFlow}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

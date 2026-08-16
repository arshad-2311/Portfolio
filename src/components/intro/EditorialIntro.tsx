import React from 'react';
import { Server, Terminal, ShieldCheck } from 'lucide-react';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Section Label */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>01 / ENGINEERING APPROACH</span>
            </div>
            <div className="text-xs font-mono text-[#71717A] uppercase tracking-widest">
              CORE PHILOSOPHY & DISCIPLINE
            </div>
          </div>

          {/* Editorial Statement */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F5] leading-tight">
              I care about what happens behind the interface.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              My work focuses on backend architecture, APIs, databases, automation, and practical AI systems. I enjoy taking a problem, breaking it into deterministic systems, and building software that can actually be deployed and used reliably in production.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/[0.06]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F5]">
                  <Server className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Robust Backend</span>
                </div>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  Deterministic schema validation, clean resource modeling, and error boundaries over ad-hoc scripts.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F5]">
                  <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Applied AI</span>
                </div>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  Using vision, LLMs, and speech analysis where they directly solve user bottlenecks, not as decorative gimmicks.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F5]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Verifiable Code</span>
                </div>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  Public repositories, atomic git histories, and documented architectures you can inspect directly.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { TECH_MATRIX } from '../../data/stackData';
import { Layers, Database, Cpu, Layout, Terminal } from 'lucide-react';

export const TechMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Layers className="w-4 h-4 text-[#3B82F6]" />;
      case 1: return <Database className="w-4 h-4 text-[#3B82F6]" />;
      case 2: return <Cpu className="w-4 h-4 text-[#3B82F6]" />;
      case 3: return <Layout className="w-4 h-4 text-[#3B82F6]" />;
      case 4: return <Terminal className="w-4 h-4 text-[#3B82F6]" />;
      default: return <Layers className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="stack" className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>06 / TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              The stack
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            Verified technologies actively implemented and tested across production repositories and open-source projects.
          </p>
        </div>

        {/* Structured Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_MATRIX.map((cat, catIdx) => {
            const isHighlighted = selectedCategory === cat.category;

            return (
              <div
                key={cat.category}
                onClick={() => setSelectedCategory(isHighlighted ? null : cat.category)}
                className={`border rounded p-5 bg-[#0F0F0F] transition-all cursor-pointer ${
                  isHighlighted
                    ? 'border-[#3B82F6] bg-[#141414]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(catIdx)}
                    <h3 className="text-sm font-semibold text-[#F5F5F5]">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="mono-label text-[10px] text-[#71717A]">
                    {cat.label}
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-3.5">
                  {cat.items.map((item) => (
                    <div key={item.name} className="group/item">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#F5F5F5] font-medium group-hover/item:text-[#3B82F6] transition-colors">
                          {item.name}
                        </span>
                        {item.verifiedIn && (
                          <span className="text-[10px] text-[#52525B] truncate max-w-[150px]">
                            {item.verifiedIn}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#71717A] mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="pt-2 text-center text-[11px] font-mono text-[#52525B]">
          [STRICT POLICY: ALL LISTED STACK ELEMENTS ARE VERIFIED IN THE PUBLIC REPOSITORIES BELOW]
        </div>

      </div>
    </section>
  );
};

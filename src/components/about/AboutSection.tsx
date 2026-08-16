import React from 'react';
import { GraduationCap, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>07 / ABOUT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              About
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            Background, education, focus areas, and technical principles.
          </p>
        </div>

        {/* Biography & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
              I&apos;m Arshad Ahamed, a software engineer focused on backend systems and practical AI applications.
            </h3>

            <p className="text-base text-[#A1A1AA] font-light leading-relaxed">
              My work sits at the intersection of APIs, databases, automation, and intelligent software. I enjoy understanding how systems work underneath the interface and turning ideas into reliable, functioning products.
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Whether building an automated biometric attendance engine with dlib and OpenCV, developing OCR and vision-assisted applications, or configuring WebSocket architectures with Next.js and Prisma, I focus on clean separation of concerns, schema safety, and measurable software behavior.
            </p>

            {/* Core Competencies */}
            <div className="pt-4 space-y-2 font-mono text-xs">
              <div className="text-[#71717A] text-[11px] uppercase tracking-wider">
                CORE TECHNICAL SKILLS & DOMAINS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Python & FastAPI Backend Architecture',
                  'Relational Schema Design & SQL (MySQL / Postgres)',
                  'RESTful API Design & OpenAPI / Swagger Specs',
                  'Pydantic Validation & Data Serialization',
                  'Computer Vision, OpenCV & Face Embeddings',
                  'SQLAlchemy & Prisma ORM Modeling',
                  'WebSocket Real-Time Event Streaming',
                  'Full-Stack TypeScript & Next.js Systems'
                ].map((item) => (
                  <div
                    key={item}
                    className="p-2.5 bg-[#111111] rounded border border-white/[0.04] text-[#D4D4D8] flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6] flex-shrink-0" />
                    <span className="text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Personal Details Box */}
          <div className="lg:col-span-5 space-y-5 font-mono">
            <div className="p-6 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-5">
              
              {/* Education Block */}
              <div className="space-y-3 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs text-white">
                  <GraduationCap className="w-4 h-4 text-[#3B82F6]" />
                  <span className="font-semibold">EDUCATION</span>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-semibold text-white">
                    Bachelor of Computer Applications (BCA)
                  </div>
                  <div className="text-xs text-[#3B82F6]">
                    DG Vaishnav College
                  </div>
                  <div className="text-[11px] text-[#71717A] pt-1 leading-relaxed">
                    Coursework: Software Engineering, Database Systems, Object-Oriented Programming, Data Structures, Web Development, Computer Architecture.
                  </div>
                </div>
              </div>

              {/* Direct Info */}
              <div className="space-y-2.5 text-xs text-[#A1A1AA]">
                <div className="text-[10px] text-[#71717A] uppercase tracking-wider mb-2">
                  CONTACT DETAILS
                </div>
                
                <div className="flex items-center gap-2.5 p-2 bg-[#121212] rounded border border-white/[0.04]">
                  <Mail className="w-3.5 h-3.5 text-[#3B82F6] flex-shrink-0" />
                  <a href="mailto:arshadasik.7@gmail.com" className="text-white hover:text-[#3B82F6] transition-colors truncate">
                    arshadasik.7@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2.5 p-2 bg-[#121212] rounded border border-white/[0.04]">
                  <Phone className="w-3.5 h-3.5 text-[#3B82F6] flex-shrink-0" />
                  <a href="tel:+918667760793" className="text-white hover:text-[#3B82F6] transition-colors">
                    +91 8667760793
                  </a>
                </div>

                <div className="flex items-center gap-2.5 p-2 bg-[#121212] rounded border border-white/[0.04]">
                  <MapPin className="w-3.5 h-3.5 text-[#3B82F6] flex-shrink-0" />
                  <span className="text-white">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

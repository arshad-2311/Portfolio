import React from 'react';
import { ProjectData } from '../../types';
import { MedLensHeroShowcase } from './MedLensHeroShowcase';
import { BlackOrchidShowcase } from './BlackOrchidShowcase';
import { AttendanceShowcase } from './AttendanceShowcase';
import { CompanionAIShowcase } from './CompanionAIShowcase';
import { AppointmentAPIShowcase } from './AppointmentAPIShowcase';

interface SelectedWorkProps {
  projects: ProjectData[];
  onOpenCaseStudy: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onOpenCaseStudy,
}) => {
  const medlens = projects.find((p) => p.id === 'medlens')!;
  const blackOrchid = projects.find((p) => p.id === 'black-orchid')!;
  const attendance = projects.find((p) => p.id === 'attendance')!;
  const companionAi = projects.find((p) => p.id === 'companion-ai')!;
  const appointmentApi = projects.find((p) => p.id === 'appointment-api')!;

  return (
    <section id="work" className="py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Selected Work
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            Five projects. Different problems. One engineering mindset.
          </p>
        </div>

        {/* 01 MedLens Hero Showcase */}
        {medlens && (
          <MedLensHeroShowcase
            project={medlens}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        )}

        {/* 02 Black Orchid Showcase */}
        {blackOrchid && (
          <BlackOrchidShowcase
            project={blackOrchid}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        )}

        {/* 03 Smart Attendance Showcase */}
        {attendance && (
          <AttendanceShowcase
            project={attendance}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        )}

        {/* 04 Companion AI Showcase */}
        {companionAi && (
          <CompanionAIShowcase
            project={companionAi}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        )}

        {/* 05 Appointment Booking API Showcase */}
        {appointmentApi && (
          <AppointmentAPIShowcase
            project={appointmentApi}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        )}

      </div>
    </section>
  );
};

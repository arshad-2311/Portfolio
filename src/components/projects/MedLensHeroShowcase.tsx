import React, { useState } from 'react';
import { ProjectData } from '../../types';
import { ArrowUpRight, Volume2, Globe, Scan, Sparkles, CheckCircle2, Play, Pause } from 'lucide-react';
import { GithubIcon } from '../icons/Icons';

interface MedLensHeroShowcaseProps {
  project: ProjectData;
  onOpenCaseStudy: (projectId: string) => void;
}

export const MedLensHeroShowcase: React.FC<MedLensHeroShowcaseProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Hindi' | 'Tamil' | 'Telugu' | 'Marathi'>('English');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const translations = {
    English: {
      drug: 'Amoxicillin & Clavulanate (500mg/125mg)',
      use: 'Used to treat bacterial infections such as sinus, respiratory, and ear infections.',
      dosage: 'Take 1 tablet twice daily with meals. Complete full 5-day course.',
      warning: 'Avoid if allergic to penicillin. May cause mild digestive upset.'
    },
    Hindi: {
      drug: 'एमोक्सिसिलिन और क्लैवुलैनेट (500mg/125mg)',
      use: 'बैक्टीरियल संक्रमण (साइनस, श्वसन और कान के संक्रमण) के इलाज के लिए।',
      dosage: 'भोजन के साथ दिन में दो बार 1 गोली लें। पूरा 5 दिन का कोर्स समाप्त करें।',
      warning: 'यदि पेनिसिलिन से एलर्जी है तो न लें। हल्का पेट खराब हो सकता है।'
    },
    Tamil: {
      drug: 'அமோக்சிசிலின் & கிளாவுலனேட் (500mg/125mg)',
      use: 'சைனஸ், சுவாச மற்றும் காதுகளில் ஏற்படும் பாக்டீரியா தொற்றுகளை குணப்படுத்த உதவுகிறது.',
      dosage: 'உணவுடன் தினமும் இரண்டு முறை 1 மாத்திரை எடுத்துக் கொள்ளவும். 5 நாள் முழுமையாக முடிக்கவும்.',
      warning: 'பென்சிலின் ஒவ்வாமை இருந்தால் தவிர்க்கவும்.'
    },
    Telugu: {
      drug: 'అమోక్సిసిలిన్ & క్లావులనేట్ (500mg/125mg)',
      use: 'సైనస్, శ్వాసకోశ మరియు చెవి బ్యాక్టీరియా ఇన్ఫెక్షన్ల చికిత్స కోసం.',
      dosage: 'భోజనంతో పాటు రోజుకు రెండుసార్లు 1 టాబ్లెట్ తీసుకోండి. 5 రోజుల కోర్సు పూర్తి చేయండి.',
      warning: 'పెన్సిలిన్ అలెర్జీ ఉంటే వాడకండి.'
    },
    Marathi: {
      drug: 'अमोक्सिसिलिन आणि क्लेव्हुलानेट (500mg/125mg)',
      use: 'साइनस आणि श्वसनमार्गाच्या जिवाणू संसर्गावर उपचारासाठी.',
      dosage: 'जेवणासोबत दिवसातून दोनदा 1 गोळी घ्या. 5 दिवसांचा पूर्ण कोर्स करा.',
      warning: 'पेनिसिलिनची ॲलर्जी असल्यास टाळा.'
    }
  };

  const steps = [
    { label: '01. SCAN / IMAGE', icon: Scan, desc: 'Input capture of packaging' },
    { label: '02. OCR & VISION', icon: Sparkles, desc: 'Gemini 2.5 Flash entity detection' },
    { label: '03. STRUCTURED DATA', icon: CheckCircle2, desc: 'Deterministic JSON extraction' },
    { label: '04. VERNACULAR TTS', icon: Volume2, desc: 'ElevenLabs multi-dialect audio' },
  ];

  return (
    <div id="project-medlens" className="border border-white/[0.12] bg-[#0D0D0D] rounded-lg p-5 sm:p-10 transition-all hover:border-white/20">
      
      {/* Top Metadata Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl font-mono font-bold text-white flex-shrink-0">
            01
          </span>
          <div>
            <div className="mono-label text-[10px] sm:text-[11px] text-[#3B82F6] font-semibold break-words">
              FEATURED CASE STUDY // {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-colors border border-white/10"
              data-cursor="OPEN APP"
            >
              <span>Live App</span>
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
            <GithubIcon className="w-3 h-3" />
            <span>Source ↗</span>
          </a>

          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="px-3.5 py-1.5 rounded bg-[#3B82F6] hover:bg-[#2563EB] text-xs font-mono text-white font-medium flex items-center gap-1.5 transition-colors shadow-sm"
            data-cursor="CASE STUDY"
          >
            <span>Deep Dive</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Description & Overview */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed font-light">
            {project.tagline}
          </p>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            {project.summary}
          </p>

          {/* Verified Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#161616] text-[#A1A1AA] text-[10px] sm:text-[11px] font-mono border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#121212] border border-white/[0.08] rounded p-4 space-y-2.5">
          <div className="mono-label text-[10px] text-[#71717A] flex items-center justify-between">
            <span>CORE ENGINEERING SPEC</span>
            <span className="text-[#3B82F6]">VERIFIED REPO</span>
          </div>
          <div className="text-xs font-mono text-[#A1A1AA] space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
              <span className="text-[#71717A]">LLM Engine:</span>
              <span className="text-[#F5F5F5]">Gemini 2.5 Flash</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
              <span className="text-[#71717A]">Frontend Architecture:</span>
              <span className="text-[#F5F5F5]">React + TanStack Router</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
              <span className="text-[#71717A]">Speech Synthesis:</span>
              <span className="text-[#F5F5F5]">ElevenLabs Multilingual v2</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
              <span className="text-[#71717A]">Database & Auth:</span>
              <span className="text-[#F5F5F5]">Supabase PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Multimodal Pipeline Sandbox (Explicitly labeled) */}
      <div className="mt-2 border border-white/[0.08] rounded-md bg-[#0A0A0A] p-4 sm:p-5 space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse flex-shrink-0" />
            <span className="mono-label text-[11px] sm:text-xs text-[#F5F5F5]">
              MULTIMODAL PIPELINE EVALUATION SANDBOX
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-[#71717A] bg-[#141414] px-2 py-0.5 rounded border border-white/[0.06] self-start sm:self-auto">
            [MOCK DATA — LOCAL EVALUATION SIMULATOR]
          </span>
        </div>

        {/* Pipeline Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isCur = activeStep === idx;
            return (
              <button
                key={st.label}
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 sm:p-3 rounded text-left transition-all border ${
                  isCur
                    ? 'bg-[#181818] border-[#3B82F6] text-white shadow-sm'
                    : 'bg-[#111111] border-white/[0.06] text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#141414]'
                }`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isCur ? 'text-[#3B82F6]' : 'text-[#52525B]'}`} />
                  <span className="text-[11px] sm:text-xs font-mono font-medium truncate">{st.label}</span>
                </div>
                <div className="text-[9px] sm:text-[10px] truncate text-[#71717A]">{st.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Step Preview Display */}
        <div className="bg-[#111111] border border-white/[0.08] rounded p-3.5 sm:p-4 font-mono text-xs">
          {activeStep === 0 && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[#71717A] border-b border-white/[0.04] pb-2 text-[10px] sm:text-xs">
                <span>INPUT_IMAGE // AUGMENT_500MG.JPG</span>
                <span>STATUS: LOADED</span>
              </div>
              <div className="p-3 bg-[#0D0D0D] border border-dashed border-white/10 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-white font-medium text-xs sm:text-sm">Augmentin 625 Duo (Amoxicillin + Potassium Clavulanate)</div>
                  <div className="text-[10px] sm:text-[11px] text-[#71717A]">Blister Strip · 10 Tablets · Exp: 11/2027 · Batch: #AUG-8821</div>
                </div>
                <button
                  onClick={() => setActiveStep(1)}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-[11px] self-start sm:self-auto"
                >
                  Run OCR →
                </button>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[#71717A] border-b border-white/[0.04] pb-2 text-[10px] sm:text-xs">
                <span>GEMINI 2.5 FLASH // OCR INFERENCE</span>
                <span className="text-[#10B981]">CONFIDENCE: 98.4%</span>
              </div>
              <div className="bg-[#0D0D0D] p-3 rounded space-y-2 text-[10px] sm:text-[11px]">
                <div className="text-[#A1A1AA] break-words">
                  <span className="text-[#3B82F6]">[BBOX_01]</span> &quot;AUGMENTIN 625 DUO&quot; (score: 0.99)
                </div>
                <div className="text-[#A1A1AA] break-words">
                  <span className="text-[#3B82F6]">[BBOX_02]</span> &quot;Amoxycillin and Potassium Clavulanate Tablets IP&quot; (score: 0.98)
                </div>
                <div className="text-[#A1A1AA] break-words">
                  <span className="text-[#3B82F6]">[BBOX_03]</span> &quot;Each film coated tablet contains 500mg/125mg&quot; (score: 0.97)
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[#71717A] border-b border-white/[0.04] pb-2 text-[10px] sm:text-xs">
                <span>STRUCTURED EXTRACTION SCHEMA</span>
                <span className="text-[#3B82F6]">DETERMINISTIC JSON</span>
              </div>
              <pre className="bg-[#0D0D0D] p-3 rounded text-[10px] sm:text-[11px] text-[#D4D4D8] overflow-x-auto">
{`{
  "brand_name": "Augmentin 625 Duo",
  "active_molecules": ["Amoxicillin (500mg)", "Clavulanic Acid (125mg)"],
  "pharmacological_class": "Penicillin Antibiotic + Beta-lactamase inhibitor",
  "indications": "Bacterial sinus, respiratory tract, and ear infections",
  "schedule_type": "Schedule H1 Prescription"
}`}
              </pre>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.04] pb-2">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                  <Globe className="w-3.5 h-3.5 text-[#3B82F6] flex-shrink-0" />
                  <span className="text-[#71717A]">SELECT REGIONAL DIALECT:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(['English', 'Hindi', 'Tamil', 'Telugu', 'Marathi'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] transition-colors ${
                        selectedLanguage === lang
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-[#181818] text-[#71717A] hover:text-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Translation Content */}
              <div className="bg-[#0D0D0D] p-3.5 sm:p-4 rounded space-y-2.5">
                <div className="text-white font-medium text-xs sm:text-sm">
                  {translations[selectedLanguage].drug}
                </div>
                <div className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">
                  <span className="text-[#71717A]">What it does: </span>
                  {translations[selectedLanguage].use}
                </div>
                <div className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">
                  <span className="text-[#71717A]">How to take: </span>
                  {translations[selectedLanguage].dosage}
                </div>
                <div className="text-[11px] sm:text-xs text-[#F59E0B] leading-relaxed">
                  <span className="text-[#F59E0B]/70">Caution: </span>
                  {translations[selectedLanguage].warning}
                </div>

                {/* Simulated Audio Stream Player */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="p-1.5 rounded-full bg-white text-black hover:bg-[#E4E4E7] transition-colors flex-shrink-0"
                      aria-label="Toggle synthesized audio playback"
                    >
                      {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[10px] sm:text-[11px] text-[#A1A1AA]">
                      {isPlayingAudio ? 'Streaming synthesized voice...' : 'Play Vernacular Voice (ElevenLabs)'}
                    </span>
                  </div>
                  {isPlayingAudio && (
                    <div className="flex items-center gap-1 self-end sm:self-auto">
                      <span className="w-1 h-3 bg-[#3B82F6] animate-pulse" />
                      <span className="w-1 h-5 bg-[#3B82F6] animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-[#3B82F6] animate-pulse delay-150" />
                      <span className="w-1 h-4 bg-[#3B82F6] animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

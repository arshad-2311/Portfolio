import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from '../icons/Icons';
import { GITHUB_PROFILE } from '../../data/githubData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  const phoneNoDigits = '918667760793';
  const targetEmail = 'arshadasik.7@gmail.com';

  const handleSend = (e: React.FormEvent, method: 'whatsapp' | 'email') => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const formattedText = `Hi Arshad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    if (method === 'whatsapp') {
      const waUrl = `https://wa.me/${phoneNoDigits}?text=${encodeURIComponent(formattedText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        `Engineering Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(formattedText)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-8 border-b border-white/[0.08] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="mono-label text-xs text-[#3B82F6] flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>08 / GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Let&apos;s talk engineering.
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A1AA] max-w-md">
            Send a direct message via WhatsApp or Email with your technical inquiry or project requirements.
          </p>
        </div>

        {/* Contact Form & Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Direct channels cards */}
          <div className="lg:col-span-5 space-y-4 font-mono">
            <div className="p-5 sm:p-6 rounded border border-white/[0.08] bg-[#0E0E0E] space-y-4">
              <div className="text-xs text-[#71717A] uppercase tracking-wider">
                DIRECT CONTACT CHANNELS
              </div>

              <div className="space-y-2.5">
                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${phoneNoDigits}?text=${encodeURIComponent('Hi Arshad, I checked your engineering portfolio and would like to connect.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] rounded border border-white/[0.06] hover:border-[#10B981] flex items-center justify-between text-xs text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#10B981] transition-colors">WhatsApp</div>
                      <div className="text-[10px] text-[#71717A]">+91 8667760793</div>
                    </div>
                  </div>
                  <span className="text-[#71717A] text-[10px]">Open ↗</span>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${targetEmail}?subject=Engineering%20Inquiry`}
                  className="p-3 bg-[#121212] rounded border border-white/[0.06] hover:border-[#3B82F6] flex items-center justify-between text-xs text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#3B82F6] transition-colors">Email</div>
                      <div className="text-[10px] text-[#71717A] truncate max-w-[180px] sm:max-w-none">{targetEmail}</div>
                    </div>
                  </div>
                  <span className="text-[#71717A] text-[10px]">Mail ↗</span>
                </a>

                {/* Phone Direct */}
                <a
                  href="tel:+918667760793"
                  className="p-3 bg-[#121212] rounded border border-white/[0.06] hover:border-white/20 flex items-center justify-between text-xs text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#A1A1AA] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Direct Phone</div>
                      <div className="text-[10px] text-[#71717A]">+91 8667760793</div>
                    </div>
                  </div>
                  <span className="text-[#71717A] text-[10px]">Call ↗</span>
                </a>

                {/* GitHub */}
                <a
                  href={GITHUB_PROFILE.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] rounded border border-white/[0.06] hover:border-white/20 flex items-center justify-between text-xs text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#A1A1AA] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">GitHub</div>
                      <div className="text-[10px] text-[#71717A]">github.com/arshad-2311</div>
                    </div>
                  </div>
                  <span className="text-[#71717A] text-[10px]">↗</span>
                </a>

                {/* Location */}
                <div className="p-3 bg-[#121212] rounded border border-white/[0.06] flex items-center gap-3 text-xs text-[#A1A1AA]">
                  <MapPin className="w-4 h-4 text-[#71717A] flex-shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form with Direct Redirection */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-6 sm:p-8 rounded border border-[#10B981]/30 bg-[#0E0E0E] space-y-4 font-mono text-center">
                <CheckCircle2 className="w-8 h-8 text-[#10B981] mx-auto" />
                <h3 className="text-base font-semibold text-white">
                  Message Prepared & Transmitted
                </h3>
                <p className="text-xs text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                  Your message was packaged with your name and email. If the window did not open automatically, choose a channel below:
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-2.5 pt-2">
                  <button
                    onClick={(e) => handleSend(e, 'whatsapp')}
                    className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white rounded text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Open WhatsApp</span>
                  </button>

                  <button
                    onClick={(e) => handleSend(e, 'email')}
                    className="px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Email App</span>
                  </button>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs text-[#71717A] hover:text-white underline"
                  >
                    Write another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => handleSend(e, sendMethod)} className="space-y-4 font-mono text-xs">
                
                {/* Method selector tab (stacks on mobile, side-by-side on sm+) */}
                <div className="p-1 bg-[#121212] rounded border border-white/[0.08] flex flex-col sm:flex-row gap-1">
                  <button
                    type="button"
                    onClick={() => setSendMethod('whatsapp')}
                    className={`py-2 px-3 rounded flex items-center justify-center gap-2 text-xs transition-colors ${
                      sendMethod === 'whatsapp'
                        ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-semibold'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">Send to WhatsApp (+91 8667760793)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSendMethod('email')}
                    className={`py-2 px-3 rounded flex items-center justify-center gap-2 text-xs transition-colors ${
                      sendMethod === 'email'
                        ? 'bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30 font-semibold'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">Send to Email ({targetEmail})</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name-input" className="text-[#71717A] block">YOUR NAME</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-[#0E0E0E] border border-white/[0.08] focus:border-[#3B82F6] rounded p-3 text-[#F5F5F5] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email-input" className="text-[#71717A] block">YOUR EMAIL</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#0E0E0E] border border-white/[0.08] focus:border-[#3B82F6] rounded p-3 text-[#F5F5F5] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-msg-input" className="text-[#71717A] block">MESSAGE / TECHNICAL INQUIRY</label>
                  <textarea
                    id="contact-msg-input"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your backend requirement, AI use case, or project inquiry..."
                    className="w-full bg-[#0E0E0E] border border-white/[0.08] focus:border-[#3B82F6] rounded p-3 text-[#F5F5F5] outline-none resize-none"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={(e) => handleSend(e, 'whatsapp')}
                    className="px-5 py-3 rounded bg-[#10B981] hover:bg-[#059669] text-white font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSend(e, 'email')}
                    className="px-5 py-3 rounded bg-[#1A1A1A] hover:bg-[#242424] text-white border border-white/15 hover:border-[#3B82F6] font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Mail className="w-4 h-4 text-[#3B82F6]" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import { ProjectTypology } from "@/types";
import { CheckCircle2, ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";

export const ProjectIntakeSection: React.FC = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    projectTypology: "Residential" as ProjectTypology,
    siteLocation: "",
    estimatedArea: "",
    timeline: "Within 3 Months",
    servicesRequired: ["Architectural Design"],
    projectBrief: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const typologies: ProjectTypology[] = [
    "Residential",
    "Luxury Residential",
    "Commercial",
    "Interior Architecture",
    "Turnkey Architecture",
    "Landscape",
  ];

  const handleTypologySelect = (typology: ProjectTypology) => {
    setFormData((prev) => ({ ...prev, projectTypology: typology }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean form handling / API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="intake" className="py-20 md:py-28 bg-[#14171A] text-[#F8F7F4]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intake Briefing */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs tracking-[0.25em] text-[#A0B2BD] font-medium">
                  [05]
                </span>
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#A0B2BD]">
                  Client Consultation
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
                Initiate Architectural <br />
                <span className="italic text-[#A0B2BD]">Dialogue.</span>
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#A0B2BD] font-light leading-relaxed">
                We accept a limited number of residential, luxury, and commercial commissions each
                year to maintain uncompromising design rigour and single-source site oversight.
              </p>
            </div>

            {/* Practice Guarantees */}
            <div className="space-y-4 pt-4 border-t border-[#2B3740]">
              <div className="flex items-start gap-3 text-xs text-[#E8EDF0]">
                <Clock className="w-4 h-4 text-[#A0B2BD] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">48-Hour Studio Review</strong>
                  <span className="text-[#8C9EA9]">Every inquiry is evaluated directly by our architectural group.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#E8EDF0]">
                <MapPin className="w-4 h-4 text-[#A0B2BD] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Site Visit Feasibility</strong>
                  <span className="text-[#8C9EA9]">On-site topographical reviews across Karnataka &amp; Western Ghats.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#E8EDF0]">
                <ShieldCheck className="w-4 h-4 text-[#A0B2BD] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Confidential &amp; Transparent</strong>
                  <span className="text-[#8C9EA9]">Strict client privacy and transparent BOQ budgeting protocols.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Alternatives */}
            <div className="p-6 bg-[#1F272D] border border-[#2B3740] space-y-2 text-xs">
              <span className="font-mono text-[10px] tracking-widest text-[#A0B2BD] uppercase block">
                Direct Studio Desk
              </span>
              <p className="font-mono text-white text-sm">
                {siteConfig.contact.email}
              </p>
              <p className="text-[#8C9EA9]">
                {siteConfig.location.city}, Karnataka · {siteConfig.location.coordinates.latitude}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Questionnaire */}
          <div className="lg:col-span-7 bg-[#1A2024] p-6 sm:p-10 border border-[#2B3740]">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#384D58] text-white rounded-none border border-[#4F6877] mb-2">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-3xl font-normal text-white">
                  Consultation Brief Received
                </h3>
                <p className="font-sans text-sm text-[#A0B2BD] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.clientName}. Your architectural brief has been logged at our
                  Bhadravati studio. An architect from our practice group will review the project
                  constraints and respond within 48 business hours.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="font-mono text-xs tracking-widest text-[#A0B2BD] hover:text-white uppercase border-b border-[#384D58] pb-1"
                  >
                    Submit Another Commission Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[11px] tracking-widest uppercase text-[#A0B2BD] block mb-3">
                    01. Project Typology *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {typologies.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => handleTypologySelect(t)}
                        className={`px-3 py-2.5 text-xs text-left transition-colors font-sans border ${
                          formData.projectTypology === t
                            ? "bg-[#384D58] text-white border-[#4F6877] font-medium"
                            : "bg-[#14171A] text-[#A0B2BD] border-[#2B3740] hover:text-white hover:border-[#384D58]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="clientName"
                      className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                    >
                      Client / Family Name *
                    </label>
                    <input
                      id="clientName"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Hegde"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors placeholder:text-[#4F5B66]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors placeholder:text-[#4F5B66]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                    >
                      Contact Telephone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors placeholder:text-[#4F5B66]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="siteLocation"
                      className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                    >
                      Site Location / City *
                    </label>
                    <input
                      id="siteLocation"
                      type="text"
                      required
                      placeholder="e.g. Bhadravati / Shivamogga / Bangalore"
                      value={formData.siteLocation}
                      onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors placeholder:text-[#4F5B66]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="estimatedArea"
                      className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                    >
                      Approximate Area (Sq.Ft / Acres)
                    </label>
                    <input
                      id="estimatedArea"
                      type="text"
                      placeholder="e.g. 4,500 Sq.Ft or 60x40 Site"
                      value={formData.estimatedArea}
                      onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                      className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors placeholder:text-[#4F5B66]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                    >
                      Target Construction Start
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors"
                    >
                      <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                      <option value="Within 3 Months">Within 3 Months</option>
                      <option value="3–6 Months">3–6 Months</option>
                      <option value="Exploring Feasibility">Exploring Feasibility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectBrief"
                    className="font-mono text-[10px] tracking-widest uppercase text-[#A0B2BD] block mb-1.5"
                  >
                    Brief Description of Vision &amp; Requirements
                  </label>
                  <textarea
                    id="projectBrief"
                    rows={3}
                    placeholder="Tell us about your spatial aspirations, family lifestyle, site topography, or specific architectural requirements..."
                    value={formData.projectBrief}
                    onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                    className="w-full px-4 py-3 bg-[#14171A] border border-[#2B3740] text-white text-xs focus:border-[#384D58] focus:outline-none transition-colors placeholder:text-[#4F5B66] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-white hover:bg-[#4F6877] transition-colors border border-[#4F6877] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Transmitting Brief..." : "Transmit Project Brief to Studio"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-2 text-[10px] font-mono text-center text-[#8C9EA9]">
                    Strict confidentiality assured · No promotional correspondence
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { ProjectIntakeSection } from "@/components/home/ProjectIntakeSection";
import { Mail, MapPin, Share2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Studio Desk",
  description:
    "Connect with Linehaus Architects in Bhadravati, Karnataka. Initiate an architectural project inquiry or schedule a site feasibility consultation.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      <Container size="wide">
        {/* Contact Page Header */}
        <div className="pb-16 mb-16 border-b border-[#DFDBD2]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#384D58] uppercase">
            <span>[STUDIO DESK &amp; COMMISSIONS]</span>
            <span>·</span>
            <span>BHADRAVATI, KARNATAKA</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-4xl">
            Start the Architectural <br />
            <span className="italic text-[#384D58]">Conversation.</span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            We invite prospective homeowners, luxury estate clients, and institutional developers to
            discuss upcoming commissions. Consultations and site visits are scheduled strictly by
            prior appointment.
          </p>
        </div>

        {/* Studio Coordinates & Practical Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Studio Office */}
          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#384D58] uppercase">
              <MapPin className="w-4 h-4" />
              <span>Studio Base</span>
            </div>
            <h3 className="font-serif text-2xl text-[#14171A]">Bhadravati, Karnataka</h3>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed">
              {siteConfig.location.addressDisplay}
            </p>
            <p className="font-mono text-xs text-[#384D58] pt-2 border-t border-[#DFDBD2]">
              LAT {siteConfig.location.coordinates.latitude} <br />
              LON {siteConfig.location.coordinates.longitude}
            </p>
          </div>

          {/* Electronic Correspondence */}
          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#384D58] uppercase">
              <Mail className="w-4 h-4" />
              <span>Direct Inquiries</span>
            </div>
            <h3 className="font-serif text-2xl text-[#14171A]">Studio Correspondence</h3>
            <p className="font-mono text-xs text-[#14171A] break-all">
              {siteConfig.contact.email}
            </p>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed pt-2 border-t border-[#DFDBD2]">
              All project correspondence is reviewed directly by our architectural practice group within
              48 business hours.
            </p>
          </div>

          {/* Social Channels & Digital Presence */}
          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#384D58] uppercase">
              <Share2 className="w-4 h-4" />
              <span>Digital Presence</span>
            </div>
            <h3 className="font-serif text-2xl text-[#14171A]">Social &amp; Studio Media</h3>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed">
              Follow our ongoing site progress, material investigations, and studio announcements across our official channels.
            </p>
            <div className="pt-2 border-t border-[#DFDBD2] space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-mono text-[#14171A] hover:text-[#384D58] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#384D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>INSTAGRAM</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#88939C] group-hover:text-[#384D58] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-mono text-[#14171A] hover:text-[#384D58] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#384D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#88939C] group-hover:text-[#384D58] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/?text=Hello%20Linehaus%20Architects,%20I%20would%20like%20to%20enquire%20about%20an%20architectural%20commission."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-mono text-[#14171A] hover:text-[#384D58] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#384D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WHATSAPP DESK</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#88939C] group-hover:text-[#384D58] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Embedded Project Intake Section */}
      <ProjectIntakeSection />
    </div>
  );
}

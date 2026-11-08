import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { ProjectIntakeSection } from "@/components/home/ProjectIntakeSection";
import { Mail, MapPin, Clock } from "lucide-react";

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

          {/* Consultation Protocol */}
          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#384D58] uppercase">
              <Clock className="w-4 h-4" />
              <span>Studio Protocols</span>
            </div>
            <h3 className="font-serif text-2xl text-[#14171A]">Consultation By Appointment</h3>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed">
              To give each commission individual design attention, studio meetings and on-site feasibility evaluations are scheduled strictly by prior appointment.
            </p>
            <p className="font-sans text-xs text-[#384D58] italic pt-2 border-t border-[#DFDBD2]">
              {siteConfig.location.consultationNote}
            </p>
          </div>
        </div>
      </Container>

      {/* Embedded Project Intake Section */}
      <ProjectIntakeSection />
    </div>
  );
}

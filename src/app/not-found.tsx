import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 bg-[#F8F7F4] flex items-center justify-center min-h-[60vh]">
      <Container size="narrow">
        <div className="p-8 sm:p-12 bg-[#F1EFEA] border border-[#DFDBD2] text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase">
              [404] · SPATIAL COORDINATE UNLOCATED
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#14171A]">
            Page Out of Frame
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#545F68] font-light max-w-md mx-auto leading-relaxed">
            The architectural drawing or page reference you requested does not exist or has been
            re-indexed in our digital archive.
          </p>

          <div className="pt-6 border-t border-[#DFDBD2] flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-medium tracking-[0.18em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Studio Home</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-medium tracking-[0.18em] uppercase border border-[#14171A] text-[#14171A] hover:bg-[#14171A] hover:text-white transition-colors"
            >
              <span>View Selected Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

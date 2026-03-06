import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/sections/Hero";
import { StacksSection } from "@/sections/Stacks";
import { WorksSection } from "@/sections/Works";
import { TimelineSection } from "@/sections/Timeline";
import { CallToActionSection } from "@/sections/CallToAction";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <NavBar />
      <main className="space-y-0">
        <HeroSection />
        <StacksSection />
        <WorksSection />
        <TimelineSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}


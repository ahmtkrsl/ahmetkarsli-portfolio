import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/sections/Hero";
import { StacksSection } from "@/sections/Stacks";
import { WorksSection } from "@/sections/Works";
import { ServicesSection } from "@/sections/Services";
import { TimelineSection } from "@/sections/Timeline";
import { TestimonialsSection } from "@/sections/Testimonials";
import { WorkflowSection } from "@/sections/Workflow";
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
        <ServicesSection />
        <TimelineSection />
        <TestimonialsSection />
        <WorkflowSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}


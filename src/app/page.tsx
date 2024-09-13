import About from "@/components/section/about";
import ApproachSection from "@/components/section/approach";
import ExperienceSection from "@/components/section/experience";
import Footer from "@/components/section/footer";
import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
import TapeSection from "@/components/section/tape";
import ToolboxSection from "@/components/section/toolbox";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        {/* <Header /> */}
        <Hero />
        <TapeSection />

        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          desc="See how i transformed concepts into engaging digital experiences"
        />
        <ToolboxSection />

        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          desc="See how i transformed concepts into engaging digital experiences"
        />
        <About />

        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          desc="See how i transformed concepts into engaging digital experiences"
        />
        <Project />

        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          desc="See how i transformed concepts into engaging digital experiences"
        />
        <ExperienceSection />

        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          desc="See how i transformed concepts into engaging digital experiences"
        />
        <ApproachSection />
        <Footer />
      </div>
    </main>
  );
}

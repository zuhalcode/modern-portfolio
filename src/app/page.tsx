import AnimationGallery from "@/components/section/animation-gallery";
import ApproachSection from "@/components/section/approach";
import ExperienceSection from "@/components/section/experience";
import Footer from "@/components/section/footer";
import Hero from "@/components/section/hero";
import PersonalSection from "@/components/section/personal";
import Project from "@/components/section/project";
import TapeSection from "@/components/section/tape";
import ToolboxSection from "@/components/section/toolbox";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        {/* <Header /> */}

        <Hero />
        <TapeSection />
        <PersonalSection />

        <SectionHeader
          title="Experience Motion in Every Frame"
          eyebrow="animation gallery"
          desc="Showcase of dynamic animations, delivering seamless visuals that captivate and inspire."
        />
        <AnimationGallery />

        <SectionHeader
          title="Tools that Power the Future"
          eyebrow="powerful technologies"
          desc="Comprehensive stack of the latest technologies, ensuring scalable and reliable solutions"
        />
        <ToolboxSection />

        <SectionHeader
          title="A Journey of Innovation and Growth"
          eyebrow="Passionate Creativity"
          desc="Blending creativity with technical prowess to deliver impactful digital solutions that make a difference"
        />
        <Project />

        <SectionHeader
          eyebrow="Dedicated To Excellence"
          title="Delivering Value Through Experience"
          desc="A proven history of delivering successful digital projects, leveraging experience to create meaningful and impactful solutions"
        />
        <ExperienceSection />

        <SectionHeader
          eyebrow="From Concept to Reality"
          title="How I Approach Every Project"
          desc="A results-driven process focused on collaboration, innovation, and delivering digital products that make an impact"
        />
        <ApproachSection />

        <Footer />
      </div>
    </main>
  );
}

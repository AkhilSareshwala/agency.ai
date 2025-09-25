import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyLogos />
        <ServicesSection />
        <WorkSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

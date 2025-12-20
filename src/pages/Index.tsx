import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import TheProblem from "@/components/TheProblem";
import TheMethod from "@/components/TheMethod";
import WhyDifferent from "@/components/WhyDifferent";
import Results from "@/components/Results";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhoIsThisFor />
      <TheProblem />
      <TheMethod />
      <WhyDifferent />
      <Results />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className="relative z-10 section-container section-padding text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-white/90 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Growth for Ambitious Businesses
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            We Don't Chase Leads.
            <br />
            <span className="text-gradient-blue">We Build Revenue Machines.</span>
          </h1>

          {/* Sub-headline */}
          <p 
            className="max-w-2xl mx-auto text-lg lg:text-xl text-white/90 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            ISTH combines cutting-edge AI with proven sales systems to help businesses 
            attract high-value clients, close more deals, and scale predictably.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#book-call">
                Book a Growth Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#method">
                See Our System
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p 
            className="text-sm text-white/70 pt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Built for businesses ready to dominate. Not for everyone.
          </p>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <a href="#who-is-this-for" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

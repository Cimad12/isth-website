import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 section-container section-padding text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            For serious real estate players only
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            We Don't Run Ads.
            <br />
            <span className="text-gradient-gold">We Engineer Sales.</span>
          </h1>

          {/* Sub-headline */}
          <p 
            className="max-w-2xl mx-auto text-lg lg:text-xl text-ivory-muted leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            ISTH helps real estate developers and agencies build predictable deal flow 
            through demand engineering, lead control, and sales optimization.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#book-call">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#method">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p 
            className="text-sm text-muted-foreground pt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            This is not for everyone. Scroll to see if it's for you.
          </p>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <a href="#who-is-this-for" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

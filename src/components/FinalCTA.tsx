import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="book-call" className="relative section-padding bg-card overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pre-headline */}
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-6">
            Ready to Scale?
          </p>

          {/* Main headline */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
            Let's Talk Growth
          </h2>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
            No pitch decks. No pressure. Just strategy.
          </p>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We'll explore your business, understand your goals, and determine 
            if ISTH is the right fit to help you scale. A direct conversation 
            between professionals who value results over fluff.
          </p>

          {/* Divider */}
          <div className="divider-blue-lg mx-auto mb-10" />

          {/* CTA Button */}
          <Button variant="hero" size="xl" asChild>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Your Growth Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          {/* Qualifier */}
          <p className="text-sm text-muted-foreground mt-8">
            Limited spots. We only partner with businesses we can truly help scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

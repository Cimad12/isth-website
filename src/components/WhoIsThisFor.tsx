import { Check, X } from "lucide-react";

const WhoIsThisFor = () => {
  const forYou = [
    "Business owners tired of inconsistent revenue",
    "Founders ready to scale with proven systems",
    "Teams drowning in manual processes that AI could handle",
    "Decision-makers who want results, not experiments",
  ];

  const notForYou = [
    "Looking for the cheapest option",
    "Want quick fixes without real change",
    "Not ready to invest in serious growth",
    "Expecting overnight success without effort",
  ];

  return (
    <section id="who-is-this-for" className="relative section-padding bg-card">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Qualification
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            This Isn't For Everyone
          </h2>
          <div className="divider-blue mx-auto" />
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* This is for you */}
          <div className="bg-background rounded-xl p-8 lg:p-10 border border-border shadow-card">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-8">
              This Is For You If
            </h3>
            <ul className="space-y-5">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="bg-secondary/50 rounded-xl p-8 lg:p-10 border border-border/50">
            <h3 className="text-xl lg:text-2xl font-bold text-muted-foreground mb-8">
              This Is NOT For You If
            </h3>
            <ul className="space-y-5">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </span>
                  <span className="text-muted-foreground/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

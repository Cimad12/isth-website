import { Check, X } from "lucide-react";

const WhoIsThisFor = () => {
  const forYou = [
    "Real estate developers with inventory that needs to move",
    "Agencies generating leads but struggling to close",
    "Sales teams drowning in unqualified inquiries",
    "Decision-makers ready to invest in a system, not experiments",
  ];

  const notForYou = [
    "Looking for the cheapest option",
    "Want to 'just run some ads'",
    "Not ready to commit to a serious process",
    "Expecting overnight miracles",
  ];

  return (
    <section id="who-is-this-for" className="relative section-padding bg-charcoal-light">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Qualification
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            This Isn't For Everyone
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* This is for you */}
          <div className="bg-gradient-card rounded-lg p-8 lg:p-10 border border-border shadow-card">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-8">
              This Is For You If
            </h3>
            <ul className="space-y-5">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-ivory-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="bg-secondary/30 rounded-lg p-8 lg:p-10 border border-border/50">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-muted-foreground mb-8">
              This Is NOT For You If
            </h3>
            <ul className="space-y-5">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
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

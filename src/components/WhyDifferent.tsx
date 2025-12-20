const WhyDifferent = () => {
  const contrasts = [
    {
      not: "An Agency",
      instead: "A Growth Partner",
      detail: "We're invested in your outcomes, not just deliverables.",
    },
    {
      not: "Software",
      instead: "A System",
      detail: "Technology serves the strategy, not the other way around.",
    },
    {
      not: "Freelancers",
      instead: "Specialists",
      detail: "Real estate sales. That's what we know. That's what we do.",
    },
    {
      not: "Campaign Managers",
      instead: "Revenue Engineers",
      detail: "We measure success in closed deals, not vanity metrics.",
    },
  ];

  return (
    <section className="relative section-padding bg-charcoal">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Why ISTH
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            We're Not Like The Others
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Contrast blocks */}
        <div className="space-y-4 lg:space-y-6 max-w-4xl mx-auto">
          {contrasts.map((item, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-8 items-center p-6 lg:p-8 rounded-lg border border-border/50 bg-charcoal-light/30 hover:border-primary/20 transition-all duration-500"
            >
              {/* Not this */}
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Not</p>
                <p className="text-xl lg:text-2xl font-display text-muted-foreground line-through decoration-muted-foreground/30">
                  {item.not}
                </p>
              </div>

              {/* Arrow/divider */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-12 h-px bg-gradient-to-r from-muted-foreground/30 via-primary to-muted-foreground/30" />
              </div>

              {/* But this */}
              <div className="text-center md:text-left">
                <p className="text-sm text-primary uppercase tracking-wide mb-1">Instead</p>
                <p className="text-xl lg:text-2xl font-display text-foreground font-semibold">
                  {item.instead}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;

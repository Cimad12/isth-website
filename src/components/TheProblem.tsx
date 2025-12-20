const TheProblem = () => {
  const problems = [
    {
      title: "Unsold Inventory",
      description: "Properties sit on the market while carrying costs eat into margins.",
    },
    {
      title: "Low-Quality Leads",
      description: "Marketing brings volume, not buyers. Your sales team wastes time on tire-kickers.",
    },
    {
      title: "Broken Sales Flow",
      description: "Leads fall through cracks. Follow-ups are inconsistent. Deals die in the pipeline.",
    },
    {
      title: "Agencies Focused on Metrics",
      description: "They celebrate clicks and impressions. You need closings.",
    },
  ];

  return (
    <section className="relative section-padding bg-charcoal">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            The Real Problem
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6 leading-tight">
            The Industry Is Optimizing
            <br />
            <span className="text-muted-foreground">For the Wrong Things</span>
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg border border-border/50 bg-charcoal-light/50 hover:border-primary/30 hover:bg-charcoal-light transition-all duration-500"
            >
              {/* Number indicator */}
              <span className="absolute top-8 right-8 font-display text-6xl font-bold text-muted/20 group-hover:text-primary/10 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4 relative z-10">
                {problem.title}
              </h3>
              <p className="text-ivory-muted leading-relaxed relative z-10">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-xl lg:text-2xl text-ivory-muted font-display italic">
            "This isn't a marketing problem.
            <br />
            <span className="text-foreground not-italic font-semibold">It's a sales system problem."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;

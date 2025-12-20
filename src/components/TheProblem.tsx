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
    <section className="relative section-padding bg-background">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            The Real Problem
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
            The Industry Is Optimizing
            <br />
            <span className="text-muted-foreground">For the Wrong Things</span>
          </h2>
          <div className="divider-blue" />
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-500"
            >
              {/* Number indicator */}
              <span className="absolute top-8 right-8 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 relative z-10">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-xl lg:text-2xl text-muted-foreground italic">
            "This isn't a marketing problem.
            <br />
            <span className="text-foreground not-italic font-bold">It's a sales system problem."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;

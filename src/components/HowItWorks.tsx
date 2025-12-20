const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description: "A focused conversation to understand your situation, goals, and whether we're the right fit for each other.",
    },
    {
      number: "02",
      title: "System Design",
      description: "We architect a custom solution based on your market, inventory, and sales infrastructure.",
    },
    {
      number: "03",
      title: "Execution & Optimization",
      description: "We implement, monitor, and continuously refine the system until it produces predictable results.",
    },
  ];

  return (
    <section className="relative section-padding bg-charcoal overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            The Process
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            How Engagement Works
          </h2>
          <p className="max-w-xl mx-auto text-ivory-muted">
            Structured. Selective. Premium.
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 lg:gap-10 group"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-charcoal-light flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                      <span className="font-display text-lg font-semibold text-primary">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-ivory-muted leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

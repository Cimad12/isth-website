import { Target, Filter, TrendingUp, Zap } from "lucide-react";

const TheMethod = () => {
  const pillars = [
    {
      icon: Target,
      title: "Demand Engineering",
      description: "We don't chase leads. We create market conditions where qualified buyers come to you.",
    },
    {
      icon: Filter,
      title: "Lead Control",
      description: "Systematic qualification that ensures your sales team only speaks to serious prospects.",
    },
    {
      icon: TrendingUp,
      title: "Sales Flow Optimization",
      description: "Every touchpoint engineered to move prospects toward a decision.",
    },
    {
      icon: Zap,
      title: "Predictable Deal Flow",
      description: "A repeatable system that turns market activity into closed transactions.",
    },
  ];

  return (
    <section id="method" className="relative section-padding bg-charcoal-light overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            The ISTH Method
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            A System Designed to Sell
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-ivory-muted mb-6">
            Not run ads. Not generate leads. <span className="text-foreground font-medium">Sell real estate.</span>
          </p>
          <div className="divider-gold-lg mx-auto" />
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-lg border border-border bg-charcoal/80 hover:border-primary/40 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-ivory-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-block px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
            <p className="text-foreground font-medium">
              We don't do everything. <span className="text-primary">We do what moves sales.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheMethod;

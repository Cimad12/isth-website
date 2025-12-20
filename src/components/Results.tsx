import { Building2, Users, BadgeCheck } from "lucide-react";

const Results = () => {
  const outcomes = [
    {
      icon: Building2,
      title: "Projects That Were Stuck",
      description: "Developments with months of unsold inventory finally moving units. Properties that sat for quarters now closing in weeks.",
    },
    {
      icon: Users,
      title: "Agencies That Were Spinning",
      description: "Teams drowning in low-intent leads now working with pre-qualified buyers who are ready to make decisions.",
    },
    {
      icon: BadgeCheck,
      title: "Sales Teams That Were Burning Out",
      description: "Reps who wasted 80% of their time on tire-kickers now focused on high-probability closes.",
    },
  ];

  return (
    <section className="relative section-padding bg-charcoal-light">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Real Outcomes
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            What Changes When
            <br />
            <span className="text-gradient-gold">The System Works</span>
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Outcomes */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="text-center lg:text-left"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <outcome.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                {outcome.title}
              </h3>
              <p className="text-ivory-muted leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Credibility statement */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We don't share client names publicly. We don't need to prove ourselves with logos. 
            <span className="text-foreground"> Our results speak in private conversations with decision-makers like you.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;

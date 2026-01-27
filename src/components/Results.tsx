import { Building2, Users, BadgeCheck } from "lucide-react";

const Results = () => {
  const outcomes = [
    {
      icon: Building2,
      title: "Businesses That Were Stuck",
      description: "Companies with flat revenue finally breaking through. Stagnant pipelines now overflowing with qualified opportunities.",
    },
    {
      icon: Users,
      title: "Teams That Were Overwhelmed",
      description: "Sales teams buried in admin work now focused on what matters—closing deals and building relationships.",
    },
    {
      icon: BadgeCheck,
      title: "Founders Who Were Burning Out",
      description: "Entrepreneurs working 80-hour weeks now running efficient operations that scale without them.",
    },
  ];

  return (
    <section className="relative section-padding bg-card">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Real Outcomes
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            What Changes When
            <br />
            <span className="text-gradient-blue">The System Works</span>
          </h2>
          <div className="divider-blue mx-auto" />
        </div>

        {/* Outcomes */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="text-center lg:text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <outcome.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                {outcome.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Credibility statement */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We don't share client names publicly. Our results speak in private conversations with decision-makers like you.
            <span className="text-foreground"> The proof is in the pipeline.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;

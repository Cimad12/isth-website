const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="section-container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              ISTH
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm text-center lg:text-left">
            Demand Engineering for Real Estate.
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ISTH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

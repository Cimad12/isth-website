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

          {/* Contact Emails */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm">
            <a href="mailto:majlis@istihwad.com" className="text-muted-foreground hover:text-primary transition-colors">
              majlis@istihwad.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a href="mailto:contact@istihwad.com" className="text-muted-foreground hover:text-primary transition-colors">
              contact@istihwad.com
            </a>
          </div>

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

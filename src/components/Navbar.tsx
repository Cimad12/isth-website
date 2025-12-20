const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-foreground tracking-tight">
              ISTH
            </span>
          </a>

          {/* CTA */}
          <a
            href="#book-call"
            className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_-10px_hsl(38_80%_55%_/_0.4)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

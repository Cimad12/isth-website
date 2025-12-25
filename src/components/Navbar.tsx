import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="ISTIHWAD" className="h-10 lg:h-12 w-auto" />
          </a>

          {/* CTA */}
          <a
            href="#book-call"
            className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(201_94%_44%_/_0.3)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

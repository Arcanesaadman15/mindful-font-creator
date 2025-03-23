
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CTAButton from "./CTAButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Examples", href: "#showcase" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-display">
            F
          </div>
          <span>FontCraft</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <CTAButton>Get Started</CTAButton>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-4 border-b">
                <a href="#" className="text-xl font-display font-bold flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center text-white font-display">
                    F
                  </div>
                  <span>FontCraft</span>
                </a>
              </div>
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="py-2 px-4 text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4">
                  <CTAButton className="w-full justify-center">Get Started</CTAButton>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

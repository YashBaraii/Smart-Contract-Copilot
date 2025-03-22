import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate("/gasOptimization/getStarted");
  };

  return (
    <header
      className={cn(
        "fixed top-[64px] left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out px-4 md:px-6",
        {
          "py-4 bg-transparent": !isScrolled,
          "py-3 bg-white/80 backdrop-blur-md shadow-sm": isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-lg font-medium font-display">Aptos Gas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Download Guide
          </Button>
          <Button size="sm" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md p-4 animate-fade-in z-50">
          <nav className="flex flex-col space-y-4 mb-4">
            <NavLinks />
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm" className="w-full">
              Download Guide
            </Button>
            <Button size="sm" className="w-full" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => {
  const links = [
    { name: "About Gas", href: "#about" },
    { name: "Optimization", href: "#strategies" },
    { name: "Implementation", href: "#implementation" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-gray-700 link-hover"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;

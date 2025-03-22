import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './SAButton';

interface NavLink {
  name: string;
  href: string;
  isActive?: boolean;
  dropdown?: NavLink[];
}

interface NavigationProps {
  className?: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/security-audit' },
  { 
    name: 'Automated Security', 
    href: '#', 
    dropdown: [
      { name: 'What is Automated Security?', href: '/security-audit/automated-security' },
      { name: 'Key Security Features', href: '/security-audit/security-features' },
    ] 
  },
  { 
    name: 'Implementation', 
    href: '#',
    dropdown: [
      { name: 'Access Control', href: '/security-audit/implementation/access-control' },
      { name: 'Reentrancy Protection', href: '/security-audit/implementation/reentrancy' },
      { name: 'Input Validation', href: '/security-audit/implementation/input-validation' },
      { name: 'Transaction Limits', href: '/security-audit/implementation/transaction-limits' },
      { name: 'Logging & Auditing', href: '/security-audit/implementation/logging' },
    ] 
  },
  { name: 'Testing', href: '/security-audit/testing' },
  { name: 'Resources', href: '/security-audit/resources' },
  { name: 'Blog', href: '/security-audit/blog' },
];

const Navigation = ({ className }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-[64px] inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/security-audit" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">AS</span>
              </div>
              <span className="ml-2 text-lg font-semibold">Security Audit</span>
            </a>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={cn(
                        "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200",
                        link.isActive 
                          ? "border-blue-500 text-gray-900" 
                          : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={cn(
                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200",
                        link.isActive 
                          ? "border-blue-500 text-gray-900" 
                          : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                      )}
                    >
                      {link.name}
                    </a>
                  )}
                  
                  {link.dropdown && (
                    <div 
                      className={cn(
                        "absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all origin-top-left",
                        activeDropdown === link.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="py-1">
                        {link.dropdown.map((dropdownLink) => (
                          <a
                            key={dropdownLink.name}
                            href={dropdownLink.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownLink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="mr-2"
            >
              Documentation
            </Button>
            <Button 
              variant="primary" 
              size="sm"
            >
              Get Started
            </Button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg z-50">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className={cn(
                      "w-full flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium",
                      link.isActive 
                        ? "bg-blue-50 border-l-4 border-blue-500 text-blue-700" 
                        : "border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                    )}
                  >
                    {link.name}
                    <ChevronDown size={16} className={cn("transition-transform", activeDropdown === link.name && "transform rotate-180")} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="pl-6 pr-4 py-2 space-y-1 bg-gray-50">
                      {link.dropdown.map((dropdownLink) => (
                        <a
                          key={dropdownLink.name}
                          href={dropdownLink.href}
                          className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800 border-l-2 border-transparent hover:border-gray-300"
                        >
                          {dropdownLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className={cn(
                    "block pl-3 pr-4 py-2 text-base font-medium border-l-4",
                    link.isActive 
                      ? "bg-blue-50 border-blue-500 text-blue-700" 
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  )}
                >
                  {link.name}
                </a>
              )}
            </React.Fragment>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full justify-center"
              >
                Documentation
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                className="w-full justify-center"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

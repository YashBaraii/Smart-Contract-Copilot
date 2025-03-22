import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, FileCode, Book, Lock, User, LogOut, Menu, X, MessageSquare } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import WalletConnect from "./WalletConnect";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWalletConnect = (address: string) => {
    console.log("Wallet connected:", address);
    // Add any wallet connection logic here
  };

  const handleWalletDisconnect = () => {
    console.log("Wallet disconnected");
    // Add any wallet disconnection logic here
  };

  const handleWalletError = (error: string) => {
    console.error("Wallet error:", error);
    // Add any error handling logic here
  };

  const navItems = [
    { id: "home", icon: <Home className="w-4 h-4" />, text: "Home" },
    { id: "features", icon: <FileCode className="w-4 h-4" />, text: "Features" },
    { id: "testimonials", icon: <Book className="w-4 h-4" />, text: "Testimonials" },
    { id: "contact", icon: <MessageSquare className="w-4 h-4" />, text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <FileCode className="w-6 h-6 text-primary animate-pulse" />
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Smart Contract Copilot
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary scale-105"
                    : "text-gray-400 hover:text-primary"
                }`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}

            <WalletConnect 
              onWalletConnect={handleWalletConnect}
              onWalletDisconnect={handleWalletDisconnect}
              onError={handleWalletError}
            />

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="text-primary flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{user?.name}</span>
                </div>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                    <Lock className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-primary hover:text-primary-dark"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden py-4 space-y-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary"
                    : "text-gray-400 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
            
            <div className="px-4 py-2">
              <WalletConnect 
                onWalletConnect={handleWalletConnect}
                onWalletDisconnect={handleWalletDisconnect}
                onError={handleWalletError}
              />
            </div>
            
            {isAuthenticated ? (
              <>
                <div className="text-primary flex items-center px-4 py-2">
                  <User className="w-5 h-5 mr-2" />
                  <span>{user?.name}</span>
                </div>
                <Button
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                  variant="outline"
                  className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={toggleMobileMenu}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={toggleMobileMenu}>
                  <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                    <Lock className="w-5 h-5 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



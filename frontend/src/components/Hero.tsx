import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCode, ArrowRight, PlayCircle, Shield, Zap, Users, X } from "lucide-react";
import { Link } from "react-router-dom";

const blockchainCompanies = [
  {
    name: "Chainlink",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
  },
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
  },
  {
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    name: "Binance",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  {
    name: "Avalanche",
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
  },
  {
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
];

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-accent">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0icmdiYSgxNTUsMTM1LDI0NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-gradient"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block animate-float">
            <FileCode className="w-16 h-16 text-primary mx-auto mb-6" />
          </div>

          <div>h</div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Smart Contract Copilot
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create, audit, and deploy secure smart contracts without writing code. Perfect for developers and entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/builder">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Building for Free
                <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => setShowDemo(true)}
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Live Demo
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mb-12">
            <p className="text-gray-400 mb-6">Trusted by leading blockchain companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {blockchainCompanies.map((company, index) => (
                <div
                  key={index}
                  className="w-24 h-12 bg-white/5 rounded-lg p-2 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-300">Automated security audits and best practices built-in.</p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Deploy contracts in seconds with our optimized compiler.</p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-300">Join thousands of developers building the future.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-secondary rounded-lg p-4 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-semibold">Live Demo</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDemo(false)}
                className="text-white hover:text-primary"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="aspect-video bg-black/20 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/l6dWKZIxnRQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

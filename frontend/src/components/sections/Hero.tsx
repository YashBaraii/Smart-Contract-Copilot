
import { Button } from "../ui/button";
import { Sparkles, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-4 md:px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent z-[-1]" />
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 z-[-1] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 z-[-1] animate-pulse-subtle" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Tag Pill */}
          <div className="inline-flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles size={16} className="mr-2" />
            <span>Master gas efficiency in Aptos Move</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6 animate-fade-in text-balance" style={{ animationDelay: "0.1s" }}>
            Gas Optimization in <span className="text-gradient">Aptos Move</span>: From Concept to Implementation
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
            Learn how to reduce transaction fees and improve execution efficiency in your Move smart contracts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/gasOptimization/getStarted">
              <Button size="lg" className="group">
                Get Started with Optimization
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="group">
              <Download size={16} className="mr-2" />
              Download Optimization Checklist
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Stat value="50%" label="Average Gas Reduction" />
            <Stat value="2x" label="Transaction Throughput" />
            <Stat value="30%" label="Lower Transaction Costs" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="glass p-6 rounded-2xl text-center transform transition-transform hover:scale-105">
      <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default Hero;

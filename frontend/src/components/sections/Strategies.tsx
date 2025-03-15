
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface StrategiesProps {
  id?: string;
}

const Strategies = ({ id }: StrategiesProps) => {
  return (
    <section id={id} className="section-padding px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-medium text-blue-600 mb-3">OPTIMIZATION STRATEGIES</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Key Approaches to Gas Optimization</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Implement these proven strategies to significantly reduce gas consumption in your Aptos Move smart contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <StrategyCard 
              key={strategy.title}
              strategy={strategy}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Link to="/get-started">
            <Button size="lg">
              Start Implementing These Strategies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface Strategy {
  title: string;
  description: string;
  tips: string[];
  icon: string;
}

const StrategyCard = ({ 
  strategy, 
  delay 
}: { 
  strategy: Strategy; 
  delay: number 
}) => {
  return (
    <div 
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="border-b border-gray-100 p-5 flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: strategy.icon }}
        />
        <h3 className="text-xl font-semibold">{strategy.title}</h3>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4">{strategy.description}</p>
        
        <div className="space-y-2">
          {strategy.tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const strategies: Strategy[] = [
  {
    title: "Vector Operations",
    description: "Optimize how you work with vectors to minimize gas consumption.",
    tips: [
      "Pre-calculate vector length outside of loops",
      "Use fixed-size vectors when possible",
      "Batch vector operations to reduce iterations"
    ],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6L6 7M6 7L3 16L7 17.5M6 7L10.5 4M7 17.5L12 20M7 17.5L10.5 9M12 20L17 17.5M12 20L15 12M17 17.5L21 16L18 7L15 8.5M17 17.5L15 8.5M10.5 4L15 8.5M10.5 4L10.5 9M10.5 9L15 12M15 12L15 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Storage Optimization",
    description: "Minimize on-chain storage costs through efficient data structures.",
    tips: [
      "Use appropriate data types (u8 vs u64 when possible)",
      "Consolidate related data into single resources",
      "Remove unnecessary data from on-chain storage"
    ],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5M20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5M20 9.6C20 11.2569 16.4183 12.6 12 12.6C7.58172 12.6 4 11.2569 4 9.6M20 14.2C20 15.8569 16.4183 17.2 12 17.2C7.58172 17.2 4 15.8569 4 14.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Loop Optimization",
    description: "Refactor loops for maximum efficiency and reduced gas costs.",
    tips: [
      "Avoid nested loops when possible",
      "Use early exits to prevent unnecessary iterations",
      "Minimize operations inside loop bodies"
    ],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Transaction Batching",
    description: "Combine multiple operations to save on transaction overhead.",
    tips: [
      "Group related operations into single transactions",
      "Use multi-signature transactions for batch updates",
      "Implement bulk processing capabilities"
    ],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3H21M21 3V8M21 3L14 10M8 21H3M3 21V16M3 21L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Computational Shifting",
    description: "Move calculations off-chain when possible to reduce on-chain costs.",
    tips: [
      "Compute hashes and signatures off-chain",
      "Use off-chain indexers for complex queries",
      "Implement oracle patterns for external data"
    ],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Resource Reuse",
    description: "Maximize resource reuse to avoid expensive creation operations.",
    tips: [
      "Implement object pooling patterns",
      "Reuse existing resources instead of creating new ones",
      "Initialize resources with appropriate initial capacity"
    ],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 9V15M15 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  }
];

export default Strategies;


import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface FeaturesProps {
  id?: string;
}

const Features = ({ id }: FeaturesProps) => {
  return (
    <section id={id} className="section-padding px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-medium text-blue-600 mb-3">FEATURES</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Optimize Gas?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gas optimization delivers multiple benefits that enhance both user experience and economic efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Smart Contracts?</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Apply these proven strategies to reduce gas costs and improve the efficiency of your Aptos Move code.
          </p>
          <Link to="/gasOptimization/getStarted">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 group"
            >
              Explore Implementation Techniques
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
  delay,
}: {
  title: string;
  description: string;
  icon: string;
  delay: number;
}) => {
  return (
    <div
      className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle hover:shadow-card transition-all duration-300 ease-in-out animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    title: "Lower Transaction Costs",
    description: "Reduce fees paid by users, making your dApp more affordable and competitive.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V16M9 10V14M15 10V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Improved User Experience",
    description: "Faster transactions and lower costs lead to better user experience and satisfaction.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 9.00001C15.8417 9.33334 15.8417 9.66668 15.5 10C15.1667 10.3334 15.1667 10.6667 15.5 11M15.5 15C15.8417 15.3334 15.8417 15.6667 15.5 16C15.1667 16.3333 15.1667 16.6667 15.5 17M9 11.5C8.66667 11.8417 8.33333 11.8417 8 11.5C7.66667 11.1667 7.33333 11.1667 7 11.5M9 7.50001C8.66667 7.84168 8.33333 7.84168 8 7.50001C7.66667 7.16668 7.33333 7.16668 7 7.50001M7.5 15.5C7.83333 15.1667 8.16667 15.1667 8.5 15.5C8.83333 15.8334 9.16667 15.8334 9.5 15.5M7.5 19.5C7.83333 19.1667 8.16667 19.1667 8.5 19.5C8.83333 19.8334 9.16667 19.8334 9.5 19.5M18 12C18 14.6667 15.6667 17 13 17H9C6.33333 17 4 14.6667 4 12C4 9.33334 6.33333 7.00001 9 7.00001H13C15.6667 7.00001 18 9.33334 18 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Higher Throughput",
    description: "Optimized contracts use fewer resources, allowing more transactions to be processed.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Reduced Network Load",
    description: "Efficient code places less strain on the blockchain network, benefiting the ecosystem.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },
  {
    title: "Better Resource Allocation",
    description: "Make more efficient use of computational resources and on-chain storage.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: "Future-Proof Contracts",
    description: "Efficient contracts adapt better to network upgrades and changing gas models.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10H3M16 2V6M8 2V6M10 14H6M13 18.5L15.5 21L19 17M6.8 22H17.2C18.8802 22 19.7202 22 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C22 19.7202 22 18.8802 22 17.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  }
];

export default Features;

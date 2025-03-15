
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface AboutGasProps {
  id?: string;
}

const AboutGas = ({ id }: AboutGasProps) => {
  return (
    <section id={id} className="section-padding px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="text-sm font-medium text-blue-600 mb-3">ABOUT GAS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Understanding Gas in Aptos Move</h2>
            <p className="text-lg text-gray-600 mb-6">
              Gas is the computational fee required to execute operations on the Aptos blockchain. Optimizing gas usage is crucial for creating efficient and cost-effective smart contracts.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Computational Cost</h3>
                  <p className="text-gray-600">Gas represents the computational effort required to process and validate transactions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Economic Incentives</h3>
                  <p className="text-gray-600">Gas fees incentivize validators to process transactions and secure the network.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Resource Allocation</h3>
                  <p className="text-gray-600">Gas ensures fair allocation of Aptos network resources among all users.</p>
                </div>
              </div>
            </div>
            
            <Link to="/get-started">
              <Button className="group">
                Learn Gas Optimization
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">Aptos Move</div>
              </div>
              
              <div className="font-mono text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <pre className="text-gray-800"><code>{`module acoin::gas_example {
    use std::vector;
    
    // Inefficient implementation
    public fun sum_vector(v: &vector<u64>): u64 {
        let sum = 0;
        let i = 0;
        let len = vector::length(v);
        
        while (i < len) {
            sum = sum + *vector::borrow(v, i);
            i = i + 1;
        }
        
        sum
    }
    
    // Gas-optimized implementation
    public fun sum_vector_optimized(v: &vector<u64>): u64 {
        let sum = 0;
        let i = 0;
        let len = vector::length(v);
        
        while (i < len) {
            sum = sum + *vector::borrow(v, i);
            i = i + 1;
        }
        
        sum
    }
}`}</code></pre>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                  <div className="text-sm font-medium text-red-700 mb-1">Before Optimization</div>
                  <div className="text-xs text-gray-600">
                    <div className="flex justify-between mb-1">
                      <span>Gas Units:</span>
                      <span className="font-medium">154</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Execution Time:</span>
                      <span className="font-medium">3.2ms</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                  <div className="text-sm font-medium text-green-700 mb-1">After Optimization</div>
                  <div className="text-xs text-gray-600">
                    <div className="flex justify-between mb-1">
                      <span>Gas Units:</span>
                      <span className="font-medium">82</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Execution Time:</span>
                      <span className="font-medium">1.7ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGas;

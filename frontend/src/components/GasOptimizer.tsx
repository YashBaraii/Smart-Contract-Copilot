import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Coins, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GasOptimizerProps {
  contractCode?: string;
}

const GasOptimizer: React.FC<GasOptimizerProps> = ({ contractCode }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<{
    originalGas: number;
    optimizedGas: number;
    savings: number;
    suggestions: string[];
  } | null>(null);

  const simulateOptimization = async () => {
    setIsOptimizing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate optimization results
    const results = {
      originalGas: 250000,
      optimizedGas: 180000,
      savings: 28,
      suggestions: [
        "Optimized storage access patterns",
        "Reduced redundant computations",
        "Improved loop efficiency",
        "Optimized memory usage"
      ]
    };

    setOptimizationResults(results);
    setIsOptimizing(false);

    // Show success toast
    toast({
      title: "Gas Optimization Complete",
      description: `Successfully reduced gas usage by ${results.savings}%`,
      className: "bg-green-50 border-green-200",
    });
  };

  const applyOptimizations = async () => {
    if (!optimizationResults) return;

    setIsOptimizing(true);
    
    // Simulate application delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast({
      title: "Optimizations Applied",
      description: "Your contract has been optimized for better gas efficiency",
      className: "bg-green-50 border-green-200",
    });

    setIsOptimizing(false);
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Zap className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold">Gas Optimization</h2>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          Optimize your smart contract for better gas efficiency and cost savings.
        </p>

        {!optimizationResults ? (
          <Button
            onClick={simulateOptimization}
            disabled={isOptimizing}
            className="w-full"
          >
            {isOptimizing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Analyzing Contract...
              </>
            ) : (
              <>
                <Coins className="w-4 h-4 mr-2" />
                Analyze Gas Usage
              </>
            )}
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Original Gas</div>
                <div className="text-xl font-semibold">{optimizationResults.originalGas.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-green-600">Optimized Gas</div>
                <div className="text-xl font-semibold text-green-600">
                  {optimizationResults.optimizedGas.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-600">Gas Savings</div>
              <div className="text-2xl font-bold text-blue-600">
                {optimizationResults.savings}%
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Optimization Suggestions:</h3>
              <ul className="space-y-2">
                {optimizationResults.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={applyOptimizations}
              disabled={isOptimizing}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Applying Optimizations...
                </>
              ) : (
                <>
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Apply Optimizations
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GasOptimizer; 
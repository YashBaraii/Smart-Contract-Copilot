
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { Bolt, Wrench, ArrowRight, ArrowLeft, CheckCircle2, Code, Coins, DownloadCloud } from "lucide-react";

const GetStarted = () => {
  const [activeTab, setActiveTab] = useState("step1");
  const [progress, setProgress] = useState(0);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Update progress based on current step
    switch(value) {
      case "step1":
        setProgress(0);
        break;
      case "step2":
        setProgress(25);
        break;
      case "step3":
        setProgress(50);
        break;
      case "step4":
        setProgress(75);
        break;
      case "step5":
        setProgress(100);
        break;
    }
  };

  const goToNextStep = () => {
    switch(activeTab) {
      case "step1":
        document.querySelector('[data-value="step2"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step2"]') as HTMLButtonElement)?.click();
        break;
      case "step2":
        document.querySelector('[data-value="step3"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step3"]') as HTMLButtonElement)?.click();
        break;
      case "step3":
        document.querySelector('[data-value="step4"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step4"]') as HTMLButtonElement)?.click();
        break;
      case "step4":
        document.querySelector('[data-value="step5"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step5"]') as HTMLButtonElement)?.click();
        break;
    }
  };

  const goToPreviousStep = () => {
    switch(activeTab) {
      case "step2":
        document.querySelector('[data-value="step1"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step1"]') as HTMLButtonElement)?.click();
        break;
      case "step3":
        document.querySelector('[data-value="step2"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step2"]') as HTMLButtonElement)?.click();
        break;
      case "step4":
        document.querySelector('[data-value="step3"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step3"]') as HTMLButtonElement)?.click();
        break;
      case "step5":
        document.querySelector('[data-value="step4"]')?.addEventListener('click', function handleClick() {
          this.removeEventListener('click', handleClick);
        });
        (document.querySelector('[data-value="step4"]') as HTMLButtonElement)?.click();
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Get Started with Gas Optimization</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow this step-by-step guide to optimize your Aptos Move smart contracts for maximum efficiency.
            </p>
          </div>
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <Tabs defaultValue="step1" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="step1" data-value="step1" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <span className="hidden md:inline">Analyze</span>
                <span className="md:hidden">1</span>
              </TabsTrigger>
              <TabsTrigger value="step2" data-value="step2" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <span className="hidden md:inline">Optimize</span>
                <span className="md:hidden">2</span>
              </TabsTrigger>
              <TabsTrigger value="step3" data-value="step3" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <span className="hidden md:inline">Implement</span>
                <span className="md:hidden">3</span>
              </TabsTrigger>
              <TabsTrigger value="step4" data-value="step4" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <span className="hidden md:inline">Test</span>
                <span className="md:hidden">4</span>
              </TabsTrigger>
              <TabsTrigger value="step5" data-value="step5" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <span className="hidden md:inline">Deploy</span>
                <span className="md:hidden">5</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="border rounded-lg p-6 mb-8">
              <TabsContent value="step1" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Bolt size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 1: Analyze Your Contract</h3>
                      <p className="text-gray-600 mb-4">
                        Begin by identifying gas-intensive operations in your smart contract. Use Aptos' analysis tools to profile your contract's execution.
                      </p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-medium mb-2">Paste your Move contract below:</h4>
                        <Textarea placeholder="module my_module::example { ... }" className="min-h-32" />
                        <div className="mt-2 text-sm text-gray-500">
                          We'll help you identify potential optimization opportunities.
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-blue-600" />
                          Key Areas to Analyze:
                        </h4>
                        <ul className="list-disc ml-5 space-y-1 text-gray-600">
                          <li>Loop operations and vector manipulations</li>
                          <li>Resource creation and storage patterns</li>
                          <li>Repetitive computations and redundancies</li>
                          <li>Transaction argument usage</li>
                          <li>On-chain vs off-chain computation balance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="step2" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 2: Apply Optimization Strategies</h3>
                      <p className="text-gray-600 mb-4">
                        Now that you've identified gas-intensive areas, apply these proven strategies to optimize your contract.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-medium mb-2">Vector Optimization</h4>
                          <p className="text-sm text-gray-600">
                            Use fixed-size vectors when possible and avoid unnecessary resizing operations.
                          </p>
                        </div>
                        
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-medium mb-2">Loop Refactoring</h4>
                          <p className="text-sm text-gray-600">
                            Minimize loop iterations and consolidate multiple loops when processing the same data.
                          </p>
                        </div>
                        
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-medium mb-2">Storage Efficiency</h4>
                          <p className="text-sm text-gray-600">
                            Optimize resource storage patterns to minimize state updates and space usage.
                          </p>
                        </div>
                        
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-medium mb-2">Computation Shifting</h4>
                          <p className="text-sm text-gray-600">
                            Move complex computations off-chain when possible to reduce on-chain execution costs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Select optimization strategies to apply:</h4>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Vector operations optimization</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Loop optimization</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Storage pattern improvements</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Computation shifting (on-chain to off-chain)</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Resource reuse</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="step3" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 3: Implement Optimizations</h3>
                      <p className="text-gray-600 mb-4">
                        Apply the selected optimization techniques to your Move code. Here are sample implementations for common patterns.
                      </p>
                      
                      <div className="bg-gray-900 text-gray-50 p-4 rounded-lg mb-6 overflow-x-auto font-mono text-sm">
                        <pre>{`// Example: Before Optimization
public fun process_vector(v: vector<u64>): u64 {
    let sum = 0;
    let i = 0;
    while (i < vector::length(&v)) {
        sum = sum + *vector::borrow(&v, i);
        i = i + 1;
    }
    sum
}

// After Optimization
public fun process_vector(v: vector<u64>): u64 {
    let sum = 0;
    let len = vector::length(&v);
    let i = 0;
    
    // Pre-calculate length to avoid repeated calls
    while (i < len) {
        sum = sum + *vector::borrow(&v, i);
        i = i + 1;
    }
    sum
}`}</pre>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">Implementation Checklist:</h4>
                        <ul className="list-disc ml-5 space-y-1 text-gray-600">
                          <li>Refactor loops to minimize gas usage</li>
                          <li>Optimize vector operations</li>
                          <li>Implement efficient storage patterns</li>
                          <li>Move complex calculations off-chain</li>
                          <li>Batch operations when possible</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Your Optimized Code:</h4>
                        <Textarea placeholder="Paste your optimized code here..." className="min-h-32 font-mono" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="step4" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Coins size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 4: Test and Measure</h3>
                      <p className="text-gray-600 mb-4">
                        Verify your optimizations by comparing gas costs before and after your changes.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Before Optimization</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Gas Units:</span>
                              <Input placeholder="e.g. 1245" className="w-32 text-right" />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Execution Time (ms):</span>
                              <Input placeholder="e.g. 120" className="w-32 text-right" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">After Optimization</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Gas Units:</span>
                              <Input placeholder="e.g. 645" className="w-32 text-right" />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Execution Time (ms):</span>
                              <Input placeholder="e.g. 75" className="w-32 text-right" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">Testing Recommendations:</h4>
                        <ul className="list-disc ml-5 space-y-1 text-gray-600">
                          <li>Use Aptos CLI to measure gas usage in different scenarios</li>
                          <li>Test with varying input sizes to verify optimization effectiveness</li>
                          <li>Compare execution times across different operations</li>
                          <li>Ensure optimizations don't compromise functionality</li>
                        </ul>
                      </div>
                      
                      <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                          <CheckCircle2 size={18} />
                          <span>Optimization Results</span>
                        </div>
                        <p className="text-green-600 text-sm">
                          Your optimizations have reduced gas consumption by approximately <span className="font-bold">48%</span> and improved execution time by <span className="font-bold">37%</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="step5" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <DownloadCloud size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 5: Deploy and Monitor</h3>
                      <p className="text-gray-600 mb-4">
                        Deploy your optimized contract and continue monitoring its performance.
                      </p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">Deployment Checklist:</h4>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Final code review completed</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>All tests passed</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Gas benchmarks documented</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span>Aptos CLI configuration verified</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Deploy to Testnet</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            First deploy to testnet for final validation before production.
                          </p>
                          <Button>Deploy to Testnet</Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Deploy to Mainnet</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            When ready, deploy your optimized contract to mainnet.
                          </p>
                          <Button variant="outline">Deploy to Mainnet</Button>
                        </div>
                      </div>
                      
                      <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                        <h3 className="text-xl font-bold mb-3">Congratulations!</h3>
                        <p className="mb-4">
                          You've successfully optimized your Aptos Move smart contract for gas efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link to="/">
                            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                              Back to Home
                            </Button>
                          </Link>
                          <Button className="bg-white text-blue-600 hover:bg-white/90">
                            Download Optimization Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={goToPreviousStep}
                disabled={activeTab === "step1"}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Previous
              </Button>
              
              <Button 
                onClick={goToNextStep}
                disabled={activeTab === "step5"}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight size={16} />
              </Button>
            </div>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;

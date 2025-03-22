import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Code, Users, Brain, Lock } from "lucide-react";

const features = [
  {
    name: "Smart Contract Generation",
    description: "AI-powered code generation for smart contracts with best practices and security considerations built-in.",
    icon: Code,
  },
  {
    name: "Security Auditing",
    description: "Automated security analysis and vulnerability detection to ensure your contracts are safe and robust.",
    icon: Shield,
  },
  {
    name: "Gas Optimization",
    description: "Advanced gas optimization techniques to reduce transaction costs and improve contract efficiency.",
    icon: Zap,
  },
  {
    name: "Community Driven",
    description: "Join a thriving community of developers, auditors, and blockchain enthusiasts.",
    icon: Users,
  },
  {
    name: "AI-Powered Insights",
    description: "Leverage artificial intelligence to get intelligent suggestions and improvements for your code.",
    icon: Brain,
  },
  {
    name: "Enterprise Security",
    description: "Enterprise-grade security features and compliance tools for production deployments.",
    icon: Lock,
  },
];

export default function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Revolutionizing Smart Contract Development
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're on a mission to make smart contract development more accessible, secure, and efficient. Our platform combines cutting-edge AI technology with industry best practices to help developers build better blockchain applications.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{feature.name}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build Better Smart Contracts?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of developers who are already using our platform to build secure and efficient smart contracts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
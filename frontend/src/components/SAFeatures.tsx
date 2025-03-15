
import React from 'react';
import { ShieldCheck, RefreshCw, FileCheck, TimerReset, BarChart3, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Access Control',
    description: 'Restrict unauthorized function calls with role-based permissions and signer verification.',
    icon: ShieldCheck,
    color: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Reentrancy Protection',
    description: 'Prevent recursive calls that exploit state changes with robust lock mechanisms.',
    icon: RefreshCw,
    color: 'text-indigo-600',
  },
  {
    id: 3,
    title: 'Input Validation',
    description: 'Ensure valid data before execution to avoid zero or excessive values.',
    icon: FileCheck,
    color: 'text-purple-600',
  },
  {
    id: 4,
    title: 'Transaction Limits',
    description: 'Cap transaction amounts and frequency to prevent abuse with rate-limiting.',
    icon: TimerReset,
    color: 'text-cyan-600',
  },
  {
    id: 5,
    title: 'Logging & Auditing',
    description: 'Track actions for monitoring and debugging with tamper-proof event logs.',
    icon: BarChart3,
    color: 'text-green-600',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">
            Key Security Features
          </h2>
          <p className="text-xl text-gray-600">
            Implement these automated security features to protect your Move smart contracts
            from common vulnerabilities and attacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const { title, description, icon: Icon, color } = feature;

  return (
    <div className="group relative overflow-hidden p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
        "bg-blue-50 group-hover:bg-blue-100"
      )}>
        <Icon className={cn("w-7 h-7", color)} />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      <div className="mt-6">
        <a href={`/security-features#${title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
          Learn more
          <svg className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" fill="currentColor"/>
            <path d="M1.75 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Features;

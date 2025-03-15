
import React from 'react';
import SecurityChart from './SASecurityChart';
import { ShieldAlert, TrendingUp, DollarSign, Zap, RefreshCw, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeSnippet from './SACodeSnippet';

interface ReasonProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: ReasonProps[] = [
  {
    icon: ShieldAlert,
    title: 'Protection Against Attacks',
    description: 'Automated security features protect against common attack vectors and exploits, reducing the risk of hacks.'
  },
  {
    icon: TrendingUp,
    title: 'Increased Trust',
    description: 'Security automation builds user confidence in your application, leading to higher adoption rates.'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Preventing security incidents is more cost-effective than addressing breaches after they occur.'
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Automated checks run continuously and reliably, eliminating the need for manual security oversight.'
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    description: 'Security automation can adapt to new threats and evolving attack patterns with minimal downtime.'
  }
];

const securitySample = `module secure_contract::automated_security {
    use std::signer;
    use aptos_framework::account;
    use aptos_framework::event;
    
    /// Custom errors
    const E_NOT_AUTHORIZED: u64 = 1;
    const E_REENTRANCY: u64 = 2;
    const E_INVALID_AMOUNT: u64 = 3;
    const E_LIMIT_EXCEEDED: u64 = 4;
    
    /// Resource to track contract state and permissions
    struct SecurityState has key {
        owner: address,
        is_locked: bool,
        daily_limit: u64,
        daily_usage: u64,
        last_reset: u64,
    }
    
    /// Event for security logging
    struct SecurityEvent has drop, store {
        user: address,
        action: vector<u8>,
        amount: u64,
        timestamp: u64,
    }
    
    public entry fun secure_transaction(
        sender: &signer,
        amount: u64
    ) acquires SecurityState {
        let sender_addr = signer::address_of(sender);
        
        // Access control check
        assert!(
            is_authorized(sender_addr), 
            E_NOT_AUTHORIZED
        );
        
        // Reentrancy protection
        let security_state = borrow_global_mut<SecurityState>(@secure_contract);
        assert!(!security_state.is_locked, E_REENTRANCY);
        security_state.is_locked = true;
        
        // Input validation
        assert!(amount > 0 && amount <= 1000000, E_INVALID_AMOUNT);
        
        // Transaction limit check
        reset_daily_limit_if_needed(security_state);
        assert!(
            security_state.daily_usage + amount <= security_state.daily_limit,
            E_LIMIT_EXCEEDED
        );
        security_state.daily_usage = security_state.daily_usage + amount;
        
        // ... main transaction logic here ...
        
        // Logging & auditing
        log_security_event(sender_addr, b"secure_transaction", amount);
        
        // Release the lock
        security_state.is_locked = false;
    }
    
    // Helper functions...
}`;

const WhyAutomatedSecurity = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">
            Why Automated Security?
          </h2>
          <p className="text-xl text-gray-600">
            In blockchain development, security isn't optional—it's essential. Automated security
            mechanisms provide continuous protection against evolving threats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="heading-md mb-6">Common Vulnerabilities in Smart Contracts</h3>
            <p className="text-gray-600 mb-6">
              The chart shows the distribution of common security vulnerabilities found in audited smart contracts.
              Access control and input validation issues represent the majority of security problems.
            </p>
            <SecurityChart />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="heading-md mb-6">Automated Security in Action</h3>
                <p className="text-gray-600 mb-6">
                  This example shows how automated security mechanisms are implemented in a Move smart contract,
                  including access control, reentrancy protection, input validation, transaction limits, and audit logging.
                </p>
              </div>
              <CodeSnippet 
                code={securitySample} 
                fileName="automated_security.move"
                highlightLines={[12, 13, 14, 15, 16, 30, 31, 32, 33, 34, 37, 38, 39, 40, 43, 44, 47, 48, 49, 50, 51, 54, 55]}
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="heading-md text-center mb-12">Key Benefits of Automated Security</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 mb-4">
                  <reason.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomatedSecurity;

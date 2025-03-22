import React from 'react';
import Navigation from '@/components/SANavigation';
import { useLocation } from 'react-router-dom';
import CodeSnippet from '@/components/SACodeSnippet';

const SAImplementation = () => {
  const location = useLocation();
  const path = location.pathname;
  const feature = path.split('/').pop()?.replace(/-/g, ' ');

  const implementations = {
    'access control': {
      title: 'Access Control Implementation',
      description: 'Learn how to implement robust access control mechanisms in your Move smart contracts.',
      code: `module secure_contract::access_control {
    use std::signer;
    use aptos_framework::account;
    
    /// Custom errors
    const E_NOT_AUTHORIZED: u64 = 1;
    const E_INVALID_ROLE: u64 = 2;
    
    /// Roles
    const ROLE_ADMIN: vector<u8> = b"ADMIN";
    const ROLE_OPERATOR: vector<u8> = b"OPERATOR";
    
    /// Resource to track roles
    struct RoleData has key {
        roles: vector<vector<u8>>,
    }
    
    /// Initialize roles for the contract
    public entry fun initialize(account: &signer) {
        let roles = vector::empty<vector<u8>>();
        vector::push_back(&mut roles, ROLE_ADMIN);
        move_to(account, RoleData { roles });
    }
    
    /// Grant a role to an address
    public entry fun grant_role(
        admin: &signer,
        account: address,
        role: vector<u8>
    ) acquires RoleData {
        // Verify admin has permission
        assert!(has_role(signer::address_of(admin), ROLE_ADMIN), E_NOT_AUTHORIZED);
        
        // Add role if not already present
        if (!has_role(account, role)) {
            let role_data = borrow_global_mut<RoleData>(@secure_contract);
            vector::push_back(&mut role_data.roles, role);
        };
    }
    
    /// Check if an address has a specific role
    public fun has_role(account: address, role: vector<u8>): bool acquires RoleData {
        let role_data = borrow_global<RoleData>(@secure_contract);
        vector::contains(&role_data.roles, &role)
    }
}`,
    },
    'reentrancy': {
      title: 'Reentrancy Protection Implementation',
      description: 'Implement reentrancy protection to prevent recursive calls in your smart contracts.',
      code: `module secure_contract::reentrancy {
    use std::signer;
    
    /// Custom errors
    const E_REENTRANCY: u64 = 1;
    
    /// Resource to track contract state
    struct ContractState has key {
        is_locked: bool,
    }
    
    /// Initialize contract state
    public entry fun initialize(account: &signer) {
        move_to(account, ContractState { is_locked: false });
    }
    
    /// Protected function with reentrancy guard
    public entry fun protected_function(
        account: &signer,
        amount: u64
    ) acquires ContractState {
        let state = borrow_global_mut<ContractState>(@secure_contract);
        
        // Reentrancy check
        assert!(!state.is_locked, E_REENTRANCY);
        state.is_locked = true;
        
        // Perform protected operation
        // ... your business logic here ...
        
        // Release the lock
        state.is_locked = false;
    }
}`,
    },
    'input validation': {
      title: 'Input Validation Implementation',
      description: 'Implement robust input validation to ensure data integrity in your smart contracts.',
      code: `module secure_contract::input_validation {
    use std::signer;
    
    /// Custom errors
    const E_INVALID_AMOUNT: u64 = 1;
    const E_INVALID_ADDRESS: u64 = 2;
    const E_INVALID_TIMESTAMP: u64 = 3;
    
    /// Constants
    const MAX_AMOUNT: u64 = 1000000;
    const MIN_TIMESTAMP: u64 = 1000000000;
    
    /// Validate amount
    public fun validate_amount(amount: u64): bool {
        amount > 0 && amount <= MAX_AMOUNT
    }
    
    /// Validate address
    public fun validate_address(addr: address): bool {
        addr != @0x0
    }
    
    /// Validate timestamp
    public fun validate_timestamp(timestamp: u64): bool {
        timestamp >= MIN_TIMESTAMP
    }
    
    /// Protected function with input validation
    public entry fun protected_function(
        account: &signer,
        amount: u64,
        recipient: address,
        timestamp: u64
    ) {
        // Validate inputs
        assert!(validate_amount(amount), E_INVALID_AMOUNT);
        assert!(validate_address(recipient), E_INVALID_ADDRESS);
        assert!(validate_timestamp(timestamp), E_INVALID_TIMESTAMP);
        
        // Proceed with business logic
        // ... your code here ...
    }
}`,
    },
    'transaction limits': {
      title: 'Transaction Limits Implementation',
      description: 'Implement transaction limits to prevent abuse and ensure fair usage of your smart contracts.',
      code: `module secure_contract::transaction_limits {
    use std::signer;
    use aptos_framework::timestamp;
    
    /// Custom errors
    const E_LIMIT_EXCEEDED: u64 = 1;
    const E_INVALID_RESET: u64 = 2;
    
    /// Constants
    const DAILY_LIMIT: u64 = 10000;
    const RESET_INTERVAL: u64 = 86400; // 24 hours in seconds
    
    /// Resource to track usage
    struct UsageData has key {
        daily_usage: u64,
        last_reset: u64,
    }
    
    /// Initialize usage tracking
    public entry fun initialize(account: &signer) {
        move_to(account, UsageData {
            daily_usage: 0,
            last_reset: timestamp::now_seconds(),
        });
    }
    
    /// Reset daily usage if needed
    public fun reset_daily_limit_if_needed(usage_data: &mut UsageData) {
        let current_time = timestamp::now_seconds();
        if (current_time - usage_data.last_reset >= RESET_INTERVAL) {
            usage_data.daily_usage = 0;
            usage_data.last_reset = current_time;
        };
    }
    
    /// Protected function with transaction limits
    public entry fun protected_function(
        account: &signer,
        amount: u64
    ) acquires UsageData {
        let usage_data = borrow_global_mut<UsageData>(@secure_contract);
        
        // Reset limits if needed
        reset_daily_limit_if_needed(usage_data);
        
        // Check limits
        assert!(
            usage_data.daily_usage + amount <= DAILY_LIMIT,
            E_LIMIT_EXCEEDED
        );
        
        // Update usage
        usage_data.daily_usage = usage_data.daily_usage + amount;
        
        // Proceed with business logic
        // ... your code here ...
    }
}`,
    },
    'logging': {
      title: 'Logging and Auditing Implementation',
      description: 'Implement comprehensive logging and auditing mechanisms for your smart contracts.',
      code: `module secure_contract::logging {
    use std::signer;
    use aptos_framework::event;
    use aptos_framework::timestamp;
    
    /// Event for logging
    struct SecurityEvent has drop, store {
        user: address,
        action: vector<u8>,
        amount: u64,
        timestamp: u64,
    }
    
    /// Emit security event
    public fun log_security_event(
        user: address,
        action: vector<u8>,
        amount: u64
    ) {
        event::emit(SecurityEvent {
            user,
            action,
            amount,
            timestamp: timestamp::now_seconds(),
        });
    }
    
    /// Protected function with logging
    public entry fun protected_function(
        account: &signer,
        amount: u64
    ) {
        let user = signer::address_of(account);
        
        // Log the action
        log_security_event(user, b"protected_function", amount);
        
        // Proceed with business logic
        // ... your code here ...
    }
}`,
    },
  };

  const implementation = implementations[feature as keyof typeof implementations] || {
    title: 'Implementation Details',
    description: 'Learn about implementing various security features in your Move smart contracts.',
    code: '// Select a specific implementation to view details',
  };

  return (
    <div className="min-h-screen pt-[80px]">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{implementation.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{implementation.description}</p>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <CodeSnippet 
            code={implementation.code}
            fileName={`${feature}.move`}
            highlightLines={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </div>
      </div>
    </div>
  );
};

export default SAImplementation; 
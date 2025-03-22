import React from 'react';
import Navigation from '@/components/SANavigation';
import CodeSnippet from '@/components/SACodeSnippet';

const SATesting = () => {
  const testCode = `#[test_only]
module secure_contract::security_tests {
    use std::signer;
    use aptos_framework::account;
    use aptos_framework::timestamp;
    
    // Test data
    const TEST_AMOUNT: u64 = 100;
    const TEST_ADMIN: address = @0x123;
    const TEST_USER: address = @0x456;
    
    // Test access control
    #[test]
    fun test_access_control() {
        let admin = account::create_account_for_test(TEST_ADMIN);
        let user = account::create_account_for_test(TEST_USER);
        
        // Initialize contract
        initialize(&admin);
        
        // Test unauthorized access
        assert!(has_role(TEST_USER, ROLE_ADMIN) == false, 0);
        
        // Grant role and verify
        grant_role(&admin, TEST_USER, ROLE_OPERATOR);
        assert!(has_role(TEST_USER, ROLE_OPERATOR), 1);
    }
    
    // Test reentrancy protection
    #[test]
    fun test_reentrancy() {
        let user = account::create_account_for_test(TEST_USER);
        
        // Initialize contract
        initialize(&user);
        
        // Test reentrancy attempt
        let state = borrow_global<ContractState>(@secure_contract);
        assert!(!state.is_locked, 2);
        
        // Attempt reentrancy
        protected_function(&user, TEST_AMOUNT);
        assert!(!state.is_locked, 3);
    }
    
    // Test input validation
    #[test]
    fun test_input_validation() {
        let user = account::create_account_for_test(TEST_USER);
        
        // Test valid inputs
        protected_function(&user, TEST_AMOUNT, TEST_ADMIN, timestamp::now_seconds());
        
        // Test invalid amount
        assert!(validate_amount(0) == false, 4);
        assert!(validate_amount(MAX_AMOUNT + 1) == false, 5);
        
        // Test invalid address
        assert!(validate_address(@0x0) == false, 6);
    }
    
    // Test transaction limits
    #[test]
    fun test_transaction_limits() {
        let user = account::create_account_for_test(TEST_USER);
        
        // Initialize contract
        initialize(&user);
        
        // Test within limits
        protected_function(&user, TEST_AMOUNT);
        
        // Test exceeding limits
        let usage_data = borrow_global<UsageData>(@secure_contract);
        assert!(usage_data.daily_usage <= DAILY_LIMIT, 7);
    }
    
    // Test logging
    #[test]
    fun test_logging() {
        let user = account::create_account_for_test(TEST_USER);
        
        // Test event emission
        protected_function(&user, TEST_AMOUNT);
        
        // Verify event data
        let events = event::get_events<SecurityEvent>(@secure_contract);
        assert!(vector::length(&events) > 0, 8);
        
        let last_event = vector::pop_back(&mut events);
        assert!(last_event.user == TEST_USER, 9);
        assert!(last_event.amount == TEST_AMOUNT, 10);
    }
}`;

  return (
    <div className="min-h-screen pt-[80px]">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Security Testing Guide</h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn how to write comprehensive security tests for your Move smart contracts.
          This guide covers testing access control, reentrancy protection, input validation,
          transaction limits, and logging mechanisms.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Test Structure</h2>
            <p className="text-gray-600 mb-4">
              Security tests should cover all critical security features of your smart contract.
              Each test should verify both positive and negative cases to ensure robust protection.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access control tests verify role-based permissions</li>
              <li>Reentrancy tests ensure state consistency</li>
              <li>Input validation tests check data integrity</li>
              <li>Transaction limit tests verify usage restrictions</li>
              <li>Logging tests confirm audit trail creation</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Example Test Suite</h2>
              <p className="text-gray-600 mb-4">
                Below is a comprehensive test suite that covers all major security features.
                Use this as a template for your own security testing.
              </p>
            </div>
            <CodeSnippet 
              code={testCode}
              fileName="security_tests.move"
              highlightLines={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use #[test_only] module for test code</li>
              <li>Create test accounts with account::create_account_for_test</li>
              <li>Test both positive and negative cases</li>
              <li>Use descriptive assertion messages</li>
              <li>Test edge cases and boundary conditions</li>
              <li>Verify event emissions for logging tests</li>
              <li>Clean up test state after each test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SATesting; 
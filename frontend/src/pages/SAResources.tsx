import React from 'react';
import Navigation from '@/components/SANavigation';
import { Book, FileText, Shield, Users, Code2, AlertTriangle } from 'lucide-react';

const SAResources = () => {
  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      items: [
        {
          title: 'Move Security Guide',
          description: 'Comprehensive guide to writing secure Move smart contracts',
          link: 'https://docs.aptos.dev/guides/security'
        },
        {
          title: 'Security Best Practices',
          description: 'Learn about security best practices for blockchain development',
          link: 'https://docs.aptos.dev/guides/security/best-practices'
        },
        {
          title: 'Common Vulnerabilities',
          description: 'Understanding and preventing common smart contract vulnerabilities',
          link: 'https://docs.aptos.dev/guides/security/vulnerabilities'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Templates',
      items: [
        {
          title: 'Secure Contract Template',
          description: 'A template for building secure Move smart contracts',
          link: 'https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/secure_contract'
        },
        {
          title: 'Security Test Suite',
          description: 'Template for writing comprehensive security tests',
          link: 'https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/security_tests'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Tools',
      items: [
        {
          title: 'Security Scanner',
          description: 'Automated tool for detecting security vulnerabilities',
          link: 'https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-tools/security-scanner'
        },
        {
          title: 'Audit Checklist',
          description: 'Comprehensive checklist for security audits',
          link: 'https://docs.aptos.dev/guides/security/audit-checklist'
        }
      ]
    },
    {
      icon: Users,
      title: 'Community',
      items: [
        {
          title: 'Security Forum',
          description: 'Discuss security topics with the Aptos community',
          link: 'https://forum.aptos.dev/c/security'
        },
        {
          title: 'Security Discord',
          description: 'Join the security-focused Discord channel',
          link: 'https://discord.gg/aptos'
        }
      ]
    },
    {
      icon: Code2,
      title: 'Code Examples',
      items: [
        {
          title: 'Access Control',
          description: 'Example implementation of role-based access control',
          link: 'https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/access_control'
        },
        {
          title: 'Reentrancy Protection',
          description: 'Example of implementing reentrancy guards',
          link: 'https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/reentrancy'
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Security Alerts',
      items: [
        {
          title: 'Security Advisories',
          description: 'Stay updated with the latest security advisories',
          link: 'https://github.com/aptos-labs/aptos-core/security/advisories'
        },
        {
          title: 'Bug Bounty Program',
          description: 'Participate in the Aptos bug bounty program',
          link: 'https://aptos.dev/bug-bounty'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-[80px]">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Security Resources</h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive collection of resources to help you build and maintain secure smart contracts.
          From documentation to tools, find everything you need to ensure your contracts are secure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you need assistance with security implementation or have questions about best practices,
            our community is here to help.
          </p>
          <a
            href="https://forum.aptos.dev/c/security"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Visit Security Forum
            <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" fill="currentColor"/>
              <path d="M1.75 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SAResources; 
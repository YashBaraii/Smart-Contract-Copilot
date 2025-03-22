import React from 'react';
import Navigation from '@/components/SANavigation';
import { Calendar, Clock, User, Tag } from 'lucide-react';

const SABlog = () => {
  const blogPosts = [
    {
      title: 'Understanding Reentrancy Attacks in Move Smart Contracts',
      excerpt: 'Learn about reentrancy attacks, how they work, and how to prevent them in your Move smart contracts.',
      author: 'Security Team',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['Security', 'Reentrancy', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Implementing Role-Based Access Control in Move',
      excerpt: 'A comprehensive guide to implementing RBAC in your Move smart contracts for better security.',
      author: 'Developer Team',
      date: '2024-03-10',
      readTime: '6 min read',
      tags: ['Access Control', 'Security', 'Implementation'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Common Security Vulnerabilities in Move Smart Contracts',
      excerpt: 'Explore the most common security vulnerabilities found in Move smart contracts and how to avoid them.',
      author: 'Security Team',
      date: '2024-03-05',
      readTime: '10 min read',
      tags: ['Security', 'Vulnerabilities', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Best Practices for Smart Contract Testing',
      excerpt: 'Learn the best practices for testing your Move smart contracts to ensure security and reliability.',
      author: 'Developer Team',
      date: '2024-02-28',
      readTime: '7 min read',
      tags: ['Testing', 'Security', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Understanding Move Security Model',
      excerpt: 'Deep dive into the security model of the Move programming language and its benefits.',
      author: 'Security Team',
      date: '2024-02-20',
      readTime: '9 min read',
      tags: ['Move', 'Security', 'Architecture'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Security Auditing Process Guide',
      excerpt: 'A step-by-step guide to conducting security audits for your Move smart contracts.',
      author: 'Security Team',
      date: '2024-02-15',
      readTime: '12 min read',
      tags: ['Auditing', 'Security', 'Process'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-[80px]">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Security Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Stay updated with the latest security insights, best practices, and technical guides
          for building secure Move smart contracts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SABlog; 
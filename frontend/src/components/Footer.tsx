import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/builder/docs" },
    { name: "Community", href: "/builder/community" },
    { name: "Blog", href: "/security-audit/blog" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} to={item.href} className="text-gray-400 hover:text-primary transition-colors duration-200">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="mt-10 flex justify-center space-x-8">
          {navigation.legal.map((item) => (
            <Link key={item.name} to={item.href} className="text-xs leading-5 text-gray-400 hover:text-primary transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
} 
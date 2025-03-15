import React from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Developer at ChainLink",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Smart Contract Copilot has revolutionized how we develop smart contracts. The automated security checks have saved us countless hours of manual auditing.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at DeFi Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "The no-code interface is incredibly intuitive. We've reduced our development time by 70% while maintaining the highest security standards.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Blockchain Architect at Polygon",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    content: "The multi-chain deployment feature is a game-changer. We can now deploy to multiple networks with a single click.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder at NFT Marketplace",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content: "The community support is exceptional. The team is always ready to help and the documentation is comprehensive.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers who trust Smart Contract Copilot for their blockchain development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/30 border-primary/20 p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <div className="relative">
                <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-gray-300 italic">{testimonial.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
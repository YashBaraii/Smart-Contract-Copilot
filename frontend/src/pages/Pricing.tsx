import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    price: { monthly: "$0" },
    description: "Perfect for getting started with smart contract development.",
    features: [
      "Basic code generation",
      "Limited security checks",
      "Community support",
      "Basic templates",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    price: { monthly: "$29" },
    description: "Everything you need for professional smart contract development.",
    features: [
      "Advanced code generation",
      "Comprehensive security audits",
      "Priority support",
      "All templates",
      "Custom integrations",
      "Team collaboration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "Custom" },
    description: "Dedicated support and infrastructure for large organizations.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom development",
      "SLA guarantees",
      "Advanced analytics",
      "API access",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Select the perfect plan that suits your smart contract development needs.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`flex flex-col justify-between ${
                tier.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">{tier.price.monthly}</span>
                  <span className="ml-1 text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.featured ? "default" : "outline"}
                >
                  Get started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 
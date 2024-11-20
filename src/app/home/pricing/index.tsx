import PricingCard from "./pricing-card";

const pricingTiers = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for beginners starting their Web3 journey",
    features: [
      "Access to fundamental courses",
      "Basic blockchain analytics tools",
      "Community forum access",
      "Monthly webinars",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "99",
    description: "For serious analysts ready to level up",
    features: [
      "All Basic features",
      "Advanced analytics dashboard",
      "Real-time data feeds",
      "Priority support",
      "Weekly group mentoring",
      "Custom metrics workshop",
      "Industry certification",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "Complete solution for professionals and teams",
    features: [
      "All Pro features",
      "Dedicated success manager",
      "Custom training programs",
      "API access",
      "Team collaboration tools",
      "White-label reports",
      "On-demand consultations",
      "Job placement assistance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {"Choose the plan that's right for you."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`
      flex flex-col h-full rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:shadow-lg
      ${tier.isPopular ? "border-indigo-600 relative" : "border-gray-200"}
    `}
    >
      {tier.isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">{tier.name}</h3>
          <p className="text-gray-600 text-sm">{tier.description}</p>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold font-serif text-gray-900">
              ${tier.price}
            </span>
            <span className="text-gray-600 ml-2">/month</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <ul className="space-y-4">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            className={`
              w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors
              ${
                tier.isPopular
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }
            `}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

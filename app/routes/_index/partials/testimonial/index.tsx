import { Twitter } from "lucide-react";
import React from "react";
import Marquee from "~/components/ui/marquee";
import { cn } from "~/lib/utils";

const testimonials = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote:
      "The course gave me the skills I needed to transition into Web3 analytics. Now I'm working with one of the top DeFi protocols.",
  },
  {
    name: "Michael Rodriguez",
    username: "@michaelrodriguez",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote:
      "Comprehensive curriculum that covers everything from basics to advanced topics. The practical projects were invaluable.",
  },
  {
    name: "Emily Watson",
    username: "@emilywatson",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote:
      "The instructors are true experts in their field. Their insights into NFT analytics helped me land my dream job.",
  },
];

type ReviewCardProps = React.ComponentPropsWithoutRef<"figure"> & {
  name: string;
  username: string;
  quote: string;
  image: string;
};

function ReviewCard({ name, username, quote, image }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={image}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs text-gray-500/80 dark:text-white/40">
              {username}
            </p>
          </div>
        </div>

        <Twitter className="h-5 w-5 text-indigo-600" />
      </div>
      <blockquote className="mt-2 text-sm">{quote}</blockquote>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of successful graduates
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {testimonials.map((testimonial, index) => (
              <React.Fragment key={index}>
                <ReviewCard {...testimonial} />
              </React.Fragment>
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}

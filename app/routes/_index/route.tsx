import type { MetaFunction } from "@remix-run/node";
import Hero from "./partials/hero";
import About from "./partials/about";
import Testimonials from "./partials/testimonial";
import Pricing from "./partials/pricing";
import FAQ from "./partials/faq";
import Layout from "~/components/layouts";

export const meta: MetaFunction = () => {
  return [
    { title: "House of Wizard" },
    {
      name: "description",
      content: "To become a greater wizard, join with us",
    },
  ];
};

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
    </Layout>
  );
}

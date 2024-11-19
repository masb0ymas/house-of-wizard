import Layout from "~/components/layout";
import About from "./home/about";
import FAQ from "./home/faq";
import Hero from "./home/hero";
import Pricing from "./home/pricing";
import Testimonials from "./home/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "House of Wizard",
  description: "To become a greater wizard, join with us",
};

export default function Home() {
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

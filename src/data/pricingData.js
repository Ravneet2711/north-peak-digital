import { Check } from "lucide-react";

export const pricingData = [
  {
    id: 1,
    title: "Starter",
    price: "$299",
    duration: "/month",
    description:
      "Perfect for startups and small businesses building their online presence.",
    features: [
      "5-Page Responsive Website",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Mobile Optimization",
      "Email Support",
    ],
    buttonText: "Get Started",
    popular: false,
  },

  {
    id: 2,
    title: "Growth",
    price: "$699",
    duration: "/month",
    description:
      "Ideal for growing businesses looking to generate more leads and sales.",
    features: [
      "Custom Website Design",
      "Advanced SEO",
      "Google Ads Management",
      "Performance Analytics",
      "Priority Support",
      "Monthly Reports",
    ],
    buttonText: "Choose Plan",
    popular: true,
  },

  {
    id: 3,
    title: "Enterprise",
    price: "$1299",
    duration: "/month",
    description:
      "A complete digital growth solution for established businesses and brands.",
    features: [
      "Unlimited Pages",
      "Full SEO Strategy",
      "Multi-Channel Marketing",
      "Conversion Optimization",
      "Dedicated Account Manager",
      "24/7 Premium Support",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

import React from "react";
import { Check } from "lucide-react";
import { pricingData } from "../data/pricingData";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20  px-6 ">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
          PRICING PLANS
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>

        <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
          Choose the perfect plan for your business. All plans include a free
          consultation and 30-day support.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-4 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((plan) => {
          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-indigo-500 shadow-xl shadow-indigo-500/10"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
              <p className="mt-3 text-gray-600">{plan.description}</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.duration}</span>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, index) => {
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Check size={18} className="text-indigo-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

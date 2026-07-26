import React from "react";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="pt-20  px-6 ">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
          OUR SERVICES
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
          Digital Solutions That Drive Results
        </h2>

        <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
          We help businesses grow with modern websites, powerful SEO, targeted
          marketing campaigns, and data-driven strategies that deliver
          measurable results.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-4 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="mb-5 inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

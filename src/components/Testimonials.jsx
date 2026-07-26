import React from "react";
import { testimonials } from "../data/testimonialsData";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-20 px-6 ">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
          CLIENT RESULTS
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
          Real results from real businesses that trusted us with their digital
          transformation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-4 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-2xl bg-white p-8 border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Quote size={34} className="text-indigo-500 mb-6 opacity-80" />

            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={
                    index < testimonial.rating
                      ? "fill-indigo-500 text-indigo-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

          
            <p className="text-gray-600 leading-7">"{testimonial.review}"</p>

        
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>

              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

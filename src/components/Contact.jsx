import React, { useState } from "react";
import { services } from "../data/servicesData";
import { Clock, Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Thank you! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="bg-[#111827] py-20  px-6 ">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
          GET IN TOUCH
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Ready to Grow Your Business?
        </h2>

        <p className="mt-5 text-slate-300 text-base md:text-lg leading-8">
          Reach out to us today for a free consultation. We're here to help you
          succeed.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-4 px-6 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Contact Information
          </h3>

          <p className="mt-3 text-slate-300">
            Have a project in mind? Send us a message or contact us directly
            using the details below.
          </p>
          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-500/10 p-3">
                <Mail className="text-indigo-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-slate-400">hello@northpeakdigital.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-500/10 p-3">
                <PhoneCall className="text-indigo-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-500/10 p-3">
                <MapPin className="text-indigo-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-slate-400">New York, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-500/10 p-3">
                <Clock className="text-indigo-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">Working Hours</h4>
                <p className="text-slate-400">Monday - Friday • 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
          />

          <input
            type="text"
            value={formData.company}
            name="company"
            onChange={handleChange}
            placeholder="Company (Optional)"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            required
            value={formData.message}
            name="message"
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

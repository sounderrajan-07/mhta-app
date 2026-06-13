import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    category: "",
    capacity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const payload = {
        ...formData,
        message: `Category: ${formData.category}\nCapacity: ${formData.capacity}\n\n${formData.message}`
      };
      // Send the merged payload to the existing API
      const res = await axios.post("/api/contactUs", payload);
      alert(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", tel: "", category: "", capacity: "", message: "" });
    } catch (error) {
      console.error("Contact Form Error:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Hero Section */}
        <header className="mb-stack-lg">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Partner with Precision.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Looking for high-performance rigging and lifting solutions? Our engineering experts are ready to provide technical guidance and competitive pricing for your project needs.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Side: Contact Information */}
          <aside className="lg:col-span-5 space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant">
              <span className="material-symbols-outlined text-safety-blue" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-md text-label-md text-primary font-bold">RESPONSE WITHIN 24 HOURS</span>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-6 bg-white border border-outline-variant rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="w-12 h-12 bg-steel-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Corporate Office</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    No.199, Thambu Chetty Street,<br />
                    Parrys, Chennai - 600001,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-outline-variant rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-primary mb-3">call</span>
                  <h4 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-2">Call Us</h4>
                  <p className="font-bold text-primary">+91 98407 57732</p>
                  <p className="font-bold text-primary">+91 99402 36130</p>
                </div>
                <div className="p-6 bg-white border border-outline-variant rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-primary mb-3">mail</span>
                  <h4 className="font-label-md text-label-md text-outline uppercase tracking-wider mb-2">Email Us</h4>
                  <p className="font-bold text-primary text-sm break-all">info@mhta.co.in</p>
                  <p className="font-bold text-primary text-sm break-all">hardtoolsyusuf@gmail.com</p>
                  <p className="text-on-surface-variant text-sm mt-1">For general inquiries</p>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="w-full h-72 rounded-xl overflow-hidden border border-outline-variant relative group">
              <img alt="Map location of Madras Hardtools" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZWo7x-WW3-Wzv-q3kBBU6e9qp2LmgNPRqePfRETeE5qkDRryvgbU5b9oGxcEHDNZAPXdCvrHAhaGS9g-p7qkDBKV0cRJslQvD015KAOUmXern806ashFjdkX8yTICqmYZMcTJfU5A9w59jSsC0aPWo9wY2mL4H30rofn29HgYKqEIZ0KrN1Vk5YeDcqLlgeuYIl8OnclO1VSQxSTS8Ya5hUQQJZlxuHFTZoZtEt9EXOjmXaMkSRlUi7gu2l79cCMwqTe4hUDMiok" />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded border border-outline-variant flex items-center gap-2 shadow-md">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="font-label-md text-label-md font-bold">Live Headquarters</span>
              </div>
            </div>
          </aside>

          {/* Right Side: Request for Quote Form */}
          <section className="lg:col-span-7" id="quote-form">
            <div className="bg-white border border-outline-variant rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 md:p-12">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-1 w-12 bg-secondary"></div>
                <h2 className="font-headline-lg text-headline-lg text-primary">Request a Technical Quote</h2>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block font-body-md font-semibold text-primary" htmlFor="name">Full Name</label>
                    <input className="w-full px-4 py-3 border border-outline-variant rounded bg-surface-container-low font-body-md form-input-focus transition-all" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" type="text" />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-body-md font-semibold text-primary" htmlFor="email">Work Email</label>
                    <input className="w-full px-4 py-3 border border-outline-variant rounded bg-surface-container-low font-body-md form-input-focus transition-all" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" type="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block font-body-md font-semibold text-primary" htmlFor="tel">Mobile Number</label>
                    <input className="w-full px-4 py-3 border border-outline-variant rounded bg-surface-container-low font-body-md form-input-focus transition-all" id="tel" name="tel" value={formData.tel} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                  </div>
                  {/* Product Category */}
                  <div className="space-y-2">
                    <label className="block font-body-md font-semibold text-primary" htmlFor="category">Product Category</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-outline-variant rounded bg-surface-container-low font-body-md form-input-focus appearance-none transition-all outline-none" id="category" name="category" value={formData.category} onChange={handleChange}>
                        <option disabled value="">Select category</option>
                        <option value="lifting">Lifting Gear (YOKE)</option>
                        <option value="rigging">Rigging Hardware</option>
                        <option value="testing">Proof Load Testing</option>
                        <option value="safety">Personal Safety Equipment</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Required Capacity */}
                <div className="space-y-2">
                  <label className="block font-body-md font-semibold text-primary" htmlFor="capacity">Required Capacity (WLL)</label>
                  <input className="w-full px-4 py-3 border border-outline-variant rounded bg-surface-container-low font-body-md form-input-focus transition-all" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} placeholder="e.g. 10 Tonnes" type="text" />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block font-body-md font-semibold text-primary" htmlFor="message">Project Details / Message</label>
                  <textarea className="w-full px-4 py-3 border border-outline-variant rounded bg-surface-container-low font-body-md form-input-focus transition-all resize-none outline-none" id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your technical requirements or project scope..." rows="5"></textarea>
                </div>

                {/* Professional Terms */}
                <div className="flex items-start gap-3 p-4 bg-steel-bg rounded border-l-4 border-primary">
                  <span className="material-symbols-outlined text-primary text-xl">info</span>
                  <p className="text-xs text-on-surface-variant font-label-md">
                    By submitting this request, you agree to our privacy policy. Technical data provided will be used strictly for generating your personalized quote.
                  </p>
                </div>

                {/* CTA Button */}
                <button disabled={loading} className="w-full bg-primary text-white py-4 rounded font-bold text-lg hover:bg-primary-container transition-all flex items-center justify-center gap-3 group shadow-lg disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                  {loading ? (
                    <><span className="material-symbols-outlined animate-spin">sync</span> Sending Request...</>
                  ) : (
                    <>Submit Quote Request <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></>
                  )}
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Partners / Verification Row */}
      <section className="bg-surface-container-low py-12 border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <p className="text-center font-label-md text-label-md text-outline mb-8 uppercase tracking-widest">Authorized Technical Partner</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <span className="font-headline-md text-headline-md font-black text-primary">YOKE</span>
              <span className="text-xs font-label-md bg-secondary text-white px-1">GLOBAL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-headline-md text-headline-md font-bold text-primary">ISO</span>
              <span className="text-xs font-label-md">9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-headline-md text-headline-md font-bold text-primary">CE</span>
              <span className="text-xs font-label-md">CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-headline-md text-headline-md font-bold text-primary">LEEA</span>
              <span className="text-xs font-label-md">MEMBER</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
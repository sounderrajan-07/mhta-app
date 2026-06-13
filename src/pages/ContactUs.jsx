import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

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
      const res = await axios.post("/api/contactUs", formData);
      alert(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", tel: "", message: "" });
    } catch (error) {
      console.error("Contact Form Error:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none z-0 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-highlight/10 rounded-full blur-[150px] pointer-events-none z-0 animate-blob animation-delay-2000"></div>

      {/* Header */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-border/50 text-brand-textMuted text-sm font-semibold mb-6 shadow-glow-primary"
          >
            <Mail className="w-4 h-4 text-brand-highlight" /> Let's Connect
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-extrabold text-brand-text mb-6 tracking-tight"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight drop-shadow-lg">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto font-medium"
          >
            Whether you have a general enquiry or need a custom quote, our team is ready to assist you with world-class solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 flex-grow relative z-10 mb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { icon: <MapPin />, title: "Head Office", lines: [{text: "No.199, Thambu Chetty Street,", href: null}, {text: "Parrys, Chennai-600001.", href: null}, {text: "(Near Kalikambal Temple)", href: null}] },
                { icon: <Phone />, title: "Phone Number", lines: [{text: "+91 98407 57732", href: "tel:+919840757732"}, {text: "+91 99402 36130", href: "tel:+919940236130"}] },
                { icon: <Mail />, title: "Email Address", lines: [{text: "info@mhta.co.in", href: "mailto:info@mhta.co.in"}, {text: "hardtoolsyusuf@gmail.com", href: "mailto:hardtoolsyusuf@gmail.com"}] }
              ].map((info, idx) => (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  key={idx} 
                  className="glass-dark p-8 rounded-[2rem] border border-brand-border/50 shadow-lg flex items-start gap-6 group hover:border-brand-primary/50 hover:shadow-glow-primary transition-all duration-300"
                >
                  <div className="p-4 bg-brand-surface border border-brand-border/50 rounded-2xl text-brand-highlight shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-brand-text font-bold mb-2 text-lg group-hover:text-brand-primary transition-colors">{info.title}</h3>
                    <p className="text-brand-textMuted font-medium text-sm leading-relaxed">
                      {info.lines.map((line, i) => (
                        <span key={i}>
                          {line.href ? (
                            <a href={line.href} className="hover:text-brand-primary transition-colors">{line.text}</a>
                          ) : (
                            line.text
                          )}
                          <br/>
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 relative"
            >
              <div className="absolute inset-0 bg-brand-primary/5 blur-3xl rounded-full"></div>
              <div className="glass-dark p-10 md:p-12 rounded-[2.5rem] border border-brand-primary/20 shadow-2xl relative z-10">
                <h2 className="text-3xl font-bold text-brand-text mb-8 border-b border-brand-border/50 pb-4">
                  Send a Message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit} id="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['name', 'email'].map((field) => (
                      <div className="space-y-2 relative" key={field}>
                        <label className={`text-sm font-bold transition-colors ${focusedInput === field ? 'text-brand-highlight' : 'text-brand-textMuted'}`}>
                          {field === 'name' ? 'Your Name' : 'Email Address'}
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          onFocus={() => setFocusedInput(field)}
                          onBlur={() => setFocusedInput(null)}
                          placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                          required
                          className="w-full bg-brand-bg/50 border border-brand-border rounded-2xl px-5 py-4 text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 relative">
                    <label className={`text-sm font-bold transition-colors ${focusedInput === 'tel' ? 'text-brand-highlight' : 'text-brand-textMuted'}`}>Mobile No.</label>
                    <input
                      type="tel"
                      name="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('tel')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-2xl px-5 py-4 text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <label className={`text-sm font-bold transition-colors ${focusedInput === 'message' ? 'text-brand-highlight' : 'text-brand-textMuted'}`}>Message</label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="How can we help you?"
                      required
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-2xl px-5 py-4 text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex justify-center items-center gap-3 px-8 py-5 w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg rounded-2xl shadow-glow-primary hover:shadow-glow-highlight transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
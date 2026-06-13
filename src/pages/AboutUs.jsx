import { motion } from 'framer-motion';
import { ShieldAlert, Network, Cog, TrendingUp, Target, Award } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-brand-primary" />,
      title: 'Safety & Quality',
      desc: 'Uncompromising focus on safety and quality in every product we deliver.'
    },
    {
      icon: <Network className="w-8 h-8 text-brand-highlight" />,
      title: 'Regional Network',
      desc: 'Deep regional network for faster, localized service across South India.'
    },
    {
      icon: <Cog className="w-8 h-8 text-brand-primary" />,
      title: 'Proven Expertise',
      desc: 'Proven expertise in complex industrial applications and solutions.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-highlight" />,
      title: 'Sustainable Growth',
      desc: 'Focused on sustainable growth through efficient and reliable operations.'
    }
  ];

  const stats = [
    { value: '50+', label: 'Years of Legacy', icon: <Award className="w-6 h-6 text-brand-highlight" /> },
    { value: '10+', label: 'Global Brands', icon: <Target className="w-6 h-6 text-brand-primary" /> },
    { value: '100%', label: 'Quality Assured', icon: <ShieldAlert className="w-6 h-6 text-brand-highlight" /> },
  ];

  return (
    <div className="flex flex-col bg-brand-bg relative overflow-hidden min-h-screen">
      
      {/* Background Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-highlight/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-border/50 text-brand-textMuted text-sm font-semibold mb-6 shadow-glow-primary"
          >
            <Award className="w-4 h-4 text-brand-highlight" /> Since 1972
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-extrabold text-brand-text mb-6 tracking-tight"
          >
            Pioneering Our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight drop-shadow-lg">
              Legacy
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Delivering world-class lifting & rigging solutions in South India. Driven by excellence, engineered for safety.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-[2rem] border border-brand-border/30 shadow-2xl flex flex-col md:flex-row justify-around items-center gap-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4 shadow-inner border border-brand-primary/20">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-2">{stat.value}</h3>
                <p className="text-brand-textMuted font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-8 leading-tight">Built on Trust, <br/> Powered by Quality.</h2>
            <div className="space-y-6 text-brand-textMuted font-medium leading-relaxed text-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary to-transparent rounded-full"></div>
              <p className="pl-6">
                Headquartered in Chennai, Madras Hard Tools Agencies (P) Ltd. is a leading provider of high-quality lifting, rigging, and material handling solutions across India.
              </p>
              <p className="pl-6">
                Serving crucial sectors such as construction, manufacturing, logistics, renewable energy, automotive, agriculture, and marine, we have built a legacy of trust and reliability over five decades.
              </p>
              <p className="pl-6 text-brand-text font-semibold">
                We proudly partner with globally recognized brands like <span className="text-brand-highlight">INDEF</span> to bring world-class engineering and safety to your operations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-dark p-10 rounded-[2.5rem] border border-brand-primary/30 shadow-glow-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-highlight/10 rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-brand-text mb-10 border-b border-brand-border/50 pb-4">Why Choose Us?</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {features.map((f, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    key={i} 
                    className="flex flex-col gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-surface/50 flex items-center justify-center border border-brand-border/50 shadow-md">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-brand-text font-bold text-lg mb-2">{f.title}</h4>
                      <p className="text-sm text-brand-textMuted font-medium leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

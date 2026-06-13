import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';

import yokeCert from '../assets/Certificates/YOKE DLC 2025_page-0001.jpg';
import indefCert from '../assets/Certificates/INDEF DLC UPTO 2026_page-0001.jpg';
import ferreterroCert from '../assets/Certificates/FERRETERRO DLC UPTO 2026_page-0001.jpg';
import feinCert from '../assets/Certificates/FEIN DLC UPTO 2026_page-0001.jpg';
import orionCert from '../assets/Certificates/ORION DLC_page-0001.jpg';

export default function Certificates() {
  const dealerships = [
    {
      brand: 'YOKE',
      title: 'YOKE Products – Authorised Dealer',
      desc: 'Madras Hardtools Agencies Pvt. Ltd. is an Authorised Dealer for YOKE, a globally recognized brand specializing in high-performance lifting and safety components. YOKE products are widely used in industries such as construction, oil & gas, logistics, mining, and heavy engineering, where strength, safety, and reliability are critical.',
      products: [
        'Lifting Points & Swivel Hoist Rings',
        'Grade 80 & Grade 100 Lifting Components',
        'Shackles, Hooks & Master Links',
        'Chain & Wire Rope Accessories',
        'Rigging Hardware and Safety Components'
      ],
      standards: 'Every YOKE product meets stringent international standards, ensuring optimal performance, durability, and certified safety in demanding work environments.',
      certImage: yokeCert
    },
    {
      brand: 'INDEF',
      title: 'Indef Products – Authorised Dealer',
      desc: 'Madras Hardtools Agencies Pvt. Ltd. is an Authorised Dealer for INDEF (Bajaj Group), the leading brand in India for material handling and lifting equipment. With a legacy of trusted engineering and superior build quality, INDEF products are widely used across manufacturing, warehousing, automotive, power plants, construction, and logistics industries.',
      products: [
        'Manual Chain Pulley Blocks',
        'Electric Wire Rope Hoists',
        'Electric Chain Hoists',
        'Ratchet Lever Hoists & Pulling Lifts',
        'Material Handling Trolleys and Accessories'
      ],
      standards: 'Every INDEF product is designed for high safety, smooth performance, and long operational life, adhering to rigorous Indian and international standards.',
      certImage: indefCert
    },
    {
      brand: 'FERRETERRO',
      title: 'Ferreterro Products – Authorised Dealer',
      desc: 'Madras Hardtools Agencies Pvt. Ltd. is an Authorised Dealer for Ferreterro India Pvt. Ltd., a leading manufacturer of high-quality lashing, lifting, and safety solutions for industrial applications. Ferreterro products are trusted across sectors such as logistics, heavy engineering, shipping, transportation, construction, and infrastructure development.',
      products: [
        'Polyester Webbing Slings (Single, Double & Multi-Leg)',
        'Round Slings & High-Capacity Lifting Slings',
        'Electric Chain Hoists',
        'Cargo Securing and Load Restraint Systems',
        'Material Handling and Safety Accessories'
      ],
      standards: 'Ferreterro solutions are designed for maximum load security, high strength-to-weight performance, and excellent safety compliance, manufactured under stringent quality standards.',
      certImage: ferreterroCert
    },
    {
      brand: 'FEIN',
      title: 'FEIN Power Tools – Authorised Dealer',
      desc: 'Madras Hardtools Agencies Pvt. Ltd. is an Authorised Dealer for FEIN, known for creating high-performance power tools for the most demanding applications in industry and manual trades.',
      products: [
        'Angle Grinders',
        'Magnetic Core Drills',
        'Oscillating Multi-Tools',
        'Metal Core Drilling'
      ],
      standards: 'FEIN tools are recognized worldwide for their extreme durability, precision, and adherence to top-tier safety and manufacturing standards.',
      certImage: feinCert
    },
    {
      brand: 'ORION',
      title: 'ORION – Authorised Dealer',
      desc: 'Madras Hardtools Agencies Pvt. Ltd. is an Authorised Dealer for ORION products, delivering precision tools and industrial supplies to meet a wide variety of operational requirements.',
      products: [
        'Precision Tools',
        'Hand Tools',
        'Measuring Instruments',
        'Industrial Equipment'
      ],
      standards: 'ORION ensures excellent performance and consistency across their entire range, meeting rigorous quality control measures for professional industrial use.',
      certImage: orionCert
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg relative overflow-hidden">
      
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Header */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-border/50 text-brand-textMuted text-sm font-semibold mb-6 shadow-glow-primary"
          >
            <ShieldCheck className="w-4 h-4 text-brand-highlight" /> 100% Certified Partners
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-extrabold text-brand-text mb-6 tracking-tight"
          >
            Authorised <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight drop-shadow-lg">
              Dealerships
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We are proud to be the trusted and authorised dealers for world-renowned lifting and material handling brands.
          </motion.p>
        </div>
      </section>

      {/* Timeline / Cards Section */}
      <section className="py-10 pb-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="space-y-24">
            {dealerships.map((dealer, index) => (
              <motion.div
                key={dealer.brand}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative glass-dark rounded-[2.5rem] p-8 md:p-12 border border-brand-primary/20 shadow-xl overflow-hidden group hover:border-brand-primary/50 hover:shadow-glow-primary transition-all duration-500"
              >
                {/* Background Glow on hover */}
                <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] opacity-10 transition-opacity duration-700 group-hover:opacity-30 ${index % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-highlight'}`}></div>
                
                <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-center">
                  <div className={`xl:col-span-7 ${index % 2 !== 0 ? 'xl:order-2' : ''}`}>
                    <div className="flex items-center gap-5 mb-8 border-b border-brand-border/50 pb-6">
                      <div className="p-4 bg-brand-surface rounded-2xl border border-brand-border/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <Award className={`w-8 h-8 ${index % 2 === 0 ? 'text-brand-primary' : 'text-brand-highlight'}`} />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text leading-tight">{dealer.title}</h2>
                    </div>
                    
                    <p className="text-brand-textMuted leading-relaxed text-lg mb-10 border-l-4 border-brand-primary/50 pl-5">
                      {dealer.desc}
                    </p>
                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-3xl p-6 border border-white/5 hover:bg-white/10 transition-colors">
                        <h3 className="text-brand-text font-bold mb-5 flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-primary" />
                          Key Offerings
                        </h3>
                        <ul className="space-y-4">
                          {dealer.products.map((prod, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-brand-textMuted font-medium leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2 shadow-[0_0_8px_rgba(128,0,0,0.8)]"></span>
                              <span>{prod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white/5 rounded-3xl p-6 border border-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center">
                        <h3 className="text-brand-text font-bold mb-5 flex items-center gap-3">
                          <ShieldCheck className="w-5 h-5 text-brand-highlight" />
                          Quality Standard
                        </h3>
                        <p className="text-sm text-brand-textMuted font-medium leading-relaxed">
                          {dealer.standards}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`xl:col-span-5 flex justify-center ${index % 2 !== 0 ? 'xl:order-1' : ''}`}>
                    <div className="relative group/img overflow-hidden rounded-3xl p-2 bg-gradient-to-br from-brand-primary/20 to-brand-border/20 border border-brand-border/50">
                      <div className="absolute inset-0 bg-brand-primary/10 group-hover/img:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={dealer.certImage} 
                        alt={`${dealer.brand} Certificate`} 
                        className="w-full max-w-sm rounded-2xl shadow-2xl object-cover transform group-hover/img:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

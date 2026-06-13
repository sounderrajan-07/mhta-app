import { useEffect } from 'react';
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

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-fade').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary border border-secondary text-[12px] font-bold tracking-widest uppercase rounded mb-6">
            100% Certified Partners
          </span>
          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl mb-6">Authorised Dealerships</h1>
          <p className="font-body-lg text-outline-variant max-w-2xl mx-auto">
            We are proud to be the trusted and authorised dealers for world-renowned lifting and material handling brands.
          </p>
        </div>
      </section>

      {/* Dealerships List */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-20">
          {dealerships.map((dealer, index) => (
            <div key={dealer.brand} className="animate-fade bg-white rounded-2xl p-8 lg:p-12 border border-outline-variant shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
                
                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4 border-b border-outline-variant pb-4">
                    <span className="material-symbols-outlined text-4xl text-secondary">workspace_premium</span>
                    <h2 className="font-headline-lg text-2xl lg:text-4xl text-primary">{dealer.title}</h2>
                  </div>
                  
                  <p className="text-on-surface-variant font-body-md border-l-4 border-secondary pl-4">
                    {dealer.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                      <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-safety-blue">list_alt</span>
                        Key Offerings
                      </h3>
                      <ul className="space-y-2">
                        {dealer.products.map((prod, i) => (
                          <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
                            <span>{prod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                      <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-safety-blue">verified_user</span>
                        Quality Standard
                      </h3>
                      <p className="text-sm text-on-surface-variant">
                        {dealer.standards}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className={`lg:col-span-5 flex justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="bg-surface-container p-4 rounded-xl border border-outline-variant transform hover:scale-105 transition-transform duration-500 w-full max-w-sm">
                    <img 
                      src={dealer.certImage} 
                      alt={`${dealer.brand} Certificate`} 
                      className="w-full rounded-lg shadow-md object-contain"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

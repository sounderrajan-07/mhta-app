import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section: Identity & Legacy */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid md:grid-cols-2 gap-stack-lg items-center py-20">
          <div>
            <span className="bg-secondary text-on-secondary px-3 py-1 text-label-md font-label-md rounded uppercase tracking-wider mb-6 inline-block">Established 1972</span>
            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-on-primary mb-6">Pioneering Our Legacy</h1>
            <p className="font-body-lg text-body-lg text-outline-variant max-w-xl mb-10">Delivering world-class lifting & rigging solutions in South India. Driven by excellence, engineered for safety.</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-surface-container-highest/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <span className="material-symbols-outlined text-safety-yellow text-4xl">workspace_premium</span>
                <div>
                  <div className="text-white font-bold text-headline-md">50+</div>
                  <div className="text-outline-variant text-label-md">Years of Legacy</div>
                </div>
              </div>
              <div className="bg-surface-container-highest/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <span className="material-symbols-outlined text-safety-blue text-4xl">public</span>
                <div>
                  <div className="text-white font-bold text-headline-md">10+</div>
                  <div className="text-outline-variant text-label-md">Global Brands</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative p-8">
              <div className="absolute -inset-4 border-2 border-secondary/30 rounded-2xl animate-pulse"></div>
              <img className="rounded-xl shadow-2xl w-full h-[500px] object-cover" alt="Industrial warehouse interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtty3lW95Jrw_Lr1WYjey_ziBarERJsrr7BqrOp1gBYP5n7cvKmnx6ItdwMD_jXU4EXC0a33DVtY6FqmttMiSEdtkT2MUeI_x5YsYRoaSIKIiqUuPZ_18iabY2XGlMOGjml7rZ6NrM1_sBpV5VbUnMovbh30MyS3SfMIDZzXSPsNyBoxOiKc_hS26LHuLubfQhaF811mK21uNVRFfMkmR_cWzMUkqNsQULR_SP0zPKkurQEZ8MRMHkYkeIiOzG--VK3sdojiuKyZo" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Bento Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Our Journey</h2>
            <div className="h-1 w-20 bg-secondary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Story */}
            <div className="md:col-span-8 bg-steel-bg p-stack-lg rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Built on Trust, Powered by Quality.</h3>
              <div className="grid md:grid-cols-2 gap-stack-md text-on-surface-variant font-body-md">
                <p>Headquartered in Chennai, Madras Hard Tools Agencies (P) Ltd. is a leading provider of high-quality lifting, rigging, and material handling solutions across India.</p>
                <p>Serving crucial sectors such as construction, manufacturing, logistics, renewable energy, automotive, agriculture, and marine, we have built a legacy of trust and reliability over five decades.</p>
              </div>
              <div className="mt-10 border-t border-outline-variant pt-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <p className="text-label-md font-label-md text-primary font-semibold">
                    We proudly partner with globally recognized brands like <span className="text-safety-blue">INDEF</span> and <span className="text-safety-yellow">YOKE</span> to bring world-class engineering and safety to your operations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="md:col-span-4 bg-primary p-stack-lg rounded-xl flex flex-col justify-between text-white">
              <div className="material-symbols-outlined text-safety-yellow text-5xl">verified_user</div>
              <div className="mt-8">
                <div className="text-white font-headline-lg text-headline-lg mb-2">100%</div>
                <div className="text-outline-variant text-label-md uppercase tracking-widest font-bold">Quality Assured</div>
                <p className="text-outline-variant mt-4 text-sm">Every piece of equipment is meticulously selected to guarantee safety.</p>
              </div>
            </div>
            
            {/* Highlight: Safety */}
            <div className="md:col-span-4 bg-secondary p-stack-lg rounded-xl text-on-secondary flex flex-col justify-center">
              <span className="material-symbols-outlined text-4xl mb-4">gavel</span>
              <h4 className="font-headline-md text-headline-md mb-2">Safety & Quality</h4>
              <p className="opacity-90">Uncompromising focus on safety and quality in every product we deliver.</p>
            </div>
            
            {/* Highlight: Logistics */}
            <div className="md:col-span-8 bg-surface-container p-stack-lg rounded-xl border border-outline-variant flex flex-col sm:flex-row items-center gap-8">
              <div className="w-full sm:w-48 h-48 sm:h-32 bg-white rounded-lg overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" alt="Industrial logistics center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5z0Tqtc_Gdj_LlRGx36TaV0n2LPM6F1cV8Hzi1b5f17QVPX4mzgBmpMK5D9t10cZk8-eiNhEqfyA5AuPcHdHRCuY0vmWhdrWZl5K9i0l1pBqoX89tZpmLC4ytXLIwClFJSUH9zP8W0A89ynZoHoD4jHslhIvdTTdL006lBaMaV4XSLv571V_xriWSF2BNrDstrhMWP4VawObyBze2ectzk061eYPVVudZMJehKVjJuxShUEJyE__iM7VN8QMCBnbZtdx3wew9I6Q" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Regional Network</h4>
                <p className="text-on-surface-variant">Deep regional network for faster, localized service across South India, ensuring timely deliveries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-steel-bg relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display-lg text-display-lg text-primary mb-4">Why Partner With Us?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">We bring extensive expertise and a commitment to sustainable growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            
            <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
              <div className="h-20 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined !text-[60px]">shield</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-4">Safety & Quality</h3>
              <p className="text-on-surface-variant text-sm">Uncompromising focus on safety and quality in every product we deliver.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
              <div className="h-20 flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined !text-[60px]">hub</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-4">Regional Network</h3>
              <p className="text-on-surface-variant text-sm">Deep regional network for faster, localized service across South India.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
              <div className="h-20 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined !text-[60px]">engineering</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-4">Proven Expertise</h3>
              <p className="text-on-surface-variant text-sm">Proven expertise in complex industrial applications and solutions.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
              <div className="h-20 flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined !text-[60px]">trending_up</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-4">Sustainable Growth</h3>
              <p className="text-on-surface-variant text-sm">Focused on sustainable growth through efficient and reliable operations.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="bg-primary p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-6">Build With Safety-First Solutions</h2>
              <p className="text-outline-variant mb-10 max-w-xl mx-auto">Connect with our engineering specialists today for a customized consultation on your next project.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold hover:bg-secondary-container transition-all scale-100 hover:scale-105 active:scale-95">View Products</Link>
                <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all scale-100 hover:scale-105 active:scale-95 inline-block">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

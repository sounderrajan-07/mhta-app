import { useState } from 'react';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');

  // Load original images and pdfs
  const productImages = import.meta.glob('../assets/Products/*.webp', { eager: true, query: '?url', import: 'default' });
  const productPdfs = import.meta.glob('../assets/Products pdf/*.pdf', { eager: true, query: '?url', import: 'default' });

  const productsData = [
    { name: 'Chain Blocks And Hoists', brand: 'INDEF' },
    { name: 'Chain Slings', brand: 'YOKE' },
    { name: 'Grade 100 Riggings', brand: 'YOKE' },
    { name: 'DNV & Offshore Riggings', brand: 'YOKE' },
    { name: 'Wire Rope Accessories', brand: 'YOKE' },
    { name: 'YOKE Shackles', brand: 'YOKE' },
    { name: 'CROSBY Shackles', brand: 'CROSBY' },
    { name: 'CROSBY Clamps', brand: 'CROSBY' },
    { name: 'Webbing Slings', brand: 'FERRETERRO' },
    { name: 'Industrial Safety Solutions', brand: 'UDYOGI' },
    { name: 'Eye Bolt & Swivel Eye Bolt', brand: 'TL' },
    { name: 'G30 Riggings', brand: 'TL' },
    { name: 'Grade 80 Riggings', brand: 'TL' },
    { name: 'Jacks', brand: 'TL' },
    { name: 'Lashing Components', brand: 'TL' },
    { name: 'Magnet Lifter', brand: 'TL' },
    { name: 'Plate Lifting Clamps', brand: 'TL' },
    { name: 'Polyester Slings', brand: 'TL' },
    { name: 'Precast Lifting', brand: 'TL' },
    { name: 'Turnbuckle And Bottle Screw', brand: 'TL' },
    { name: 'Winches And Pullers', brand: 'TL' },
    { name: 'Wire Rope Slings', brand: 'TL' },
    { name: 'Synthetic & Fibre Ropes', brand: 'TL' },
    { name: 'Pulley Blocks', brand: 'TL' },
    { name: 'Shackles', brand: 'TL' },
    { name: 'Stainless Steel Riggings', brand: 'TL' },
    { name: 'Braided & Twisted Ropes', brand: 'Other' },
    { name: 'Power Tools', brand: 'FEIN' },
    { name: 'Hand Tools & Storage', brand: 'STANLEY' },
    { name: 'Material Handling', brand: 'STANLEY' }
  ].map(p => ({
    ...p,
    image: productImages[`../assets/Products/${p.name}.webp`] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    link: productPdfs[`../assets/Products pdf/${p.name}.pdf`] || null
  }));

  const brands = ['All', ...new Set(productsData.map(p => p.brand))];

  const filteredProducts = productsData.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-gutter">
        
        {/* Sidebar Filter */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-stack-lg bg-surface-container-lowest p-stack-md border border-outline-variant rounded-xl sidebar-scroll z-10">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-outline-variant pb-2">Filter Products</h3>
              
              {/* Search */}
              <div className="mb-stack-lg">
                <label className="font-label-md text-label-md text-outline uppercase tracking-wider mb-stack-sm block">Search</label>
                <div className="relative">
                   <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                   <input 
                     type="text" 
                     placeholder="Search products..." 
                     className="w-full pl-9 pr-3 py-2 border border-outline-variant rounded bg-white focus:outline-none focus:border-primary text-sm"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                   />
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-stack-lg">
                <label className="font-label-md text-label-md text-outline uppercase tracking-wider mb-stack-sm block">Brand</label>
                <div className="space-y-2 flex flex-col items-start">
                  {brands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setActiveBrand(brand)}
                      className={`text-sm px-3 py-1.5 rounded w-full text-left transition-all ${activeBrand === brand ? 'bg-primary text-white font-bold' : 'bg-surface hover:bg-surface-container text-on-surface-variant'}`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow min-w-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-4">
            <div>
              <h1 className="font-display-lg text-4xl sm:text-5xl text-primary">Heavy Lifting Solutions</h1>
              <p className="text-on-surface-variant font-body-lg">Authorized partners for YOKE & INDEF engineering equipment.</p>
            </div>
            <div className="text-label-md text-outline whitespace-nowrap">
              <span>Showing {filteredProducts.length} products</span>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
                  <div className="aspect-square bg-surface flex items-center justify-center p-stack-md relative overflow-hidden">
                    <img alt={product.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src={product.image} />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-widest font-bold z-10 shadow-sm">{product.brand}</div>
                  </div>
                  <div className="p-stack-md flex-grow border-t border-outline-variant flex flex-col">
                    <h3 className="font-headline-md text-lg text-primary leading-tight mb-4 line-clamp-2">{product.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-2 mt-auto pt-4">
                      {product.link ? (
                        <a href={product.link} target="_blank" rel="noreferrer" className="py-2 border border-secondary text-secondary font-bold text-[11px] uppercase tracking-wider rounded hover:bg-secondary hover:text-white transition-all text-center flex items-center justify-center">Specs</a>
                      ) : (
                        <div className="py-2 border border-outline-variant text-outline-variant font-bold text-[11px] uppercase tracking-wider rounded text-center cursor-not-allowed bg-surface flex items-center justify-center">N/A</div>
                      )}
                      <a href="/contact" className="py-2 bg-primary text-white font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary-container transition-all text-center flex items-center justify-center">Inquiry</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center justify-center bg-surface rounded-xl border border-outline-variant border-dashed">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">search_off</span>
              <h3 className="text-xl font-bold text-primary mb-2">No products found</h3>
              <p className="text-on-surface-variant">Try adjusting your search or filters.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

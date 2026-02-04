import { useState } from 'react';
import Section from '../layout/Section';

const products = [
  { image: '/product1.png', alt: 'Product Screenshot 1' },
  { image: '/product2.png', alt: 'Product Screenshot 2' },
  { image: '/product3.png', alt: 'Product Screenshot 3' },
  { image: '/product4.png', alt: 'Product Screenshot 4' }
];

export default function ProductGallerySection() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Section id="product-gallery" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 md:mb-8 lg:mb-12">
          Product Gallery
        </h2>

        {/* Main image display - reduced size */}
        <div className="w-full max-w-3xl mb-6 md:mb-8">
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <img
              src={products[selectedImage].image}
              alt={products[selectedImage].alt}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Thumbnail navigation - with hover */}
        <div className="flex gap-2 md:gap-4">
          {products.map((product, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              onMouseEnter={() => setSelectedImage(idx)}
              className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all ${
                selectedImage === idx
                  ? 'border-[#3333CC] scale-110'
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <img src={product.image} alt={product.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}

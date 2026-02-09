import { useState } from 'react';
import AnimatedContent from '../ui/AnimatedContent';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { image: '/product1.png', alt: 'Product Screenshot 1' },
  { image: '/product2.png', alt: 'Product Screenshot 2' },
  { image: '/product3.png', alt: 'Product Screenshot 3' },
  { image: '/product4.png', alt: 'Product Screenshot 4' }
];

export default function ProductGallerySection() {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % products.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="product-gallery" className="relative w-full py-12 md:py-16 bg-transparent">
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 md:mb-8 text-center">
            Product Gallery
          </h2>
        </AnimatedContent>

        {/* Main image display */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
          delay={200}
          className="w-full max-w-3xl mb-6 md:mb-8 relative group"
        >
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative bg-black/50 aspect-video flex items-center justify-center">
             {/* Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={products[selectedImage].image}
              alt={products[selectedImage].alt}
              className="max-w-full max-h-full object-contain transition-opacity duration-300"
            />
          </div>
        </AnimatedContent>

        {/* Thumbnail navigation */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
          delay={400}
          className="flex gap-2 md:gap-4 flex-wrap justify-center"
        >
          {products.map((product, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                selectedImage === idx
                  ? 'border-[#3333CC] scale-110'
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <img src={product.image} alt={product.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}

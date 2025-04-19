// src/pages/Home.tsx
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" 
        style={{
              backgroundImage: "url(https://res.cloudinary.com/dekkpjwfz/image/upload/v1744564484/PXL_20250312_014354130.PORTRAIT_zyoebs.jpg)"
            }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Handcrafted Floral Elegance
          </h1>
          <p className="text-xl text-white mb-8">
            Vintage-inspired arrangements for weddings, events, and everyday joy
          </p>
          <a href="/shop" className="btn-primary inline-flex items-center gap-2">
            Shop Now <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Wedding Collection",
              image: "https://res.cloudinary.com/dekkpjwfz/image/upload/v1744765486/IMG_9965_j9xodo.jpg",
              link: "/collections/weddings"
            },
            {
              title: "Seasonal Collection",
              image: "https://res.cloudinary.com/dekkpjwfz/image/upload/v1744564484/PXL_20250312_011017768.PORTRAIT_2_euczfj.jpg",
              link: "/collections/seasonal"
            },
            {
              title: "Dried Collection",
              image: "https://res.cloudinary.com/dekkpjwfz/image/upload/v1744765539/PXL_20250312_014154326.RAW-01.COVER_henb18.jpg",
              link: "/collections/dried"
            }
          ].map(collection => (
            <a href={collection.link} className="group relative overflow-hidden rounded-lg shadow-lg h-64">
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">{collection.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-floralGreen/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Loved By Customers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Testimonial nuber one!",
                author: "Eric D."
              },
              {
                quote: "Testimonial number two",
                author: "Jane D."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-floralPink font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-floralPink text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Bring Flowers Into Your Life?</h2>
          <p className="text-xl mb-8">Subscription service?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/subscribe" className="btn bg-white text-floralPink hover:bg-gray-100">
              Subscription Plans
            </a>
            <a href="/contact" className="btn border-2 border-white hover:bg-white/10">
              Custom Order Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Footer would go here */}
    </div>
  )
}
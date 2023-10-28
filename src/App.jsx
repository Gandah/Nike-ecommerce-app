import Nav from "./components/Nav";

import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => {
  

  return (
    <main className="relative ">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b section-box">
        <Hero />
      </section>

      {/* Popular Products */}
        <section
          className="padding section-box"
        >
          <PopularProducts />
        </section>
      

      {/* Super Quality */}
        <section
          className="padding section-box"
        >
          <SuperQuality />
        </section>
    
      {/* Services */}
        <section
          className="padding-x py-10 section-box"
        >
          <Services />
        </section>
 

      {/* Special Offer */}
        <section
          className="padding section-box"
        >
          <SpecialOffer />
        </section>
      

      {/* Customer Reviews  */}
        <section
          className="bg-pale-blue padding section-box"
        >
          <CustomerReviews />
        </section>
       

      {/* Newsletter section */}
        <section
          className="w-full sm:py-32 py-16 padding-x section-box"
        >
          <Subscribe />
        </section>
   

      {/* Footer */}
      <section className="bg-black padding padding-x padding-t">
        <Footer />
      </section>

      <div className="hidden md:inline-block absolute wrapper z-[99999] isolate">
        <a
          href="#home"
          aria-label="Scroll to Top"
          className="sticky pointer-events-auto scroll-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-[#ff7f50]"
            width="76"
            height="76"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#ff7f50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
          </svg>
        </a>
      </div>
    </main>
  );
};

export default App;

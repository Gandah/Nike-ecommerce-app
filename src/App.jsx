import Nav from "./components/Nav";
import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    () => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
    } 

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial viewport size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const animateSectionZero = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: "90",
        easing: "easeInOut",
      },
    },
  };

  const animateSectionOne = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: "90",
        easing: "easeInOut",
      },
    },
  };

  return (
    <m.main className="relative ">
      <Nav />
      <m.section className="xl:padding-l wide:padding-r padding-b section-box">
        <Hero />
      </m.section>

      {/* Popular Products */}
      {!isMobile ? (
        <m.section
          className="padding section-box"
          initial="offscreen" // Set initial animation state
          variants={animateSectionZero} // Use the animation variants
          whileInView="onscreen" // Trigger animation when in view
          viewport={{ once: true, amount: 0.5 }}
        >
          <PopularProducts />
        </m.section>
      ) : (
        <section className="padding section-box">
          {" "}
          <PopularProducts />{" "}
        </section>
      )}

      {/* Super Quality */}
      {!isMobile ? (
        <m.section
          className="padding section-box"
          initial="offscreen"
          variants={animateSectionOne}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <SuperQuality />
        </m.section>
      ) : (
        <section className="padding section-box">
          {" "}
          <SuperQuality />{" "}
        </section>
      )}

      {/* Services */}
      {!isMobile ? (
        <m.section
          className="padding-x py-10 section-box"
          initial="offscreen"
          variants={animateSectionZero}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Services />
        </m.section>
      ) : (
        <section className="padding-x py-10 section-box">
          <Services />
        </section>
      )}

      {/* Special Offer */}
      {!isMobile ? (
        <m.section
          className="padding section-box"
          initial="offscreen"
          variants={animateSectionOne}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <SpecialOffer />
        </m.section>
      ) : (
        <section className="padding section-box">
          <SpecialOffer />
        </section>
      )}

      {/* Customer Reviews  */}
      {!isMobile ? (
        <m.section
          className="bg-pale-blue padding section-box"
          initial="offscreen"
          variants={animateSectionZero}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <CustomerReviews />
        </m.section>
      ) : (
        <section className="bg-pale-blue padding section-box">
          <CustomerReviews />
        </section>
      )}

      {/* Newsletter section */}
      {!isMobile ? (
        <m.section
          className="w-full sm:py-32 py-16 padding-x section-box"
          initial="offscreen"
          variants={animateSectionOne}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Subscribe />
        </m.section>
      ) : (
        <section className="w-full sm:py-32 py-16 padding-x section-box">
          <Subscribe />{" "}
        </section>
      )}

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
    </m.main>
  );
};

export default App;

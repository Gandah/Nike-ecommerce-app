import { motion as m} from 'framer-motion'
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [selectedbigShoeImg, setselectedbigShoeImg] = useState(bigShoe1);

  

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center
     min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <m.p className="text-xl font-montserrat text-coral-red mt-10"
          initial={{ x: "-100vw"}}
          animate={{x:"0"}}
          transition={{
          type: "spring",
          stiffness: "110",
          duration:"750ms",
          easing: "easeInOut"
          }}
        >
          Our Summer Collection
        </m.p>
        <m.h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-[-1] lg:z-20 isolate"
          initial={{ x: "-100vw"}}
          animate={{x:"0"}}
          transition={{
          type: "spring",
          stiffness: "110",
          duration:0.5,
          easing: "easeInOut"
            }}
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </m.h1>
        <p
          className="font-montserrat text-slate-gray text-lg
      leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div
          className="flex justify-start items-start
        flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl font-palanquin
                font-bold"
              >
                {stat.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 
      justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary
     bg-hero bg-cover bg-center hidden sm:flex"
      >
        <img
          src={selectedbigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="relative object-contain"
        />

        <div
          className="flex absolute gap-4 sm:gap-6 -bottom-[5%] 
      sm:left-[10%] max-sm:px-6"
        >
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setselectedbigShoeImg(shoe);
                }}
                bigShoeImg={selectedbigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

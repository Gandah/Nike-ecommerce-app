import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { AiOutlineClose } from "react-icons/ai";
import './Nav.css'; 
import { useState } from "react";

const Nav = () => {


  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
            <li key={item.label}
            className="relative">
                <a href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:opacity-60 focus-visible:opacity">
                    {item.label}
                </a>
            </li>
        ))}
        </ul>

        {/* Mobile Menu */}
        <div  className="z-[99999]">
          <div
          onClick={() => {setToggleNav(!toggleNav)}} 
           className="hidden max-lg:block cursor-pointer">
              <img
                src={hamburger}
                width={25}
                height={25}
              />
          </div>
          {/* Overlay */}

          {toggleNav? <div onClick={() => {setToggleNav(!toggleNav)}} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
          
          {/* Side drawer menu */}
          <div className={toggleNav? "fixed z-[9999] top-0 right-0 w-[300px] h-screen bg-slate-50 transition-all duration-300 ease-in-out": "fixed z-[9999] top-0 right-[-100vw] w-[300px] h-screen bg-slate-50 transition-all duration-300 ease-in-out"}>
          <div className="absolute top-4 left-4 cursor-pointer mt-4">
            <a href="#">
              <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
            </a>
          </div>
            <AiOutlineClose 
              onClick={() => {setToggleNav(!toggleNav)}} 
              className="absolute top-4 right-4 cursor-pointer mt-4" size={30}/>
            <ul className="flex-1 flex flex-col justify-center items-center gap-16 h-full">
              {navLinks.map((item) => (
                  <div key={item.label}
                    className="relative">
                      <a href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray hover:opacity-60 focus-visible:opacity">
                          {item.label}
                      </a>
                  </div>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Nav;

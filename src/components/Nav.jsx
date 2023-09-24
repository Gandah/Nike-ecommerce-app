import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import './Nav.css'; 

const Nav = () => {
  return (
    <header className="absolute padding-X py-8 z-10 w-full">
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
        {/* Mobile */}
        <div>
          <div className="hidden max-lg:block">
              <img
              src={hamburger}
              width={25}
              height={25}
              />
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import { headerLogo } from "../assets/images";
import { FiAlignJustify } from "react-icons/fi";

import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`padding-x py-8 absolute z-10 w-full`}>
      <nav
        className={`${
          open && "nav "
        } flex justify-between items-center max-container`}
      >
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`${
            open &&
            "absolute w-[100%] z-30 px-10 justify-evenly py-3 text-center h-[60%] opacity-100"
          } ${
            open ? "block" : "hidden"
          } animate-fade-right flex-1 justify-center items-center gap-16 lg:flex`}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.label} className={`${open && "w-full text-3xl"}`}>
              <a
                href={navLink.href}
                className={`${
                  open && "w-full"
                } font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red`}
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="animate-fade-left hidden max-lg:inline-block">
          {/* <img src={hamburger} alt="hamburger" width={25} height={25} /> */}
          <FiAlignJustify
            className={`w-8 h-8 cursor-pointer z-50 fixed`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;

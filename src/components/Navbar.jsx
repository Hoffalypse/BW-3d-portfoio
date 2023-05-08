import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-10 object-contain" />
          <p className="text-white yext-[18px] font-bold cursor-pointer flex">
            Bryan Wienhoff &nbsp;
           | Full Stack Developer
          </p>
          
        </Link>
        {/* <ul className="spacing2">
                <li className="align space"><a href="https://github.com/Hoffalypse" target="_blank" rel='noreferrer'> <i className="fa-brands fa-square-github fa-2xl github"></i></a></li>
                <li className="align space"><a href="https://www.linkedin.com/in/bryan-wienhoff-10a011241/" target="_blank"rel='noreferrer'><i className="fa-brands fa-linkedin fa-2xl linkedin"></i></a></li>
                <li className="align space"><a href="https://twitter.com/BryanWienhoff" target="_blank"rel='noreferrer'><i className="fa-brands fa-square-twitter fa-2xl twitter"></i></a></li>
            </ul> */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
         <ul className="spacing2 ">
                <li className="align space"><a href="https://github.com/Hoffalypse" target="_blank" rel='noreferrer'> <i className="fa-brands fa-square-github fa-2xl github"></i></a></li>
                <li className="align space"><a href="https://www.linkedin.com/in/bryan-wienhoff-10a011241/" target="_blank"rel='noreferrer'><i className="fa-brands fa-linkedin fa-2xl linkedin"></i></a></li>
                <li className="align space"><a href="https://twitter.com/BryanWienhoff" target="_blank"rel='noreferrer'><i className="fa-brands fa-square-twitter fa-2xl twitter"></i></a></li>
            </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

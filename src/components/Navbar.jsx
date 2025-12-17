import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Bosh sahifa", path: "/" },
    { name: "Korxona haqida", path: "/korxona-haqida" },
    { name: "Tarkibiy tuzilma", path: "/tarkibiy-tuzilma" },
    { name: "Korxona tarixi", path: "/korxona-tarixi" },
    { name: "Hamkorlar", path: "/hamkorlar" },
    { name: "Aloqa", path: "/aloqa" }
  ];

  return (
    <nav className="w-full bg-white shadow relative z-50 ">
      <div className="px-6 py-4 flex justify-between items-center">
        
        {/* LEFT */}
        <div className="flex gap-[20px] items-center">
          <img className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" src={Logo} alt="logo" />
          <div>
            <h1 className="text-[18px] sm:text-[20px] font-bold">
              Proekt Max-Story
            </h1>
            <p className="text-sm text-blue-500">Proektms.uz</p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive ? "bg-blue-600 text-white" : "text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          lg:hidden
          absolute top-full left-0 w-full
          bg-white shadow-md
          flex flex-col gap-4
          p-6 text-lg
        ">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive ? "bg-blue-600 text-white" : "text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import NavItem, { NavItemType } from "./navitem";

type NavbarProps = {
  path: string;
};

const links = [
  {
    href: "/",
    label: "Home",
    type: NavItemType.LINK,
  },
  {
    href: "/about",
    label: "About",
    type: NavItemType.LINK,
  },
  {
    href: "/restaurant-owners",
    label: "Restaurant Owners",
    type: NavItemType.LINK,
  },
  {
    href: "/slice-accelerator",
    label: "Slice Accelerator",
    type: NavItemType.LINK,
  },
  {
    href: "/login",
    label: "Login",
    type: NavItemType.BUTTON,
  },
];

export default function Navbar({ path }: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState<boolean>();

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("navbarOpen", navbarOpen);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="https://sliceup.pizza/assets/media/uploads/logo%203.png" className="h-8 mr-3" alt="Sliceup Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Slice Up</span> */}
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-monza-500 rounded-lg md:hidden hover:bg-monza-100 focus:outline-none focus:ring-2 focus:ring-monza-200 dark:text-monza-400 dark:hover:bg-monza-700 dark:focus:ring-monza-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNavbar}      
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-monza-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {links.map((link, index) => (
              <NavItem key={index} item={link} active={link.href===path}/>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

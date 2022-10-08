import React from "react";
import { Link } from "react-router-dom";

// local imports
import { LinkType, links } from "../../../../data";

type LinksProps = {
  navIsOpen: boolean | null;
  toggleNav: () => void | null;
};

function Links({ navIsOpen, toggleNav }: LinksProps) {
  return (
    <ul
      className={`sm:flex ${
        navIsOpen
          ? "flex z-[3] absolute bg-secondaryBlack w-[200px] justify-center rounded-[5px] shadow translate-x-[2px] animate-nav"
          : "hidden"
      } sm:flex-row flex-col list-none`}
    >
      {links.map((link: LinkType, index: number) => (
        <li
          key={link.id}
          className={`text-primaryWhite font-barlow py-5 ${
            index === 0 ? "pr-7" : index === links.length - 1 ? "pl-7" : "px-7"
          } hover:text-primaryOrange active:text-primaryOrange transition-all cursor-pointer text-center`}
          onClick={toggleNav}
        >
          <Link to={`${link.link}`}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;

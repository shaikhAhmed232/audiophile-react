import React from "react";

export type MenuProps = {
  toggleNav: () => void;
};

export default function MenuIcon({ toggleNav }: MenuProps) {
  return (
    <div className="cursor-pointer transition" onClick={toggleNav}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={"#f2f2f2"}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}

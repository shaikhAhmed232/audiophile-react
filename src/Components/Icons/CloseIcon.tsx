import React from "react";

import { MenuProps } from "./MenuIcon";

function CloseIcon({ toggleNav }: MenuProps) {
  return (
    <div className="cursor-pointer transition" onClick={toggleNav}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#f2f2f2"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default CloseIcon;

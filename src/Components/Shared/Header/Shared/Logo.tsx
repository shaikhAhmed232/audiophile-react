import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link
        to="/"
        className="text-primaryWhite font-poppins text-[1.6rem] transition-all hover:text-primaryOrange"
      >
        audiophile
      </Link>
    </div>
  );
}

export default Logo;

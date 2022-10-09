import React from "react";

// components imports
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// hooks imports
import useMobile from "../../../Hooks/IsMobileHook";

function Header() {
  const isMobile = useMobile();
  const [showCart, setShowCart] = React.useState(false);
  return (
    <div className={`w-full sticky top-0 bg-primaryBlack z-[4]`}>
      {!isMobile ? (
        <DesktopNav showCart={showCart} setShowCart={setShowCart} />
      ) : (
        <MobileNav showCart={showCart} setShowCart={setShowCart} />
      )}
    </div>
  );
}

export default React.memo(Header);

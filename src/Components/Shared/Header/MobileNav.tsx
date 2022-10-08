import React, { SetStateAction, Dispatch } from "react";

// components imports
import Container from "../../Common/Container";
import Logo from "./Shared/Logo";
import Links from "./Shared/Links";
import CartIcon from "../../Icons/CartIcon";
import MenuIcon from "../../Icons/MenuIcon";
import CloseIcon from "../../Icons/CloseIcon";
import Cart from "./Cart";

function MobileNav({
  showCart,
  setShowCart,
}: {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}) {
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <>
        <nav className="relative">
          <div className="flex items-center justify-between xs:py-5 py-2 xs:px-7 px-3">
            {!navIsOpen ? (
              <MenuIcon toggleNav={toggleNav} />
            ) : (
              <CloseIcon toggleNav={toggleNav} />
            )}
            <Logo />
            <CartIcon setShowCart={setShowCart} />
            {showCart ? <Cart setShowCart={setShowCart} /> : null}
          </div>
          <Links navIsOpen={navIsOpen} toggleNav={toggleNav} />
        </nav>
        <span className="w-full h-[0.5px] block bg-primaryGray opacity-[0.3]" />
      </>
    </Container>
  );
}

export default MobileNav;

// react imports
import React, { SetStateAction, Dispatch } from "react";

// components imports
import Logo from "./Shared/Logo";
import Links from "./Shared/Links";
import CartIcon from "../../Icons/CartIcon";

import Container from "../../Common/Container";
import Cart from "./Cart";

export default function DesktopNav({
  showCart,
  setShowCart,
}: {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Container>
      <>
        <nav className="flex justify-between items-center relative">
          <Logo />
          <Links navIsOpen={null} toggleNav={() => {}} />
          <CartIcon setShowCart={setShowCart} />
          {showCart ? <Cart setShowCart={setShowCart} /> : null}
        </nav>
        <span className="w-full h-[0.5px] block bg-primaryGray opacity-[0.3]" />
      </>
    </Container>
  );
}

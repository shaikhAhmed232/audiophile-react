import React from "react";

// components import
import Container from "../Common/Container";
import BillingSection from "./BillingSection";
import ShippingSection from "./ShippingSection";
import PaymentsDetails from "./PaymentsDetails";
import CartSummary from "./CartSummary";
import OrderSuccess from "./OrderSuccess";
import Modal from "../Common/Modal";
// local imports
import { styles } from "../../style";
import { useAppDispatch } from "../../Hooks/reduxHooks";
import { clearCart } from "../../slices/cartSlice";

function Checkout() {
  const dispatch = useAppDispatch();
  const [billingInputs, setBillingInputs] = React.useState({
    name: "",
    email: "",
    phoneNum: "",
  });
  const [shippingInputs, setShippingInputs] = React.useState({
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });
  const [checked, setChecked] = React.useState("eMoney");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleBillingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleShippingInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShippingInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isSelected = (value: string) => checked === value;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
    console.log();
  };

  const closeModal = () => {
    dispatch(clearCart());
    setIsOpen(false);
  };

  return (
    <>
      <section className={`${styles.sectionPadding} bg-primaryWhite`}>
        <Container>
          <form
            onSubmit={handlePayment}
            className="flex ss:flex-row flex-col justify-between"
          >
            <div className="bg-white shadow-dimShadow ss:w-[65%] w-full p-4">
              <h1 className="text-[1.2rem] font-[700] uppercase font-barlow">
                checkout
              </h1>
              <BillingSection
                billingInput={billingInputs}
                handleInputChange={handleBillingInputChange}
              />
              <ShippingSection
                shippingInput={shippingInputs}
                handleInputChange={handleShippingInputChange}
              />
              <PaymentsDetails
                checked={checked}
                setChecked={setChecked}
                isSelected={isSelected}
              />
            </div>
            <CartSummary
              shippingInput={shippingInputs}
              billingInput={billingInputs}
            />
          </form>
        </Container>
      </section>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <OrderSuccess />
      </Modal>
    </>
  );
}

export default Checkout;

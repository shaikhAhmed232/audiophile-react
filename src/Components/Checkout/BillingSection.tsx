import React from "react";

// components import

// local imports

export type BillingInputType = {
  name: string;
  email: string;
  phoneNum: string;
};

type BillingSectionProps = {
  billingInput: BillingInputType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function BillingSection({
  billingInput,
  handleInputChange,
}: BillingSectionProps) {
  return (
    <div className="mt-6">
      <p className="text-primaryOrange capitalize tracking-[2px] font-[400] text-[0.8rem] font-barlow">
        billing details
      </p>
      <div className="grid xs:grid-cols-2 grid-cols-1 gap-2">
        <div className="py-2">
          <label
            htmlFor="name"
            className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={billingInput.name}
            onChange={(e) => handleInputChange(e)}
            className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            placeholder="John Doe"
            required={true}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor="email"
            className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
          >
            Email
          </label>
          <input
            id="name"
            name="email"
            value={billingInput.email}
            onChange={(e) => handleInputChange(e)}
            type="email"
            className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            placeholder="johndoe123@audiophile.com"
            required={true}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor="phone"
            className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
          >
            Phone Number
          </label>
          <input
            id="name"
            type="text"
            name="phoneNum"
            value={billingInput.phoneNum}
            onChange={(e) => handleInputChange(e)}
            className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            placeholder="+91 2222000044"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BillingSection;

import React, { ChangeEvent } from "react";

export type ShippingInputType = {
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

type ShippingSectionProps = {
  shippingInput: ShippingInputType;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function ShippingSection({
  shippingInput,
  handleInputChange,
}: ShippingSectionProps) {
  return (
    <div className="mt-6">
      <p className="text-primaryOrange capitalize tracking-[2px] font-[400] text-[0.8rem] font-barlow">
        shipping details
      </p>
      <div className="flex flex-col">
        <div className="py-2">
          <label
            htmlFor="address"
            className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            value={shippingInput.address}
            onChange={(e) => handleInputChange(e)}
            type="text"
            required={true}
            className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
          />
        </div>
        <div className="py-2 flex xs:flex-row flex-col">
          <div className="xs:w-[30%] w-full">
            <label
              htmlFor="zipCode"
              className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
            >
              Zip Code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              value={shippingInput.zipCode}
              onChange={(e) => handleInputChange(e)}
              type="text"
              required={true}
              className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            />
          </div>
          <div className="xs:w-[70%] xs:ml-[10px] ml-0">
            <label
              htmlFor="city"
              className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              value={shippingInput.city}
              onChange={(e) => handleInputChange(e)}
              type="text"
              required={true}
              className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            />
          </div>
        </div>
        <div className="py-2 xs:w-[50%] w-full">
          <label
            htmlFor="country"
            className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            value={shippingInput.country}
            onChange={(e) => handleInputChange(e)}
            type="text"
            required={true}
            className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            placeholder="India"
          />
        </div>
      </div>
    </div>
  );
}

export default ShippingSection;

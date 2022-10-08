import React, { Dispatch, SetStateAction } from "react";

type PaymentsDetailsType = {
  checked: string;
  setChecked: Dispatch<SetStateAction<string>>;
  isSelected: (value: string) => boolean;
};

function PaymentsDetails({
  checked,
  setChecked,
  isSelected,
}: PaymentsDetailsType) {
  return (
    <div className="mt-6">
      <p className="text-primaryOrange tracking-[2px] font-[400] text-[0.8rem] font-barlow capitalize">
        payment details
      </p>
      <div className="flex xs:flex-row flex-col justify-between pt-3">
        <h2 className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]">
          payment method
        </h2>
        <div className="xs:mt-0 mt-3">
          <div
            className={`flex ${
              checked === "eMoney" ? "shadow-darkShadow" : "shadow-dimShadow"
            } py-3 px-3 xs:w-[200px] w-full`}
          >
            <input
              id="eMoney"
              type="radio"
              className="w-[16px]"
              value="eMoney"
              checked={isSelected("eMoney")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setChecked(e.currentTarget.value)
              }
            />
            <label
              className="block font-poppins text-[1rem] ml-2 opacity-[0.7] font-[700]"
              htmlFor="eMoney"
            >
              e-money
            </label>
          </div>
          <div
            className={`flex ${
              checked === "cod" ? "shadow-darkShadow" : "shadow-dimShadow"
            } py-3 px-3 xs:w-[200px] w-full mt-3`}
          >
            <input
              className="w-[16px]"
              id="cod"
              type="radio"
              value="cod"
              checked={isSelected("cod")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setChecked(e.currentTarget.value)
              }
            />
            <label
              className="block font-poppins text-[1rem] ml-2 opacity-[0.7] font-[700]"
              htmlFor="cod"
            >
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
      {checked === "eMoney" ? (
        <div className="flex ss:flex-row flex-col  pt-3">
          <div className="xs:w-[50%] w-full">
            <label
              htmlFor="eMoneyNumber"
              className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
            >
              e-Money Number
            </label>
            <input
              id="eMoneyNumber"
              type="text"
              required={true}
              className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            />
          </div>
          <div className="xs:w-[50%] xs:ml-[10px] ml-0 xs:mt-0 mt-[10px]">
            <label
              htmlFor="pin"
              className="block font-poppins text-[0.8rem] opacity-[0.9] font-[700]"
            >
              e-Money PIN
            </label>
            <input
              id="pin"
              type="text"
              required={true}
              className="w-full border-[1px] border-solid border-primaryGray py-[3px] px-[6px] rounded-[3px]"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PaymentsDetails;

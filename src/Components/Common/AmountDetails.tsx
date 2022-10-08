import React from "react";

function AmountDetails({
  amountKey,
  amount,
}: {
  amountKey: string;
  amount: number;
}) {
  return (
    <div className="flex">
      <span className="font-[500] text-[0.9rem] grow opacity-[0.6]">
        {amountKey}
      </span>
      <span
        className={`font-[700] opacity-[0.8] self-start ${
          amountKey === "Grand Total"
            ? "text-primaryOrange"
            : "text-primaryBlack"
        }`}
      >
        Rs.{amount}
      </span>
    </div>
  );
}

export default AmountDetails;

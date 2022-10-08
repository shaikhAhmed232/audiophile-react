import React from "react";

function HeroImage({ img, title }: { img: string; title: string }) {
  return (
    <div className="sm:w-[400px] sm:h-[400px] h-full w-full bg-black-gradient">
      <img
        src={img}
        alt={title}
        className="bg-primaryBlack w-[100%] h-[100%]"
      />
    </div>
  );
}

export default HeroImage;

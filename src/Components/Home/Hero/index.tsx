import React from "react";

// components imports
import Container from "../../Common/Container";
import HeroDetails from "./HeroDetails";
import HeroImage from "./HeroImage";

// local imports
import { newProduct } from "../../../data";

function Hero() {
  const [productNew, setProductNew] = React.useState(newProduct);
  React.useEffect(() => {
    const product = newProduct();
    if (product) {
      setProductNew(product);
    }
  }, []);
  return (
    <section className="bg-primaryBlack text-primaryWhite md:min-h-0 min-h-[400px]">
      <Container>
        <div className="flex relative justify-between sm:py-8 ss:py-3 py-0">
          <HeroDetails
            id={productNew!.id}
            title={productNew!.productName}
            description={productNew!.productDescription}
          />
          <HeroImage
            title={productNew!.productName}
            img={productNew!.productImg}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;

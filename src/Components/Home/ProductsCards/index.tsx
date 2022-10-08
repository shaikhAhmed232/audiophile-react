import React from "react";

// component imports
import Container from "../../Common/Container";
import UpperCard from "./UpperCard";
import MiddleCard from "./MiddleCard";
import LowerCard from "./LowerCard";

// local imports
import { styles } from "../../../style";
import { products } from "../../../data";

function ProductsCard() {
  return (
    <section className={styles.sectionPadding}>
      <Container>
        <div className="sm:w-full w-[90%] sm:mx-0 mx-auto  h-auto">
          <UpperCard {...products[6]} />
          <MiddleCard {...products[0]} />
          <LowerCard {...products[3]} />
        </div>
      </Container>
    </section>
  );
}

export default ProductsCard;

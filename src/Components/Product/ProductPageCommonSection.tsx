import React from "react";

// component import
import Container from "../Common/Container";
import LazyLoadImg from "../Common/LazyLoadImg";
// local imports
import { styles } from "../../style";
import {
  manWidthHeadphonesUrl,
  productPageCommonBW,
  productPageCommonColor,
} from "../../data";

function ProductPageCommonSection() {
  return (
    <section className={styles.sectionPadding}>
      <Container>
        <div className="flex sm:flex-row flex-col sm:px-0 xs:px-[1rem] px-4">
          <div>
            <LazyLoadImg
              src={manWidthHeadphonesUrl}
              alt={"man with headphones"}
              classes="sm:w-[500px] w-full object-contain mb-2 rounded-[8px]"
            />
            <LazyLoadImg
              src={productPageCommonBW}
              alt={"headphone with black background"}
              classes="sm-w-[500px] w-full  object-contain mt-2 rounded-[8px]"
            />
          </div>
          <div className="">
            <LazyLoadImg
              src={productPageCommonColor}
              alt={"headphone with colorful background"}
              classes="sm:ml-6 ml-0 sm:mt-0 mt-2 rounded-[8px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductPageCommonSection;

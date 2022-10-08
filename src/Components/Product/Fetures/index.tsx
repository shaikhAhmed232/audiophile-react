import React from "react";

// components import
import Container from "../../Common/Container";

// local import
import { styles } from "../../../style";

function Features({
  features,
  includes,
}: {
  features: string[] | undefined;
  includes: string[] | undefined;
}) {
  return (
    <section className={styles.sectionPadding}>
      <Container>
        <div className="flex ss:flex-row flex-col">
          <div className="max-w-[500px] w-full ">
            <h2 className="text-primaryBlack text-[1.5rem] font-[700] font-barlow capitalize">
              features
            </h2>
            <ul className="text-primaryBlack opacity-[0.7]">
              {features?.map((each: string, index: number) => (
                <li key={index}>{each}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-primaryBlack text-[1.5rem] font-[700] capitalize font-barlow">
              in the box
            </h2>
            <ul className="text-primaryBlack opacity-[0.7]">
              {includes?.map((each: string, index: number) => (
                <li key={index}>{each}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;

import React from "react";

// components import
import Container from "../../Common/Container";
// Local imports
import { styles } from "../../../style";
import { manWidthHeadphonesUrl } from "../../../data";

function About() {
  return (
    <section className={styles.sectionPadding}>
      <Container>
        <div className="flex sm:flex-row flex-col sm:w-full w-[90%] sm:mx-0 mx-auto">
          <div className="sm:w-[50%] w-full  flex flex-col justify-center">
            <div className="sm:w-[80%] w-full sm:text-start text-center">
              <h2 className="font-[700] text-[1.5rem] font-poppins text-primaryBlack uppercase tracking-[1px]">
                bringing you the{" "}
                <span className="text-primaryOrange">best</span> audio gear
              </h2>
              <p className="text-[0.8rem] opacity-[0.8] font-barlow">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                nihil, itaque voluptatum asperiores consectetur a debitis magni
                accusamus reiciendis. Nihil, tempore facere earum facilis, iusto
                nemo error provident corrupti, delectus rem natus rerum vitae
                dolor asperiores nisi quidem velit id fuga sit saepe debitis!
                Animi earum facilis ducimus doloremque porro!
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] w-full sm:mt-0 mt-5 sm:mx-0 mx-auto">
            <img
              src={manWidthHeadphonesUrl}
              alt={"man width headphones"}
              className="w-[100%] h-[100%] object-contain rounded-[8px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;

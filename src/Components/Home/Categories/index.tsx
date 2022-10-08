import React from "react";

// components imports
import Container from "../../Common/Container";
import CategoriesList from "./CategoriesList";

// local imports

import { styles } from "../../../style";

function Categories() {
  return (
    <section className={styles.sectionPadding}>
      <Container>
        <CategoriesList />
      </Container>
    </section>
  );
}

export default Categories;
